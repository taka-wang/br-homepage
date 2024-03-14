var load_header_footer_Side_Navigation = function() {
    var json_arr;                                                                           //save Json Data
    var language_type = "English";
    var header_title  = ["Products","News_and_Events","About","Support"];
    var footer_title  = ["Products","News_and_Events","About","Support","Contact_US"];
    var parse_header_data  = {"header_title":[]};   //save parse Data waiting to be sent to Handlebars compiler
    var parse_footer_data  = {"footer_title":[]};   //save parse Data waiting to be sent to Handlebars compiler

    initialize();  // get current Language

        $.getJSON('../web_info.json', function(JsonData) {
            json_arr = JsonData;                           //save Json Data to Global
            Set_Side_Navigation(json_arr);
                
                for (var title_name in header_title) {
                    parse_header(header_title[title_name]);
                }

                //For Each Loops Are Broken in IE8...
                //header_title.forEach(parse_header);
                Set_header();

                for (var title_name in footer_title) {
                    parse_footer(footer_title[title_name]);
                }

                //For Each Loops Are Broken in IE8...
                //footer_title.forEach(parse_footer);
                Set_footer();
        });

    // ------------ function section ------------

    function Set_Side_Navigation(json_data) {   

            var parse_Side_Navigation_data  = {"main_item":[]};   //save parse Data waiting to be sent to Handlebars compiler
            var main_item       = json_data.News_and_Events[(language_type == "English") ? "title" : "tw_title"];
            var main_item_link  = json_arr.News_and_Events.link;            
            var sub_item        = [];

            $.each(json_arr.News_and_Events.data, function (index, obj) {

                sub_item.push({"link" : obj.link, "title" : obj[(language_type == "English") ? "title" : "tw_title"]});

            });
            
            parse_Side_Navigation_data.main_item.push({"main_item": main_item, "main_item_link":main_item_link, "sub_item": sub_item });

        //get the  pre-compile Handlebars templates(js/templates/Side_Navigation_template.js)
            var html = Handlebars.templates['news_main_page_Navigation_template'](parse_Side_Navigation_data);   
            $('#load_side_navigation').append(html);
            //console.log(parse_Side_Navigation_data);

    }//End Set_Side_Navigation function

    function parse_header (element, index, array) {

        if (element === "Products") {
            var products_main_item        = (json_arr[element][(language_type == "English") ? "title" : "tw_title"]);
            var products_main_item_link   = json_arr[element].link;
            var products_sub_item         = [];
            
            $.each(json_arr[element].Sub_item, function (index, Sub_item_data) {

                    var products_sub_item_Series = [];

                $.each(Sub_item_data, function (Products_type, Products_type_obj) {

                    if (Products_type_obj.title === "Accessory" || Products_type_obj.title === "Field Perfect" ) {

                        $.each(Products_type_obj.data, function (Products_series, Products_series_obj) {
                            products_sub_item_Series.push({"link" : Products_series_obj.link, "title" : Products_series_obj[(language_type == "English") ? "title" : "tw_title"]});
                        });
                        
                        // if remove_series_link is true, handlebars will remove href into the <li> like this "<li>{{title}}</li>".
                        products_sub_item.push({"link" : Products_type_obj.link, "title" : Products_type_obj[(language_type == "English") ? "title" : "tw_title"], "product_Series":products_sub_item_Series, "remove_series_link" : 'true' });


                    } else if (Products_type_obj.title !== "Accessory") {

                        $.each(Products_type_obj.data, function (Products_series, Products_series_obj) {
                            products_sub_item_Series.push({"link" : Products_series_obj.link, "title" : Products_series_obj[(language_type == "English") ? "title" : "tw_title"]});
                        });

                        products_sub_item.push({"link" : Products_type_obj.link, "title" : Products_type_obj[(language_type == "English") ? "title" : "tw_title"], "product_Series":products_sub_item_Series});

                    } else {
                        console.log("pares header product data error.");
                    }
                        
                });

            });

            // If title name is products add "products":'true' attribute into Object then handlebars will filter format.
            parse_header_data.header_title.push({"products":'true',"main_item": products_main_item, "main_item_link":products_main_item_link, "sub_item": products_sub_item });
        
            //console.log(parse_header_data);

        } else if (element !== "Products") {
            var main_item       = (json_arr[element][(language_type == "English") ? "title" : "tw_title"]);
            var main_item_link  = json_arr[element].link;
            var sub_item        = [];

            $.each(json_arr[element].data, function (index, obj) {
                sub_item.push({"link" : obj.link, "title" : obj[(language_type == "English") ? "title" : "tw_title"]});
            });            

            parse_header_data.header_title.push({"main_item": main_item, "main_item_link":main_item_link, "sub_item": sub_item });

        } else {
            console.log("pares header data error.");
        }

    }//End parse_header function

    function Set_header() {

        // Before pre-compile need use this.
            // var source             = $("#header_template").html();
            // var template           = Handlebars.compile(source);
            // var html = template(parse_header_data);
            // $('load_header').append(html);
        //After pre-compile get the pre-compile Handlebars templates(js/templates/header_template.js)
            var html = Handlebars.templates['news_main_page_header_template'](parse_header_data);
            $('#load_header').append(html);

    }//End Set_header function

    function parse_footer (element, index, array) {

        if (element === "Products") {
            var products_main_item       = (json_arr[element][(language_type == "English") ? "title" : "tw_title"]);
            var products_main_item_link  = json_arr[element].link;
            var products_sub_item        = [];
            
            $.each(json_arr[element].Sub_item, function (index, Sub_item_data) {
                $.each(Sub_item_data, function (Products_series, Products_series_obj) {

                    products_sub_item.push({"link" : Products_series_obj.link, "title" : Products_series_obj[(language_type=="English") ? "title" : "tw_title"]});
                
                });
            });
            parse_footer_data.footer_title.push({"main_item": products_main_item, "main_item_link":products_main_item_link, "sub_item": products_sub_item });

        } else if (element !== "Products") {
            var main_item = (json_arr[element][(language_type == "English") ? "title" : "tw_title"]);
            var main_item_link  = json_arr[element].link;            
            var sub_item  = [];

            $.each(json_arr[element].data, function (index, obj) {

                sub_item.push({"link" : obj.link, "title" : obj[(language_type == "English") ? "title" : "tw_title"]});

            });
            parse_footer_data.footer_title.push({"main_item": main_item, "main_item_link":main_item_link, "sub_item": sub_item });
             // console.log(data);

        } else {
            console.log("pares header data error.");
        }

        //console.log(parse_footer_data);

    }//End parse_footer function

    function Set_footer() {
        //get the  pre-compile Handlebars templates(js/templates/footer_template.js)
        var html = Handlebars.templates['news_main_page_footer_template'](parse_footer_data); 
        $('#load_footer').append(html);

    }//End Set_footer function


    function remove_element() {
        $("#load_side_navigation").children().remove();
        $("#load_header").children().remove();
        $("#load_footer").children().remove();
    }//End remove_element function

    function initialize () {
        //if localStorage not exit, set language to English
        if (typeof localStorage.language_type === "undefined"){
            localStorage.language_type = "English";
        } else {
            // get current language and displayed in the right corner.
            language_type = localStorage.language_type;
            $("#lang_type").text((language_type == "English") ? "Chinese" : "英文");
        }
    }//End initialize function

    // ------------ event handling section ------------


    //Change Language and rerun appand function (1-Set_Side_Navigation 2-Set_header 3-Set_footer)
    $(document).on("click","#lang_type",function(e){
    //$("#lang_type").click(function(){
        language_type = (localStorage.language_type == "Chinese") ? "English" : "Chinese";
        localStorage.language_type = language_type;
        //$(this).text((language_type == "English") ? "Chinese" : "英文");     //Display current language at the right corner.
        remove_element();                                                    //Remove children element before change language and append element.
        Set_Side_Navigation(json_arr);
        parse_header_data  = {"header_title":[]};                            //Remove parse_header_data Previous data.
        parse_footer_data  = {"footer_title":[]};                            //Remove parse_footer_data Previous data.
        for (var title_name in header_title) {
            parse_header(header_title[title_name]);
        }

        //For Each Loops Are Broken in IE8...
        //header_title.forEach(parse_header);
        Set_header();

        $("#lang_type").text((language_type == "English") ? "Chinese" : "英文");  //Display current language at the right corner. 

        for (var title_name in footer_title) {
            parse_footer(footer_title[title_name]);
        }

        //For Each Loops Are Broken in IE8...
        //footer_title.forEach(parse_footer);
        Set_footer();
    });
    
    // mobile device touch event 
    $(document).on("touchstart",".nav",function(e){
        $(this).css("display","block");
    });


}();//End load_header_footer_Side_Navigation 