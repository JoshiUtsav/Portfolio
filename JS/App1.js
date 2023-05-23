const leftArrow = document.getElementById('left');
leftArrow.addEventListener('click', leftSlide);
function leftSlide() {
  document.querySelector(".left-1").style.width = "100%";
  document.querySelector(".left-2").style.width = "100%";
  function after() {
    setInterval(() => {
      location.href = "Project.html";
    }, 2000);
  }
  after();
}
// Cursor
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});