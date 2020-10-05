import Header from "./Header";
import Main from "./Main";

const layout = `
  ${Header()}
  ${Main()}
`;

document.getElementById("app").innerHTML = layout;

// let top = 0;
// setInterval(function(){
//   if(top <= -500) {
//     top = 0
//   } else {
//     top -= 500;
//   }
  
//   slider.style.marginTop = top + 'px';
// }, 3000)

function Slider (el, duration, start) {
  this.el = el;
  this.top = start * -500;
  this.duration = duration;
  this.play = function() {
    var _this = this;

    setInterval(function(){
      if(_this.top <= -500) {
        _this.top = 0
      } else {
        _this.top -= 500;
      }
      _this.el.style.marginTop = _this.top + 'px';
    }, duration)
  }
}

const article1 = document.querySelectorAll('.home_main > article')[0];
const article2 = document.querySelectorAll('.home_main > article')[1];
var slider1 = new Slider(article1, 3000, 0);
slider1.play();
var slider2 = new Slider(article2, 3000, 1);
slider2.play();
