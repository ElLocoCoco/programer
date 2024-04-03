let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px"; // Adjust this value based on the height of your navbar
  }

  prevScrollPos = currentScrollPos;
}

function showImage(imageSrc) {
  let popupImage = document.getElementById("popupImage");
  popupImage.src = imageSrc;
   
  let imagePopup = document.getElementById("imagePopup");
  imagePopup.style.display = "block";
  document.body.style.overflow = "hidden";
}
function closeImage() {
  let imagePopup = document.getElementById("imagePopup");
  imagePopup.style.display = "none";
 document.body.style.overflow = "auto";
}

// ----------- slideshow----------

var i = 0;
var images = [];	
var time = 5000;	
	 

images[0] = "cookie.png";
images[1] = "hacker.png";
images[2] = "biker.png";
images[3] = "Mountains.png";
images[4] = "hoodie-guy.png";
images[5] = "joker.png";
images[6] = "robot.png";

function changeImg(){
	document.slide.src = images[i];

	if(i < images.length - 1){
	  i++; 
	} else { 
		i = 0;
	}
	setTimeout("changeImg()", time);
}

window.onload = changeImg;