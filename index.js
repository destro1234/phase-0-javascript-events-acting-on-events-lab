// Your code here

const dodger = document.getElementById('dodger')
const leftNumbers = dodger.style.left.replace("px", "");
const left = parseInt(leftNumbers, 10);

function moveDodgerLeft() {
   
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

function moveDodgerRight() {
    if (left < (400 - 40)) {
        dodger.style.left = `${left + 1}px`;
    }    
}



document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });