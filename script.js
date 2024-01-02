let div = document.querySelector('.container');

let h3 = document.createElement('h3');
h3.innerText = "Generate a random color";
div.prepend(h3);
h3.classList.add('h3');

let btn = document.createElement('button');
btn.innerText = "Generate Color";
div.append(btn);
btn.classList.add('button');

let div2 = document.createElement('div');
div2.innerText = "This is your new color";
div.append(div2);
div2.classList.add('div-2');


btn.addEventListener("click", function(){
  let randomColor = getRandomColor();
  h3.innerText = randomColor;
  div2.style.backgroundColor = randomColor;
});

function getRandomColor() {
  let red = Math.floor(Math.random()*255);
  let green = Math.floor(Math.random()*255);
  let blue = Math.floor(Math.random()*255);

  let color = `rgb(${red}, ${green}, ${blue})`;
  return color;
}