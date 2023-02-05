let input = document.querySelector('input');

input.addEventListener('change', function(){
    if(this.files[0].type.startsWith('image/')){
    let reader = new FileReader();
    
    reader.onload = function(){
        let img = document.createElement('img');
        img.setAttribute('src', reader.result);
        document.body.appendChild(img);
    }

    reader.readAsDataURL(this.files[0]);
}
else{
    console.log('Format is wrong!');
    this.value = '';
}

})

let box = document.querySelector('.box');

box.addEventListener('dragover', function(e){
    e.preventDefault();
})

box.addEventListener('drop', function(e){
    e.preventDefault();
    console.log('dropped');
})

let inp = document.querySelector('#inp');

inp.addEventListener('click', function(){
    input.click();
})