  window.onload = function () {
    let welcome = document.getElementById("welcomeText");
    setTimeout(() => {
        welcome.style.opacity = 0;
        setTimeout(() => {
            welcome.style.display = "none";
        }, 300); 
    }, 1000); 
};

  score = 0;
 cross = true;
 audio  =new Audio('music.mp3');
audiogo  =new Audio('gameover.mp3');

setTimeout(() => {
    audio.play();
    
}, 1000);
 document.onkeydown = function(e){
    console.log("key code is", e.keyCode)
    if(e.keyCode==38){
        dino = document.querySelector('.dino');
        dino.classList.add('animatedino');
        setTimeout(() => {
            dino.classList.remove('animatedino');
        }, 700);

    }
    if(e.keyCode==39){
        dino = document.querySelector('.dino');
        // dino.classList.add('animatedino');
        // setTimeout(() => {
        //     dino.classList.remove('animatedino');
        // }, 700);
        dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
dino.style.left = dinoX+112+"px";
    }
    if(e.keyCode==37){
        dino = document.querySelector('.dino');
        // dino.classList.add('animatedino');
        // setTimeout(() => {
        //     dino.classList.remove('animatedino');
        // }, 700);
        dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        // dinoY = parseInt(window.getComputedStyle(dino,null).getPropertyValue('right'));
dino.style.left = (dinoX-112)+"px";
    }

 }
 setInterval(() => {
    dino=document.querySelector('.dino');
    gameover = document.querySelector('.gameover');
   obstacle  = document.querySelector('.obstacle');
   dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
   dy = parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
   ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
   oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));
   offsetX = Math.abs(dx-ox);
   offsety = Math.abs(dy-oy);
   console.log(offsetX,offsety);
   if(offsetX<113&& offsety<55){
    gameover.style.visibility = "visible";
    obstacle.classList.remove('obstacleani');
    audiogo.play();
    // audio.pause();
    setTimeout(() => {
        audiogo.pause();
        audio.pause();
        
    }, 1000);

   }
   else if(offsetX<145 && cross){
    score+=1;
    updatescore(score);
    cross=false;
    setTimeout(() => {
        cross = true;
    }, 1000);
    setTimeout(() => {
        anidur = ox = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
    newdur = anidur-0.1;
    obstacle.style.animationDuration = newdur + 's';

        
    }, 500);
    
   
}


        
 }, 10);

 function updatescore(score){
    let scorecount = document.querySelector('#scorecount');

    scorecount.innerHTML = "your score:"+ score

 }