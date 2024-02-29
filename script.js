let All_song = [
    {
      name: "Faded",
      path: "audio/Faded.mp3",
      img: "img/faded.jpg",
      singer: "Alan Walker"
    },
    {
      name: "Levitating",
      path: "audio/Levitating.mp3",
      img: "img/levitating.jpeg",
      singer: "Dua Lipa"
    },
    {
      name: "Story of my Life",
      path: "audio/Story of My Life.mp3",
      img: "img/story of my life.jpg",
      singer: "One Direction"
    },
    {
      name: "Memories",
      path: "audio/Memories.mp3",
      img: "img/memories.jpeg",
      singer: "Maroon 5"
    },
    {
      name: "Stitches",
      path: "audio/Stitches.mp3",
      img: "img/stitches.jpg",
      singer: "Shawn Mendes"
    },
 ];
 /*you can add more song & images from you computer*/
 
 
 /*tracks*/
 let tracks = document.querySelector('.tracks');
 
 //creating a list or generating Html
 for (let i = 0; i < All_song.length; i++) {
 
   let Html = ` <div class="song">
       <div class="img">
       <img src="${All_song[i].img}"/>
       </div>
       <div class="more">
       <audio src="${All_song[i].path}" id="music"></audio>
       <div class="song_info">
          <p id="title">${All_song[i].name}</p>
          <p>${All_song[i].singer}</p>
       </div>
       <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
       </div>
     </div>`;
 
   tracks.insertAdjacentHTML("beforeend", Html);
 };