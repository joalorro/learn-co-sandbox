//tests for clicking on "main"
const main = document.querySelector('#main');

main.addEventListener('click', () => {
  
  alert('"main" was clicked!')
  
} );

const caption = document.querySelector('.caption')
caption.addEventListener('click', () => {
  console.log('stop clicking my caption!')
})

//tests for div bubbling

let divs = document.querySelectorAll('div');
function bubble(event){
  return console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}

for (let i = 0; i < divs.length; i++){
  divs[i].addEventListener('click', bubble);
}

//tests for pressing keys

const alphabet = ['a', 'b', 'c'];
 
// Keep track of index outside of the event handler.
let index = 0;
 
// This is the function that would be invoked by the event listener.

function onKeyDownHandler(e) {
  const key = e.key;
 
  if (key === alphabet[index]) {
    index++;
 
    if (index === alphabet.length) {
      alert("Hurray!");
 
      index = 0;
    }
  } else {
    index = 0;
  }
}

document.addEventListener('keydown', codeHandler)

const codes = ['ArrowUp','ArrowDown','ArrowUp']

function codeHandler (e){
  const key = e.key
  
  if (key === codes[index] ) {
    index++;
  
    if (index ===codes.length) {
      alert('dundundun')
      
      index = 0;
      }
    }else {
      index = 0;
    }
}
