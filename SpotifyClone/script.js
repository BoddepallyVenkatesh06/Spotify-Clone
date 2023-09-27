console.log("Welcome To Spotify Clone - By Shashank")
//Initialise the Variables
let index = 0;
let audioelement = new Audio('songs/1.mp3');
let masterplay = document.getElementById("masterplay")
let backward = document.getElementById("backward")
let next = document.getElementById("next")
let myprogressbar = document.getElementById("my_progressbar")
let gif1 = document.getElementById("gif1");
let gif2 = document.getElementById("gif2");
let namebottom = document.getElementById('namebottom');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songItemPlay = Array.from(document.getElementsByClassName('songItemPlay'));
// let songItemPlay=document.getElementById('0');


let songs = [
    { songName: "Humare Saath Shri Raghunath To", filepath: "songs/1.mps", coverpath: "covers/1.jpg" },
    { songName: "Achyutam Keshavam", filepath: "songs/2.mps", coverpath: "covers/2.jpg" },
    { songName: "Dil Ke Jharoke Mein Tujhko", filepath: "songs/3.mps", coverpath: "covers/3.jpg" },
    { songName: "Tujhe Bhula Diya", filepath: "songs/4.mps", coverpath: "covers/4.jpg" },
    { songName: "Aane Se Uske Aaye Bahar", filepath: "songs/5.mps", coverpath: "covers/5.jpg" },
    { songName: "Phir Bhi Tumko Chaahunga", filepath: "songs/6.mps", coverpath: "covers/6.jpg" },
    { songName: "Labon Ko", filepath: "songs/7.mps", coverpath: "covers/7.jpg" },
    { songName: "Main Rahoon Ya Na Rahoon", filepath: "songs/8.mps", coverpath: "covers/8.jpg" },
    { songName: "Mere Haath Mein", filepath: "songs/9.mps", coverpath: "covers/9.jpg" },
    { songName: "Mere Liye Tum Kaafi Ho", filepath: "songs/10.mps", coverpath: "covers/10.jpg" },
    { songName: "Kaho Na Kaho", filepath: "songs/11.mps", coverpath: "covers/11.jpg" },
    { songName: "Tuhi Meri Shab Hai", filepath: "songs/12.mps", coverpath: "covers/12.jpg" },
    { songName: "Pee Loon", filepath: "songs/13.mps", coverpath: "covers/13.jpg" },
    { songName: "Tum Mujhe Yu Na Bhool Paoge", filepath: "songs/14.mps", coverpath: "covers/14.jpg" }
]
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// Listem to Events
// handle play/pause

const songplayfun = () => {
    audioelement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
    gif1.style.opacity = 1;
    gif2.style.opacity = 1;
}
const songpausefun = () => {
    audioelement.pause();
    masterplay.classList.remove('fa-pause');
    masterplay.classList.add('fa-play');
    gif1.style.opacity = 0;
    gif2.style.opacity = 0;
}

masterplay.addEventListener('click', () => {

    if (audioelement.paused || audioelement.currentTime <= 0) {
        songplayfun();
    }
    else if (audioelement.currentTime >= 100)
    {
        songpausefun();
    }
    else 
    {
        songpausefun();
    }
})

audioelement.addEventListener('timeupdate', () => {
    // console.log('timeupdate')
    //update seekbar handle
    progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);
    myprogressbar.value = progress;
    // console.log(progress);
})

myprogressbar.addEventListener('change', () => {
    audioelement.currentTime = (myprogressbar.value * audioelement.duration) / 100;

})

const makeAllPlaybtn = () => {
    songItemPlay.forEach((element) => {
        element.classList.add('fa-play');
    })
}

songItemPlay.forEach((element) => {
    // console.log(element);
    element.addEventListener('click', (e) => {
        console.log(e.target);
        makeAllPlaybtn();
        if (audioelement.paused || audioelement.currentTime <= 0) {
            e.target.classList.remove('fa-play');
            e.target.classList.add('fa-pause');
            index = parseInt(e.target.id)
            console.log(index);
            audioelement.src = `songs/${index + 1}.mp3`;
            // audioelement.currentTime = 0;
            namebottom.innerText = songs[index].songName;
            songplayfun();
            console.log("play");
        }
        else if (audioelement.currentTime > 0) {
            songpausefun();
            console.log("paused");
        }
    })
})



document.getElementById('next').addEventListener('click', () => {
    if (index >= 13) {
        index = 0;
    }
    else {
        index += 1;
    }
    console.log(index)
    audioelement.src = `songs/${index + 1}.mp3`;
    audioelement.currentTime = 0;
    songplayfun();
    makeAllPlaybtn();
    document.getElementById(index).classList.remove('fa-play');
    document.getElementById(index).classList.add('fa-pause');
    namebottom.innerText = songs[index].songName;
})

document.getElementById('backward').addEventListener('click', () => {
    if (index <= 0) {
        index = 13;
    }
    else {
        index -= 1;
    }
    console.log(index)
    audioelement.src = `songs/${index + 1}.mp3`;
    audioelement.currentTime = 0;
    songplayfun();
    makeAllPlaybtn();
    document.getElementById(index).classList.remove('fa-play');
    document.getElementById(index).classList.add('fa-pause');
    namebottom.innerText = songs[index].songName;
})

document.getElementById("navbut1").addEventListener('mouseover', ()=>{
    document.getElementById("navbut2").style.opacity=1;
})
document.getElementById("navbut2").addEventListener('mousein', ()=>{
    document.getElementById("navbut2").style.opacity=1;
})
document.getElementById("navbut2").addEventListener('click', ()=>{
    document.getElementById("navbut2").style.opacity=0;
    console.log("Muse out");
})
document.getElementById("xyz").addEventListener('mouseover', ()=>{
    document.getElementById("navbut2").style.opacity=0;
    console.log("Muse out");
})