import React from "react";
import './navbar.css';
const Navbar = () => {
  return (
    <div>
         <nav
        class="navbar navbar-expand-lg navbar-light bg-transparent opacity-{25} "
        width={"30px"}
      >
        <div className="A">
          <img src="Logo.png" width={"80px"} />
        </div>

        <a class="text-secondary pt-5 mt-5 ">
          <b>Swami Giananand maharaj ji</b>
        </a>
        <a class="navbar-brand ml-5" href="#">
          Geio Gita
        </a>
        <button
          class="navbar-toggler ml-5"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse ml-5" id="navbarNavAltMarkup">
          <div class="navbar-nav ml-4">
            <a class="nav-item nav-link active ml-4" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
            <a class="nav-item nav-link ml-5" href="#">
              Features
            </a>
            <a class="nav-item nav-link ml-5" href="#">
              Pricing
            </a>
          </div>
        </div>
      </nav>
      <div>
       <iframe
        id="headerIframe"
        title="Embedded Website"
        src=""
        width="100%"
        height="400"
      ></iframe>
      

       <p className="carousel-caption d-none d-md-block"><button type="button" className="btn btn-light btn-lg btn-block  ">Block level button</button></p>
      </div>
      
     
    </div>
  );
};

export default Navbar;
