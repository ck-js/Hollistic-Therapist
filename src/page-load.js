import logoWhite from './logo.png'

import section1Image from './section1image.jpg';
import services1Image from './services1image.jpeg';
import services2Image from './services2image.jpeg';
import services3Image from './services3image.jpeg';
import services4Image from './services4image.jpg';

import section2Image from './section2image2.jpg'
import section3Image from './section3image.jpg'
import section7Image from './section7image.jpg'
import eyeIconSvg from './logo2.png';
import facebookLogo from './Social-media-icons/facebook.svg'
import instagramLogo from './Social-media-icons/instagram.svg'
import whatsappLogo from './Social-media-icons/whatsapp.svg'
import googleMapsLogo from './Social-media-icons/google-maps.svg'

import './chamsbold.ttf';
import './Lora-SemiBold.ttf';


// function instructorName() {
//     const div = document.createElement('div');
//     div.classList.add('home-logo')
//     const image = new Image();
// image.src = logoWhite;
// image.alt = 'glow on flow logo... go home '


// div.appendChild(image)

//     return div;
// }
// function pageLoadNav() {
// // create nav container 
//     const navContainer = document.createElement('div');
// navContainer.id = 'nav-container';
// // create ul element 
// const ulElement = document.createElement('ul');
// ulElement.id = 'nav-ul';
// // create array of list items
// const navItems = ['About', 'Training', 'Contact']

// // loop through nav items
// for (let i = 0; i < navItems.length; i++) {
// // create li element
// const liElement = document.createElement('li');
// // set id of list items
// liElement.id = navItems[i]

// // create anchor element
// const anchorElement = document.createElement('a');
// anchorElement.id = navItems[i] + '-anchor';
// liElement.appendChild(anchorElement)

// // set text content of each li element
// anchorElement.textContent = navItems[i];

// // append li elements to ul element
// ulElement.appendChild(liElement);


// // liElement.addEventListener('click', (event) => {
// //     alert('hello' + event.target.textContent)
// // })
// }
// // append ul element to nav container
// navContainer.appendChild(ulElement)

// return navContainer;

// }

// function yogaPoseImage() {
//     const descriptionContainer = document.createElement('div');
//     const imgContainer = document.createElement('div');

// descriptionContainer.id = 'description-container';
// imgContainer.id = 'img-container';

//     // const img = new Image();
//     // img.src = yogaPoseImg;
//     // img.alt = 'women holding yoga pose with full moon in background';

// const videoElement = document.createElement('video')
// videoElement.src = introVideo;
// videoElement.autoplay = true;
// videoElement.loop = true;
// videoElement.muted = true;
// // videoElement.alt = 'scenic video of a women with moving landscape between forest and ocean sunset'

// imgContainer.style.backgroundImage = 'url(introVideo)'

//     descriptionContainer.appendChild(imgContainer)
// imgContainer.appendChild(videoElement)

//     return descriptionContainer;
// }
// function section1Description() {

//     const div = document.createElement('div');
//     div.id = 'text-container';
// const h1 = document.createElement('h1');
// h1.id = 'section-1-title';
// h1.classList.add('titles')
    
// const p = document.createElement('p');
// // p.id = 'section-1-paragraph';
// p.id = 'paragraph-description';
// p.classList.add('paragraphs')
// // h1.innerHTML = '';

// // Glow on Flow is a community where women of all ages and backgrounds embark on a journey toward glowing skin and inner well-being with holistic self-care approaches 
// // Our mission is to change how women think about aging by embracing the journey instead of fighting it. At Glow on Flow, we empower women to appreciate the beauty of every stage of life.

// p.textContent = "Glow on Flow is a community where women of all ages and backgrounds embark on a journey toward glowing skin and inner well-being with holistic self-care approaches";

// div.appendChild(h1)
// div.appendChild(p)

// return div;
// }

// const flipChartTitles = [
//     'glowing skin',
//     'empowerment',
//  'female community',
//   'inner wellbeing',
//    'hollistic self care',
//     'embracing the journey',
// 'beauty',

//     ];
//     let currentIndex = 0;
// function flipChartTitle() {
    
//   const flipChartElement = document.getElementById("section-1-title");
//   flipChartElement.textContent = flipChartTitles[currentIndex];
  
