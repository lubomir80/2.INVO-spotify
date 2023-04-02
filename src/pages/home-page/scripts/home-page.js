/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.
"use strict"


const music = [
   {
      id: "01",
      active: "active",
      img: "./img/music2.png",
      name1: "Flowers",
      name2: "Flowers",
      artists: "Miley Cyrus",
      time: "3:20"
   },
   {
      id: "02",
      img: "./img/music3.png",
      name1: "Sos",
      name2: "Kill Bill",
      artists: "Sza",
      time: "2:32"
   },
   {
      id: "03",
      img: "./img/music4.png",
      name1: "Gemini Rights",
      name2: "Bad Habit",
      artists: "Steve Lacy",
      time: "3:52"
   },
   {
      id: "04",
      img: "./img/music5.png",
      name1: "Talk To Me",
      name2: "Talk To Me",
      artists: "Mark Menday, Seb Mont",
      time: "2:28"
   },
   {
      id: "05",
      img: "./img/music6.png",
      name1: "Sour",
      name2: "Good 4 u",
      artists: "Olivia Rodrigo",
      time: "2:58"
   },
   {
      id: "06",
      img: "./img/music7.png",
      name1: "Singiel",
      name2: "INDUSTRY BABY",
      artists: "Lil Nas X",
      time: "3:32"
   },
   {
      id: "07",
      img: "./img/music8.png",
      name1: "Fine Line",
      name2: "Watermelon Sugar",
      artists: "Harry Styles",
      time: "2:54"
   },
   {
      id: "08",
      img: "./img/music9.png",
      name1: "Fine Line",
      name2: "Always",
      artists: "Isak Daniels",
      time: "3:33"
   },

]

const playlist = document.querySelector(".home__playlist__list");

