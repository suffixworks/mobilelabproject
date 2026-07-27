<?php
/**
 * Footer + mobile drawer overlay.
 *
 * @package mobile-lab
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }
?>
</main><!-- .site-main -->

<footer class="site-footer">
	<span>&copy; <?php echo esc_html( date( 'Y' ) ); ?> <?php bloginfo( 'name' ); ?></span>
	<span class="sep">|</span>
	<span>Site by <a href="https://suffix.works" target="_blank" rel="noopener">SUFFIX</a></span>
</footer>

<div class="scrim" hidden>
	<nav class="drawer">
		<button class="close" aria-label="Close">&times;</button>
		<?php
		wp_nav_menu( array(
			'theme_location' => 'primary',
			'container'      => false,
			'items_wrap'     => '<ul>%3$s</ul>',
			'fallback_cb'    => false,
			'depth'          => 1,
		) );
		?>
	</nav>
</div>

<?php wp_footer(); ?>
</body>
</html>
