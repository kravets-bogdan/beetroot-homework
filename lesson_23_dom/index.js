// Const
const musicList = document.getElementById("js-playlist");
const showWindowBtn = document.getElementById("js-button");
const changeColorBtn = document.getElementById("js-button-traffic-lights");
const circleRed = document.getElementById("js-circle-red");
const circleYellow = document.getElementById("js-circle-yellow");
const circleGreen = document.getElementById("js-circle-green");
// Array
const playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN",
  },
  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY",
  },
  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD",
  },
  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER",
  },
  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER",
  },
  {
    author: "AC/DC",
    song: "BACK IN BLACK",
  },
  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU",
  },
  {
    author: "METALLICA",
    song: "ENTER SANDMAN",
  },
];

// Displays a numbered list
const list = document.createElement("ol");
list.classList.add("playlist__list");
musicList.appendChild(list);
for (const element of playList) {
  const li = document.createElement("li");
  li.classList.add("playlist__item");
  li.innerText = `${element.author} - ${element.song}`;
  list.appendChild(li);
}

//* Add New Song
//! Optional
const createNewPlayList = (element) => {
  const li = document.createElement("li");
  li.classList.add("playlist__item");
  li.innerText = ` ${element.author} - ${element.song}`;
  list.appendChild(li);
};
const createPlayList = () => {
  createNewPlayList({
    author: prompt(`Enter author`),
    song: prompt(`Enter name of song`),
  });
};
//! Optional

// Button show || hide
let visibility = false;
showWindowBtn.addEventListener("click", () => {
  visibility = !visibility;
  if (visibility) {
    list.style.display = "none";
    document.getElementById("js-button").textContent = "Відкрити";
  } else {
    list.style.display = "block";
    document.getElementById("js-button").textContent = "Закрити";
  }
});
// Trafic Lights
let changeColor = 1;
changeColorBtn.addEventListener("click", () => {
  if (changeColor == 1) {
    circleRed.style.backgroundColor = "red";
    changeColor++;
  } else if (changeColor == 2) {
    circleYellow.style.backgroundColor = "yellow";
    circleRed.style.backgroundColor = "";

    changeColor++;
  } else if (changeColor == 3) {
    circleRed.style.backgroundColor = "";
    circleYellow.style.backgroundColor = "";
    circleGreen.style.backgroundColor = "green";
    changeColor++;
  } else {
    circleRed.style.backgroundColor = "";
    circleYellow.style.backgroundColor = "";
    circleGreen.style.backgroundColor = "";
    changeColor = 1;
  }
});
