$(document).ready(function() {


    // MENU SCRIPT
    $('.dropMenuBtn').on('click', function(event) {
        event.stopPropagation();
        const $toggleDiv = $(this).next('.toggleDiv');
        $('.toggleDiv').not($toggleDiv).hide();
        $toggleDiv.toggle();
    });
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.toggleDiv, .dropMenuBtn').length) {
            $('.toggleDiv').hide();
        }
    });


});
