<?php
/**
 * Single project. The hero (video/image) is rendered in header.php.
 * Body text = the editor content; meta / video links / gallery = ACF fields.
 *
 * @package mobile-lab
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }
get_header();
while ( have_posts() ) : the_post();
	$cats = get_the_terms( get_the_ID(), 'project_cat' );
	$cat  = ( $cats && ! is_wp_error( $cats ) ) ? $cats[0] : null;
	$meta = function_exists( 'get_field' ) ? get_field( 'project_meta' ) : '';
	?>
	<div class="page">
		<div class="projdetail">
			<a class="back" href="<?php echo esc_url( $cat ? get_term_link( $cat ) : get_post_type_archive_link( 'project' ) ); ?>">
				&larr; <?php echo esc_html( $cat ? $cat->name : 'Projects' ); ?>
			</a>

			<div class="titlewrap">
				<h2 class="ptitle"><?php the_title(); ?></h2>
				<?php if ( $meta ) : ?>
					<p class="meta"><?php echo nl2br( esc_html( $meta ) ); ?></p>
				<?php endif; ?>
			</div>

			<div class="entry-content"><?php the_content(); ?></div>

			<?php // Video links (ACF PRO repeater)
			if ( function_exists( 'have_rows' ) && have_rows( 'video_links' ) ) :
				while ( have_rows( 'video_links' ) ) : the_row(); ?>
					<a class="vlink" href="<?php echo esc_url( get_sub_field( 'url' ) ); ?>" target="_blank" rel="noopener"><?php echo esc_html( get_sub_field( 'label' ) ); ?> &#8599;</a>
				<?php endwhile;
			endif; ?>

			<?php // Gallery (ACF PRO)
			$gallery = function_exists( 'get_field' ) ? get_field( 'gallery' ) : null;
			if ( $gallery ) :
				foreach ( $gallery as $img ) : ?>
					<figure class="figure">
						<img src="<?php echo esc_url( $img['sizes']['large'] ); ?>" alt="<?php echo esc_attr( $img['alt'] ); ?>" style="width:100%;height:auto;display:block;">
						<?php if ( ! empty( $img['caption'] ) ) : ?>
							<figcaption class="cap"><?php echo esc_html( $img['caption'] ); ?></figcaption>
						<?php endif; ?>
					</figure>
				<?php endforeach;
			endif; ?>
		</div>
	</div>
	<?php
endwhile;
get_footer();