//   currentIndex = (currentIndex + 1) % flipChartTitles.length;
// }

// section 1 components 
function section1Component() {
    const parentContainer = document.createElement('div')
    parentContainer.classList.add('bio')
    parentContainer.id = 'section-1-parent-container';
    
    const imageContainer = document.createElement('div');
    imageContainer.id = 'section-1-image-container';

    const imageWrapper = document.createElement('div');
    imageWrapper.id = 'section-1-image-wrapper';
    const image = new Image();
    image.src = section1Image;
    image.alt = 'majestic asian woman with eyes closed holding her chest';
    
    imageWrapper.style.backgroundImage = 'url(image)';
    imageWrapper.appendChild(image)
    imageContainer.appendChild(imageWrapper)

    const textsContainer = document.createElement('div');
    textsContainer.id = 'section-1-text-container';
    
const image2 = new Image();
image2.src = eyeIconSvg;
    const p = document.createElement('p')
    p.id = 'section-1-paragraph';
    p.textContent = "Where skin glows, energy flows";

    const h1 = document.createElement('h1');
    h1.id = 'section-1-title';
    h1.classList.add('titles')
    h1.textContent = "experience the power of hollistic self-care rituals for radiant skin and wellbeing";
    
const button = document.createElement('a')
button.textContent = 'learn more';
button.href = '#section-4-parent-container'
button.ariaLabel = 'click to discover our work'

textsContainer.appendChild(image2)
textsContainer.appendChild(p)
    textsContainer.appendChild(h1)
    textsContainer.appendChild(button)



     parentContainer.appendChild(imageContainer)    
    parentContainer.appendChild(textsContainer)


    return parentContainer
    }






// section 2 components 
// function section2Component() {
// const parentContainer = document.createElement('div')
// parentContainer.classList.add('bio')
// parentContainer.id = 'section-2-parent-container';

// const imageContainer = document.createElement('div');
// imageContainer.id = 'section-2-image-container';

// const imageWrapper = document.createElement('div');
// imageWrapper.id = 'section-2-image-wrapper';
// const image = new Image();
// image.src = section2Image;
// image.alt = 'majestic asian woman with eyes closed holding her chest';
// imageWrapper.appendChild(image)
// imageContainer.appendChild(imageWrapper)

// const textsContainer = document.createElement('div');
// textsContainer.id = 'section-2-text-container';

// const p1 = document.createElement('p')
// p1.id = 'section-2-paragraph-1';
// p1.textContent = "- rejuvenate your mind and soul -";

// const h1 = document.createElement('h1');
// h1.id = 'section-2-title';
// h1.classList.add('titles')
// h1.textContent = 'glow on flows mission'
  
// const p2 = document.createElement('p')
// p2.id = 'section-2-paragraph';
// p2.classList.add('paragraphs')
// p2.textContent = "Our mission is to change how women think about aging by embracing the journey instead of fighting it. At Glow on Flow, we empower women to appreciate the beauty of every stage of life.";

// const button = document.createElement('button')
// const anchor = document.createElement('a');
// anchor.href = '#section-8-parent-container';
// button.appendChild(anchor)
// anchor.textContent = 'Learn More';



// textsContainer.appendChild(p1)
// textsContainer.appendChild(h1)
//  textsContainer.appendChild(p2)
//  textsContainer.appendChild(button)

//  parentContainer.appendChild(imageContainer)
// parentContainer.appendChild(textsContainer)

// return parentContainer

// }

