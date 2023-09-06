$(document).ready(function (e) {

    // live handler
    lc_lightbox('.elem', {
        wrap_class: 'lcl_fade_oc',
        gallery: true,
        thumb_attr: 'data-lcl-thumb',

        skin: 'minimal',
        max_width		: '100%', // Lightbox maximum width. Use a responsive percent value or an integer for static pixel value
        max_height		: '100%', // Lightbox maximum height. Use a responsive percent value or an integer for static pixel value
    
    
        elems_parsed 	: function() {},
        html_is_ready 	: function() {},
        on_open			: function() {},
        on_elem_switch	: function() {},
        slideshow_start	: function() {},
        slideshow_end	: function() {},
        on_fs_enter		: function() {},
        on_fs_exit		: function() {},
        on_close		: function() {},
    });

});
