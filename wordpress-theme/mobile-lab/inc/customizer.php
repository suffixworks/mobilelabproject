<?php
/**
 * Customizer — the global News hero (video OR image), editable at
 * Appearance → Customize → "Hero (News)". No plugin required (WordPress core).
 * The upload spec is shown to the client right under each control.
 *
 * @package mobile-lab
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }

add_action( 'customize_register', function ( $wp_customize ) {

	$wp_customize->add_section( 'ml_hero', array(
		'title'    => __( 'Hero (News)', 'mobile-lab' ),
		'priority' => 30,
	) );

	// --- Hero video (primary) ---
	$wp_customize->add_setting( 'ml_hero_video', array(
		'sanitize_callback' => 'absint',
	) );
	$wp_customize->add_control( new WP_Customize_Media_Control( $wp_customize, 'ml_hero_video', array(
		'label'       => __( 'Hero video', 'mobile-lab' ),
		'description' => __( 'MP4 (H.264), 1920×1080 (16:9), ≤ 8 MB, no audio. Plays muted on a loop and is cropped to fill the screen — keep the subject centred. Leave empty to use the image below instead.', 'mobile-lab' ),
		'section'     => 'ml_hero',
		'mime_type'   => 'video',
	) ) );

	// --- Hero image (used when there is no video) ---
	$wp_customize->add_setting( 'ml_hero_image', array(
		'sanitize_callback' => 'absint',
	) );
	$wp_customize->add_control( new WP_Customize_Media_Control( $wp_customize, 'ml_hero_image', array(
		'label'       => __( 'Hero image (no-video fallback)', 'mobile-lab' ),
		'description' => __( 'JPG, 1920×1080 (16:9), ≤ 800 KB. Same size as the video; cropped to fill — keep the subject centred.', 'mobile-lab' ),
		'section'     => 'ml_hero',
		'mime_type'   => 'image',
	) ) );
} );
