# ACF Custom Frontend Submission Form

![Plugin Version](https://img.shields.io/badge/version-1.0-blue)
![WordPress Compatibility](https://img.shields.io/badge/WordPress-6.0%2B-green)
![PHP Compatibility](https://img.shields.io/badge/PHP-8.0%2B-green)
![License](https://img.shields.io/badge/license-GPLv2%2B-blue)

A WordPress plugin for creating a frontend submission form for video testimonials using Advanced Custom Fields (ACF), with reCAPTCHA support, customizable field labels, and admin management tools.

## Overview

The **ACF Custom Frontend Submission Form** plugin enables users to submit video testimonials via a frontend form, integrated with a custom post type (`video-testimonial`). It offers robust features like video upload restrictions, spam protection via reCAPTCHA v2/v3, and admin interfaces for managing submissions and form settings. Ideal for websites needing user-generated video content with secure and customizable form handling.

## Features

- **Frontend Submission Form**: Submit testimonials with `[video_testimonial_form]` shortcode, including title, content, and video upload fields.
- **Testimonial Display**: Show published testimonials with `[video_testimonials limit="5"]`.
- **Customizable Labels**: Configure field labels (Title, Content, Video Upload) via admin settings.
- **Video Upload Restrictions**: Limit uploads to 30 MB and `.mov`, `.mp4`, `.m4v` formats, with a warning message.
- **reCAPTCHA Support**: Enable v2 (Checkbox) or v3 (Invisible) with adjustable score threshold (default: 0.5).
- **Form Access Control**: Public (guest submissions) or private (logged-in users only).
- **Admin Management**:
  - **Manage Post Status**: Toggle testimonial statuses (Publish, Private, Draft).
  - **ACF Custom Form**: Configure form settings, reCAPTCHA, and labels.
- **Secure Validation**: Client-side and server-side checks for file uploads and spam protection.
- **Dependency Management**: Requires Advanced Custom Fields (ACF), prompted via TGM Plugin Activation.

## Installation

### From WordPress Admin
1. Download the plugin ZIP from [GitHub Releases](https://github.com/Ahkonsu/wpproatoz-cptform-creators/releases).
2. In WordPress admin, go to **Plugins > Add New > Upload Plugin**.
3. Upload the ZIP file and activate the plugin.
4. Install and activate Advanced Custom Fields (ACF) when prompted.

### Manual Installation
1. Clone or download the repository to `/wp-content/plugins/wpproatoz-cptform-creators`.
   ```bash
   git clone https://github.com/Ahkonsu/wpproatoz-cptform-creators.git wpproatoz-cptform-creators
   ```
2. Activate the plugin via the WordPress admin Plugins page.
3. Install and activate ACF when prompted.

## Usage

### Shortcodes
- **`[video_testimonial_form]`**:
  - Add to a page to display the submission form.
  - Fields: Title, Content, Video Upload (30 MB max, `.mov`, `.mp4`, `.m4v`).
  - Supports public or private access, with reCAPTCHA v2/v3 or honeypot.
  - Example: `[video_testimonial_form]`

- **`[video_testimonials limit="5"]`**:
  - Displays published testimonials.
  - `limit`: Number of testimonials (default: 5).
  - Example: `[video_testimonials limit="3"]`

### Configuration
1. Go to **Video Testimonials > ACF Custom Form** in the WordPress admin.
2. **Settings**:
   - **Form Access**: Public (guests) or Private (logged-in users).
   - **reCAPTCHA**:
     - None: Uses honeypot.
     - v2 (Checkbox): Requires user verification.
     - v3 (Invisible): Background validation with score threshold (0.0–1.0, default: 0.5).
     - Enter Site Key and Secret Key from [Google reCAPTCHA](https://www.google.com/recaptcha/admin).
   - **Field Labels**: Customize labels (e.g., "Testimonial Name", "Your Story", "Upload Video").
3. Save settings.
4. Ensure the `video-testimonial` CPT and `video_upload` field (key: `field_682e59ec3b45a`) are set up in ACF.

### Managing Testimonials
- **View Submissions**: Go to **Video Testimonials > All Video Testimonials**.
- **Manage Statuses**: Use **Video Testimonials > Manage Post Status** to set Publish, Private, or Draft.
- Published testimonials appear via `[video_testimonials]`.

## Requirements
- WordPress 6.0+
- PHP 8.0+
- Advanced Custom Fields (ACF) plugin
- Server settings: `upload_max_filesize = 30M`, `post_max_size = 32M` in `php.ini`

## Contributing
Contributions are welcome! Please:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/YourFeature`).
3. Commit changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

Report issues or suggest features at [GitHub Issues](https://github.com/Ahkonsu/wpproatoz-cptform-creators/issues).

## Changelog
### 1.0 (2025-06-11)
- Initial release.
- Features:
  - Frontend submission form with `[video_testimonial_form]`.
  - Testimonial display with `[video_testimonials]`.
  - Customizable field labels.
  - Video upload restrictions (30 MB, `.mov`, `.mp4`, `.m4v`) with warning.
  - reCAPTCHA v2/v3 with configurable threshold.
  - Public/private form access.
  - Admin menus for status management and form settings.
  - Secure client- and server-side validation.

## License
This plugin is licensed under the [GPLv2 or later](http://www.gnu.org/licenses/gpl-2.0.html).

## Support
For support, contact WPProAtoZ at [https://wpproatoz.com](https://wpproatoz.com) or open an issue on [GitHub](https://github.com/Ahkonsu/wpproatoz-cptform-creators/issues).