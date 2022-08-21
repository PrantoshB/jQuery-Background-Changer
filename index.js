$(document).ready(function () {
    $('#colorpicker').on("input change", function () {
        //change color of the background
        $("body").css("background-color", $(this).val())
        $('h1').css('color', $('#colorpicker').val() < "#242424" ? 'white' : 'black')
    })



})