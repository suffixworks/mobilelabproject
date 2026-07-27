<?php
/**
 * Contact / enquiry form.
 *
 * All forms email MOBILE_LAB_FORM_EMAIL (nontawat@mobilelabproject.com).
 * Drop the shortcode onto any page (Contact, Shop, …):
 *
 *   [ml_form]
 *   [ml_form heading="Order / Enquiry" button="Send enquiry"]
 *
 * Note: uses wp_mail(). For reliable delivery on shared hosting, install an
 * SMTP plugin (e.g. "WP Mail SMTP"). To use a form plugin instead
 * (Contact Form 7 / WPForms), just set its recipient to the same address.
 *
 * @package mobile-lab
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }

/* Handle the submission early, before any output (allows a redirect). */
add_action( 'template_redirect', function () {

	if ( empty( $_POST['ml_form_nonce'] ) || ! wp_verify_nonce( $_POST['ml_form_nonce'], 'ml_form' ) ) {
		return;
	}
	if ( ! empty( $_POST['ml_hp'] ) ) {   // honeypot filled → spam bot
		return;
	}

	$name    = isset( $_POST['ml_name'] ) ? sanitize_text_field( wp_unslash( $_POST['ml_name'] ) ) : '';
	$email   = isset( $_POST['ml_email'] ) ? sanitize_email( wp_unslash( $_POST['ml_email'] ) ) : '';
	$message = isset( $_POST['ml_message'] ) ? sanitize_textarea_field( wp_unslash( $_POST['ml_message'] ) ) : '';
	$source  = isset( $_POST['ml_source'] ) ? sanitize_text_field( wp_unslash( $_POST['ml_source'] ) ) : '';
	$back    = wp_get_referer() ? wp_get_referer() : home_url( '/' );

	if ( ! $name || ! is_email( $email ) || ! $message ) {
		wp_safe_redirect( add_query_arg( 'ml_form', 'error', $back ) );
		exit;
	}

	$to      = defined( 'MOBILE_LAB_FORM_EMAIL' ) ? MOBILE_LAB_FORM_EMAIL : get_option( 'admin_email' );
	$subject = sprintf( '[%s] %s — %s', get_bloginfo( 'name' ), ( $source ? $source : 'Message' ), $name );
	$body    = "Name: {$name}\nEmail: {$email}\n" . ( $source ? "Form: {$source}\n" : '' ) . "\n{$message}\n";
	$headers = array( 'Reply-To: ' . $name . ' <' . $email . '>' );

	$sent = wp_mail( $to, $subject, $body, $headers );

	wp_safe_redirect( add_query_arg( 'ml_form', $sent ? 'sent' : 'error', $back ) );
	exit;
} );

/* Render the form. */
add_shortcode( 'ml_form', function ( $atts ) {
	$a = shortcode_atts( array(
		'heading' => 'Get in touch',
		'button'  => 'Send message',
	), $atts, 'ml_form' );

	$status = isset( $_GET['ml_form'] ) ? sanitize_key( $_GET['ml_form'] ) : '';

	ob_start(); ?>
	<form class="form" method="post" action="">
		<h2 class="formhead"><?php echo esc_html( $a['heading'] ); ?></h2>

		<?php if ( 'sent' === $status ) : ?>
			<p class="sent">Thank you — your message has been sent. We’ll reply by email.</p>
		<?php elseif ( 'error' === $status ) : ?>
			<p class="sent" style="color:var(--accent-dark);">Please fill in your name, a valid email and a message, then try again.</p>
		<?php endif; ?>

		<?php wp_nonce_field( 'ml_form', 'ml_form_nonce' ); ?>
		<input type="hidden" name="ml_source" value="<?php echo esc_attr( $a['heading'] ); ?>">
		<div aria-hidden="true" style="position:absolute;left:-9999px;top:-9999px;">
			<label>Leave this empty <input type="text" name="ml_hp" tabindex="-1" autocomplete="off"></label>
		</div>

		<div class="field"><label>Name</label><input type="text" name="ml_name" placeholder="Your name" required></div>
		<div class="field"><label>Email</label><input type="email" name="ml_email" placeholder="you@email.com" required></div>
		<div class="field"><label>Message</label><textarea name="ml_message" placeholder="Your message…" required></textarea></div>
		<button type="submit" class="submit"><?php echo esc_html( $a['button'] ); ?></button>
	</form>
	<?php
	return ob_get_clean();
} );
