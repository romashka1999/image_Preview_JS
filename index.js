const imagePreview = document.getElementById('imagePreview');

const loadFile = function(fileInput) {
    const arr = ['image/png', 'image/jpg', 'image/jpeg'];
    const files = fileInput.files;
    for(file of files) { 
        if(arr.includes(file.type)) {
           const imageUrl =  window.URL.createObjectURL(file)
                const image = document.createElement('img');
                image.setAttribute('class', 'img');
                image.setAttribute('src', imageUrl);
                imagePreview.appendChild(image);
        }
    }
};

