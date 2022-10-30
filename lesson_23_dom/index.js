// Const
const musicList = document.getElementById('js-playlist');
const showWindowBtn = document.getElementById('js-button');
const changeColorBtn = document.getElementById('js-button-traffic-lights');
const addNewSongBtn = document.getElementById('js-add-new-song');
const circles = document.getElementsByClassName('js-circles');
// Array

const playList = [
  {
    author: 'LED ZEPPELIN',
    song: 'STAIRWAY TO HEAVEN',
  },
  {
    author: 'QUEEN',
    song: 'BOHEMIAN RHAPSODY',
  },
  {
    author: 'LYNYRD SKYNYRD',
    song: 'FREE BIRD',
  },
  {
    author: 'DEEP PURPLE',
    song: 'SMOKE ON THE WATER',
  },
  {
    author: 'JIMI HENDRIX',
    song: 'ALL ALONG THE WATCHTOWER',
  },
  {
    author: 'AC/DC',
    song: 'BACK IN BLACK',
  },
  {
    author: 'QUEEN',
    song: 'WE WILL ROCK YOU',
  },
  {
    author: 'METALLICA',
    song: 'ENTER SANDMAN',
  },
];

// Displays a numbered list
const list = document.createElement('ol');
list.classList.add('playlist__list');
musicList.appendChild(list);
for (const element of playList) {
  const li = document.createElement('li');
  li.classList.add('playlist__item');
  li.innerText = `${element.author} - ${element.song}`;
  list.appendChild(li);
}

//* Add New Song
//! Optional
const createNewPlayList = (element) => {
  const li = document.createElement('li');
  li.classList.add('playlist__item');
  li.innerText = ` ${element.author} - ${element.song}`;
  list.appendChild(li);
};
const createPlayList = () => {
  createNewPlayList({
    author: prompt(`Enter author`),
    song: prompt(`Enter name of song`),
  });
};
addNewSongBtn.addEventListener('click', () => {
  createPlayList();
});
//! Optional

// Button show || hide
let visibility = false;
showWindowBtn.addEventListener('click', () => {
  visibility = !visibility;
  if (visibility) {
    list.style.display = 'none';
    document.getElementById('js-button').textContent = 'Відкрити';
  } else {
    list.style.display = 'block';
    document.getElementById('js-button').textContent = 'Закрити';
  }
});
// Trafic Lights
// const trafficLightTypes = {
//   RED: 0,
//   YELLOW: 1,
//   GREEN: 2,
// };
// let activeCircle = trafficLightTypes.RED;
let activeCircle = 0;
let default1 = 0;
changeColorBtn.addEventListener('click', () => {
  for (const circle of circles) {
    circle.classList.remove('active');
  }
  activeCircle += 1;
  if (activeCircle === circles.length + 1) {
    activeCircle = 0;
  }
  console.log('circles.length: ', circles.length);
  console.log('activeCircle: ', activeCircle);
  // switch (activeCircle) {
  //   case trafficLightTypes.RED: {
  //     activeCircle = trafficLightTypes.YELLOW;
  //     break;
  //   }
  //   case trafficLightTypes.YELLOW: {
  //     activeCircle = trafficLightTypes.GREEN;
  //     break;
  //   }
  //   case trafficLightTypes.GREEN: {
  //     activeCircle = trafficLightTypes.RED;
  //     break;
  //   }
  // }
  circles[activeCircle].classList.add('active');
});
