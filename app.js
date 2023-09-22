console.log("welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio('music/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "music/1.mp3", coverPath: "images/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "music/2.mp3", coverPath: "images/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "images/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "music/4.mp3", coverPath: "images/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "music/5.mp3", coverPath: "images/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "music/2.mp3", coverPath: "images/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "music/2.mp3", coverPath: "images/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "music/2.mp3", coverPath: "images/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "music/2.mp3", coverPath: "images/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "music/4.mp3", coverPath: "images/10.jpg"},
]

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate', () =>{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', () =>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})