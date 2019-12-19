const imagePreview = document.getElementById('imagePreview');
const image = document.querySelector('.image');

const loadFile = function(fileInput) {
    const arr = ['image/png', 'image/jpg', 'image/jpeg'];
    const files = fileInput.files;
    for(file of files) { 
        if(arr.includes(file.type)) {
           const imageUrl =  window.URL.createObjectURL(file);

           image.style.backgroundImage = "url("+imageUrl+")";
               
        }
    }
};

const real = document.querySelector('real');
const custom = document.querySelector('custom');

console.log(real);


custom.addEventListener('click', function() {
    // real.click();
    console.log('object');
});

