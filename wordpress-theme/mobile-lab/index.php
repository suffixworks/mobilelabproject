<?php
/**
 * Fallback template (required). Generic feed layout.
 *
 * @package mobile-lab
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }
get_header();
?>
<div class="page">
	<div class="feed">
		<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
			<article class="entry">
				<p class="date"><?php echo esc_html( get_the_date( 'F Y' ) ); ?></p>
				<h2 class="title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
				<div class="entry-content"><?php the_content(); ?></div>
			</article>
		<?php endwhile; else : ?>
			<p class="body"><?php esc_html_e( 'Nothing here yet.', 'mobile-lab' ); ?></p>
		<?php endif; ?>
	</div>
</div>
<?php get_footer(); ?>
