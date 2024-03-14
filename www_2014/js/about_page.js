var ABOUT_MODULE = (function () {

    // alert($(document).height())
    // var docH = $(document).height(),
    //     headerH = $("#load_header").height(),
    //     footerH = $("#postscript_footer_container").height();

    // $("#main_content_container").height(docH);

    UTILITIES_MODULE.setDynamicH($("#main_content_container"));
    UTILITIES_MODULE.footerPos();

    $(".job-type").each(function () {
        var $this = $(this),
            $condition = $this.find(".job-condition"),
            $requirement = $this.find(".job-requirement"),
            conditionH = $condition.height(),
            requirementH = $requirement.height();

        if (conditionH < requirementH) {
            $condition.height(requirementH);
        } else {
            $requirement.height(conditionH);
        }
    });

    return {

    };
}());
