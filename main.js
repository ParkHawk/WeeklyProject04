/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play
let results = document.getElementById("results");
let input = document.getElementById("artist");
let button = document.getElementById("button");
let audio = document.getElementById("music-player");
let search = document.getElementById("search-form");
console.log("start")

button.addEventListener("click", function() {
  console.log("Event Listener")
  results.innerHTML = ``;
  fetch(`https://itunes.apple.com/search?term=${input.value}`)
    .then(function(response) {
      response.json().then(function(data) {
        console.log(data)

        for (var i = 0; i < data.results.length; i++) {
          console.log(data.results[i]);
          let div = document.createElement("section");
          results.appendChild(div);
          div.className = "bigBox";
          div.value = `${data.results[i].previewUrl}`

          div.innerHTML = `<img src = "${data.results[i].artworkUrl100}"> <h3>${data.results[i].trackName}</h3><h1 class = "band">${data.results[i].artistName}</h1>`

          div.addEventListener("click", function() {
            audio.src = div.value;
            })
        }


      })
    })
})
