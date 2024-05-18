(function SetUpEvents(){
 const images =  document.querySelectorAll('figure img');

 images.forEach(img => {
    img.addEventListener('click',viewHandler)
});
    
})();

function toggleMenu() {
    const nav = document.getElementById("menue")
    nav.hidden = !nav.hidden


}

function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target
    const viewer = document.querySelector(".viewer")
    var img = event.target;
    const image = viewer.querySelector("img")
	// get the src attribute from that element and 'split' it on the "-"
    var srcParts = img.getAttribute('src').split('-');

   
	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    var newImageSrc = srcParts[0] + '-full.jpeg';
	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))
    image.setAttribute("src",newImageSrc);
    image.alt = newImageSrc;
    

	// add a listener to the close button (X) that calls a function called closeViewer when clicked
    viewer.hidden = false;
}
function hideView(){
    const viewer = document.querySelector(".viewer")
    viewer.hidden = true;
}

// Notes-
// document.querySelectorAll -- this wil select everthing of that possible object