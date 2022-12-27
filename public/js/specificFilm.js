
/* the stars functionality */
const stars = [...document.querySelectorAll(".star")];
stars.forEach((currentStar,index) => {
    currentStar.addEventListener("click",() => {
      const pathname = window.location.pathname;
      console.log("the number of stars is : ",+currentStar.dataset.value)
      fetch(pathname,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
          stars : +currentStar.dataset.value,
        })
      })
      .then((res) => {
        console.log(res)
        return res.json()
      }).then((res) => {
        console.log("res : ",res)
        if(res["message"] === "err"){
          const alert = document.querySelector(".alert");
        alert.dataset.state="showen";
        setTimeout(() => {
          alert.dataset.state="hidden";
        },3000)
        }else{
          let currentStarIndex = index; 
        stars.forEach(star => star.classList.add('disable'));
        while(currentStarIndex < stars.length){
          stars[currentStarIndex].classList.remove('disable');
          currentStarIndex++;
        }
        }
        
      }).catch((e) => {
        console.log("from fetch ",e)
        
      })
    
  })
})