<?php
/**
 * Hero banner — plays the video if set, otherwise shows the still image,
 * otherwise a plain dark banner. Cropped to fill (object-fit: cover).
 *
 * @param array $args ['news' => bool, 'sources' => ['video'=>url,'image'=>url]]
 * @package mobile-lab
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }

$news    = ! empty( $args['news'] );
$sources = isset( $args['sources'] ) ? $args['sources'] : mobile_lab_hero_sources();
$class   = 'hero-banner' . ( $news ? ' hero-news' : '' );
?>
<div class="<?php echo esc_attr( $class ); ?>">
	<?php if ( ! empty( $sources['video'] ) ) : ?>
		<video
			src="<?php echo esc_url( $sources['video'] ); ?>"
			<?php if ( ! empty( $sources['image'] ) ) : ?>poster="<?php echo esc_url( $sources['image'] ); ?>"<?php endif; ?>
			autoplay muted loop playsinline></video>
	<?php elseif ( ! empty( $sources['image'] ) ) : ?>
		<img src="<?php echo esc_url( $sources['image'] ); ?>" alt="" style="width:100%;height:100%;object-fit:cover;display:block;">
	<?php endif; ?>
</div>
