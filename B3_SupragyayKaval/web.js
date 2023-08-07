const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes, lineScroll);
window.addEventListener('click', buttonTap())
checkBoxes();
lineScroll();

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;
    console.log("ello");

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom)  {
            box.classList.add('show');

        } else {
            box.classList.remove('show');
        }
    });
}

function lineScroll() {
    const scrollTrigger = window.innerHeight/ 2;

    if (scrollTrigger = true) {
        hr.classList.add('line');

    } else {
        hr.classList.remove('line');
    }
}

function buttonTap() {
    document.getElementsByClassName("animate");
    

}

const hideDiv = null;

// function showDiv(id) {
//     if {hideDiv)
//         hideDiv():
//     const div = document.getElementById(id);
//     div.style.visibility = 'block';
//     hideDiv = function () {div.style.visibility = 'none';};
// }

const targetDiv = document.getElementById("third");
const btn = document.getElementById("toggle_3");
btn.onclick = function () {
  if (targetDiv.style.visibility !== "hidden") {
    targetDiv.style.visibility = "hidden";
  } else {
    targetDiv.style.visibility = "visible";
  }
};

const allBtn = document.querySelector('.imp_but');

allBtn.addEventListener('mouseover', function() {
            console.log('ellloo');
            // const h= math.floor(math.random()*window.innerHeight);

            // const w= math.floor(math.random()*window.innerWidth);

            // allBtn.style.left = `${w}px`;
            // allBtn.style.top = `$(h)px`;
            allBtn.style.left = '200px';
            allBtn.style.top = '100px';
})





















