// import function components from page-load.js
import {
    section1Component,
     section2Component,
      section3Component,
       section4Component,
        section5Component,
         section6Component,
        
    } from "./page-load";
// import css style file
import './style.css'

// get body element
const body = document.body;

// access content output container
const contentOutput = document.getElementById('content')

// append section 1 to dom
contentOutput.appendChild(section1Component())
contentOutput.appendChild(section2Component())

contentOutput.appendChild(section4Component())
contentOutput.appendChild(section3Component())

contentOutput.appendChild(section5Component())
contentOutput.appendChild(section6Component())

