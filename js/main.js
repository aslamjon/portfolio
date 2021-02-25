var d = new Date();
var n = d.getFullYear();
document.getElementById('date').innerHTML = n;

//typescript


const texts = ["I'm a Frontend Developer" , "And I'm a Student"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){

    if(count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0 , ++index);
    
    document.querySelector('.txt-type').textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
    }
    setTimeout(type, 150);
}());


// vertical carusel
