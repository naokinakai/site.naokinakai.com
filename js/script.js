/*------------------------------------------------
スクロールアクション　フェードイン右へ　画面ロード後1回動作
------------------------------------------------*/
$(function(){
  $(window).scroll(function (){
    $(".effect_fade-in_move-right").each(function(){
      var textBox = $(this).offset().top;//textBoxは、動作させる要素の上部
      var scroll = $(window).scrollTop();//scrollは、ブラウザ全体のスクロール位置
      var windowHeight = $(window).height();//windowHeightは、画面の高さ
      if (scroll > textBox - windowHeight + windowHeight/4){//要素の上部が、画面下から1/4に来たら動作
        $(this).css({'opacity':'1','transform':'translateX(0px)'});
      }
    });
  });
});

/*------------------------------------------------
ヘッダースクロールアクション
------------------------------------------------*/
$(function(){
  $(window).scroll(function (){
    $(".header").each(function(){
      var sectionCareer = $(".section_career").offset().top;
      var scroll = $(window).scrollTop();//scrollは、ブラウザ全体のスクロール位置
      var windowHeight = $(window).height();//windowHeightは、画面の高さ
      if (scroll > sectionCareer - windowHeight/10){//要素の上部が、.section_career付近に来たら動作
        $(".header").addClass('header-animation');
      } else {
        $(".gnavi, li, a", ".header").removeClass('header-animation');
      }
    });
  });
});
