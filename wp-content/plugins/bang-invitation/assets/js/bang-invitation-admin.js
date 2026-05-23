/**
 * Bang Invitation Admin JavaScript
 */
jQuery(document).ready(function($) {
    $('#bang_invitation_music_volume').on('input change', function() {
        $('#volume_value').text($(this).val() + '%');
    });
    
    $('#bang_invitation_upload_music').on('click', function(e) {
        e.preventDefault();
        
        var custom_uploader = wp.media({
            title: 'Choose Background Music',
            button: {
                text: 'Use this audio'
            },
            library: {
                type: 'audio'
            },
            multiple: false
        });
        
        custom_uploader.on('select', function() {
            var attachment = custom_uploader.state().get('selection').first().toJSON();
            $('#bang_invitation_music_url').val(attachment.url);
            
            if ($('audio').length > 0) {
                $('audio').attr('src', attachment.url);
            } else {
                $('#bang_invitation_music_url').after('<div style="margin-top: 10px;"><audio controls src="' + attachment.url + '"></audio></div>');
            }
        });
        
        custom_uploader.open();
    });
});
