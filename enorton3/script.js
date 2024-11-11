
Template format for a listener

const <Button> = document.getElementById('id');
<Button>.addEventListener('input', function() {
});
*/

let color = 'blue';

const counterDisplay = document.getElementById('colorBox');
const changeButton = document.getElementById('changeBtn');

changeButton.addEventListener('click', function() {

  const r = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const color = `rgb(${r}, ${g}, ${b})`;

  colorBox.style.backgroundColor = color;
});
