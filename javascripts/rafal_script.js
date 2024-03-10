

// add class navbarDark on navbar scroll
const header = document.querySelector('.nav__links');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

// Hamburger menu //
hamburger = document.querySelector(".hamburger");
   hamburger.onclick = function() {
    navBar = document.querySelector(".nav__links");
    navBar.classList.toggle("active");
   }
// End of Hamburger menu //


// Wrapper Start //
 

// Wrapper end //


// Galeria 
    // Get the modal
    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = $('.myImg');
    var modalImg = $("#img01");
    var captionText = document.getElementById("caption");
    $('.myImg').click(function(){
        modal.style.display = "block";
        var newSrc = this.src;
        modalImg.attr('src', newSrc);
        captionText.innerHTML = this.alt;

        // Create a canvas to get the colors from the image
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        var img = new Image();
        img.crossOrigin = "anonymous"; // Enable CORS for the image
        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            var pixels = imageData.data;

            // Fill the blank spots in the background with colors from the image
            var modalContent = document.querySelector('.modal-content');
            var modalWidth = modalContent.offsetWidth;
            var modalHeight = modalContent.offsetHeight;

            var xRatio = img.width / modalWidth;
            var yRatio = img.height / modalHeight;

            var modalOffset = modalContent.getBoundingClientRect();

            for (var y = 0; y < modalHeight; y++) {
                for (var x = 0; x < modalWidth; x++) {
                    var index = ((y * yRatio) * canvas.width + (x * xRatio)) * 4;
                    var red = pixels[index];
                    var green = pixels[index + 1];
                    var blue = pixels[index + 2];
                    var alpha = pixels[index + 3];
                    if (alpha === 0) {
                        // If the pixel is transparent, fill it with color from the image
                        var fillStyle = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
                        var rect = document.createElement("div");
                        rect.style.position = "absolute";
                        rect.style.left = (x + modalOffset.left) + "px";
                        rect.style.top = (y + modalOffset.top) + "px";
                        rect.style.width = "1px";
                        rect.style.height = "1px";
                        rect.style.backgroundColor = fillStyle;
                        document.body.appendChild(rect);
                    }
                }
            }
        };
        img.src = newSrc;
    });

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }

//   Koniec Galerii