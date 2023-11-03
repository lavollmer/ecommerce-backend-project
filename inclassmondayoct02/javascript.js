var divTag = document.querySelector("div");

var stuffToLoad = [
  { id: 1, name: "Monster Truck Rally 5000", poster: "http://www...." },
  { id: 2, name: "Monster Truck Rally 6000", poster: "http://www...." },
  { id: 3, name: "Monster Truck Rally 7000", poster: "http://www...." },
  { id: 4, name: "Monster Truck Rally 9000", poster: "http://www...." }
]


divTag.addEventListener("click", function (event) {
  if (event.target.matches("button")) {
    if (event.target.getAttribute("id") === "1") {
      console.log("Best movie ever!!")
    }
  }
})

stuffToLoad.forEach(function (movie) {
  var btn = document.createElement("button");
  btn.textContent = movie.name
  btn.setAttribute("id", movie.id)
  btn.setAttribute("data-poster", movie.poster)
  divTag.append(btn)
})