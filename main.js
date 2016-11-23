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
            $("a").removeClass("btn-block");
    } else {
      $("a").addClass("btn-block");
    }

});
});
