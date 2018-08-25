var personId;
var personImageUrl;

$(document).ready(function() {

    personId = $("#Person_Id").val();

    $('.date').datepicker({
        dateFormat: "mm/dd/yy",
        showOtherMonths: true,
        selectOtherMonths: true,
        autoclose: true,
        changeMonth: true,
        changeYear: true,
        yearRange: "-100:+0"
    });

    $("#btnPrintPreview").on('click', function() {
        $(".printable").print();
        return false;
    });

    if ($("#passportImage").val() != null) {
        $('#btnSubmit').removeClass("disabled");
    }

    $('#btnBiodata').click(function() {

        var sexId = $("#sex_id").val();
        var dob = $("#dob").val();
        var stateId = $("#state_id").val();
        var homeTown = $("#hometown").val();
        var mobilePhone = $("#mobile_phone").val();
        var email = $("#email").val();
        var religionId = $("#religion_id").val();
        var homeAddress = $("#home_address").val();
        var abilityId = $("#ability_id").val();
        var extraCurricullarActivities = $("#extra_curricullar_activities").val();
        var surname = $("#surname").val();
        var firstname = $("#firstname").val();
        var othername = $("#othername").val();

        if (sexId && dob && stateId && homeTown && mobilePhone && email && religionId && homeAddress && abilityId && extraCurricullarActivities && surname && firstname && othername) {

            $("#loadingSteps").show();

            //get entered values
            //var bioDataArray = populateJsonData();

            //post to your method
            // $.ajax({
            //     type: 'POST',
            //     url: 'your post method url',
            //     dataType: 'json',
            //     data: {
            //         bioData: JSON.stringify(bioDataArray)
            //     },
            //     success: function(result) {
            //         if (result.IsError === false) {
            //             toastMessage("BioData was saved.", "Success!");

            //             $('#lnkNOK').removeClass("disabled");
            //             $('#lnkBiodata').removeClass("active");
            //             $('#lnkNOK').addClass("active");
            //             $('#biodata').hide();
            //             $('#nextOfKin').show();
            //             $('#passport').hide();
            //         } else {
            //             alert(result.Message);
            //         }

            //         $("#loadingSteps").hide();
            //     },
            //     error: function(ex) {
            //         console.log(ex);
            //         alert('Failed to save Biodata.' + ex);
            //         $("#loadingSteps").hide();
            //     }
            // });
            toastMessage("BioData was saved.", "Success!");
            $('#lnkNOK').removeClass("disabled");
            $('#lnkBiodata').removeClass("active");
            $('#lnkNOK').addClass("active");
            $('#biodata').hide();
            $('#nextOfKin').show();
            $('#passport').hide();

            $("#loadingSteps").hide();

        } else {
            alert("Please fill all the fields!");
        }

    });

    $('#btnNOK').click(function() {

        var nokName = $("#nok_name").val();
        var nokAddress = $("#nok_contact_address").val();
        var nokRelationship = $("#nok_relationship_id").val();
        var nokMobileNumber = $("#nok_mobilephone").val();
        if (nokName && nokAddress && nokRelationship && nokMobileNumber) {
            $("#loadingSteps").show();

            //post to your method
            // $.ajax({
            //     type: 'POST',
            //     url: 'your post method url',
            //     dataType: 'json',
            //     data: {
            //         Name: nokName,
            //         Address: nokAddress,
            //         MobilePhone: nokMobileNumber,
            //         RelationShipId: nokRelationship
            //     },
            //     success: function(result) {
            //         if (result.IsError === false) {

            //             toastMessage("Next of kin details were saved.", "Success!");

            //             $('#lnkNOK').removeClass("active");
            //             $('#biodata').hide();
            //             $('#nextOfKin').hide();
            //             $('#lnkPassport').removeClass("disabled");
            //             $('#lnkPassport').addClass("active");
            //             $('#passport').show();

            //         } else {
            //             alert(result.Message);
            //         }
            //         $("#loadingSteps").hide();
            //     },
            //     error: function(ex) {
            //         console.log(ex);
            //         alert('Failed to save Next of Kin details.' + ex);
            //         $("#loadingSteps").hide();
            //     }
            // });
            toastMessage("Next of kin details were saved.", "Success!");

            $('#lnkNOK').removeClass("active");
            $('#biodata').hide();
            $('#nextOfKin').hide();
            $('#lnkPassport').removeClass("disabled");
            $('#lnkPassport').addClass("active");
            $('#passport').show();
            $("#loadingSteps").hide();
        } else {

            alert("Please fill all the fields!");
        }
    });

    $('#lnkBiodata').click(function() {
        if (!($('#lnkBiodata').hasClass("disabled"))) {
            $('#biodata').show();
            $('#nextOfKin').hide();
            $('#passport').hide();

            if (!($('#lnkBiodata').hasClass("active"))) {
                $('#lnkBiodata').addClass("active");
            }
            $('#lnkNOK').removeClass("active");
            $('#lnkPassport').removeClass("active");
        }
    });


    $('#lnkNOK').click(function() {

        if (!($('#lnkNOK').hasClass("disabled"))) {
            $('#biodata').hide();
            $('#nextOfKin').show();
            $('#passport').hide();

            $('#lnkBiodata').removeClass("active");
            if (!($('#lnkNOK').hasClass("active"))) {
                $('#lnkNOK').addClass("active");
            }
            $('#lnkPassport').removeClass("active");
        }
    });


    $('#lnkPassport').click(function() {

        if (!$('#lnkPassport').hasClass("disabled")) {
            $('#biodata').hide();
            $('#nextOfKin').hide();
            $('#passport').show();

            $('#lnkBiodata').removeClass("active");
            if (!($('#lnkPassport').hasClass("active"))) {
                $('#lnkPassport').addClass("active");
            }
            $('#lnkNOK').removeClass("active");
        }
    });


    $('#biodata').toggle(); //toggle biodata on page load
    $('#lnkBiodata').removeClass("disabled");
    $('#lnkBiodata').addClass("active");

});

