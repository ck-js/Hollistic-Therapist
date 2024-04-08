import logoWhite from './logo.png'
import introVideo from './intro2.mp4';
import section2Image from './section2image2.jpg'
import section3Image from './section3image.jpg'
import eyeIconSvg from './eye-arrow-left.svg';
import './chamsbold.ttf';
import './Lora-SemiBold.ttf';


function instructorName() {
    const div = document.createElement('div');
    const image = new Image();
image.src = logoWhite;
image.alt = 'glow on flow logo... go home '


div.appendChild(image)

    return div;
}
function pageLoadNav() {
// create nav container 
    const navContainer = document.createElement('div');
navContainer.id = 'nav-container';
// create ul element 
const ulElement = document.createElement('ul');
ulElement.id = 'nav-ul';
// create array of list items
const navItems = ['About', 'Training', 'Contact']

// loop through nav items
for (let i = 0; i < navItems.length; i++) {
// create li element
const liElement = document.createElement('li');
// set id of list items
liElement.id = navItems[i]
// set text content of each li element
liElement.textContent = navItems[i];

// append li elements to ul element
ulElement.appendChild(liElement);

// liElement.addEventListener('click', (event) => {
//     alert('hello' + event.target.textContent)
// })
}
// append ul element to nav container
navContainer.appendChild(ulElement)

return navContainer;

}

function yogaPoseImage() {
    const descriptionContainer = document.createElement('div');
    const imgContainer = document.createElement('div');

descriptionContainer.id = 'description-container';
imgContainer.id = 'img-container';

    // const img = new Image();
    // img.src = yogaPoseImg;
    // img.alt = 'women holding yoga pose with full moon in background';

const videoElement = document.createElement('video')
videoElement.src = introVideo;
videoElement.autoplay = true;
videoElement.loop = true;
videoElement.muted = true;
// videoElement.alt = 'scenic video of a women with moving landscape between forest and ocean sunset'

imgContainer.style.backgroundImage = 'url(introVideo)'

    descriptionContainer.appendChild(imgContainer)
imgContainer.appendChild(videoElement)

    return descriptionContainer;
}
function section1Description() {

    const div = document.createElement('div');
    div.id = 'text-container';
const h1 = document.createElement('h1');
h1.id = 'section-1-title';
h1.classList.add('titles')
    
const p = document.createElement('p');
// p.id = 'section-1-paragraph';
p.id = 'paragraph-description';
// h1.innerHTML = '';

// Glow on Flow is a community where women of all ages and backgrounds embark on a journey toward glowing skin and inner well-being with holistic self-care approaches 
// Our mission is to change how women think about aging by embracing the journey instead of fighting it. At Glow on Flow, we empower women to appreciate the beauty of every stage of life.

p.textContent = "Glow on Flow is a community where women of all ages and backgrounds embark on a journey toward glowing skin and inner well-being with holistic self-care approaches";

div.appendChild(h1)
div.appendChild(p)

return div;
}

const flipChartTitles = [
    'glowing skin',
    'empowerment',
 'female community',
  'inner wellbeing',
   'hollistic self care',
    'embracing the journey',
'beauty',

    ];
    let currentIndex = 0;
function flipChartTitle() {
    
  const flipChartElement = document.getElementById("section-1-title");
  flipChartElement.textContent = flipChartTitles[currentIndex];
  
  currentIndex = (currentIndex + 1) % flipChartTitles.length;
}

// section 2 components 
function section2Component() {
const parentContainer = document.createElement('div')
parentContainer.classList.add('bio')
parentContainer.id = 'section-2-parent-container';

const imageContainer = document.createElement('div');
imageContainer.id = 'section-2-image-container';

const imageWrapper = document.createElement('div');
imageWrapper.id = 'section-2-image-wrapper';
const image = new Image();
image.src = section2Image;
image.alt = 'majestic asian woman with eyes closed holding her chest';
imageWrapper.appendChild(image)
imageContainer.appendChild(imageWrapper)

const textsContainer = document.createElement('div');
textsContainer.id = 'section-2-text-container';

const p1 = document.createElement('p')
p1.id = 'section-2-paragraph-1';
p1.textContent = "- rejuvenate your mind and soul -";

const h1 = document.createElement('h1');
h1.id = 'section-2-title';
h1.classList.add('titles')
h1.textContent = 'glow on flows mission'
  
const p2 = document.createElement('p')
p2.id = 'section-2-paragraph';
p2.textContent = "Our mission is to change how women think about aging by embracing the journey instead of fighting it. At Glow on Flow, we empower women to appreciate the beauty of every stage of life.";

const button = document.createElement('button')
const anchor = document.createElement('a');
button.appendChild(anchor)
anchor.textContent = 'Learn More';



textsContainer.appendChild(p1)
textsContainer.appendChild(h1)
 textsContainer.appendChild(p2)
 textsContainer.appendChild(button)

 parentContainer.appendChild(imageContainer)
parentContainer.appendChild(textsContainer)

return parentContainer

}

