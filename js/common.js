$(function(){

 
    //section 높이    
    var ht = $(window).height();      
     $("section").height(ht);      
     $(window).on("resize",function(){
        var ht = $(window).height();   
        $("section").height(ht);
    });
  
  
  
  
  /* 스크롤 부드럽게 */
  $('nav a, .dott a').click(function(e){
  $.scrollTo(this.hash || 0, 300);
  e.preventDefault();
  });




   /* menu li on */
  $(window).on("scroll",function(){	
  
  //변수 ht에 현재 브라우저의 넓이값 저장
  var ht = $(window).height();
  
  //변수 scroll에 현재 문서가 스크롤된 거리 저장
  var scroll = $(window).scrollTop();
  
          
  for(var i=0; i<4;i++){
      if(scroll>=ht*i && scroll< ht*(i+1)){
          $(".gnb>li").removeClass();
          $(".gnb>li").eq(i).addClass("on");
      };
  }								
  });



  /*cursor*/
  var typingBool = false; 
var typingIdx=0; 

// 타이핑될 텍스트를 가져온다 
var typingTxt = $(".c1_txt3").text(); 

typingTxt=typingTxt.split(""); // 한글자씩 자른다. 

if(typingBool==false){ 
  // 타이핑이 진행되지 않았다면 
   typingBool=true;     
   var tyInt = setInterval(typing,100); // 반복동작 
} 
     
function typing(){ 
  if(typingIdx<typingTxt.length){ 
    // 타이핑될 텍스트 길이만큼 반복 
    $(".typing").append(typingTxt[typingIdx]);
    // 한글자씩 이어준다. 
    typingIdx++; 
   } else{ 
     //끝나면 반복종료 
    clearInterval(tyInt); 
   } 
}  



  /*content3*/
  $(".port1").on("click",function(){
    $(".c3_box1").fadeIn();
    $(".c3_box2").fadeOut();
    $(".c3_box3").fadeOut();
  });
  $(".box1_close").on("click",function(){
    $(".c3_box1").fadeOut();

  return false;
  });

  $(".port2").on("click",function(){
    $(".c3_box2").fadeIn();
    $(".c3_box1").fadeOut();
    $(".c3_box3").fadeOut();
  });
  $(".box2_close").on("click",function(){
    $(".c3_box2").fadeOut();

  return false;
  });


  $(".port3").on("click",function(){
    $(".c3_box3").fadeIn();
    $(".c3_box1").fadeOut();
    $(".c3_box2").fadeOut();
  });
  $(".box3_close").on("click",function(){
    $(".c3_box3").fadeOut();

  return false;
  });


}); //function end