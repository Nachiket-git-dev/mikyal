(function($) {
    var allfunction = {
        // // sticky menu js code here
        // sticky_menu: function () {
        //     $(window).on('scroll', function () {
        //         var $this = '.header-area';
        //         var scrollDistance = $(window).scrollTop();
        //         var topOffset = $($this).position().top + 150;
        //         var showSticky = $($this).position().top + 500
        //         if (topOffset <= scrollDistance) {
        //             $($this).addClass('sticky');
        //         } else if (showSticky <= scrollDistance) {
        //             $($this).addClass('show-sticky');
        //         } else {
        //             $($this).removeClass('sticky show-sticky');
        //         }
        //     });

        // },

        // StopPropagations elements
        stopPropagationElements: () => {
            // $('.animation-form').click(function(e) {
            //     e.stopPropagation()
            // })
        },
        // Document click to hide elements
        elementHide: () => {
            // $(document).click(function() {
            //     $('.animation-form').removeClass('active');
            //     $('.subscribe-input').removeClass('active');
            // })
        },


        init: function() {
            allfunction.stopPropagationElements()
            allfunction.elementHide()
        },
    }

    $(document).ready(function() {
        allfunction.init();
    });

})(jQuery);

$(window).load(function() {});