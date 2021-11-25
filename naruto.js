let next=document.getElementById("next");
let two=document.getElementById("two");
let one=document.getElementById("one");
let three=document.getElementById("three");
let four=document.getElementById("four");
let five=document.getElementById("five");
let six=document.getElementById("six");
let seven=document.getElementById("seven");
let eight=document.getElementById("eight");
let vid= document.querySelector("video");
let ep=document.getElementById("ep");
// next.addEventListener("click", () => {
    
// });

two.addEventListener("click", () => {
vid.src="./Videos/Naruto/Naruto - 02 [720p] @Anime_Gallery.mp4";
ep.textContent="Episode 2";
});

one.addEventListener("click", () =>{
    vid.src="./Videos/Naruto/Naruto - 01.mp4";
    ep.textContent="Episode 1";
});

three.addEventListener("click", () =>{
    vid.src="./Videos/Naruto/Naruto - 03 [720p] @Anime_Gallery.mp4";
    ep.textContent="Episode 3";
});

four.addEventListener("click", () => {
    vid.src="./Videos/Naruto/Naruto - 04 [720p] @Anime_Gallery.mp4";
    ep.textContent="Episode 4";
});

five.addEventListener("click", () => {
vid.src="./Videos/Naruto/Naruto - 05 [720p] @Anime_Gallery.mp4";
ep.textContent="Episode 5";
});

six.addEventListener("click", () => {
vid.src="./Videos/Naruto/Naruto - 06 [720p] @Anime_Gallery.mp4";
ep.textContent="Episode 6";
});

seven.addEventListener("click", () => {
    vid.src="./Videos/Naruto/Naruto - 07 [720p] @Anime_Gallery.mp4";
    ep.textContent="Episode 7";
    });