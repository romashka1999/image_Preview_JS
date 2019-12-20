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

const oldInput = document.querySelector('.oldInput');
const custom = document.querySelector('.custom');

const deleteUploadedImage = document.querySelector('.delete');

deleteUploadedImage.addEventListener('click', function() {

        let newInput = document.createElement("input");
        newInput.type = "file";
        newInput.id = oldInput.id;
        newInput.name = oldInput.name;
        newInput.className = oldInput.className;
        newInput.onchange = oldInput.onchange;
        newInput.style.cssText = oldInput.style.cssText;

        oldInput.parentNode.replaceChild(newInput, oldInput);

        image.style.backgroundImage = "";
});



