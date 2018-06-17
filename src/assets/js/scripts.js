/**
 * Created by ivoglent on 6/15/18.
 */
;(function($) {
    var container;
    var data;
    $(document).on('click', '#open-file-manager', function(e) {
        data = $(this).data();
        var iframe = $('#file-manager-iframe');
        if (!container) {
            container = $('#file-manager-iframe-container');
            var windowWidth = $(window).width();
            var windowHeight = $(window).height();
            $(iframe).attr('src', data.url);
            $(iframe).css({
                width : ( windowWidth - 100 ) + 'px',
                height : (windowHeight - 100)  + 'px',
                left : 50+ 'px',
                top : '50px'
            });
            $('#close-filemanager').css({
                top: '30px',
                right : '30px'
            });
            $(container).on('click', function () {
                $(this).hide();
            });
            $('#close-filemanager').on('click', function () {
                $(container).hide();
            });
        }
        $(container).show();
    });
    $(window).on('message', OnMessage);
    function OnMessage(e){
        var event = e.originalEvent;
        if(event.data.sender === 'responsivefilemanager'){
            if(event.data.field_id){
                var url = data.file_base_url + event.data.url;
                if (data.field_id) {
                    $('#' + data.field_id).val(url).trigger('change');
                }
                if (data.callback_func && typeof (window[data.callback_func]) === 'function') {
                    window[data.callback_func](url);
                }
                $(container).hide();
            }
        }
    }
})(jQuery);