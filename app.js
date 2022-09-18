// https://www.omnicalculator.com/conversion/pounds-to-stone

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const stoneRadio = document.getElementById('stoneRadio');
const poundsRadio = document.getElementById('poundsRadio');

let stone;
let pounds = v; 

// labels of the inpust
const variable = document.getElementById('variable');

stoneRadio.addEventListener('click', function() {
  variable.textContent = 'Pounds';
  pounds = v;
  result.textContent = '';
});

poundsRadio.addEventListener('click', function() {
  variable.textContent = 'Stone';
  stone = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(stoneRadio.checked)
    result.textContent = `Stone = ${computestone().toFixed(5)}`;

  else if(poundsRadio.checked)
    result.textContent = `Pounds = ${computepounds().toFixed(5)}`;
})

// calculation

function computestone() {
  return Number(pounds.value) / 14;
}

function computepounds() {
  return Number(stone.value) * 14;
}