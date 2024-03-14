var download_module = (function () {

    UTILITIES_MODULE.footerPos();
    // ------------ event handling section ------------

    $("#Download_select").change(function(){
        UTILITIES_MODULE.footerPos();
        var selected = $('#Download_select :selected').val();

            if (selected == "ALL"){
                $(".Category-container").addClass("show-Category");
            } else if (selected == "USB Modem"){
                $(".Category-container").removeClass("show-Category");
                $("#USB_Modem_series").addClass("show-Category");
            } else if (selected == "Mobile Router"){
                $(".Category-container").removeClass("show-Category");
                $("#Mobile_Router_series").addClass("show-Category");
            } else if (selected == "Home Router"){
                $(".Category-container").removeClass("show-Category");
                $("#Home_Router_series").addClass("show-Category");
            } else if (selected == "M2M / Vehicle Router"){
                $(".Category-container").removeClass("show-Category");
                $("#M2M_series").addClass("show-Category");
            }  else if (selected == "Outdoor CPE"){
                $(".Category-container").removeClass("show-Category");
                $("#Outdoor_CPE_series").addClass("show-Category");
            } else {
                console.log("unknown selected");
            }

    });





}());
