<?php
/**
 * Custom post types + taxonomy so the client can add/edit content in wp-admin.
 *   News        → built-in Posts (no CPT needed)
 *   Press       → CPT "press"
 *   Projects    → CPT "project"  + taxonomy "project_cat" (Features / Documentary / Installations / Performances)
 *   Communities → CPT "community"
 *   About/Shop/Contact → normal Pages
 *
 * @package mobile-lab
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }

add_action( 'init', function () {

	$common = array(
		'public'       => true,
		'has_archive'  => true,
		'menu_icon'    => 'dashicons-format-image',
		'supports'     => array( 'title', 'editor', 'thumbnail', 'excerpt' ),
		'show_in_rest' => true, // block editor
	);

	register_post_type( 'press', array_merge( $common, array(
		'label'   => __( 'Press', 'mobile-lab' ),
		'rewrite' => array( 'slug' => 'press' ),
		'menu_icon' => 'dashicons-media-document',
	) ) );

	register_post_type( 'project', array_merge( $common, array(
		'label'   => __( 'Projects', 'mobile-lab' ),
		'rewrite' => array( 'slug' => 'projects' ),
		'menu_icon' => 'dashicons-video-alt2',
	) ) );

	register_post_type( 'community', array_merge( $common, array(
		'label'   => __( 'Communities', 'mobile-lab' ),
		'rewrite' => array( 'slug' => 'communities' ),
		'menu_icon' => 'dashicons-groups',
	) ) );

	// Project categories (the four sections). Distinct slug so it does not
	// collide with single-project URLs (/projects/<slug>/).
	register_taxonomy( 'project_cat', 'project', array(
		'label'        => __( 'Project Categories', 'mobile-lab' ),
		'hierarchical' => true, // behaves like categories
		'rewrite'      => array( 'slug' => 'project-category' ),
		'show_in_rest' => true,
	) );
} );

/**
 * Show every item (no pagination) on the CPT archives and category pages so the
 * News/Press year filter has all posts, and the project/community lists are full.
 */
add_action( 'pre_get_posts', function ( $q ) {
	if ( is_admin() || ! $q->is_main_query() ) {
		return;
	}
	if ( $q->is_post_type_archive( array( 'press', 'project', 'community' ) ) || $q->is_tax( 'project_cat' ) ) {
		$q->set( 'posts_per_page', -1 );
		$q->set( 'orderby', 'date' );
		$q->set( 'order', 'DESC' );
	}
} );

/**
 * Seed the four project categories on theme activation (client can rename/add later).
 */
add_action( 'after_switch_theme', function () {
	foreach ( array( 'Features', 'Documentary', 'Installations', 'Performances' ) as $name ) {
		if ( ! term_exists( $name, 'project_cat' ) ) {
			wp_insert_term( $name, 'project_cat' );
		}
	}
	flush_rewrite_rules();
} );
