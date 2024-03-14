var products_page = function() {

    /*------ click tabs event start ------*/
    var current_checked_Id = $('input[name=tabs]:checked').attr("id");

    $("#" + current_checked_Id).siblings(".label").addClass("checked-label-style");
    $("#" + current_checked_Id).siblings(".content").addClass("content-checked-style");

    $("input[type='radio']").on('click', function() {
            var checked_Id = $('input[name=tabs]:checked').attr("id");        
            $(".label").removeClass("checked-label-style");
            $("div.content").removeClass("content-checked-style");
            $("#" + checked_Id).siblings(".label").addClass("checked-label-style");
            $("#" + checked_Id).siblings(".content").addClass("content-checked-style");
    }); 
    /*------ click tabs event End ------*/

    var _setTabContentH = function () {
        $("#body_content_column_right").css("overflow", "hidden");
        setTimeout(function () {
            $("#product_details").height(
                $("input:checked ~ .content").outerHeight() +
                $("input:checked ~ label").outerHeight()
            );
            setTimeout(function () {
                $("#body_content_column_right").css("overflow", "auto");
            }, 600);
        }, 5);
    };

    _setTabContentH();
    UTILITIES_MODULE.footerPos();

    $("#product_details > .product-details-tabs > input").click(function () {
        _setTabContentH();
        UTILITIES_MODULE.footerPos();
    });

    $(".content--btn > .btn").click(function () {
        var title = $(this).parents(".content--cell").find(".content--des").text();
        location.href = "mailto:Bandrich<sales@bandrich.com>?subject=Inquiry " + title;
    });
    // ------------ event handling section ------------

    //preview product picture.
    $('#product_gallery img').click(function() {
        var product_gallery_id = $(this).attr('id').slice(-1);
        $('#product_main_image img').removeClass('animated show-img');
        $("#product_main_image #product_main_image_" + product_gallery_id).addClass('animated show-img');
    });//End #product_gallery img click

    //Accordion side-navigation menu event and addClass "side-navigation-item-selected" when clicking the menu link.
    $(document).on("click","#side_navigation_container h3",function(e){
        $("#side_navigation_container ul ul").slideUp();
        $("#side_navigation_container ul li").removeClass("side-navigation-item-selected");
        $(this).parent().addClass("side-navigation-item-selected");

        //Find the element after it.
        if(!$(this).next().is(":visible"))
        {
            $(this).next().slideDown();
           //$(this).next().css("border-bottom","1px dotted #d9bea3");
        }
    });//End #side_navigation_container h3 click


}();//End products_page
