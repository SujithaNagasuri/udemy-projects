let btn = document.getElementById('startreset');
var playing = false;
let score;
let remaintime = 60;
let correctanswer;
btn.onclick = function(){

    if(playing == true)
    {
        location.reload(); //reloading the page if we are playing
        
    }
    else{
        remaintime = 60;
        document.getElementById('gameover').style.display = "none";
        playing= true; // chnage mode to playing once you click on the reset game the page is reloaded
        score = 0;
        document.getElementById('scorevalue').innerHTML = score;
        document.getElementById('timeremain').style.display = "block";
        let action = setInterval(() => {
            remaintime -= 1;
            document.getElementById('timeremainval').innerHTML = remaintime;
            if(remaintime == 0)
            {
                document.getElementById('gameover').style.display = "block";
                clearInterval(action);
                document.getElementById('timeremain').style.display = "none";
                document.getElementById('correct').style.display = "none";
                document.getElementById('wrong').style.display = "none";
                playing = false;
                btn.innerHTML = "Start Game";
                document.getElementById('scoredis').innerHTML = score;
            }
        }, 1000);
        btn.innerHTML = "Reset Game";

        //displaying question
        generateQA();
       
    }
    

}


for(i =1;i<5;i++)
{
    document.getElementById(`box${i}`).onclick = function(){
        if(playing == true)
        {
            if(this.innerHTML == correctanswer)
            {
                score++;
                document.getElementById('scorevalue').innerHTML = score;
                document.getElementById('wrong').style.display = "none";
                document.getElementById('correct').style.display = "block";
                setTimeout(function(){
                    document.getElementById('correct').style.display = "none";
                },1000);
    
                // if user clicks right answer score in increased and a new question is generated
                let temp = Math.round(2*Math.random());
                if(temp == 1)
                {
                    generateQA();
                }
                else{
                    generateQAplus();
                }
            }
            else{
                score--;
                document.getElementById('scorevalue').innerHTML = score;
                document.getElementById('wrong').style.display = "block";
                document.getElementById('right').style.display = "none";
                setTimeout(function(){
                    document.getElementById('wrong').style.display = "none";
                },1000);
            }
        }
    }
}










function generateQA()
{
    let x = 1+Math.round(9*Math.random());
    let y = 1+Math.round(9*Math.random());
    correctanswer = x * y;
    document.getElementById('question').innerHTML = `${x} x ${y}`;

    var correctposition  = 1+Math.round(3*Math.random());
    document.getElementById(`box${correctposition}`).innerHTML = correctanswer;

    //fill other boxes with wrong answers;
    var answers = [correctanswer,];
    for(i=1;i<5;i++)
    {
        if(i != correctposition)
        {
            //generate a random number until wronganswer and correctanswers are not equal
            var wronganswer;
            do{
                
                wronganswer = 1+Math.round(9*Math.random())*1+Math.round(9*Math.random());
            }
            while(answers.indexOf(wronganswer) > -1);
            document.getElementById(`box${i}`).innerHTML = wronganswer;
            answers.push(wronganswer);
        }

    }
}


function generateQAplus()
{
    let x = 1+Math.round(9*Math.random());
    let y = 1+Math.round(9*Math.random());
    correctanswer = x + y;
    document.getElementById('question').innerHTML = `${x} + ${y}`;

    var correctposition  = 1+Math.round(3*Math.random());
    document.getElementById(`box${correctposition}`).innerHTML = correctanswer;

    //fill other boxes with wrong answers;
    var answers = [correctanswer,];
    for(i=1;i<5;i++)
    {
        if(i != correctposition)
        {
            //generate a random number until wronganswer and correctanswers are not equal
            var wronganswer;
            do{
                
                wronganswer = 1+Math.round(9*Math.random())*1+Math.round(9*Math.random());
            }
            while(answers.indexOf(wronganswer) > -1);
            document.getElementById(`box${i}`).innerHTML = wronganswer;
            answers.push(wronganswer);
        }

    }
}
