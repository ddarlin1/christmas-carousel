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
    img.src = imgs[imgNum].src
    img.alt = imgs[imgNum].alt
    img({
        navigation: true,
        singleItem: true,
        transitionStyle: "fade"
    });
}

getImg();
