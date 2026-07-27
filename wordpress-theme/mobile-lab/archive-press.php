<?php
/**
 * Press archive — same feed layout as News, with the year filter.
 *
 * @package mobile-lab
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }
get_header();
?>
<div class="page">
	<div class="feed">
		<?php
		if ( have_posts() ) :
			$first = true;
			while ( have_posts() ) : the_post();
				?>
				<article class="entry<?php echo $first ? ' first' : ''; ?>" data-year="<?php echo esc_attr( get_the_date( 'Y' ) ); ?>">
					<p class="date"><?php echo esc_html( get_the_date( 'F Y' ) ); ?></p>
					<?php if ( has_post_thumbnail() ) : ?>
						<div class="ml-img"><?php the_post_thumbnail( 'large' ); ?></div>
					<?php endif; ?>
					<h2 class="title"><?php the_title(); ?></h2>
					<?php // Always show the full item here — Press is read in the feed, not on a detail page.
					$GLOBALS['more'] = 1; ?>
					<div class="entry-content"><?php the_content( '' ); ?></div>
				</article>
				<?php
				$first = false;
			endwhile;
		endif;
		?>
		<nav class="pager">
			<?php for ( $y = (int) date( 'Y' ); $y >= 2010; $y-- ) : ?>
				<button class="yr" data-year="<?php echo esc_attr( $y ); ?>"><?php echo esc_html( $y ); ?></button>
			<?php endfor; ?>
		</nav>
	</div>
</div>
<?php get_footer(); ?>
