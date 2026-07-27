<?php
/**
 * Custom fields (Advanced Custom Fields).
 *
 * Runs only if ACF is active. Gives the client clean, labelled inputs for the
 * structured content that does not fit the default "title + body":
 *   - per-project hero video / image (with the upload spec shown inline)
 *   - the meta line ("2023 · Drama Thriller · 99 mins")
 *   - video links (Netflix / Vimeo)  ← Repeater needs ACF PRO
 *   - image gallery with captions     ← Gallery needs ACF PRO
 *
 * If you only have the free ACF, the basic fields (hero video/image, meta)
 * work as-is; comment out the repeater/gallery or switch to ACF PRO.
 *
 * @package mobile-lab
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }

add_action( 'acf/init', function () {

	if ( ! function_exists( 'acf_add_local_field_group' ) ) {
		return;
	}

	acf_add_local_field_group( array(
		'key'      => 'group_ml_project',
		'title'    => 'Project details',
		'location' => array(
			array( array( 'param' => 'post_type', 'operator' => '==', 'value' => 'project' ) ),
		),
		'fields'   => array(

			array(
				'key'           => 'field_ml_meta',
				'label'         => 'Meta line',
				'name'          => 'project_meta',
				'type'          => 'textarea',
				'rows'          => 2,
				'instructions'  => 'e.g. "2023 · Drama Thriller · Atmos · Colour · 99 mins". Line breaks are kept.',
			),

			array(
				'key'          => 'field_ml_hero_video',
				'label'        => 'Hero video',
				'name'         => 'hero_video',
				'type'         => 'file',
				'return_format'=> 'url',
				'mime_types'   => 'mp4',
				'instructions' => 'MP4 (H.264), 1920×1080 (16:9), ≤ 8 MB, no audio. Plays muted on a loop, cropped to fill — keep the subject centred. Optional.',
			),

			array(
				'key'          => 'field_ml_hero_image',
				'label'        => 'Hero image (no-video fallback)',
				'name'         => 'hero_image',
				'type'         => 'image',
				'return_format'=> 'array',
				'preview_size' => 'medium',
				'instructions' => 'JPG, 1920×1080 (16:9), ≤ 800 KB. Used when no hero video is set. Cropped to fill — keep the subject centred.',
			),

			// ---- ACF PRO below (Repeater + Gallery) ----
			array(
				'key'          => 'field_ml_videos',
				'label'        => 'Video links (Netflix / Vimeo)',
				'name'         => 'video_links',
				'type'         => 'repeater',        // ACF PRO
				'button_label' => 'Add video link',
				'instructions' => 'External links shown as "Label ↗".',
				'sub_fields'   => array(
					array( 'key' => 'field_ml_v_label', 'label' => 'Label', 'name' => 'label', 'type' => 'text' ),
					array( 'key' => 'field_ml_v_url',   'label' => 'URL',   'name' => 'url',   'type' => 'url' ),
				),
			),

			array(
				'key'          => 'field_ml_gallery',
				'label'        => 'Image gallery',
				'name'         => 'gallery',
				'type'         => 'gallery',          // ACF PRO
				'instructions' => 'Stills / installation views shown under the text. JPG, ~1600px wide.',
			),
		),
	) );

	/* Shop price — add on the Page you use for Shop (edit the page ID / template as needed). */
	acf_add_local_field_group( array(
		'key'      => 'group_ml_shop',
		'title'    => 'Shop item',
		'location' => array(
			array( array( 'param' => 'page_template', 'operator' => '==', 'value' => 'page.php' ) ),
		),
		'fields'   => array(
			array( 'key' => 'field_ml_price', 'label' => 'Price line', 'name' => 'shop_price', 'type' => 'text',
				'instructions' => 'e.g. "THB 4,500 · Edition of 30". Leave empty on non-shop pages.' ),
		),
	) );
} );
