<?php
/**
 * Single community — title + editor content + optional gallery.
 *
 * @package mobile-lab
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }
get_header();
while ( have_posts() ) : the_post(); ?>
	<div class="page">
		<div class="projdetail">
			<a class="back" href="<?php echo esc_url( get_post_type_archive_link( 'community' ) ); ?>">&larr; Communities</a>
			<div class="titlewrap"><h2 class="ptitle"><?php the_title(); ?></h2></div>
			<div class="entry-content"><?php the_content(); ?></div>
		</div>
	</div>
<?php endwhile;
get_footer();
