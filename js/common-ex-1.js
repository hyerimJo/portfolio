$(function () {
  /*header_pc menu*/
  var nav = $(".header_pc>.header_menu");
  var navoffset = $(".header_pc>.header_menu").offset();
  /* offset을 이용하여 .menu(메뉴영역)의 위치값을 알아내어 navoffset에 넣어둔다 */
  $(window).scroll(function () {
    if ($(this).scrollTop() >= navoffset.top) {
      /* 화면 스크롤 값이 메뉴영역의 top보다 값이 커지면 */
      nav
        .css("position", "fixed")
        .css("top", 0)
        .css(
          "background",
          "rgba(90,146,207,0.8)"
        ); /* 화면 위쪽에 고정시킨다. */
    } else {
      nav
        .css("position", "absolute")
        .css("top", 50)
        .css(
          "background",
          "transparent"
        ); /* 처음 메뉴영역의 top 값으로 돌리기 */
    }
  });

  /*header_mt*/
  $(".menubar").on("click", function () {
    $(".header_mt>.header_menu").animate({ marginLeft: "50%" }, 500);
    $(".black_back").css("display", "block");
  });
  $(".menu_close").on("click", function () {
    $(".header_mt>.header_menu").animate({ marginLeft: "-50%" }, 500);
    $(".black_back").css("display", "none");
  });

  /* 스크롤 부드럽게 */
  $("nav a, .dott a").click(function (e) {
    $.scrollTo(this.hash || 0, 300);
    e.preventDefault();
  });

  /* menu li on */
  $(window).on("scroll", function () {
    //변수 ht에 현재 브라우저의 넓이값 저장
    var ht = $(window).height();

    //변수 scroll에 현재 문서가 스크롤된 거리 저장
    var scroll = $(window).scrollTop();

    for (var i = 0; i < 4; i++) {
      if (scroll >= ht * i && scroll < ht * (i + 1)) {
        $(".gnb>li").removeClass();
        $(".gnb>li").eq(i).addClass("on");
      }
    }
  });

  /*cursor*/
  var typingBool = false;
  var typingIdx = 0;

  // 타이핑될 텍스트를 가져온다
  var typingTxt = $(".c1_txt3").text();

  typingTxt = typingTxt.split(""); // 한글자씩 자른다.

  if (typingBool == false) {
    // 타이핑이 진행되지 않았다면
    typingBool = true;
    var tyInt = setInterval(typing, 100); // 반복동작
  }

  function typing() {
    if (typingIdx < typingTxt.length) {
      // 타이핑될 텍스트 길이만큼 반복
      $(".typing").append(typingTxt[typingIdx]);
      // 한글자씩 이어준다.
      typingIdx++;
    } else {
      //끝나면 반복종료
      clearInterval(tyInt);
    }
  }

  /*content3*/
  $(".port1").on("click", function () {
    $(".c3_box1").fadeIn();
    $(".c3_box2").fadeOut();
    $(".c3_box3").fadeOut();
    $(".c3_box4").fadeOut();
    $(".c3_box5").fadeOut();
  });
  $(".box_close").on("click", function () {
    $(".c3_box1").fadeOut();

    return false;
  });

  $(".port2").on("click", function () {
    $(".c3_box2").fadeIn();
    $(".c3_box1").fadeOut();
    $(".c3_box3").fadeOut();
    $(".c3_box4").fadeOut();
    $(".c3_box5").fadeOut();
  });
  $(".box_close").on("click", function () {
    $(".c3_box2").fadeOut();

    return false;
  });

  $(".port3").on("click", function () {
    $(".c3_box3").fadeIn();
    $(".c3_box1").fadeOut();
    $(".c3_box2").fadeOut();
    $(".c3_box4").fadeOut();
    $(".c3_box5").fadeOut();
  });
  $(".box_close").on("click", function () {
    $(".c3_box3").fadeOut();

    return false;
  });

  $(".port4").on("click", function () {
    $(".c3_box4").fadeIn();
    $(".c3_box1").fadeOut();
    $(".c3_box2").fadeOut();
    $(".c3_box3").fadeOut();
    $(".c3_box5").fadeOut();
  });
  $(".box_close").on("click", function () {
    $(".c3_box4").fadeOut();

    return false;
  });

  $(".port5").on("click", function () {
    $(".c3_box5").fadeIn();
    $(".c3_box1").fadeOut();
    $(".c3_box2").fadeOut();
    $(".c3_box3").fadeOut();
    $(".c3_box4").fadeOut();
  });
  $(".box_close").on("click", function () {
    $(".c3_box5").fadeOut();

    return false;
  });
}); //function end
