function flipCard(){
    console.log('hello')
}
const pictures = document.querySelectorAll('.card');
console.log(pictures);
for(i = 0; i < pictures.length; i++){
    pictures.addEventListener('click', flipCard);
}
