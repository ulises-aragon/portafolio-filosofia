$(document).ready(function() {
    $('.menu-toggle').click(function() {
        $('.nav').toggleClass('showing-nav');
        $('.nav ul').toggleClass('showing-nav');
    });
});