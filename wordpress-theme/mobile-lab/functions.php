<?php
/**
 * Mobile Lab theme — setup, assets, and includes.
 *
 * @package mobile-lab
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }

define( 'MOBILE_LAB_VERSION', '1.0.0' );

/* ---------------------------------------------------------------------------
 * Theme setup
 * ------------------------------------------------------------------------- */
add_action( 'after_setup_theme', function () {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );          // featured image
	add_theme_support( 'automatic-feed-links' );
	add_theme_support( 'html5', array( 'search-form', 'gallery', 'caption', 'style', 'script' ) );

	// Menus the client can edit at Appearance → Menus (no code needed).
	register_nav_menus( array(
		'primary' => __( 'Primary (top navigation)', 'mobile-lab' ),
	) );

	// Image size matching the hero (16:9) — used for the still-image fallback.
	add_image_size( 'ml-hero', 1920, 1080, true );
} );

/* ---------------------------------------------------------------------------
 * Front-end assets — the existing CSS/JS carry over unchanged
 * ------------------------------------------------------------------------- */
add_action( 'wp_enqueue_scripts', function () {
	// Source Serif 4 (used only for <strong>, per the design system).
	wp_enqueue_style(
		'mobile-lab-fonts',
		'https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@400;600;700&display=swap',
		array(),
		null
	);

	// style.css holds the theme header + the full Digital Blue stylesheet.
	wp_enqueue_style( 'mobile-lab', get_stylesheet_uri(), array( 'mobile-lab-fonts' ), MOBILE_LAB_VERSION );

	// app.js: mobile drawer, News/Press year filter, scroll fade-in.
	wp_enqueue_script( 'mobile-lab', get_theme_file_uri( 'assets/js/app.js' ), array(), MOBILE_LAB_VERSION, true );
} );

/* ---------------------------------------------------------------------------
 * Includes
 * ------------------------------------------------------------------------- */
require get_theme_file_path( 'inc/post-types.php' );  // Press / Project / Community CPTs + project_cat taxonomy
require get_theme_file_path( 'inc/customizer.php' );  // global News hero (video/image)
require get_theme_file_path( 'inc/acf-fields.php' );  // per-post fields (only runs if ACF is active)

/* ---------------------------------------------------------------------------
 * Hero helper — returns the video/image URLs for the current context.
 * News (front page) → global Customizer setting.
 * Single project    → per-project ACF field, falling back to the global one.
 * Logic: video wins; else image; else a plain dark banner.
 * ------------------------------------------------------------------------- */
function mobile_lab_hero_sources() {
	$video = '';
	$image = '';

	if ( is_singular( 'project' ) && function_exists( 'get_field' ) ) {
		$video = get_field( 'hero_video' ); // ACF file/URL field
		$img   = get_field( 'hero_image' ); // ACF image field (array or ID)
		if ( is_array( $img ) ) {
			$image = $img['url'];
		} elseif ( $img ) {
			$image = wp_get_attachment_image_url( $img, 'ml-hero' );
		}
	}

	// Fall back to (or, for News, use) the global hero set in the Customizer.
	if ( ! $video && ! $image ) {
		$vid_id = get_theme_mod( 'ml_hero_video', '' );
		if ( $vid_id ) {
			$video = wp_get_attachment_url( $vid_id );
		}
		$img_id = get_theme_mod( 'ml_hero_image', '' );
		if ( $img_id ) {
			$image = wp_get_attachment_image_url( $img_id, 'ml-hero' );
		}
	}

	return array( 'video' => $video, 'image' => $image );
}
