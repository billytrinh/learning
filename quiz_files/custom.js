// next prev
var divs = $('.show-section section');
var now = 0; // currently shown div
divs.hide().first().show(); // hide all divs except first

//show active step
function showActiveStep()
{
    if ($('#step1').is(':visible'))
    {
        $(".step-bar .fill").css('width', '0%');
        $(".sideimg").attr('src','quiz_files/side-1.png')
    }
    else if ($('#step2').is(':visible'))
    {
        $(".step-bar .fill").css('width', '20%');
        $(".sideimg").attr('src','quiz_files/side-1.png')

    }
    else if ($('#step3').is(':visible'))
    {
        $(".step-bar .fill").css('width', '40%');
        $(".sideimg").attr('src','quiz_files/side-1.png')

    }
    else if ($('#step4').is(':visible'))
    {
        $(".step-bar .fill").css('width', '60%');
        $(".sideimg").attr('src','quiz_files/side-1.png')

    }
    else if ($('#step5').is(':visible'))
    {
        $(".step-bar .fill").css('width', '80%');
        $(".sideimg").attr('src','quiz_files/images/side-1.png')

    }
    else
    {

    }
}


function next()
{
    divs.eq(now).hide();
    now = (now + 1 < divs.length) ? now + 1 : 0;
    divs.eq(now).show(); // show next


    showActiveStep();
}
$(".prev").on('click', function()
{

    $('.radio-field').addClass('bounce-left');
    $('.radio-field').removeClass('bounce-right');
    divs.eq(now).hide();
    now = (now > 0) ? now - 1 : divs.length - 1;
    divs.eq(now).show(); // show previous
    // console.log(now);

    showActiveStep();

})


// quiz validation
var checkedradio = false;

function radiovalidate(stepnumber)
{
    var checkradio = $("#step"+stepnumber+" input").map(function()
    {
    if($(this).is(':checked'))
    {
        return true;
    }
    else
    {
        return false;
    }
    }).get();

    checkedradio = checkradio.some(Boolean);
}




// form validation
$(document).ready(function()
{

    // check step1
    $("#step1btn").on('click', function()
    {
        radiovalidate(1);

        if(checkedradio == false)
        {
            
        (function (el) {
            setTimeout(function () {
                el.children().remove('.reveal');
            }, 3000);
            }(showErr()));
            
            radiovalidate(1);

        }
        
        else
        {
            $('#step1 .radio-field').removeClass('bounce-left');
            $('#step1 .radio-field').addClass('bounce-right');
            setTimeout(function()
            {
                next();
            }, 900)
            countresult(1);

        }


    })

    // check step2
    $("#step2btn").on('click', function()
    {
        radiovalidate(2);

        if(checkedradio == false)
        {
            
        (function (el) {
            setTimeout(function () {
                el.children().remove('.reveal');
            }, 3000);
            }(showErr()));
            
            radiovalidate(2);

        }

        else
        {
            $('#step2 .radio-field').removeClass('bounce-left');
            $('#step2 .radio-field').addClass('bounce-right');
            setTimeout(function()
            {
                next();
            }, 900)
            countresult(2);

        }
    })

    // check step3
    $("#step3btn").on('click', function()
    {
        radiovalidate(3);

        if(checkedradio == false)
        {
            
        (function (el) {
            setTimeout(function () {
                el.children().remove('.reveal');
            }, 3000);
            }(showErr()));
            
            radiovalidate(3);

        }

        else
        {
            $('#step3 .radio-field').removeClass('bounce-left');
            $('#step3 .radio-field').addClass('bounce-right');
            setTimeout(function()
            {
                next();
            }, 900)
            countresult(3);

        }
    })

    // check step4
    $("#step4btn").on('click', function()
    {
        radiovalidate(4);

        if(checkedradio == false)
        {
            
        (function (el) {
            setTimeout(function () {
                el.children().remove('.reveal');
            }, 3000);
            }());
            
            radiovalidate(4);

        }

        else
        {
            $('#step4 .radio-field').removeClass('bounce-left');
            $('#step4 .radio-field').addClass('bounce-right');
            setTimeout(function()
            {
                next();
            }, 900)
            countresult(4);

        }
    })

    // check last step
    $("#sub").on('click', function()
    { 
        radiovalidate(5);

        if(checkedradio == false)
        {
            
        (function (el) {
            setTimeout(function () {
                el.children().remove('.reveal');
            }, 3000);
            }(showErr()));
            
            radiovalidate(5);

        }

        else
        {
            countresult(5);
            showresult();
            $("#sub").html('done');

        }
    })
})
function showErr(){
    // $('#error').append('<div class="reveal alert alert-danger">Bạn phải chọn đáp án!</div>');
    document.getElementById("choose").play();
}