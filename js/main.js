/**
 * Global variables and functions
 */


/**
 * Website start here
 */
$(document).ready(function($){
	$('#submit').click(function() {
        
        var email = $("#email").val();
        var text = $("#question").val();
        var data = {            
            email: $("#email").val(),
            message: $("#question").val()
        };
        
        if(email != '' && text != ''){
        	$('#email').removeClass('error');
        	$('#question').removeClass('error');
        	$.ajax({
	            type: "POST",
	            url: "email.php",
	            data: data,
	            success: function(){
                    $('#questionPopup').modal('hide');
                    $('#thankYouPopup').modal('show');
                    
	            }
	        });
        }
        else {
            if(!isValidEmail(email))
            {   
                $('#email').val('');             
                $('#email').addClass('error').attr('placeholder','メールアドレスを記入してください');
            }        	
        	if(email == ''){
        		$('#email').addClass('error').attr('placeholder','質問内容を記入してください。');
        	}
        	if(text == '') {
        		$('#question').addClass('error').attr('placeholder','質問内容を記入してください。');
        	}
        }
        return false;
    });
    $('.context ul li').setAllToMaxHeight();
    $('#clickTop').click(function(){
        ga('send', 'event', 'Button', 'click', 'Ask Question (Top)');
    })
    $('#clickBottom').click(function(){
        ga('send', 'event', 'Button', 'click', 'Ask Question (Bottom)');
    })
    $('#clickSend').click(function(){
        ga('send', 'event', 'Button', 'click', 'Send Question');
    })
});
function isValidEmail(emailText) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailText);
};
$.fn.setAllToMaxHeight = function () {
    return this.height(Math.max.apply(this, $.map(this, function (e) { return $(e).height() })));
}
