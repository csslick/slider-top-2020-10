// main.js
/*
1. 메인 페이지 슬라이더 뷰
2. 서브 페이지 갤러리 뷰
3. 2단계 메뉴(CSS)
*/ 

$(function(){

  var top = 0;        // y축 위치
  var duration = 500; // 재생시간
  var interval_time = 5000;   // 슬라이드 인터벌 시간(5초 권장)

  setInterval(function(){
    // 조건: -500(마지막) 위치 이면 0으로 돌아감
    if(top <= -500) {
      top = 0;  // 초기값
    } else {
      top = top - 500;  // 다음 이미지 위치
    }
   
    $('#content > .left')
      .animate({marginTop: top}, duration);
  }, interval_time);




})