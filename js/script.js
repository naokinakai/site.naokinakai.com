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
ふんわり表示
------------------------------------------------*/
$(function(){
  //$('.effect1').css("opacity","0");
  $(window).scroll(function (){
    $(".effect_fade-in").each(function(){
      var imgPos = $(this).offset().top;//imgPosは、動作させる要素の上部
      var scroll = $(window).scrollTop();//scrollは、ブラウザ全体のスクロール位置
      var windowHeight = $(window).height();//windowHeightは、画面の高さ
      if (scroll > imgPos - windowHeight + windowHeight/4){//要素の上部が、画面の真ん中より上に行ったら動作させる。
        $(this).css("opacity", "1");
      } else {
        $(this).css("opacity","0" );
      }
    });
  });
});
/*------------------------------------------------
フェードイン上昇
------------------------------------------------*/
$(function(){
  //$('.effect2').css({'opacity':'0','transform':'translateY(0px)'});
  $(window).scroll(function (){
    $(".effect_fade-in_move-up").each(function(){
      var imgPos = $(this).offset().top;//imgPosは、動作させる要素の上部
      var scroll = $(window).scrollTop();//scrollは、ブラウザ全体のスクロール位置
      var windowHeight = $(window).height();//windowHeightは、画面の高さ
      if (scroll > imgPos - windowHeight + windowHeight/4){//要素の上部が、画面の真ん中より上に行ったら動作させる。
        $(this).css({'opacity':'1','transform':'translateY(0px)'});
      } else {
        $(this).css({'opacity':'0','transform':'translateY(50px)'});
      }
    });
  });
});
/*------------------------------------------------
フェードイン下へ
------------------------------------------------*/
$(function(){
  //$('.effect5').css({'opacity':'0','transform':'translateY(0px)'});
  $(window).scroll(function (){
    $(".effect_fade-in_move-down").each(function(){
      var imgPos = $(this).offset().top;//imgPosは、動作させる要素の上部
      var scroll = $(window).scrollTop();//scrollは、ブラウザ全体のスクロール位置
      var windowHeight = $(window).height();//windowHeightは、画面の高さ
      if (scroll > imgPos - windowHeight + windowHeight/4){//要素の上部が、画面の真ん中より上に行ったら動作させる。
        $(this).css({'opacity':'1','transform':'translateY(0px)'});
      } else {
        $(this).css({'opacity':'0','transform':'translateY(-50px)'});
      }
    });
  });
});
/*------------------------------------------------
フェードイン左へ
------------------------------------------------*/
$(function(){
  //$('.effect3').css({'opacity':'0','transform':'translateX(0px)'});
  $(window).scroll(function (){
    $(".effect_fade-in_move-left").each(function(){
      var imgPos = $(this).offset().top;//imgPosは、動作させる要素の上部
      var scroll = $(window).scrollTop();//scrollは、ブラウザ全体のスクロール位置
      var windowHeight = $(window).height();//windowHeightは、画面の高さ
      if (scroll > imgPos - windowHeight + windowHeight/4){//要素の上部が、画面の真ん中より上に行ったら動作させる。
        $(this).css({'opacity':'1','transform':'translateX(0px)'});
      } else {
        $(this).css({'opacity':'0','transform':'translateX(50px)'});
      }
    });
  });
});
/*------------------------------------------------
フェードイン右へ
------------------------------------------------*/
$(function(){
  //$('.effect4').css({'opacity':'0','transform':'translateX(0px)'});
  $(window).scroll(function (){
    $(".effect_fade-in_move-right").each(function(){
      var imgPos = $(this).offset().top;//imgPosは、動作させる要素の上部
      var scroll = $(window).scrollTop();//scrollは、ブラウザ全体のスクロール位置
      var windowHeight = $(window).height();//windowHeightは、画面の高さ
      if (scroll > imgPos - windowHeight + windowHeight/4){//要素の上部が、画面の真ん中より上に行ったら動作させる。
        $(this).css({'opacity':'1','transform':'translateX(0px)'});
      } else {
        $(this).css({'opacity':'0','transform':'translateX(-50px)'});
      }
    });
  });
});
