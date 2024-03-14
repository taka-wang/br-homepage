var UTILITIES_MODULE = (function () {

    var _dynamicH = function ($container) {
        var docH = $(document).height(),
        headerH = $("#load_header").height(),
        footerH = $("#postscript_footer_container").height();

        // console.log(headerH + "; " + footerH + "; " + docH)
        // console.log(docH - headerH - footerH)

        $container.height(docH - headerH);
        // $container.height(docH);
        // $("#body_container").height(docH - headerH)
    },

    _footerPos = function () {
        var winH = $(window).height(),
            docH = $("body").height(),
            headerH = $("#load_header").height(),
            footerH = $("#postscript_footer_container").height();
            // bodyContainerH = docH + headerH;

        // console.log(winH + "; " + docH + "; " + headerH + "; " + footerH)

        if (winH > docH) {
            $("#load_footer").addClass("fixedFooter");
        } else {
            $("#load_footer").removeClass("fixedFooter");
        }

        $(window).unbind("resize");
        $(window).bind("resize", function () {
            _footerPos();
            if ($("#News_Products_Info").find($("#News_Products_Info_slideshow")).length === 1) {
                $('#News_Products_Info_slideshow').cycle('destroy');
                $("#News_Products_Info_slideshow").cycle();
            }
            // console.log($("#News_Products_Info").find($("#News_Products_Info_slideshow")))
            // console.log("resize")
        });
    };

    return {
        setDynamicH: _dynamicH,
        footerPos: function () {
            $("#load_footer").removeClass("fixedFooter");
            setTimeout(_footerPos, 300);
        }
    };
}());
