<?php
/**
 * Communities landing — list of communities, centred.
 *
 * @package mobile-lab
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }
get_header();
?>
<div class="page">
	<nav class="projnav">
		<?php while ( have_posts() ) : the_post(); ?>
			<a href="<?php the_permalink(); ?>" class="plink"><?php the_title(); ?></a>
		<?php endwhile; ?>
	</nav>
</div>
<?php get_footer(); ?>
