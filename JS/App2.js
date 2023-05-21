const project = [
    { projectName: "Music Player", liveLink: "https://clone-spotify-utsav.netlify.app/", githubLink: "https://github.com/JoshiUtsav/Music-player", src: "../img/project/Banner.jpg" },
    { projectName: "Music Player", liveLink: "https://clone-spotify-utsav.netlify.app/", githubLink: "https://github.com/JoshiUtsav/Music-player", src: "../img/project/Banner.jpg" },
    { projectName: "Music Player", liveLink: "https://clone-spotify-utsav.netlify.app/", githubLink: "https://github.com/JoshiUtsav/Music-player", src: "../img/project/Banner.jpg" },
    { projectName: "Music Player", liveLink: "https://clone-spotify-utsav.netlify.app/", githubLink: "https://github.com/JoshiUtsav/Music-player", src: "../img/project/Banner.jpg" },
    { projectName: "Music Player", liveLink: "https://clone-spotify-utsav.netlify.app/", githubLink: "https://github.com/JoshiUtsav/Music-player", src: "../img/project/Banner.jpg" },
    { projectName: "Music Player", liveLink: "https://clone-spotify-utsav.netlify.app/", githubLink: "https://github.com/JoshiUtsav/Music-player", src: "../img/project/Banner.jpg" },
    { projectName: "Music Player", liveLink: "https://clone-spotify-utsav.netlify.app/", githubLink: "https://github.com/JoshiUtsav/Music-player", src: "../img/project/Banner.jpg" },
    { projectName: "Music Player", liveLink: "https://clone-spotify-utsav.netlify.app/", githubLink: "https://github.com/JoshiUtsav/Music-player", src: "../img/project/Banner.jpg" },
    { projectName: "Music Player", liveLink: "https://clone-spotify-utsav.netlify.app/", githubLink: "https://github.com/JoshiUtsav/Music-player", src: "../img/project/Banner.jpg" },
    { projectName: "Music Player", liveLink: "https://clone-spotify-utsav.netlify.app/", githubLink: "https://github.com/JoshiUtsav/Music-player", src: "../img/project/Banner.jpg" },
    { projectName: "Music Player", liveLink: "https://clone-spotify-utsav.netlify.app/", githubLink: "https://github.com/JoshiUtsav/Music-player", src: "../img/project/Banner.jpg" },
    { projectName: "Music Player", liveLink: "https://clone-spotify-utsav.netlify.app/", githubLink: "https://github.com/JoshiUtsav/Music-player", src: "../img/project/Banner.jpg" },
    { projectName: "Music Player", liveLink: "https://clone-spotify-utsav.netlify.app/", githubLink: "https://github.com/JoshiUtsav/Music-player", src: "../img/project/Banner.jpg" },
    { projectName: "Music Player", liveLink: "https://clone-spotify-utsav.netlify.app/", githubLink: "https://github.com/JoshiUtsav/Music-player", src: "../img/project/Banner.jpg" },
    { projectName: "Music Player", liveLink: "https://clone-spotify-utsav.netlify.app/", githubLink: "https://github.com/JoshiUtsav/Music-player", src: "../img/project/Banner.jpg" },
];
console.log(project.length);

// Having Some FUN
let images = Array.from(document.getElementsByClassName('Banner'));
console.log(images);
images.forEach((e, i) => {
    console.log(e, i);
    e.getElementsByTagName("img")[0].src = project[i].src;
})







// // console.log(a)
// let b = Array.from(document.querySelectorAll('#livebutton'));
// b.forEach((e) => {
//     console.log(e[1]);
//     let hello = e;
//     hello.addEventListener('click', () => {
//         console.log(e);
//     })
// })
// // console.log(b);
// let c = Array.from(document.querySelectorAll('#githubbutton'));
// // console.log(c);
// function click() {
//     url();
// }
// click();
// function url() {
//     let livebutton = document.querySelectorAll('#livebutton');
//     let githubbutton = document.querySelectorAll('#githubbutton');
//     let num = livebutton;
//     let number = githubbutton;
//     num.values;
//     number.values;
//     // console.log(num);
//     // console.log(number);
// }