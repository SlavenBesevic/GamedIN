$(document).ready(function(){
    $('#register-form').submit(function(){
        var form = $(this),
        formData = form.serialize(),
        formUrl = form.attr('action'),
        formMethod = form.attr('method'),
        responseMsg = $('#signup-response');

        responseMsg.hide()
                   .addClass('response-waiting')
                   .css("color", "white")
                   .text('Please Wait...')
                   .fadeIn(200);

        $.ajax({
            url: "https://httpbin.org",
            type: formMethod,
            data: formData,
            success: function (data) {
              console.log(data);
              responseMsg.fadeOut(200,function(){
                $(this).removeClass('response-waiting')
                .text("Registration Completed!")
                .css("color", "green")
                .fadeIn(200,function(){
                setTimeout(function(){
                    window.location.replace('http://www.gamedin.com/thanks');
                  },1000);
                });
              });

            },
            error: function (res) {
              console.log(res);
              responseMsg.fadeOut(200,function(){
                $(this).removeClass('response-waiting')
                .text(res.responseText)
                .css("color", "red")
                .fadeIn(200,function(){
                setTimeout(function(){
                  responseMsg.fadeOut(200,function(){
                    });
                  },7000);
                });
              });
            }
        });

        //prevent form from submitting
        return false;
    });

    $('#login-form').submit(function(){
        var form = $(this),
        formData = form.serialize(),
        formUrl = form.attr('action'),
        formMethod = form.attr('method'),
        responseMsg = $('#signup-response');

        responseMsg.hide()
                   .addClass('response-waiting')
                   .css("color", "white")
                   .text('Please Wait...')
                   .fadeIn(200);

        $.ajax({
            url: formUrl,
            type: formMethod,
            data: formData,
            success: function (data) {
              console.log(data);
              responseMsg.fadeOut(200,function(){
                $(this).removeClass('response-waiting')
                .text("Login Successful!")
                .css("color", "green")
                .fadeIn(200,function(){
                setTimeout(function(){
                    window.location.replace('http://www.gamedin.com/loggedin');
                  },1000);
                });
              });

            },
            error: function (res) {
              console.log(res);
              responseMsg.fadeOut(200,function(){
                $(this).removeClass('response-waiting')
                .text(res.responseText)
                .css("color", "red")
                .fadeIn(200,function(){
                setTimeout(function(){
                  responseMsg.fadeOut(200,function(){
                    });
                  },7000);
                });
              });
            }
        });

        //prevent form from submitting
        return false;
    });
});
