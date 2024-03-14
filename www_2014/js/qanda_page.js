var qanda_module = (function () {

    UTILITIES_MODULE.footerPos();
    // ------------ event handling section ------------

    $("#qanda_select").change(function(){
        var selected = $('#qanda_select :selected').val();

            if (selected == "C500"){
                $(".qanda_Category-container").removeClass("show-Category");
                $("#product_c500").addClass("show-Category");
            }  else if (selected == "R500"){
                $(".qanda_Category-container").removeClass("show-Category");
                $("#product_r500").addClass("show-Category");
            } else {
                console.log("unknown selected");
            }

    });

}());
