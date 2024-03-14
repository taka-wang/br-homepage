var CONTACT_MODULE = (function () {

    var _trim = function (textVal) {
        return textVal.replace(/^\s+|\s+$/g, "");
    };

    UTILITIES_MODULE.footerPos();

    $("#contactForm").hide();
    $("#qBtn").click(function () {
        $("#contactForm").slideToggle(UTILITIES_MODULE.footerPos);
    });

    $(".content-form--field").focus(function () {
        if ($(this).hasClass("content-form--error")) {
            $(this).val("");
        }
    });

    $(".content-form--field").blur(function () {
        if ($(this).hasClass("content-form--error") &&
            _trim($(this).val()) === "") {
            $(this).val("This field should be filled in.");
        } else {
            $(this).removeClass("content-form--error");
        }
    });

    $("#qSubmitBtn").click(function () {
        var title = "Questions, Comments and Feedback",
            content = "",
            $formField = $(this)
                            .closest("form")
                                .find(".content-form--field"),
            $formTitle = "",
            submit = true;

        $formField
            .each(function () {
                $formTitle = $(this).prev(".content-form--title");

                if ($formTitle.hasClass("content-form--requiredField") &&
                    _trim($(this).val()) === "" ||
                    $(this).hasClass("content-form--error")) {

                    // alert($formTitle.text() + " should be filled in.")
                    $(this)
                        .addClass("content-form--error")
                        .val("")
                        .val("This field should be filled in.");

                    submit = false;
                }
            });

        if (submit) {
            $formField
                .each(function () {

                    if (_trim($(this).val()) !== "") {
                        content = content +
                              $(this).prev(".content-form--title").text() +
                              " : " +
                              $(this).val().replace(/\r?\n/g, "%0d%0a") +
                              "%0d%0a";
                    }

                    // console.log($(this).prev(".content-form--title").text() + " : " + $(this).val())
                });

            // console.log(content)

            location.href = "mailto:Bandrich<sales@bandrich.com>?subject=" + title + "&body=" + content;

            $formField
                .each(function () {
                    $(this).val("");
                });
            $("#contactForm").slideUp();
        }

    });

    return {

    };

}());
