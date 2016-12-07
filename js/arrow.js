//arrow 화살표의 투명도
$(window).scroll( function(){
  //스크롤 포지션값을 얻는다
  var topWindow = $(window).scrollTop();

  //스크롤 절반값
  var topWindow = topWindow * 1.5;
  
  //현재창의 높이를 얻는다
  var windowHeight = $(window).height();
      
  //화살표의 위치가 현재창의 위로부터 얼마나 있는지
  var position = topWindow / windowHeight;
  //퍼센트를 뒤집는다.
  position = 1 - position;

  //유저의 스크롤값이 정의된 포지션값에 기초해 화살표의 투명도 정의
  //스크롤 하지 않으면 1, 절반정도 스크롤하면 0
  $('.arrow-wrap').css('opacity', position);

});

$(function() {
   //a[href]가 #를 포함하지만 href가 #은 아니다.
  $('a[href*=#]:not([href=#])').click(function() {
    // 부드러운 스크롤링 사용
    //자바스크립트 내에서 ulr이동을 할 때, 부른 링크 이름과 이 링크 이름이 같을 때
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});