// section 3 components 
function section3Component() {
    const parentContainer = document.createElement('div')
    parentContainer.classList.add('bio')
    parentContainer.id = 'section-3-parent-container';

const image = new Image();
image.src = section3Image;

parentContainer.appendChild(image)

    parentContainer.style.backgroundImage = 'url(image)'

    const textsContainer = document.createElement('div');
    textsContainer.id = 'section-3-text-container';
    
    const h1 = document.createElement('h1');
    h1.id = 'section-3-title';
    h1.classList.add('titles')
    h1.textContent = "about Preechaya";
    
wrapWordInSpan('Preechaya',h1)


    const p = document.createElement('p')
    p.id = 'section-3-paragraph';
    p.textContent = "I'm Preechaya, and I'm on a mission to redefine the way we approach skincare, beauty, and aging.";
    
    textsContainer.appendChild(h1)
     textsContainer.appendChild(p)
    
    parentContainer.appendChild(textsContainer)
    
    return parentContainer
    }
    
// section 4 components 
function section4Component() {
    const parentContainer = document.createElement('div')
    parentContainer.classList.add('bio')
    parentContainer.id = 'section-4-parent-container';
    
    const textsContainer = document.createElement('div');
    textsContainer.id = 'section-4-text-container';
    
const p = document.createElement('p')
    p.id = 'section-4-paragraph';
    p.textContent = "- embrace your unique journey -";

    const h1 = document.createElement('h1');
    h1.id = 'section-4-title';
    h1.classList.add('titles')
    h1.textContent = "experience the power of hollistic self-care rituals for radiant skin and wellbeing";
    
const button = document.createElement('a')
button.textContent = 'Discover'
button.href = '#section-2-parent-container'
button.ariaLabel = 'click to discover'
    
     textsContainer.appendChild(p)
    textsContainer.appendChild(h1)
    textsContainer.appendChild(button)
    
    
    parentContainer.appendChild(textsContainer)
    
    return parentContainer
    }

// section 5 components 
function section5Component() {
    const parentContainer = document.createElement('div')
    parentContainer.classList.add('bio')
    parentContainer.id = 'section-5-parent-container';
    
    const textsContainer = document.createElement('div');
    textsContainer.id = 'section-5-text-container';
    
    const h1 = document.createElement('h1');
    h1.id = 'section-5-title';
    h1.classList.add('titles')
    h1.textContent = "...getting to the root cause";
    
    wrapWordInSpan('root', h1)

    const p = document.createElement('p')
    p.id = 'section-5-paragraph';
    p.textContent = "As my passion for holistic beauty continued to grow, I pursued further certifications as a face yoga teacher and delved deeper into the iconic Sculptural Face Lifting™ method, which has now become my specialty. My commitment to holistic wellness and desire to empower others to embrace their natural beauty have guided each step of my journey.";
    
    textsContainer.appendChild(h1)
     textsContainer.appendChild(p)
    
    parentContainer.appendChild(textsContainer)
    
    return parentContainer
    }
// section 6 components 
function section6Component() {
    const parentContainer = document.createElement('div')
    parentContainer.classList.add('bio')
    parentContainer.id = 'section-6-parent-container';
    
    const textsContainer = document.createElement('div');
    textsContainer.id = 'section-6-text-container';
    
    const h1 = document.createElement('h1');
    h1.id = 'section-6-title';
    h1.textContent = "Paulas life mission.";
    wrapWordInSpan('Paulas', h1)


    const p = document.createElement('p')
    p.id = 'section-6-paragraph';
    p.textContent = "As my passion for holistic beauty continued to grow, I pursued further certifications as a face yoga teacher and delved deeper into the iconic Sculptural Face Lifting™ method, which has now become my specialty. My commitment to holistic wellness and desire to empower others to embrace their natural beauty have guided each step of my journey.";
    
    textsContainer.appendChild(h1)
     textsContainer.appendChild(p)
    
    parentContainer.appendChild(textsContainer)
    
    return parentContainer
    }

// section 7 components 
function section7Component() {
    const parentContainer = document.createElement('div')
    parentContainer.classList.add('bio')
    parentContainer.id = 'section-7-parent-container';
    
    const textsContainer = document.createElement('div');
    textsContainer.id = 'section-7-text-container';
    
    const h1 = document.createElement('h1');
    h1.id = 'section-7-title';
    h1.textContent = "Education & Certifications";
    // wrapWordInSpan('Paula', h1)

    // const p = document.createElement('p')
    // p.id = 'section-7-paragraph';
    // p.textContent = "Paula offers group workshops and one-on-one private sessions to guide individuals back into their mind and body. Her core offerings are rooted in Subtle Body Anatomy (energy body anatomy) and Physical Anatomy, combined with practices such as Yoga, Intuitive Anatomy, African Reflexology, Family & Systemic Constellation, Kinesiology, and Flower Essence Therapy.";
    
const ul = document.createElement('ul')
const li1 = document.createElement('li');
li1.textContent = 'Certified Facialist by Health & Beauty Development School of Thailand'
const li2 = document.createElement('li');
li2.textContent = 'Certified Integrative Vibrational Therapist by Yoga Sound Therapy'
const li3 = document.createElement('li');
li3.textContent = 'Certified Face Yoga Teacher by The Danielle Collins Face Yoga Method'
const li4 = document.createElement('li');
li4.textContent = 'Certified Sculptural Face Lifting™ Professional by Yakov Gershkovich'

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);


    textsContainer.appendChild(h1)
     textsContainer.appendChild(ul)
    
    parentContainer.appendChild(textsContainer)
    
    return parentContainer
    }

