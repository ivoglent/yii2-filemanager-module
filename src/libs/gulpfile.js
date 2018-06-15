var elixir = require('laravel-elixir');
elixir.config.sourcemaps = false;
elixir(function (mix) {
    mix.less(
        [
            'style.less',
        ],
        'resources/tmp/css/style.css',
        'resources/assets/less');

    mix.less(
        [
            "./vendor/bower-asset/bootstrap/less/bootstrap.less",
            "./vendor/bower-asset/bootstrap/less/responsive.less",
            "./vendor/bower-asset/bootstrap-lightbox/less/bootstrap-lightbox.less"
        ],
        'resources/tmp/css/lib.css',
        'vendor/bower-asset');

    mix.styles(
        [
            "lib.css",
            "./vendor/bower-asset/bootstrap-modal/css/bootstrap-modal.css",
            "./vendor/bower-asset/jQuery-contextMenu/src/jquery.contextMenu.css",
            "style.css"
        ],
        '../assets/css/style.css',
        'resources/tmp/css'
    );

    // mix.styles(
    //   ["rtl-style.less"],
    //   'filemanager/css/rtl-style.css',
    //   'resources/assets/less'
    // );

    mix.scripts(
        [
            "bootstrap/js/bootstrap-transition.js",
            "bootstrap/js/bootstrap-affix.js",
            "bootstrap/js/bootstrap-dropdown.js",
            "bootstrap/js/bootstrap-alert.js",
            "bootstrap/js/bootstrap-button.js",
            "bootstrap/js/bootstrap-collapse.js",
            "bootstrap/js/bootstrap-dropdown.js",
            "bootstrap/js/bootstrap-modal.js",
            "bootstrap/js/bootstrap-tooltip.js",
            "bootstrap/js/bootstrap-popover.js",
            "bootstrap/js/bootstrap-scrollspy.js",
            "bootstrap/js/bootstrap-tab.js",
            "bootstrap/js/bootstrap-typeahead.js",
            "bootstrap-lightbox/js/bootstrap-lightbox.js",
            "jQuery-contextMenu/src/jquery.contextMenu.js",
            "vanilla-lazyload/dist/lazyload.js",
            "jquery-scrollstop/jquery.scrollstop.js",
            "bootbox.js/bootbox.js",
            "jquery-touchswipe/jquery.touchSwipe.js",
            "bootstrap-modal/js/bootstrap-modalmanager.js",
            "bootstrap-modal/js/bootstrap-modal.js",
            "clipboard/dist/clipboard.js",
            "jqueryui-touch-punch/jquery.ui.touch-punch.js",
        ],
        '../assets/js/plugins.js',
        'vendor/bower-asset'
    );

    mix.scripts(
        ['include.js'],
        '../assets/js/include.js', './resources/assets/js');

    mix.scripts(
        ['include.commercial.js'],
        '../assets/include.commercial.js', './resources/assets/js');


    mix.scripts(
        ['tinymce_plugin.js'],
        '../assets/js/tinymce_plugin.js', './resources/assets/js');

    mix.scripts(
        ['jquery.min.js'],
        '../assets/js/jquery.min.js', './resources/assets/js');

    mix.scripts(
        ['jquery-ui.min.js'],
        '../assets/js/jquery-ui.min.js', './resources/assets/js');
    mix.scripts(
        ['canvas-to-blob.min.js'],
        '../assets/js/canvas-to-blob.min.js', './resources/assets/js');
    mix.scripts(
        ['load-image.all.min.js'],
        '../assets/js/load-image.all.min.js', './resources/assets/js');
    mix.scripts(
        ['tmpl.min.js'],
        '../assets/js/tmpl.min.js', './resources/assets/js');


    mix.scripts(
        ['modernizr.custom.js'],
        '../assets/js/modernizr.custom.js', './resources/assets/js'
    );



    mix.copy('vendor/bower-asset/jPlayer', '../assets/js/jPlayer/');
    mix.copy('vendor/bower-asset/blueimp-file-upload', '../assets/js/blueimp-file-upload/');
    mix.copy('resources/assets/img', '../assets/img/');
});