// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

//Dispatch board starts

$('#btn-add-driver').on('click', function () {
    
    $('.driver-container').prepend($('.driver-block')[0].outerHTML);
    $('.content-body .driver-block').removeClass('hide-block');
});

function toggleDriverCheckbox() {
    $(".chk-select-driver").change(function () {
        $(".chk-select-driver").not(this).prop('checked', false);
    });
}
//Dispatch board finishes