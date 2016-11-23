/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {
    "use strict";
    $(".navbar-toggle").on("click", function () {
        $(this).toggleClass("active");
    });

    $(window).resize(function () {
    var viewportWidth = $(window).width();
    if (viewportWidth > 500) {
            $("#media a").removeClass("btn-block");
    } else {
      $("#media a").addClass("btn-block");
    }

});
});
