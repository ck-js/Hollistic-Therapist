// import logoWhite from './logo.png'

import section1Image from './section1image2.jpg';
import services1Image from './services1image2.jpeg';
import services2Image from './services2image.jpeg';
import services3Image from './services3image.jpeg';
import services4Image from './services4image.jpg';

import section2Image from './section2image2.jpg'
import section3Image from './section3image.jpg'
import section7Image from './section7image.jpeg'
import eyeIconSvg from './logo2.png';
import facebookLogo from './Social-media-icons/facebook.svg'
import instagramLogo from './Social-media-icons/instagram.svg'
import whatsappLogo from './Social-media-icons/whatsapp.svg'
import googleMapsLogo from './Social-media-icons/google-maps.svg'

import './chamsbold.ttf';
import './Lora-SemiBold.ttf';


function section1Component() {
    const parentContainer = document.createElement('div')
    parentContainer.classList.add('section-parents')
    parentContainer.id = 'section-1-parent-container';
    
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('section-image-containers')
    imageContainer.id = 'section-1-image-container';

    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add('section-image-wrappers')
    imageWrapper.id = 'section-1-image-wrapper';
    const image = new Image();
    image.src = section1Image;
    image.alt = 'asian woman with eyes closed holding her chest';
    
    imageWrapper.appendChild(image)
    imageContainer.appendChild(imageWrapper)

    const textsContainer = document.createElement('div');
    textsContainer.id = 'section-1-text-container';

const titleH6 = document.createElement('h6')
titleH6.textContent = 'glow on flow '

    const p = document.createElement('p')
    p.id = 'section-1-paragraph';
    p.textContent = "Where skin glows, energy flows";

    const h1 = document.createElement('h1');
    h1.id = 'section-1-title';
    h1.classList.add('titles')
    h1.textContent = "experience the power of hollistic self care rituals for radiant skin and wellbeing";
    
const button = document.createElement('a')
button.textContent = 'learn more';
button.href = '#section-4-parent-container'
button.ariaLabel = 'click to learn more about glow on flow'

textsContainer.appendChild(titleH6)
textsContainer.appendChild(p)
    textsContainer.appendChild(h1)
    textsContainer.appendChild(button)
    

     parentContainer.appendChild(imageContainer)    
    parentContainer.appendChild(textsContainer)


    return parentContainer
    }

    
