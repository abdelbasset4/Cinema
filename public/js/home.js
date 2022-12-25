const logout = document.querySelector("#logout");
if(logout){
    logout.addEventListener('click',() => {
        fetch('/logout',{method : 'POST'}).then(() => {
            window.location.reload()
        })
    })
}


/* slider */

const leftArrow = document.querySelector(".left-arrow");
let transformValue = 0;

let counter = 0;
leftArrow.addEventListener("click",() => {
  const cards = [...document.querySelectorAll(".card")];
  if(counter < cards.length - 1){
    transformValue -= 300;
    cards.forEach(card => {
    card.style.transform = `translateX(${transformValue}px)`;
  });
    counter++;
    
  }
  
})

const rightArrow = document.querySelector(".right-arrow");
rightArrow.addEventListener("click",() => {
  const cards = [...document.querySelectorAll(".card")];
  if(counter > 0){
    transformValue += 300;
    cards.forEach(card => {
    card.style.transform = `translateX(${transformValue}px)`;
    
  });
    counter--;
    
  }
  
})


/* append the movies on the slider */ 
const salle = document.getElementById("salle");
const slider = document.querySelector(".slider-container .slider");
salle.addEventListener('input',() => {
  console.log(salle.value)
  slider.innerHTML = "";
  counter = 0;
  transformValue =0;
  getShowedFilms();
})
function getShowedFilms(){
  fetch("/film",{
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }).then((result) => {
    return result.json()
  }).then((films) => {
    console.log(films)
    const filmsBySalle = films.filter((film) => film.id_salle === +salle.value);
    
    filmsBySalle.forEach(film => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
      <a href="/film/${film.titre.replace(' ','-')}"><picture class="poster-container">
      <img src='/images/${film.image}' alt=''>
      </picture>
      <h6 class="mt-2 text-center">${film.titre}</h6></a>`;
      slider.append(card);
    })
  })
}
getShowedFilms();