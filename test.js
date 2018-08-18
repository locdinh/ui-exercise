$(document).ready(function () {

    $('#sideBarLink').click(function () {
        $("#sidebar").slideToggle('slow');
        $("#mainSection").toggleClass('full-width');
    });

});