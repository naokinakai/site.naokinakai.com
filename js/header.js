/*
.effect領域内の要素を、透明に指定する。
.$(window).scroll(fonction())で画面をスクロールした時の、動作内容を書けるようにする。
.each(function)で繰り返し処理を記述出来るようにする。

変数指定、
imgPosは、動作させる要素の上部
scrollは、ブラウザ全体のスクロール位置
windowHeightは、画面の高さ

要素の上部が、画面の下5分の1より上に行ったら動作させる。
*/


/*------------------------------------------------
フェード上昇
------------------------------------------------*/
$(function(){
  //$('.effect1').css("opacity","0");
  $(window).scroll(function (){
    $(".effect1").each(function(){
      var imgPos = $(this).offset().top;//imgPosは、動作させる要素の上部
      var scroll = $(window).scrollTop();//scrollは、ブラウザ全体のスクロール位置
      var windowHeight = $(window).height();//windowHeightは、画面の高さ
      if (scroll > imgPos - windowHeight + windowHeight/2){//要素の上部が、画面の真ん中より上に行ったら動作させる。
        $(this).css("opacity", "1");
      } else {
        $(this).css("opacity","0" );
      }
    });
  });
});
/*------------------------------------------------
フェード上昇
------------------------------------------------*/
$(function(){
  //$('.effect2').css({'opacity':'0','transform':'translateY(0px)'});
  $(window).scroll(function (){
    $(".effect2").each(function(){
      var imgPos = $(this).offset().top;//imgPosは、動作させる要素の上部
      var scroll = $(window).scrollTop();//scrollは、ブラウザ全体のスクロール位置
      var windowHeight = $(window).height();//windowHeightは、画面の高さ
      if (scroll > imgPos - windowHeight + windowHeight/2){//要素の上部が、画面の真ん中より上に行ったら動作させる。
        $(this).css({'opacity':'1','transform':'translateY(0px)'});
      } else {
        $(this).css({'opacity':'0','transform':'translateY(50px)'});
      }
    });
  });
});
/*------------------------------------------------
フェード左
------------------------------------------------*/
$(function(){
  //$('.effect3').css({'opacity':'0','transform':'translateX(0px)'});
  $(window).scroll(function (){
    $(".effect3").each(function(){
      var imgPos = $(this).offset().top;//imgPosは、動作させる要素の上部
      var scroll = $(window).scrollTop();//scrollは、ブラウザ全体のスクロール位置
      var windowHeight = $(window).height();//windowHeightは、画面の高さ
      if (scroll > imgPos - windowHeight + windowHeight/2){//要素の上部が、画面の真ん中より上に行ったら動作させる。
        $(this).css({'opacity':'1','transform':'translateX(0px)'});
      } else {
        $(this).css({'opacity':'0','transform':'translateX(50px)'});
      }
    });
  });
});
/*------------------------------------------------
フェード右
------------------------------------------------*/
$(function(){
  //$('.effect4').css({'opacity':'0','transform':'translateX(0px)'});
  $(window).scroll(function (){
    $(".effect4").each(function(){
      var imgPos = $(this).offset().top;//imgPosは、動作させる要素の上部
      var scroll = $(window).scrollTop();//scrollは、ブラウザ全体のスクロール位置
      var windowHeight = $(window).height();//windowHeightは、画面の高さ
      if (scroll > imgPos - windowHeight + windowHeight/2){//要素の上部が、画面の真ん中より上に行ったら動作させる。
        $(this).css({'opacity':'1','transform':'translateX(0px)'});
      } else {
        $(this).css({'opacity':'0','transform':'translateX(-50px)'});
      }
    });
  });
});
/*------------------------------------------------

------------------------------------------------*/
$(function(){
  //$('.effect5').css({'opacity':'0','transform':'translateY(0px)'});
  $(window).scroll(function (){
    $(".effect5").each(function(){
      var imgPos = $(this).offset().top;//imgPosは、動作させる要素の上部
      var scroll = $(window).scrollTop();//scrollは、ブラウザ全体のスクロール位置
      var windowHeight = $(window).height();//windowHeightは、画面の高さ
      if (scroll > imgPos - windowHeight + windowHeight/2){//要素の上部が、画面の真ん中より上に行ったら動作させる。
        $(this).css({'opacity':'1','transform':'translateY(0px)'});
      } else {
        $(this).css({'opacity':'0','transform':'translateY(-50px)'});
      }
    });
  });
});



/*------------------------------------------------
        //$(".gnavi, li, a",this).css({'color':'#000','transform':'translateX(-50px)'});
        //$(".gnavi, li, a",this).css({'color':'#fff','transform':'translateX(0px)'});
------------------------------------------------*/
$(function(){
  //$('.gnavi, li, a').css({'color':'#fff','transform':'translateX(0px)'});
  $(window).scroll(function (){
    $(".header").each(function(){
      var imgPos = $(this).offset().top;//imgPosは、動作させる要素の上部
      var scroll = $(window).scrollTop();//scrollは、ブラウザ全体のスクロール位置

      var section2 = $(".section2").offset().top;
      var windowHeight = $(window).height();//windowHeightは、画面の高さ
      if (scroll > section2 - windowHeight + windowHeight/4){//要素の上部が、画面の真ん中より上に行ったら動作させる。
        $(".gnavi, li, a", this).addClass('header-animation');
      } else {
        $(".gnavi, li, a", this).removeClass('header-animation');
      }
    });
  });
});




























//==========================================
//ヘッダーの色が変わるスクリプト
//==========================================
$(function(){
  //$('.header').css({'background': 'none'});
  $(window).scroll(function (){
    $(".section_skill-level").each(function(){
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      //var windowHeight = $(window).height();
      //if (scroll > imgPos - windowHeight + windowHeight/2){
      if (scroll > imgPos){
        $(".header").addClass('header-animation');
      } else {
        $(".header").removeClass('header-animation');
      }
    });
  });
});