// section 8 components 
function section8Component() {
    const parentContainer = document.createElement('div')
    parentContainer.id = 'section-8-parent-container';
    
    const cardsContainer = document.createElement('div');
    cardsContainer.id = 'section-8-cards-container';
    
const cardItem1 = document.createElement('div')
cardItem1.classList.add('card-item')
const cardItem2 = document.createElement('div')
cardItem2.classList.add('card-item')
const cardItem3 = document.createElement('div')
cardItem3.classList.add('card-item')
const cardItem4 = document.createElement('div')
cardItem4.classList.add('card-item')

let eyeIcon = new Image();
eyeIcon.src = eyeIconSvg; 
eyeIcon.alt = 'hello there'
eyeIcon.id = 'eye-icon'
cardItem1.style.backgroundImage = 'url(eyeIcon)'

const cardTitle = document.createElement('h5')
cardTitle.textContent = 'In-Person Facial Treatments:';

const cardDescription = document.createElement('p');
cardDescription.textContent = 'Get visibly rejuvenated and relaxed with my signature facial treatments, which focus on hand massage techniques. My services include Sculptural Face Lifting, gua sha, and facial cupping. You can visit me at my Chaya Wellness Koh Phangan studio or as a guest therapist at various locations. Join my inner circle list for updates on availability.'

cardItem1.appendChild(eyeIcon)
cardItem1.appendChild(cardTitle)
cardItem1.appendChild(cardDescription)


const eyeIcon2 = new Image();
eyeIcon2.src = eyeIconSvg; 
eyeIcon2.alt = 'hello there'
eyeIcon2.id = 'eye-icon'
cardItem2.style.backgroundImage = 'url(eyeIcon2)'

const cardTitle2 = document.createElement('h5')
cardTitle2.textContent = 'Face Yoga Workshops:';

const cardDescription2 = document.createElement('p');
cardDescription2.textContent = 'Join me for transformative Face Yoga workshops, offered both online and in-person in group settings or private sessions, which include personalized consultations and tailored face yoga guides to address your unique facial needs.'

cardItem2.appendChild(eyeIcon2)
cardItem2.appendChild(cardTitle2)
cardItem2.appendChild(cardDescription2)


const eyeIcon3 = new Image();
eyeIcon3.src = eyeIconSvg; 
eyeIcon3.alt = 'hello there'
eyeIcon3.id = 'eye-icon'
cardItem3.style.backgroundImage = 'url(eyeIcon3)'

const cardTitle3 = document.createElement('h5')
cardTitle3.textContent = 'Self-Care Resources:';

const cardDescription3 = document.createElement('p');


cardItem3.appendChild(eyeIcon3)
cardItem3.appendChild(cardTitle3)
cardItem3.appendChild(cardDescription3)



    parentContainer.appendChild(cardsContainer)
    cardsContainer.appendChild(cardItem1)
    cardsContainer.appendChild(cardItem2)
    cardsContainer.appendChild(cardItem3)
    

    return parentContainer
    }

// section 9 components 
function section9Component() {
    const parentContainer = document.createElement('div')
    parentContainer.id = 'section-9-parent-container';
    
    const textsContainer = document.createElement('div');
    textsContainer.id = 'section-9-text-container';
    
    const h1 = document.createElement('h1');
    h1.id = 'section-7-title';
    h1.textContent = "Contact Paula";
    
const hr = document.createElement('hr')

    const p = document.createElement('h6')
    p.id = 'section-7-paragraph';
    p.textContent = "+66 123456789";
    
    const p2 = document.createElement('h6')
    p2.id = 'section-7-paragraph-2';
    p2.textContent = "paulasmoonbythesea@gmail.com";
    
    textsContainer.appendChild(h1)
    textsContainer.appendChild(hr)
     textsContainer.appendChild(p)
     textsContainer.appendChild(p2)
    
    parentContainer.appendChild(textsContainer)
    
    return parentContainer
    }



    function wrapWordInSpan(word, h1Element) {
        const words = h1Element.textContent.split(' ');
      
        for (var i = 0; i < words.length; i++) {
          if (words[i] === word) {
            var span = document.createElement('span');
            span.textContent = words[i];
            span.id = 'span-' + i
            // span.style.color = '#7315cb';
            span.style.fontWeight = 'bold';
      
            words[i] = span.outerHTML;
          }
        }
      
        h1Element.innerHTML = words.join(' ');
      }





export {
    instructorName,
     yogaPoseImage,
      section1Description,
       pageLoadNav,
       flipChartTitle,
       section2Component,
       section3Component,
       section4Component,
       section5Component,
       section6Component,
       section7Component,
       section8Component,
       section9Component,

     }; 