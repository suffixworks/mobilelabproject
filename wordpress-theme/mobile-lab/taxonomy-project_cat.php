<?php
/**
 * A project category — lists its projects, centred, with a back link.
 *
 * @package mobile-lab
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }
get_header();
$term = get_queried_object();
?>
<div class="page">
	<div class="projlist">
		<a class="back" href="<?php echo esc_url( get_post_type_archive_link( 'project' ) ); ?>">&larr; Projects</a>
		<nav class="projnav">
			<?php while ( have_posts() ) : the_post(); ?>
				<a href="<?php the_permalink(); ?>" class="plink"><?php the_title(); ?></a>
			<?php endwhile; ?>
		</nav>
	</div>
</div>
<?php get_footer(); ?>
