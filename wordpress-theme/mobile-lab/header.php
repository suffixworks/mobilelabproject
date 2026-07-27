<?php
/**
 * Header: <head>, logo, editable primary menu, and the hero.
 * Hero placement matches the static site:
 *   News (front page)   → hero ABOVE the header
 *   Single project      → hero BELOW the header
 *
 * @package mobile-lab
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }

$ml_hero     = mobile_lab_hero_sources();
$ml_has_hero = ( ! empty( $ml_hero['video'] ) || ! empty( $ml_hero['image'] ) );
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<?php
// News landing: hero fills the top, header sits above the footer on load.
if ( is_front_page() && $ml_has_hero ) {
	get_template_part( 'template-parts/hero', null, array( 'news' => true, 'sources' => $ml_hero ) );
}
?>

<header class="site-header">
	<div class="brand-row">
		<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="logo" aria-label="<?php bloginfo( 'name' ); ?> — home">
			<?php get_template_part( 'template-parts/logo-svg' ); ?>
		</a>
		<button class="hamburger" aria-label="Menu">Menu</button>
	</div>
	<?php
	// Editable at Appearance → Menus (assign a menu to "Primary").
	wp_nav_menu( array(
		'theme_location' => 'primary',
		'container'      => 'nav',
		'container_class'=> 'site-nav',
		'fallback_cb'    => false,
		'depth'          => 1,
	) );
	?>
</header>

<?php
// Project detail: header first, hero below it.
if ( is_singular( 'project' ) && $ml_has_hero ) {
	get_template_part( 'template-parts/hero', null, array( 'news' => false, 'sources' => $ml_hero ) );
}
?>

<main class="site-main">
