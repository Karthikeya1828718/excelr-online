import React from 'react'
import laptop1 from "./laptop1.jpg"
import laptop2 from "./laptop2.jpg"
import laptop3 from "./laptop3.jpg"
import laptop4 from "./laptop4.jpg"
const BootstrapTask2 = () => {
  return (
   <>
   <div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={laptop1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={laptop2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={laptop3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> 
   </>
  )
}

export default BootstrapTask2