// section 3 components 
function section3Component() {
    const parentContainer = document.createElement('div')
    parentContainer.classList.add('bio')
    parentContainer.id = 'section-3-parent-container';

const imageWrapper = document.createElement('div');
imageWrapper.id = 'section-3-image-wrapper';
const image = new Image();
image.src = section3Image;

imageWrapper.appendChild(image)
parentContainer.appendChild(imageWrapper)
    // parentContainer.style.backgroundImage = 'url(image)'

    const textsContainer = document.createElement('div');
    textsContainer.id = 'section-3-text-container';
    
    const h1 = document.createElement('h1');
    h1.id = 'section-3-title';
    h1.classList.add('titles')
    h1.textContent = "about Preechaya";
    
wrapWordInSpan('Preechaya',h1)

const p1 = document.createElement('p')
    p1.id = 'section-3-paragraph-1';
    p1.textContent = 'live - love - laugh'

    const p = document.createElement('p')
    p.id = 'section-3-paragraph';
    p.classList.add('paragraphs')
    p.textContent = "I'm Preechaya, and I'm on a mission to redefine the way we approach skincare, beauty, and aging.";
    
    const button = document.createElement('a')
    button.textContent = 'Facebook Me'
    button.href = '#section-2-parent-container'
    button.ariaLabel = 'click to message me on Facebook'

    textsContainer.appendChild(p1)
    textsContainer.appendChild(h1)
     textsContainer.appendChild(p)
     textsContainer.appendChild(button)
    
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
    
// const p = document.createElement('p')
//     p.id = 'section-4-paragraph';
//     p.textContent = "About Me";

    const h1 = document.createElement('h1');
    h1.id = 'section-4-title';
    h1.classList.add('titles')
    h1.textContent = "Balancing your inner flow for an outter glow";
    
    const p2 = document.createElement('p')
    p2.id = 'section-4-paragraph-2';
    p2.textContent = "I'm Preechaya, and I'm on a mission to reshape our approach to skincare, beauty, and aging.";

    const p3 = document.createElement('p')
    p3.id = 'section-4-paragraph-3';
    p3.textContent = "As a certified holistic facialist, face yoga teacher, and sound healing practitioner with a firm believe in the mind-body connection, I've crafted sessions that not only focus on the skin's surface but also on overall well-being.";

    const p4 = document.createElement('p')
    p4.id = 'section-4-paragraph-4';
    p4.textContent = "In 2022, I founded Chaya Wellness, a holistic health and beauty studio on Koh Phangan, offering in-person treatments alongside other therapists who specialize in energy and alternative healing.";


    const p5 = document.createElement('p')
    p5.id = 'section-4-paragraph-5';
    p5.textContent = "Through my online platform, Glow on Flow, I aim to share my knowledge and help guide people from all backgrounds towards a more balanced mind, body, and skin with sustainable self-care rituals.";

    const p6 = document.createElement('p')
    p6.id = 'section-4-paragraph-6';
    p6.textContent = "Are you ready to join me on the journey?";

const button = document.createElement('a')
button.textContent = 'join me'
button.href = '#section-8-parent-container'
button.ariaLabel = 'click to join me'
    
    //  textsContainer.appendChild(p)
    textsContainer.appendChild(h1)
    textsContainer.appendChild(p2)
    textsContainer.appendChild(p3)
    textsContainer.appendChild(p4)
    textsContainer.appendChild(p5)
    textsContainer.appendChild(p6)
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
    
    const imageContainer = document.createElement('div');
    imageContainer.id = 'section-7-image-container';
    
    const imageWrapper = document.createElement('div');
    imageWrapper.id = 'section-7-image-wrapper';
    const image = new Image();
    image.src = section7Image;
    image.alt = 'majestic asian woman with eyes closed holding her chest';
    imageWrapper.appendChild(image)
    imageContainer.appendChild(imageWrapper)

    const textsContainer = document.createElement('div');
    textsContainer.id = 'section-7-text-container';
    
    const h1 = document.createElement('h1');
    h1.id = 'section-7-title';
    h1.classList.add('titles')
    h1.textContent = "Treatments & Certifications";
    
const p1 = document.createElement('p');
p1.id = 'section-7-p1'
p1.textContent = "Experience wellness journeys uniquely crafted through my years of training."

const ul = document.createElement('ul')
ul.classList.add('paragraphs')
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
    textsContainer.appendChild(p1)
     textsContainer.appendChild(ul)
     
     parentContainer.appendChild(imageContainer)    
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
eyeIcon.src = services1Image; 
eyeIcon.alt = 'close up of women getting face treatment'
eyeIcon.id = 'eye-icon-1';
eyeIcon.classList.add('services-image');
// cardItem1.style.backgroundImage = 'url(eyeIcon)'

const cardTitle = document.createElement('h5')
cardTitle.textContent = 'In-Person Facial Treatments:';

const cardDescription = document.createElement('p');
cardDescription.textContent = 'Get visibly rejuvenated and relaxed with my signature facial treatments, which focus on hand massage techniques. My services include Sculptural Face Lifting, gua sha, and facial cupping. You can visit me at my Chaya Wellness Koh Phangan studio or as a guest therapist at various locations. Join my inner circle list for updates on availability.'

cardItem1.appendChild(eyeIcon)
cardItem1.appendChild(cardTitle)
cardItem1.appendChild(cardDescription)


const eyeIcon2 = new Image();
eyeIcon2.src = services2Image; 
eyeIcon2.alt = 'women in spa holding her face'
eyeIcon2.id = 'eye-icon-2'
eyeIcon2.classList.add('services-image')
// cardItem2.style.backgroundImage = 'url(eyeIcon2)'

const cardTitle2 = document.createElement('h5')
cardTitle2.textContent = 'Face Yoga Workshops:';

const cardDescription2 = document.createElement('p');
cardDescription2.textContent = 'Join me for transformative Face Yoga workshops, offered both online and in-person in group settings or private sessions, which include personalized consultations and tailored face yoga guides to address your unique facial needs.'

cardItem2.appendChild(eyeIcon2)
cardItem2.appendChild(cardTitle2)
cardItem2.appendChild(cardDescription2)


const eyeIcon3 = new Image();
eyeIcon3.src = services3Image;
eyeIcon3.alt = 'portrait of women wearing white dress'
eyeIcon3.id = 'eye-icon-3'
eyeIcon3.classList.add('services-image')
// cardItem3.style.backgroundImage = 'url(eyeIcon3)'

const cardTitle3 = document.createElement('h5')
cardTitle3.textContent = 'Self-Care Resources:';

const cardDescription3 = document.createElement('p');
cardDescription3.textContent = "Through my self-care resources, you can access a wealth of holistic beauty education. Explore self-facial massage techniques, gua sha practices, and more on my social media platforms and newsletter. Stay connected and informed by subscribing to my email list, where you'll receive exclusive tips, updates, and links to all my channels.";

cardItem3.appendChild(eyeIcon3)
cardItem3.appendChild(cardTitle3)
cardItem3.appendChild(cardDescription3)


const eyeIcon4 = new Image();
eyeIcon4.src = services4Image;
eyeIcon4.alt = 'portrait of women white dress forest background'
eyeIcon4.id = 'eye-icon-4';
eyeIcon4.classList.add('services-image');
cardItem4.style.backgroundImage = 'url(eyeIcon4)'

const cardTitle4 = document.createElement('h5')
cardTitle4.textContent = 'Collaboration Oppurtunities';

const cardDescription4 = document.createElement('p');
cardDescription4.textContent = "I'm eager to collaborate with spas, beauty salons, and wellness retreats worldwide. Whether as a guest therapist offering in-person treatments or as part of your workshop or retreat teaching team, I bring expertise in holistic facial care. Email me to explore collaboration opportunities.";

cardItem4.appendChild(eyeIcon4)
cardItem4.appendChild(cardTitle4)
cardItem4.appendChild(cardDescription4)

    parentContainer.appendChild(cardsContainer)
    cardsContainer.appendChild(cardItem1)
    cardsContainer.appendChild(cardItem2)
    cardsContainer.appendChild(cardItem3)
    // cardsContainer.appendChild(cardItem4)
    

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
    h1.classList.add('titles')
    h1.textContent = "Contact Preechaya";
    
const hr = document.createElement('hr')

    const p = document.createElement('h6')
    const aTel = document.createElement('a');
    p.id = 'section-7-tel';
    aTel.textContent = "Phone: +66 83 293 5905";
    aTel.href = 'tel:+66832935905'
    p.appendChild(aTel)

    const p2 = document.createElement('h6')
    p2.id = 'section-7-paragraph-2';
    const aMail = document.createElement('a');
    aMail.href = 'mailto:chayawellnessth@gmail.com';
    aMail.textContent = 'Email: chayawellnessth@gmail.com';
p2.appendChild(aMail)
    
const socialIconsContainer = document.createElement('div');
socialIconsContainer.id = 'section-9-socials-container';
// facebook
const facebookWrapper = document.createElement('div');
facebookWrapper.classList.add('socials-wrapper')

const facebookLink = document.createElement('a');
facebookLink.href = 'https://web.facebook.com/chayawellnessth/?_rdc=1&_rdr';

const facebook = new Image();
facebook.classList.add('socials')
facebook.src = facebookLogo;
facebook.alt = 'click to message us on facebook'
facebookLink.appendChild(facebook)

const anchorFacebook = document.createElement('a');
anchorFacebook.href = 'https://web.facebook.com/chayawellnessth/?_rdc=1&_rdr'
anchorFacebook.textContent = 'Message us on Facebook'

facebookWrapper.appendChild(facebookLink)
facebookWrapper.appendChild(anchorFacebook)
// instagram
const instagramWrapper = document.createElement('div');
instagramWrapper.classList.add('socials-wrapper')    
const instagramLink = document.createElement('a');
instagramLink.href = 'https://www.instagram.com/chayawellnessth/';
const instagram = new Image();
instagram.classList.add('socials')
instagram.src = instagramLogo;
instagramLink.appendChild(instagram);

const anchorInstagram = document.createElement('a');
anchorInstagram.href = 'https://www.instagram.com/chayawellnessth/';
anchorInstagram.textContent = 'Explore our Instagram'

instagramWrapper.appendChild(instagramLink);
instagramWrapper.appendChild(anchorInstagram);

// whatsapp
const whatsapWrapper = document.createElement('div');
whatsapWrapper.classList.add('socials-wrapper')    
const whatsappLink = document.createElement('a');
whatsappLink.href = 'https://api.whatsapp.com/send/?phone=66832935905&text&type=phone_number&app_absent=0';
const whatsapp = new Image();
whatsapp.classList.add('socials')
whatsapp.src = whatsappLogo;
whatsappLink.appendChild(whatsapp);

const anchorWhatsapp = document.createElement('a');
anchorWhatsapp.href = 'https://api.whatsapp.com/send/?phone=66832935905&text&type=phone_number&app_absent=0';
anchorWhatsapp.textContent = 'Call / Message our Whatsapp'

whatsapWrapper.appendChild(whatsappLink);
whatsapWrapper.appendChild(anchorWhatsapp);

// google maps
const googleMapsWrapper = document.createElement('div');
googleMapsWrapper.classList.add('socials-wrapper')    
const googlemapsLink = document.createElement('a');
googlemapsLink.href = 'https://www.google.com/maps/place/Chaya+Wellness+-+Holistic+Facial+Massage/@9.756151,99.9687052,17z/data=!3m1!4b1!4m6!3m5!1s0x305501e808735d41:0x81816732eba7d8fb!8m2!3d9.756151!4d99.9687052!16s%2Fg%2F11tdcwzdbh?hl=en-TH&entry=ttu';

const googleMaps = new Image();
googleMaps.classList.add('socials')
googleMaps.src = googleMapsLogo;
googlemapsLink.appendChild(googleMaps);

const anchorGoogleMaps = document.createElement('a');
anchorGoogleMaps.href = 'https://www.google.com/maps/place/Chaya+Wellness+-+Holistic+Facial+Massage/@9.756151,99.9687052,17z/data=!3m1!4b1!4m6!3m5!1s0x305501e808735d41:0x81816732eba7d8fb!8m2!3d9.756151!4d99.9687052!16s%2Fg%2F11tdcwzdbh?hl=en-TH&entry=ttu';
anchorGoogleMaps.textContent = 'Find our location'

googleMapsWrapper.appendChild(googlemapsLink);
googleMapsWrapper.appendChild(anchorGoogleMaps);


socialIconsContainer.appendChild(facebookWrapper);
socialIconsContainer.appendChild(instagramWrapper);
socialIconsContainer.appendChild(whatsapWrapper);
socialIconsContainer.appendChild(googleMapsWrapper);
const hr2 = document.createElement('hr')

    textsContainer.appendChild(h1)
    textsContainer.appendChild(hr)
     textsContainer.appendChild(p)
     textsContainer.appendChild(p2)
     textsContainer.appendChild(hr2)
     textsContainer.appendChild(socialIconsContainer)
     

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
    // instructorName,
    //  yogaPoseImage,
    //   section1Description,
    //    pageLoadNav,
    //    flipChartTitle,
       section1Component,
    //    section2Component,
       section3Component,
       section4Component,
       section5Component,
       section6Component,
       section7Component,
       section8Component,
       section9Component,

     }; 