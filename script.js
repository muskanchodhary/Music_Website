console.log("welcone to Spotify");
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItems'));
let songs = [
    { songName: "52 Gaj ka Daman", filePath: "song/2.mp3", coverPath: "covers/1.jpg" },
    { songName: "Kuwari", filePath: "song/3.mp3", coverPath: "covers/2.jpg" },
    { songName: "Sanam Teri Kasam", filePath: "song/4.mp3", coverPath: "covers/3.jpg" },
    { songName: "Sirra", filePath: "song/5.mp3", coverPath: "covers/4.jpg" },
    { songName: "Teri Jhuki Nazar", filePath: "song/6.mp3", coverPath: "covers/5.jpg" },
    { songName: "Majbooriyan", filePath: "song/7.mp3", coverPath: "covers/6.jpg" }
]
songItem.forEach((element) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath
    element.getElementsByClassName("songName"[0].innerText = songs[i].songName)
})
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }
})

audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {

        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText =songs[songIndex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');


    })
})
document.getElementById('next').addEventListener('click',()=>{
if(songIndex>=6){
    songIndex=0
}
else{
    songIndex+=1;
}
audioElement.src = `songs/${songIndex + 1}.mp3`;
masterSongName.innerText =songs[songIndex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex-=1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText =songs[songIndex-1].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
    })