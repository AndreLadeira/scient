// function doLogin() {
//     var x = document.getElementById('login-connecting-msg');
//     if (x.style.display === 'none') {
//         x.style.display = 'block';
//     } else {
//         x.style.display = 'none';
//     }
// }
$(document).ready(function() {

    $('.header-dropdown').on('show.bs.dropdown', function(){
        $('.header-dropdown > button.dropdown-toggle').addClass('btn-active');
    });
    
    $('.header-dropdown').on('hidden.bs.dropdown', function(){
        $('.header-dropdown > button.dropdown-toggle').removeClass('btn-active');
    });
	
    
    // CHOSEN
	// =================================================================
	// Require Chosen
	// http://harvesthq.github.io/chosen/
	// =================================================================
	$('#project-select').chosen();
	// $('#chosen-project-select').chosen({width:'100%'});

    // var theme = Cookies.get('theme');
    
    // if (theme === undefined )
    // {
    //     Cookies.set('theme', 'dark', {expires: 100 * 365} );
    //     $('link#page-style').attr('href', 'css/main-dark.css');
    // }
    // else
    // {
    //     if (theme == 'dark') 
    //         $('link#page-style').attr('href', 'css/main-dark.css');
    //     else
    //         $('link#page-style').attr('href', 'css/main-bright.css');
    // }

    


});

$("#btn-toogle-style").click(function ()
    {
        var theme = Cookies.get('theme'); 
        
        if ( theme == 'dark')
        {
            $('link#page-style').attr('href', 'css/main-bright.css');
            Cookies.set('theme', 'bright', {expires: 100 * 365} );
        }
        else
        {
            $('link#page-style').attr('href', 'css/main-dark.css');
            Cookies.set('theme', 'dark', {expires: 100 * 365} );
        }
    }
);