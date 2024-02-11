var playing = false;
var trailsleft;
var score =0;
var fruits = ["apple","banana","berry","cherry","grapes","guava","lichi","mango","melon","orange","papaya","pineapple","starfruit"]
$('#startreset').click(function(){
    if(playing == true)
    {
        location.reload();
    }
    else{
        playing = true;
        $('#trailsleft').show();
        trailsleft = 3;
        addhearts();

        $('#startreset').html("reset game");
        $('#gameover').hide();
        score =0;
        $('#score').html(score);
        startaction();
    }


    $('#fruit').mouseover(function(){
        
        score++;
        $('#scorevalue').html(score);
        $('#audio')[0].play();
        clearInterval(action);
        
        $("#fruit").hide("explode");
        

        setTimeout(startaction,500)
    })


    // functions
    function addhearts(){
        
        $('#trailsleft').empty();
        for(i=0;i<trailsleft;i++)
        {
            $('#trailsleft').append('<img src="images/heart.png" class="heart">')
        }
    }


    // action
    function startaction()
    {
        $('#fruit').show();
        choosefruit();
        step = Math.round(Math.random()*(20-15)+15)
        action = setInterval(function(){
            
            $('#fruit').css({'top': step+$('#fruit').position().top})

            if($('#fruit').position().top > $('#fruitcontainer').height())
            {
               if(trailsleft > 1)
               {
                $('#fruit').show();
                choosefruit();
                $("#fruit").css({'left' :Math.round(550*Math.random()), 'top' : -50});
                step = Math.round(Math.random()*(20-15)+15)
                trailsleft--;
                addhearts();
               }
               else{
                playing = false;
                $('#startreset').html("start game")
                $('#gameover').show();
                $('#scoredis').html(score);
                stopaction();
               }
            }

        },100)
    }


    function choosefruit(){
        $('#fruit').show();
        $('#fruit').attr('src','images/'+fruits[Math.round(12*Math.random())]+'.png');
        $("#fruit").css({'left' :Math.round(550*Math.random()), 'top' : -50});
    }

    function stopaction(){
        clearInterval(action);
        $('#fruit').hide();
    }
})