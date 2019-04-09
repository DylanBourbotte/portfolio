let bar = document.querySelector('.one');
let bar2 = document.querySelector('.two');
let bar3 = document.querySelector('.three');


window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    bar.style.backgroundColor = "#2c2c2c";
    bar2.style.backgroundColor = "#2c2c2c";
    bar3.style.backgroundColor = "#2c2c2c";
  } else {
    bar.style.backgroundColor = "white";
    bar2.style.backgroundColor = "white";
    bar3.style.backgroundColor = "white";
  }
}