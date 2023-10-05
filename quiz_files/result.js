
        
//correct answers
var correct_answers = [];
createQuestionAndAnswers();
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

function createQuestionAndAnswers(){
    var questions = [];
    for(let i=0;i<5;i++){
        var total = randomIntFromInterval(5,10);
        correct_answers.push(total);
        var n1 = randomIntFromInterval(0,total);
        var n2 = total-n1;
        var answers=[total];
        while(answers.length < 4){
            let r = randomIntFromInterval(total-5>0?total-5:0,total+5<10?total+5:10);
            if(!answers.includes(r))
                answers.push(r);
        }
        answers = answers.sort(function() {  
            return Math.random() - 0.5
        });
        questions.push({
            question: n1+" + "+n2+" = ",
            answers: answers
        });
    }
    questions.forEach((e,i)=>{
            const html = `
            <section class="steps" style="${i>0?"display:none":""}">

                    <!-- header -->
                    <header>
                        ${e.question}
                        <div class="h-border"></div>
                    </header>

                    <!-- form area -->
                    <div class="quiz-inner">
                        <div class="row flex-1">
                            <div class="tab-none col-md-5">

                                <!-- side area -->
                                <div class="side">
                                    <img class="sideimg" src="./quiz_files/side-1.png" alt="side-image">
                                    <img class="question" src="./quiz_files/question-sign.png" alt="question">
                                </div>
                            </div>
                            <div class="tab-100 col-md-7">
                                <!-- form 1 -->
                                <form id="step${i+1}" method="post" novalidate="">
                                    <div class="form-inner">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="radio-field bounce-left">
                                                    <input class="radio1 checkmark" type="radio" name="op${i+1}" value="${e.answers[0]}">
                                                    <img src="./quiz_files/horse.png" alt="horse">
                                                    <label>${e.answers[0]}</label>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="delay-100 radio-field bounce-left">
                                                    <input class="radio2 checkmark" type="radio" name="op${i+1}" value="${e.answers[1]}">
                                                    <img src="./quiz_files/cat.png" alt="cat">
                                                    <label>${e.answers[1]}</label>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="delay-200 radio-field bounce-left">
                                                    <input class="radio3 checkmark" type="radio" name="op${i+1}" value="${e.answers[2]}">
                                                    <img src="./quiz_files/tiger.png" alt="tiger">
                                                    <label>${e.answers[2]}</label>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="delay-300 radio-field bounce-left">
                                                    <input class="radio4 checkmark" type="radio" name="op${i+1}" value="${e.answers[3]}">
                                                    <img src="./quiz_files/dog.png" alt="dog">
                                                    <label>${e.answers[3]}</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="next-prev">
                                        <button class="prev" type="button" style="display:${i>0?"block":"none"}">
                                        <i class="bi bi-arrow-left"></i>Câu trước
                                        </button>
                                        <button style="display:${i<4?"block":"none"}" id="step${i+1}btn" class="next" type="button">
                                            Tiếp tục<i class="bi bi-arrow-right"></i>
                                        </button>
                                        <button style="display:${i>3?"block":"none"}" id="sub${i>3?"":i}" class="apply" type="button">
                                            Gửi bài?
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <!-- footer -->
                    <footer>
                        <div class="step-bar">
                            <div class="fill" style="width: 0%;"></div>
                        </div>
                        <div class="step-number">
                            Question <span>${i+1}</span> / ${correct_answers.length}
                        </div>
                    </footer>
                </section>`;
            $("#questions").append(html);
        })
}
        



// user answers
let correct = 0;

var steps = $('section').length;



// console.log(steps);
function countresult(resultnumber)
{
    $('#step'+resultnumber+' .radio-field input').each(function()
    {
        for(var i = 0; i<=correct_answers.length; i++)
        {
            if($(this).is(':checked'))
        {
            if($(this).val() == correct_answers[i])
            {
                
    
                correct++;

                break;
    
            }
        }
        }
    
    })

    var correctprcnt = correct / steps * 10;

    $('.u_prcnt').html(correctprcnt );
    $('.prcnt_bar .fill').css('width', correctprcnt + '%');
    if(correctprcnt < 5)
    {
        $('.prcnt_bar_lvl').html('low');
        $('.u_prcnt, .prcnt_bar_lvl, .result_msg').css('color', 'rgb(229, 0, 26)');
        $('.prcnt_bar .fill').css('background-color', 'rgb(229, 0, 26)');
        $('.result_msg').html('<img src="quiz_files/images/cross.png" alt="cross"> Trượt rồi!')
    
    }
    else if(correctprcnt < 8)
    {
        $('.prcnt_bar_lvl').html('Medium');
        $('.u_prcnt, .prcnt_bar_lvl, .result_msg').css('color', 'rgb(255, 89, 0)');
        $('.prcnt_bar .fill').css('background-color', 'rgb(255, 89, 0)');
        $('.result_msg').html('<img src="quiz_files/images/warning.png" alt="warning"> Cố gắng hơn nữa nhé!')
        

    }
    else if(correctprcnt >= 8)
    {
        $('.prcnt_bar_lvl').html('High');
        $('.u_prcnt, .prcnt_bar_lvl, .result_msg').css('color', 'rgb(60, 196, 52)');
        $('.prcnt_bar .fill').css('background-color', 'rgb(60, 196, 52)');
        $('.result_msg').html('<img src="quiz_files/images/check.png" alt="check"> Tuyệt vời! Bạn thật là thông minh')
    }
}
function showresult()
{
    $('.loadingresult').css('display', 'grid');

    setTimeout(function()
    {
        $('.result_page').addClass('result_page_show');
    
        if(correct < 3){
            document.getElementById("bad").play();
        }else if(correct <4){
            document.getElementById("great").play();
        }else{
            document.getElementById("good").play();
        }

    },1000)
};