function putAllMusicItemsToPlayist() {
   playlist.innerHTML = "";

   music.forEach(item => {
      const { id, active, img, name1, name2, artists, time } = item;

      const music = document.createElement('li');
      if (active) {
         music.classList.add('active');
      }

      music.classList.add('music');
      music.classList.add('padding-y-md');
      music.innerHTML =
         `<div class="music__box-info">
         <div class="music__box-info__number">${id}</div>
         <button class="music__box-info__play-btn">
            <svg class="music__box-info__icon" viewBox="0 0 18 20" fill="none"
               xmlns="http://www.w3.org/2000/svg">
               <path
                  d="M3.26117 0.440984C1.46015 -0.593306 0 0.253997 0 2.33197V17.6665C0 19.7466 1.46015 20.5928 3.26117 19.5595L16.6488 11.8728C18.4504 10.8382 18.4504 9.16189 16.6488 8.12748L3.26117 0.440984Z"
                  fill="white" />
            </svg>
         </button>
         <div class="music__box-info__box-img">
            <img src="${img}" alt="img">
         </div>
         <div class="music__text">
            <p class="music__text--sm">${name1}</p>
            <p class="music__text--md">${name2}</p>
         </div>
      </div>
      <div class="music__box-artist">
         <div class="music__text">
            <p class="music__text--sm">Artists</p>
            <p class="music__text--md">${artists}</p>
         </div>
      </div>
      <div class="music__box-time">
         <div class="music__text">
            <p class="music__text--sm">Time</p>
            <p class="music__text--md">${time}</p>
         </div>
      </div>
      <div class="music__box-btn">
         <button class="favor__btn favor__btn--sm">
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g clip-path="url(#clip0_1_3742)">
                  <path
                     d="M15.1094 2.0321C13.4457 2.0321 11.9873 2.77394 10.8918 4.17746C10.7457 4.36464 10.6154 4.55191 10.5 4.73328C10.3846 4.55187 10.2543 4.36464 10.1082 4.17746C9.01273 2.77394 7.5543 2.0321 5.89062 2.0321C2.74781 2.0321 0.5 4.66363 0.5 7.82132C0.5 11.432 3.45926 14.8349 10.0952 18.8549C10.2196 18.9303 10.3598 18.968 10.5 18.968C10.6402 18.968 10.7804 18.9303 10.9048 18.855C17.5407 14.8349 20.5 11.432 20.5 7.82136C20.5 4.66531 18.254 2.0321 15.1094 2.0321ZM16.8733 12.3172C15.4918 13.8587 13.4041 15.4818 10.5 17.2712C7.5959 15.4818 5.5082 13.8587 4.12668 12.3173C2.7377 10.7674 2.0625 9.29679 2.0625 7.82136C2.0625 5.54777 3.59898 3.5946 5.89062 3.5946C7.05766 3.5946 8.05273 4.10203 8.84824 5.10281C9.48434 5.90316 9.75234 6.7296 9.75422 6.7355C9.85598 7.06187 10.1582 7.28417 10.5 7.28417C10.8419 7.28417 11.1441 7.06191 11.2459 6.7355C11.2483 6.72761 11.5083 5.92695 12.1235 5.13882C12.9233 4.11414 13.9279 3.59457 15.1094 3.59457C17.4034 3.59457 18.9375 5.5496 18.9375 7.82132C18.9375 9.29675 18.2623 10.7674 16.8733 12.3172Z"
                     fill="#BFBFBF" />
               </g>
               <defs>
                  <clipPath id="clip0_1_3742">
                     <rect width="20" height="20" fill="white" transform="translate(0.5 0.5)" />
                  </clipPath>
               </defs>
            </svg>
         </button>
         <button text="${id}" class="details__btn details__btn--sm">
            ...
            <div class="details">
               <ul class="details__box">
                  <li class="details__item">
                     Add to queue
                  </li>
               </ul>
               <ul class="details__box">
                  <li class="details__item">
                     Go to the track </li>
                  <li class="details__item">
                     Go to the artist</li>
                  <li class="details__item">
                     Go to album</li>
                  <li class="details__item">
                     Show content authors</li>
               </ul>
               <ul class="details__box">
                  <li class="details__item">
                     Add to playlist
                  </li>
                  <li class="details__item">
                     Show content authors
                     <svg width="12" height="18" viewBox="0 0 12 18" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                           d="M11.0006 8.29764L2.99038 0.287559C2.80512 0.102146 2.5578 0 2.2941 0C2.03039 0 1.78308 0.102146 1.59781 0.287559L1.00791 0.87731C0.624062 1.2616 0.624062 1.88618 1.00791 2.26988L7.7343 8.99627L1.00045 15.7301C0.815183 15.9155 0.712891 16.1627 0.712891 16.4263C0.712891 16.6901 0.815183 16.9373 1.00045 17.1228L1.59035 17.7124C1.77576 17.8979 2.02293 18 2.28663 18C2.55034 18 2.79765 17.8979 2.98292 17.7124L11.0006 9.69504C11.1863 9.50904 11.2883 9.26071 11.2877 8.99671C11.2883 8.73169 11.1863 8.48349 11.0006 8.29764Z"
                           fill="#BFBFBF" />
                     </svg>
                  </li>
               </ul>
               <ul class="details__box">
                  <li class="details__item">
                     Share
                     <svg width="12" height="18" viewBox="0 0 12 18" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                           d="M11.0006 8.29764L2.99038 0.287559C2.80512 0.102146 2.5578 0 2.2941 0C2.03039 0 1.78308 0.102146 1.59781 0.287559L1.00791 0.87731C0.624062 1.2616 0.624062 1.88618 1.00791 2.26988L7.7343 8.99627L1.00045 15.7301C0.815183 15.9155 0.712891 16.1627 0.712891 16.4263C0.712891 16.6901 0.815183 16.9373 1.00045 17.1228L1.59035 17.7124C1.77576 17.8979 2.02293 18 2.28663 18C2.55034 18 2.79765 17.8979 2.98292 17.7124L11.0006 9.69504C11.1863 9.50904 11.2883 9.26071 11.2877 8.99671C11.2883 8.73169 11.1863 8.48349 11.0006 8.29764Z"
                           fill="#BFBFBF" />
                     </svg>
                  </li>
               </ul>
            </div>
         </button>
      </div> `

      playlist.appendChild(music);

   })
}
putAllMusicItemsToPlayist()


const home = document.getElementById("home");
const musicItemsColection = document.querySelectorAll(".music");
const detailsBtnColection = document.querySelectorAll(".details__btn--sm");
const detailsModalColection = document.querySelectorAll(".details");
const meniuNavColection = document.querySelectorAll(".menu__item")
const testArtist = document.querySelectorAll(".music__text--md");



musicItemsColection.forEach(item => {

   item.addEventListener("click", (e) => {
      // 1. Active music item
      musicItemsColection.forEach(item => item.classList.remove("active"));
      item.classList.add("active");

      // 2. Opent details btn
      if (e.target.classList.contains("details__btn")) {
         detailsBtnColection.forEach(item => item.classList.remove("active"));
         item.querySelector(".details__btn").classList.toggle("active");
      }
   })
})



home.addEventListener("click", (e) => {
   if (!e.target.classList.contains("details") && !e.target.classList.contains("details__btn")) {
      detailsBtnColection.forEach(item => item.classList.remove("active"));
   }
})

meniuNavColection.forEach((nav) => {
   nav.addEventListener("click", (e) => {
      meniuNavColection.forEach(item => item.classList.remove("active"));
      nav.classList.add("active");
   })
})












