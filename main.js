/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function() {
    "use strict";
    $("#spin h2").css('display', 'none');

    // toggle function for collpasible navbar
    // $(".navbar-toggle").on("click", function() {
    //     $(this).toggleClass("active");
    // });

    function spin(element) {
        $(this).css('display', 'inline-block');
        $(element).fadeIn(300).delay(3000).fadeOut(300, function() {
            $(this).css('display', 'none');
            let next = $(this).next('h2');
            console.log(next)
            spin(next.length > 0 ? next : $(this).parent().children().first());
        });
    };

    spin("#one");

    $(window).resize(function() {
        let viewportWidth = $(window).width();
        if (viewportWidth > 500) {
            $("#media a").removeClass("btn-block");
        } else {
            $("#media a").addClass("btn-block");
        }

    });

});