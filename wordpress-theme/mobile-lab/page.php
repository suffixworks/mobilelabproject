<?php
/**
 * Static pages — About, Shop, Contact, etc.
 *
 * @package mobile-lab
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }
get_header();
while ( have_posts() ) : the_post();
	$price = function_exists( 'get_field' ) ? get_field( 'shop_price' ) : '';
	?>
	<div class="page">
		<?php if ( has_post_thumbnail() ) : ?>
			<div class="ml-img hero" style="aspect-ratio:607/405;"><?php the_post_thumbnail( 'large' ); ?></div>
		<?php endif; ?>
		<div class="copy">
			<h2 class="title"><?php the_title(); ?></h2>
			<?php if ( $price ) : ?><p class="price"><?php echo esc_html( $price ); ?></p><?php endif; ?>
			<div class="entry-content"><?php the_content(); ?></div>
		</div>
	</div>
	<?php
endwhile;
get_footer();
