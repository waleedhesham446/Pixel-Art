// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
const submit = document.getElementById('sub');
submit.onclick = function makeGrid() {
  // Your code goes here!
  const height = document.getElementById('inputHeight');
  const width = document.getElementById('inputWidth');
  const table = document.getElementById('pixelCanvas');
  const colorPicker = document.getElementById('colorPicker');  
  for (var i = 0 ; i < height.value ; i++) {
    const row = table.appendChild(document.createElement('tr'));
    for (var j = 0 ; j < width.value ; j++) {
      row.appendChild(document.createElement('td'));
    }  
  }
  
  table.onmouseover = (event) => {
    if (event.target.id == 'pixelCanvas' || event.target.nodeName == 'TR') return;
    if (event.buttons == 1)
  	  event.target.style.backgroundColor = colorPicker.value;
  };
}