function section2Component() {
    const parentContainer = document.createElement('div')
    parentContainer.classList.add('section-parents')
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
    p2.textContent = "I'm Preechaya, and I'm passionate about redefining the way we approach skincare, beauty, and aging.";

    const p3 = document.createElement('p')
    p3.id = 'section-4-paragraph-3';
    p3.textContent = "As a certified holistic facialist, face yoga teacher, and sound healing practitioner, I believe in the power of the mind-body connection. That's why I've developed sessions that combine holistic beauty with healing practices to prioritize overall well-being beyond the skin's surface.";

    const p4 = document.createElement('p')
    p4.id = 'section-4-paragraph-4';
    p4.textContent = "I warmly welcome you to my online space, where my goal is to share my knowledge and help guide people from all walks of life toward a more balanced mind, body, and skin through sustainable self-care rituals.";


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


function section3Component() {
    const parentContainer = document.createElement('div')
    parentContainer.classList.add('section-parents')
    parentContainer.classList.add('section-parents')
    parentContainer.id = 'section-7-parent-container';
    
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('section-image-containers')
    imageContainer.id = 'section-7-image-container';
    
    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add('section-image-wrappers')
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
    h1.textContent = "Treatments offered";
    
const p1 = document.createElement('p');
p1.id = 'section-7-p1'
p1.textContent = "Transform your mind, body and skin with me"

const h5 = document.createElement('h4');
h5.id = 'section-7-h5';
h5.textContent = 'beauty treatments';

const ul2 = document.createElement('ul');
ul2.classList.add('paragraphs');

const li10 = document.createElement('li')
li10.textContent = 'Sculptural Face Lifting™ Massage'


const li11 = document.createElement('li')
li11.textContent = 'Buccal Intraoral Massage'

const li12 = document.createElement('li')
li12.textContent = 'Deep Tissue Facial Massage'

const li13 = document.createElement('li')
li13.textContent = '  Facial Gua Sha & Cupping'

const li14 = document.createElement('li')
li14.textContent = 'Ancient Thai Head Massage'

const li15 = document.createElement('li')
li15.textContent = 'Sound & Vibration Healing'

ul2.appendChild(li10)
ul2.appendChild(li11)
ul2.appendChild(li12)
ul2.appendChild(li13)
// ul2.appendChild(li14)
// ul2.appendChild(li15)

const h4 = document.createElement('h4');
h4.textContent = 'other treatments'

const ul = document.createElement('ul')
ul.classList.add('paragraphs')
const li1 = document.createElement('li');
li1.textContent = 'Ancient Thai Head Massage'
const li2 = document.createElement('li');
li2.textContent = 'Sound & Vibration Healing'
const li3 = document.createElement('li');
li3.textContent = 'Certified Face Yoga Teacher by The Danielle Collins Face Yoga Method'
const li4 = document.createElement('li');
li4.textContent = 'Certified Sculptural Face Lifting™ Professional by Yakov Gershkovich'

ul.appendChild(li1);
ul.appendChild(li2);
// ul.appendChild(li3);
// ul.appendChild(li4);

    textsContainer.appendChild(h1)
    textsContainer.appendChild(p1)
    textsContainer.appendChild(h5)
    textsContainer.appendChild(ul2)
    textsContainer.appendChild(h4)
     textsContainer.appendChild(ul)
     
     parentContainer.appendChild(imageContainer)    
    parentContainer.appendChild(textsContainer)


    return parentContainer
    }

// section 8 components 
function section4Component() {
    const parentContainer = document.createElement('div')
    parentContainer.classList.add('section-parents')
    parentContainer.classList.add('section-parents')
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

const cardTitle = document.createElement('h5')
cardTitle.textContent = 'In Person Facial Treatments:';

const cardDescription = document.createElement('p');
cardDescription.textContent = 'Look and feel your best with my signature treatments. I specialize in Sculptural Face LiftingM, Buccal massage, Gua Sha, and facial cupping. Visit me at Chaya Wellness Koh Phangan or join my list to stay updated on my collaborated locations.'

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
cardDescription2.textContent = 'Join my face yoga workshops, offered online and in-person in both group settings or private sessions, which include personalized consultations and tailored face yoga guides to address your unique facial needs.'

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
cardDescription3.textContent = "Learn about self-facial massage techniques, gua sha practices, and more on my social media platforms and newsletter. Sign up for my email list to get exclusive tips, updates, and links to all my channels.";
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
function section6Component() {
    const parentContainer = document.createElement('div')
    parentContainer.classList.add('section-parents')
    parentContainer.classList.add('section-parents')
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
    //  textsContainer.appendChild(hr2)
    //  textsContainer.appendChild(socialIconsContainer)
     

    parentContainer.appendChild(textsContainer)
    
    return parentContainer
    }

    function section5Component() {
        const parentContainer = document.createElement('div')
        parentContainer.id = 'section-10-parent-container';
        
const h2 = document.createElement('h2')
h2.classList.add('titles')
h2.textContent = "Clients Feedback"


        const cardsContainer = document.createElement('div');
        cardsContainer.id = 'section-10-cards-container';
        
    const cardItem1 = document.createElement('div')
    cardItem1.classList.add('card-item')
    const cardItem2 = document.createElement('div')
    cardItem2.classList.add('card-item')
    const cardItem3 = document.createElement('div')
    cardItem3.classList.add('card-item')
    
    
    
    const cardDescription = document.createElement('p');
    cardDescription.textContent = "What a delicious moment I spent with Chaya for a facial treatment! It's a holistic experience, complete relaxation, involving sound and gongs; she's very experienced and keeps learning and improving. I definitely recommend her!"
    
    const cardTitle = document.createElement('p')
    cardTitle.textContent = '- Laurène Mauduit';

    cardItem1.appendChild(cardDescription)
    cardItem1.appendChild(cardTitle)
    
    const cardTitle2 = document.createElement('p')
    cardTitle2.textContent = '- Dean Raphael';
    
    const cardDescription2 = document.createElement('p');
    cardDescription2.textContent = "One of the most relaxing and intentional experiences I've had on the island. Preechaya has a unique touch, she is able to guide you into deep non-sleep relaxation. Highly recommended."
    
    cardItem2.appendChild(cardDescription2)
    cardItem2.appendChild(cardTitle2)
        
    
    const cardDescription3 = document.createElement('p');
    cardDescription3.textContent = "Fantastic facial treatment which I can only recommend! I had the facial lift and could see the difference after the session. Chaya knows her skin stuff and you are in good hands if you wanna give your skin what it needs.";
    
    const cardTitle3 = document.createElement('p')
    cardTitle3.textContent = '- Maria Eitzinger';

cardItem3.appendChild(cardDescription3)
    cardItem3.appendChild(cardTitle3)
    
    
    parentContainer.appendChild(h2)
        parentContainer.appendChild(cardsContainer)
        cardsContainer.appendChild(cardItem1)
        cardsContainer.appendChild(cardItem2)
        cardsContainer.appendChild(cardItem3)
        
        
    
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

       section1Component,
       section2Component,       
       section3Component,
       section4Component,
       section5Component,
    section6Component,
       

     }; 