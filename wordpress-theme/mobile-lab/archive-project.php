<?php
/**
 * Projects landing (/projects/) — shows the four categories, centred.
 * Click a category → taxonomy-project_cat.php (the projects in it).
 *
 * @package mobile-lab
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }
get_header();

$order = array( 'Features', 'Documentary', 'Installations', 'Performances' );
$terms = get_terms( array( 'taxonomy' => 'project_cat', 'hide_empty' => false ) );
if ( ! is_wp_error( $terms ) ) {
	usort( $terms, function ( $a, $b ) use ( $order ) {
		return array_search( $a->name, $order ) - array_search( $b->name, $order );
	} );
}
?>
<div class="page">
	<nav class="projnav">
		<?php foreach ( $terms as $t ) : ?>
			<a href="<?php echo esc_url( get_term_link( $t ) ); ?>" class="plink"><?php echo esc_html( $t->name ); ?></a>
		<?php endforeach; ?>
	</nav>
</div>
<?php get_footer(); ?>
