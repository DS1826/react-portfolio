import React from "react";
import "./style.css";

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" >DSaunders</a>
                {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" >Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" >About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" >Portfolio</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;