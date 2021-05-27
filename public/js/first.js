for(var i=1;i<17;i++){
    $('section').append('<div></div>');

}
$('section div').append("<img class='hole' src='../image/hole.png'  >");
$('section div').append('<img class="mouse" src="../image/mouse.png">');

// Set the initial state and the moles did not appear

 $('.mouse').hide();

//Kangaroo appears
                   // [1,4] [0, 3)
// Random number of kangaroos [1 16]  (0, 15]  Rounded up
var num
//
//Kangaroo position [0 15] Index index
 var index
 var object;
setInterval(function(){
    num=Math.ceil(Math.random()*2);
    for(var i=1; i<=num ;i++){
        //Random kangaroo position [0 15] Index
       index=Math.floor(Math.random()*16);
      object=$('section div:nth-of-type('+(index+1)+') .mouse')

      object.slideDown();
      object.delay(2000).slideUp();
    }

},1000);


//Mouse hammer graphics
$('body').mousedown(function(){
    $('body').css({
        cursor:'url("./image/cursor-down.png"), auto'
    });
}).mouseup(function(){
   $('body').css({
    cursor:'url("./image/cursor.png") ,auto'
   });
});

// score Record the score of the gopher
var score=0;
$('.mouse').click(function(){

    $(this).hide();
    score+=10;
    $(" <span id='count'>The score is"+score+"</span>").replaceAll('span');
    $('#dazhong').append('<audio src="../audio/dazhong.wav" autoplay="autoplay" ></audio>');
    setTimeout(function(){
        $('#dazhong').empty();
    },1000);
});


