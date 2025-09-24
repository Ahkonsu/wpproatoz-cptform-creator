=== ACF Custom Frontend Submission Form ===
Contributors: wpproatoz
Tags: acf, custom post type, frontend form, video testimonial, recaptcha
Requires at least: 6.0
Tested up to: 6.5
Requires PHP: 8.0
Stable tag: 1.0.1
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
Requires Plugins: advanced-custom-fields-pro

A WordPress plugin for creating a frontend submission form for video testimonials using ACF Pro, with reCAPTCHA support and admin management.

== Description ==

The ACF Custom Frontend Submission Form plugin allows users to submit video testimonials via a frontend form, integrated with Advanced Custom Fields Pro (ACF Pro). It supports a custom post type (`video-testimonial`) with fields for title, content, and video upload. Features include customizable field labels, file restrictions (30 MB max, .mov, .mp4, .m4v), reCAPTCHA v2/v3 for spam protection, and admin tools to manage post statuses and form settings.

**Key Features:**
- Frontend form with shortcode `[video_testimonial_form]` for submitting video testimonials.
- Display testimonials with `[video_testimonials limit="5"]`.
- Customizable field labels via admin settings.
- Video upload restrictions: 30 MB max, .mov, .mp4, .m4v formats.
- reCAPTCHA v2 (Checkbox) or v3 (Invisible) with configurable score threshold.
- Public or private form access (logged-in users only).
- Admin menus for managing post statuses (Publish, Private, Draft) and form settings.
- Warning message for video upload restrictions.
- Client-side and server-side validation for secure submissions.

== Installation ==

1. Upload the `wpproatoz-cptform-creators` folder to the `/wp-content/plugins/` directory.
2. Activate the plugin through the 'Plugins' menu in WordPress.
3. Install and activate the required Advanced Custom Fields Pro (ACF Pro) plugin when prompted.
4. Configure the plugin settings under **Video Testimonials > ACF Custom Form** in the WordPress admin.
5. Add the `[video_testimonial_form]` shortcode to a page for the submission form.
6. Add the `[video_testimonials]` shortcode to display approved testimonials.

== Frequently Asked Questions ==

= What are the requirements for this plugin? =
The plugin requires WordPress 6.0+, PHP 8.0+, and the Advanced Custom Fields Pro (ACF Pro) plugin.

= How do I set up reCAPTCHA? =
1. Register your site at [Google reCAPTCHA](https://www.google.com/recaptcha/admin).
2. Obtain v2 Checkbox or v3 Invisible keys.
3. Enter the Site Key and Secret Key in **Video Testimonials > ACF Custom Form**.
4. For v3, set a score threshold (0.0 to 1.0, default 0.5).

= How do I customize field labels? =
Go to **Video Testimonials > ACF Custom Form** and update the Title, Content, and Video Upload field labels. Save to apply changes to the frontend form.

= What file types and sizes are allowed for video uploads? =
Only `.mov`, `.mp4`, and `.m4v` files are allowed, with a maximum size of 30 MB. A warning message appears below the video upload field.

= Can guests submit testimonials? =
Yes, if Form Access is set to Public in **Video Testimonials > ACF Custom Form**. Otherwise, only logged-in users can submit.

== Screenshots ==

1. Frontend submission form with custom labels and video upload warning.
2. Admin settings page for configuring form access, reCAPTCHA, and field labels.
3. Manage Post Status page for toggling testimonial statuses.

== Changelog ==

= 1.0 =
* Initial release.
* Features: Frontend submission form, video upload (30 MB max, .mov, .mp4, .m4v), custom labels, reCAPTCHA v2/v3, public/private access, admin management.
* Shortcodes: `[video_testimonial_form]`, `[video_testimonials]`.
* Admin menus: Manage Post Status, ACF Custom Form settings.

== Upgrade Notice ==

= 1.0 =
Initial release of the plugin.