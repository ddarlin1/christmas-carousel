const previous = document.getElementById("previous")
const next = document.getElementById("next")
const img = document.getElementById("img")
const imgs = [
    {src: "imgs/village.jpg",
    alt: "christmas village at night with snow and christmas tree"},
    {src: "imgs/present.jpg",
    alt: "white and gold wrapped present on white table with snowflake decorations"},
    {src: "imgs/doggies.jpg",
    alt: "small black dog and small beige dog looking out the window at snow next to Christmas wreath"},
    {src: "imgs/tree.jpg",
    alt: "christmas tree decorated with gold bauble"},
    {src: "imgs/hot-chocolate.jpg",
    alt: "Hot cocoa in a snowflake mug wrapped with a red and white striped scarf"},
    {src: "imgs/gingerbread.jpg",
    alt: "Gingerbread men ready to be baked"}]

let imgNum = 0
  
// Task:
// - Wire up the buttons to switch through the images in the imgs array. 
// - Make sure that the gallery works no matter how many images are added.
// - Decide/implement what to do when you reach either end of the array 

previous.addEventListener("click", prevImg);
next.addEventListener("click", nextImg);

function prevImg() {
    if (imgNum === 0) {
        imgNum = imgs.length -1
    } else {
        imgNum -= 1
    }
    getImg();
}

function nextImg() {
    if (imgNum < imgs.length -1) {
        imgNum += 1 
    } else {
        imgNum = 0
    }
    getImg();
}

function getImg() {
    img.src = imgs[imgNum].src;
    img.alt = imgs[imgNum].alt;
}

getImg();

// Stretch goals:
// - Allow the user to zoom in and out of the images.

let imgHeight = 300;
document.getElementById('plus').addEventListener('click', function() {
    if (imgHeight <= 400) {
        imgHeight += 20
        img.style.height = `${imgHeight}px`
    
    }
})
document.getElementById('minus').addEventListener('click', function() {
    if (imgHeight > 300) {
        imgHeight -= 20
        img.style.height = `${imgHeight}px`
    }
})


// Background Photo on <a href="https://photostockeditor.com/image/light-orange-and-white-bokeh-lights-bokeh-187037">Photostockeditor</a>
// Village photo by <a href="https://unsplash.com/@rpnickson">Roberto Nickson</a> on <a href="https://unsplash.com/s/photos/christmas">Unsplash</a> 
// Present photo by <a href="https://unsplash.com/@freestocks">freestocks</a> on <a href="https://unsplash.com/s/photos/christmas?">Unsplash</a>
// Cute doggies photo  by <a href="https://unsplash.com/@lbsnipes">Laura Beth Snipes</a> on <a href="https://unsplash.com/s/photos/christmas">Unsplash</a> 
// Christmas tree photo on <a href="https://photostockeditor.com/image/chatham-closeup-photo-of-gold-glittered-christmas-bauble-kent-187156">Photostockeditor</a> 
// Hot cocoa photo on <a href="https://photostockeditor.com/image/snow-winter-cup-hot-chocolate-heart-183990">Photostockeditor</a>
// Gingerbread photo on <a href="https://photostockeditor.com/image/brown-baking-biscuit-christmas-cookie-184071">Photostockeditor</a>