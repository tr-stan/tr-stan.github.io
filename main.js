/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {
    "use strict";
    $(".navbar-toggle").on("click", function () {
        $(this).toggleClass("active");
    });
});