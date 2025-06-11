jQuery(document).ready(function($) {
    // Video upload validation
    const videoInput = $('input[name="acf[field_682e59ec3b45a]"]');
    if (videoInput.length) {
        videoInput.on('change', function(e) {
            const file = e.target.files[0];
            const errorContainer = $('<div class="vt-error-message"></div>').insertAfter(videoInput);

            // Clear previous errors
            errorContainer.text('');

            if (file) {
                // Check file size
                if (file.size > vtSettings.maxFileSize) {
                    errorContainer.text(vtSettings.errorSize);
                    videoInput.val('');
                    return;
                }

                // Check file type
                if (!vtSettings.allowedTypes.includes(file.type)) {
                    errorContainer.text(vtSettings.errorType);
                    videoInput.val('');
                    return;
                }
            }
        });
    }

    // Update field labels
    const titleLabel = $('label[for="acf-_post_title"]');
    const contentLabel = $('label[for="acf-_post_content"]');
    
    if (titleLabel.length && vtSettings.labelTitle) {
        titleLabel.contents().filter(function() {
            return this.nodeType === 3; // Text nodes
        }).first().replaceWith(vtSettings.labelTitle);
    }
    
    if (contentLabel.length && vtSettings.labelContent) {
        contentLabel.contents().filter(function() {
            return this.nodeType === 3; // Text nodes
        }).first().replaceWith(vtSettings.labelContent);
    }
});