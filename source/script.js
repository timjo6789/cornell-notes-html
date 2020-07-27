$(document).ready(function () {
    $('li').click(function (event) {
        event.stopPropagation();
        $(event.target).children('ul').slideToggle();
    });
    $('li').each(function () {
        if ($(this).children().length == 0) {
            // $(this).parent('ul').addClass('no_child');
            $(this).addClass('no_child');
        } else {
            $(this).addClass('child');
        }
    });
});
