// Get Element By ID
var aboutHamiButton = document.getElementById("aboutHamiButton");
var aboutRaymondButton = document.getElementById("aboutRaymondButton");
var hamiGalleryButton = document.getElementById("hamiGalleryButton");

// Add Listener
aboutHamiButton.addEventListener("click", AboutHamiButtonPointerClick);
aboutRaymondButton.addEventListener("click", AboutRaymondButtonPointerClick);
hamiGalleryButton.addEventListener("click", HamiGalleryButtonPointerClick);

// Function
function AboutHamiButtonPointerClick(){
    window.location = 'http://127.0.0.1:3000/Hami/aboutHami.html';
}
function AboutRaymondButtonPointerClick(){
    window.location = 'http://127.0.0.1:3000/Hami/aboutRaymond.html';
}
function HamiGalleryButtonPointerClick(){    
    window.location = 'http://127.0.0.1:3000/Hami/hamiGallery.html';    
}