let images=[
    "images/image1.jpg",    
    "images/image2.jpg",    
    "images/image3.jpg",    
];

let count =0;

function changeimage() {
    if (count < images.length) {
        let container = document.getElementById("background");
        container.style.backgroundImage = 'url("' + images[count] + '")';
        count = count + 1;
    }
    if (count >= images.length) {
        count = 0;
    }
}

changeimage();

setInterval(changeimage , 5000);

