// import function components from page-load.js
import {instructorName, yogaPoseImage, section1Description, pageLoadNav, flipChartTitle, section2Component, section3Component, section4Component, section5Component, section6Component, section7Component, section8Component, section9Component, section1Component, section10Component } from "./page-load";
// import css style file
import './style.css'

// get body element
const body = document.body;

// access content output container
const contentOutput = document.getElementById('content')

// append restaurant name to content output
// body.insertBefore(instructorName(), contentOutput)

// append nav to content output
// body.insertBefore(pageLoadNav(), contentOutput)
 // append yoga pose image to content output
// contentOutput.appendChild(yogaPoseImage());

 // access description container 
// const section1Container = document.getElementById('description-container')
// append  description to description container
// section1Container.appendChild(section1Description())

// setInterval(flipChartTitle, 2000);

// append section 1 to dom
contentOutput.appendChild(section1Component())

contentOutput.appendChild(section4Component())

// contentOutput.appendChild(section2Component())

// contentOutput.appendChild(section3Component())

// contentOutput.appendChild(section5Component())

// contentOutput.appendChild(section6Component())

contentOutput.appendChild(section8Component())
contentOutput.appendChild(section7Component())


contentOutput.appendChild(section10Component())
contentOutput.appendChild(section9Component())

contentOutput.appendChild(instructorName())


// set href attributes to in page link of each nav item
const about = document.getElementById('About-anchor')
about.href = '#section-1-parent-container';
const training = document.getElementById('Training-anchor')
training.href = '#section-7-parent-container';
const contact = document.getElementById('Contact-anchor')
contact.href = '#section-9-parent-container';





