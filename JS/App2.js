const rightArrow = document.getElementById('right');
rightArrow.addEventListener('click', rightSlide);
function rightSlide() {
    document.querySelector(".right-1").style.width = "100%";
    document.querySelector(".right-2").style.width = "100%";
    function after() {
      setInterval(() => {
        location.href = "Index.html";
      }, 2000);
    }
    after();
  }
