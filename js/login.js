// function doLogin() {
//     var x = document.getElementById('login-connecting-msg');
//     if (x.style.display === 'none') {
//         x.style.display = 'block';
//     } else {
//         x.style.display = 'none';
//     }
// }
$(document).ready(function() {


	// CHOSEN
	// =================================================================
	// Require Chosen
	// http://harvesthq.github.io/chosen/
	// =================================================================
	$('#project-select').chosen();
	// $('#chosen-project-select').chosen({width:'100%'});
});

function showSelectProjectForm()
{ 
    $('.btn.btn-signin').toggleClass( "btn-inactive" );
    $("p#status-msg").removeClass('has-error');
    
    if( $("#login-status-bar").css("display") == "none" ) 
        $("#login-status-bar").animate({height: 'toggle'});

    $("#status-msg").html("<i class='fa fa-spinner fa-pulse fa-lg fa-fw'></i><span class='sr-only'>Loading...</span>Connecting to database, please wait...");
    //$("#status-msg").html("<span style='color:red'>Connecting...</span>");
    
    if ( Math.random() < 0.9 )
    {
        setTimeout(
            function(){
                //$("#login-connecting-msg").animate({height: 'toggle'});
                $("#login-form").css({display: 'none'});
                $('.btn.btn-signin').toggleClass( "btn-inactive" );

                // $(".cls-content .pad-ver").css({display: 'none'});
                $("#select-project-form").fadeIn(1000);
            }, 
        1000);
    }
    else
    {
        setTimeout(
            function(){
                $("p#status-msg").addClass('has-error');
                $("#status-msg").html("<i class='fa fa-warning fa-fw'></i><span class='sr-only'>Warning:</span> Wrong username/password. Please try again.");
                $('.btn.btn-signin').toggleClass( "btn-inactive" );
            }, 
        1000);
    }
    
    return false;
} 

$("#btnsignin").click(
    
    showSelectProjectForm
);

$('.selectpicker').on('change', function () 
{
    $('#select-project-form form .row .col:nth-child(1)').removeClass('col-xs-12').addClass('col-xs-9');
    $('#select-project-form form .row .col:nth-child(2)').css({display: 'initial'});
        $("#select-project-form .btn-signin").animate(
            {
                opacity: 1.0
            },
            {
                duration: 600
            }
            );
    $('.selectpicker').css({color: red});
});

// $("#btn-continue-last-proj").click(
//     function(){
//         $('#select-project-form form .row .col:nth-child(1)').removeClass('col-xs-12').addClass('col-xs-10');
//         $('#select-project-form form .row .col:nth-child(2)').animate({display: 'toggle'});
//         //$('#select-project-form form .row .col:nth-child(1)').css({display: 'none'});
//     }
// );