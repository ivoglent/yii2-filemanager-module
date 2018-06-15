/**
 * Created by ivoglent on 6/15/18.
 */
;(function($) {
    $(document).on('click', '#open-file-manager', function(e) {
        var data = $(this).data();
        var iframe = $('#file-manager-iframe');
        var container = $('#file-manager-iframe-container');
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();
        $(iframe).attr('src', data.url);
        $(iframe).css({
            width : ( windowWidth - 100 ) + 'px',
            height : (windowHeight - 100)  + 'px',
            left : 50+ 'px',
            top : '50px'
        });
        $(container).show();
        $(container).on('click', function () {
            $(this).hide();
        });
    });
})(jQuery);