function showNotification(colorName, text, placementFrom, placementAlign, animateEnter, animateExit) {
    if (colorName === null || colorName === '') {
        colorName = 'bg-purple';
    }
    if (text === null || text === '') {
        text = "";
    }
    if (animateEnter === null || animateEnter === '') {
        animateEnter = 'animated fadeInRight';
    }
    if (animateExit === null || animateExit === '') {
        animateExit = 'animated fadeOutRight';
    }

    $.notify({
        message: text
    }, {
        type: colorName,
        allow_dismiss: true,
        newest_on_top: true,
        timer: 1000,
        placement: {
            from: placementFrom,
            align: placementAlign
        },
        animate: {
            enter: animateEnter,
            exit: animateExit
        },
        template: '<div data-notify="container" class="bootstrap-notify-container alert alert-dismissible {0} ' + (true ? "p-r-35" : "") + '" role="alert">' +
            '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
            '<span data-notify="icon"></span> ' +
            '<span data-notify="title">{1}</span> ' +
            '<span data-notify="message">{2}</span>' +
            '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
            '</div>' +
            '<a href="{3}" target="{4}" data-notify="url"></a>' +
            '</div>'
    });
}

function assignFormValues() {

    $("#surname_prev").text($("#surname").val());
    $("#firstname_prev").text($("#firstname").val());
    $("#othername_prev").text($("#othername").val());
    $("#sex_prev").text($("#sex_id option:selected").text());
    $("#dob_prev").text($("#dob").val());
    $("#state_prev").text($("#state_id option:selected").text());
    $("#hometown_prev").text($("#hometown").val());
    $("#mobile_phone_prev").text($("#mobile_phone").val());
    $("#email").text($("#email").val());
    $("#religion_prev").text($("#religion_id option:selected").text());
    $("#home_ddress_prev").text($("#home_address").val());
    $("#ability_prev").text($("#ability_id option:selected").text());
    $("#extra_curricullar_activities_prev").text($("#extra_curricullar_activities").val());
    $("#nok_name_prev").text($("#nok_name").val());
    $("#nok_contact_address_prev").text($("#nok_contact_address").val());
    $("#nok_mobile_phone_prev").text($("#nok_mobile_phone").val());
    $("#nok_relationship_prev").text($("#nok_relationship_id option:selected").text());
}

function toastMessage(msg, title) {
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": true,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut",
        "tapToDismiss": false
    }

    var $toast = toastr["success"](msg, title);
}