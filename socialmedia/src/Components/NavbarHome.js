import React from 'react'




function NavbarHome() {
 

  
  return (
    <div className="navbar">
    <h2>SOCIALNETWORK</h2>
    <div className="nav-input">
      <input type="text" placeholder="Search" />

      <button className="nav-button">
        <p className="nav-button-text">Search</p>
      </button>
    </div>
    <button className="nav-button">
    <p className="nav-button-text" >Upload</p>
    </button>
    <div>
      <div>
        <img/>
      </div>
      <div>
        <p>Wassem</p>
        <p>Arshad</p>
      </div>
    </div>
  
  </div >
 
    )

}

export default NavbarHome; 