(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>f});var o=t(601),a=t.n(o),i=t(314),r=t.n(i),c=t(417),s=t.n(c),l=new URL(t(219),t.b),d=new URL(t(746),t.b),p=new URL(t(508),t.b),h=r()(a()),m=s()(l),g=s()(d),u=s()(p);h.push([n.id,`:root {\n\n--desktop-button-padding: 20px 40px;\n--mobile-button-padding: 10px 20px;\nbox-sizing: border-box;\n    padding: 0;\n    margin: 0;\n--primary-background-color: #EAC8B6;\n--secondary-background-color: rgb(253,242,236);\n--primary-text-color: #6C2910;\n\n--title-font-family: london;\n--paragraph-font-family: chamsbold;\n--desktop-titles-font-size: 2.2rem;\n--desktop-paragraph-font-size: 1.6rem;\n--mobile-titles-font-size: 1.8rem;\n--mobile-paragraph-font-size: 0.7rem;\n\n}\n\n@font-face {\n    font-family: 'chamsbold';\n    src: url(${m}) format('truetype'),\n         url(${m}) format('truetype');\n    font-weight: normal;\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'london';\n    src: url(${g}) format('truetype'),\n         url(${g}) format('truetype');\n    font-weight: normal;\n    font-style: normal;\n  }\nbody {\n    border: 5px solid black;\n    font-family: var(--paragraph-font-family);\n    background-color: var(--primary-background-color);\n    color: var(--primary-text-color);\n    /* width: 98vw; */\n    text-align: center;\n    font-size: 1.2rem;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    /* border: 10px solid black; */\n}\n.titles {\n    font-family: var(--title-font-family);\n    color: var(--primary-text-color);\n    font-size: var(--desktop-titles-font-size);\n}\n#nav-container {\n    \n}\n#nav-container ul {\ndisplay: flex;\njustify-content: center;\nalign-items: center;\ncolumn-gap: 5vw;\n\n}\n#nav-container li {\n    font-size: 1.4rem;\ntext-transform: lowercase;\n    list-style-type: none;\n    border-radius: 6px;\n    cursor: pointer;\n}\n#nav-container a {\n    text-decoration: none;\n    color: var(--primary-text-color);\n}\n/* #nav-container li:hover {\ncolor: black;\n\n} */\n#content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    /* border: 10px solid white; */\n    padding: 0;\n    margin: 0;\n    row-gap: 50px;\n    padding-top: 100px;\n}\ncont/* #description-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    position: relative;\n    text-align: left;\n}\n#img-container {\nwidth: 100%;\nheight: auto;\n}\n#img-container video {\nbackground-size: contain;\n    background-position: center;\n    width: 100%;\n    border-radius: 25px;\n}\n#description-container #text-container {\n    position: absolute;\ntop: 50%;\nleft: 50%;\ntransform: translate(-50%, -50%);\n    \n} */\n.home-logo {\n    width: 50%;\n    height: auto;\n    /* border: 5px solid white; */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.home-logo img {\n    /* border: 2px solid black; */\n    object-fit: contain;\n    object-position: center;\n} \n\n#section-1-parent-container {\n    width: 100%;\n    height: 800px;\nbackground-color: var(--primary-text-color);\n    display: flex;\n    /* justify-content: center;\n    align-items: center; */    \n    position: relative;\n    text-align: left;\n/* border: 3px solid black;     */\n\n}\n#section-1-image-container {\n    width: 60%;\n    height: auto;\n/* border: 3px solid black;     */\n\n}\n#section-1-image-wrapper {\n    width: 100%;\n    height: 100%;\n    /* background-image: url('section1image.jpg'); */\n    background-size: contain;\n    \nopacity: 0.9;    \n    background-position: center;\n    overflow: hidden;\n}\n#section-1-image-wrapper img {\n /* object-fit: cover; */\n    width: 100%;\n    height: auto;\n}\n\n#section-1-text-container {\n    /* border: 3px solid black; */\nwidth: 40%;\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\n\n/* background: linear-gradient(135deg, #DAB3FF, #FFB3B3);     */\nbackground-color: var(--secondary-background-color);    \n\n}\n\n#section-1-title {\n    text-transform: uppercase;\n    width: 15ch;\ntext-align: center;\nline-height: 1.5;\n}\n#section-1-paragraph {\n    color: black;\n    font-size: 0.9rem;\n    font-style: italic;\n\n\n} \n#section-1-text-container a {\n    text-transform: uppercase;\n    text-decoration: none;\n    padding: var(--desktop-button-padding);\nborder: 1px solid black;\n\n}\n\n\n\n\n\n\n\n#text-container h1 {    \n    text-transform: lowercase;\npadding: auto;\nmargin-bottom: 10%;\n}\n#text-container p {    \n    text-transform: lowercase;\ntext-align: center;\nopacity: 0.7;\npadding: auto;\nmargin-bottom: 20%;\ncolor: white;\n}\n.bio {\n    background: linear-gradient(135deg, #fbfafd, #f5deb3);    \n}\n#section-2-parent-container {\n    width: 80vw;\n    height: auto;\n    /* margin-left: auto;\n    margin-right: auto;  */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    position: relative;\n    text-align: right;\n    padding: 100px 0 200px;\n}\n/* #section-2-parent-container:hover {\nborder-left: 15px solid #7315cb;\n} */\n#section-2-image-container {\n    width: 80%;\n    height: auto;\n    padding-left: 20%;\n    \n}\n#section-2-image-wrapper {\n    width: 40%;\n    height: auto;\n    \n}\n#section-2-image-wrapper img {\n    /* background-size: contain; */\n    background-position: center;\n    width: 100%;\n    border-radius: 55%;\n}\n#section-2-text-container {\n    /* position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);    */\n    width: 50%;\n    height: auto;\ndisplay: flex;\nflex-direction: column;\n    \n}\n#section-2-paragraph-1 {\nfont-style: italic;\nopacity: 0.7;\n\n}\n#section-2-text-container button {\n    padding: 20px;\n    cursor: pointer;\n    background-color: var(--primary-background-color);\n    margin-left: auto;\n    margin-right: auto;\nborder: none;\ntext-align: center;\ntext-decoration: none;\n\n    }\n    #section-2-text-container button:hover {\n        background-color: black;\n        color: var(--primary-background-color);\n        \n        }\n#section-2-text-container a {\n\ntext-decoration: none;\ncolor: black;\n}\n#section-2-text-container a:hover {\n\n    color: var(--primary-background-color);\n    \n    \n    }\n#section-2-title {\n    color: black;\n    \n}\n#section-2-paragraph {\n    color: black;\nfont-size: var(--desktop-paragraph-font-size);\nopacity: 0.7;    \n}\n\n#section-3-parent-container {\n    width: 100%;\n    height: auto;\n    margin-left: auto;\n    margin-right: auto; \n    /* display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row; */\n    position: relative;\n    text-align: left;\n    \n/* border: 10px solid blueviolet; */\n}\n#section-3-image-wrapper {\n    width: 100%;\n    height: 100%;\n/* border: 3px solid black; */\n/* background-image: url('./section3image.JPG'); */\n\n\n}\n#section-3-image-wrapper img {\n\nobject-fit: repeat;\nobject-position: center;\n}\n#section-3-text-container {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);   \n    \n}\n#section-3-paragraph-1 {\n    color: var(--primary-background-color);\n}\n#section-3-title {\n    color: white;\n    \n}\n#span-1 {\n    color: var(--primary-background-color);\n    background-color: rgba(0, 0, 0, 0.6);\n}\n#section-3-paragraph {\n    color: white;\n\nbackground-color: rgba(0, 0, 0, 0.3);\npadding: 2px 2px;\nbox-shadow: 0 0 5px 2px rgba(255, 255, 0, 0.5);\nmargin-bottom: 24px;\n\n}\n#section-3-text-container a {\n    border: 1px solid black;\n    padding: 10px;\n    cursor: pointer;\n    text-decoration: none;\n    color: var(--primary-background-color);\n    \n\n    }\n\n#section-4-parent-container {\n    width: 100%;\n    height: 1400px;    \n    background-color: var(--primary-background-color);\n    \n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    position: relative;\n    \n}\n#section-4-text-container {    \n    /* position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);    */\n/* background: linear-gradient(135deg, #DAB3FF, #FFB3B3); */\npadding: 40px 80px;\nborder-radius: 5px;\ntext-align: center;\nwidth: 60%;\nheight: auto;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nflex-direction: column;\n}\n#section-4-paragraph {\n    opacity: 0.7;\nfont-size: var(--desktop-paragraph-font-size);\n font-style: italic;   \n \n}\n#section-4-title {\n    text-transform: uppercase;\n    color: black;\nwidth: 20ch;\ntext-align: center;\nmargin-bottom: 20px;\n    \n}\n#section-4-paragraph-2 {\nwidth: 30ch;\nmargin-bottom: 40px;\nopacity: 0.9;\nline-height: 1.3;\n}\n#section-4-paragraph-3 {\n    width: 40ch;\n    margin-bottom: 40px;\n    opacity: 0.9;\n    line-height: 1.3;\n    }\n    #section-4-paragraph-3 {\n        width: 40ch;\n        margin-bottom: 40px;\n        opacity: 0.9;\n        line-height: 1.3;\n        }\n        #section-4-paragraph-4 {\n            width: 40ch;\n            margin-bottom: 40px;\n            opacity: 0.9;\n            line-height: 1.3;\n            }\n            #section-4-paragraph-5 {\n                width: 30ch;\n                margin-bottom: 40px;\n                opacity: 0.9;\n                line-height: 1.3;\n                }\n                #section-4-paragraph-6 {\n                    width: 30ch;\n                    margin-bottom: 80px;\n                    opacity: 0.9;\n                    line-height: 1.3;\n                    }\n#section-4-text-container a {\nborder: 1px solid black;\npadding: var(--desktop-button-padding);\ncursor: pointer;\ntext-decoration: none;\ncolor: black;\n\n}\n#section-5-parent-container {\n    width: 80vw;\n    height: 600px;\n    background-color: white;    \n    margin-left: auto;\n    margin-right: auto; \n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    position: relative;\n    text-align: left;\n    /* margin-top: -100px; */\n\n}\n#section-5-text-container {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);   \nopacity: 0.8;\n    \n}\n#section-5-text-container:hover {\nborder-left: 5px solid black;\npadding-left: 20px;\n}\n\n#section-5-title {\n    color: black;\nfont-size: 2.2rem;\n    \n}\n#section-5-paragraph {\n    color: black;\nfont-size: 1.2rem;\n    \n}\n\n#section-6-parent-container {\n    width: 80vw;\n    height: 600px;\n    \n    margin-left: auto;\n    margin-right: auto; \n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    position: relative;\n    text-align: left;\n    /* margin-top: -100px; */\n\n}\n#section-6-text-container {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);   \nopacity: 0.8;\n    \n}\n#section-6-text-container:hover {\n    border-left: 5px solid black;\n    padding-left: 20px;\n    }\n\n#section-6-title {\n    color: black;\nfont-size: 2.2rem;\n    \n}\n#section-6-paragraph {\n    color: black;\nfont-size: 1.2rem;\n    \n}\n\n#section-7-parent-container {\n    width: 100%;\n    height: 800px;\n    background-color: var(--primary-background-color);\n    display: flex;\n    /* justify-content: center;\n    align-items: center; */\n    \n    position: relative;\n    text-align: left;\n    \n}\n#section-7-image-container {\n    width: 60%;\n    height: auto;\n/* border: 3px solid black;     */\n\n}\n#section-7-image-wrapper {\n    width: 100%;\n    height: 100%;\n    background-image: url(${u});\n    background-size: contain;\n    /* border: 30px solid black;     */\nopacity: 0.9;\n    background-position: center;\n    overflow: hidden;\n}\n#section-7-image-wrapper img {\n /* object-fit: cover; */\n    \n    width: 100%;\n    height: auto;\n\n}\n#section-3-image-wrapper img {\n    /* object-fit: cover; */\n       \n       width: 100%;\n       height: auto;\n   \n   }\n#section-7-text-container {\n    /* position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);    */\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\npadding: 0 100px;\n/* background: linear-gradient(135deg, #DAB3FF, #FFB3B3);     */\nbackground-color: var(--primary-background-color);\n\n}\n\n#section-7-title {\n    color: black;\n    text-transform: uppercase;\n    text-align: center;\n    \n}\n#section-7-paragraph {\n    color: black;\n\n    \n} \n#section-7-text-container li {\n    list-style-type: none;\n    color: black;\n    width: 20ch;\n    padding-bottom: 25px;\n    line-height: 1.2;\n\n}\n\n#section-8-parent-container {\n    padding-bottom: 100px;\n    width: 100%;\n    height: auto;\n    /* background: linear-gradient(90deg, #DABFFF, #B3FFD6); */\n    background-color: var(--secondary-background-color);\n    /* margin-left: auto;\n    margin-right: auto;  */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    position: relative;\n    text-align: left;\n    \n}\n#section-8-cards-container {\nwidth: 80%;\nheight: auto;\ndisplay: flex;\nflex-direction: row;\nflex-wrap: wrap;\noverflow:auto;\nrow-gap: 200px;\njustify-content: center;\nalign-items: center;\ncolumn-gap: 100px;\n}\n.card-item {\n    height: auto;\n    /* width: 50%; */\n\n}\n/* @media (max-width: 800px) {\n.card-item {\n    width: 100%;\n}\n} */\n.services-image {\n    width: 350px;\n    height: auto;\n}\n#eye-icon {\n    width: 400px    ;\n    height: auto;\n    \n}\n.card-item h5 {\n    font-size: 1.7rem;\n    font-family: var(--title-font-family);\n    color: var(--primary-text-color);\n}\n.card-item p {\nwidth: 25ch;\nline-height: 1.2;\n\n}\n\n#section-9-parent-container {\n    width: 100vw;\n    height: 800px;\n    /* background: linear-gradient(135deg, #B3FFD9, #8e32e5); */\n    background-color: var(--secondary-background-color);\n    margin-left: auto;\n    margin-right: auto; \n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    position: relative;\n    text-align: left;\n    \n\n}\n#section-9-text-container {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);   \nheight: auto;\n    \n}\n\n#section-9-title {\n    color: black;\n\n    \n}\n#section-9-text-container h6 {\nfont-size: 1.2rem;\ncolor: black;\n\n}\n#section-9-text-container a {\n    font-size: 1.2rem;\n    color: black;\n    \n    }\n#section-9-socials-container {\n    display: flex;\n    flex-direction: column;\n    row-gap: 50;\n\n}\n.socials-wrapper {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: start;\n    column-gap: 20px;\n    \n\n}\n.socials-wrapper a {\n    color: black;\n    text-decoration: none;\n    font-size: 1.3rem;\n}\n\n.socials {\n    width: 50px;\n    height: auto;\n}\n\n\n@media (max-width: 1000px) {\n    body {\n        overflow: hidden;\n        /* width: 100vw; */\n        box-sizing: border-box;\n        /* border: 5px solid black; */\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n\n    }\n\n    .home-logo img {\n        object-fit: contain;\n        object-position: center;\n        \n    }\n\n    #content {\n        width: 99%;\n    }\n    \n\n        .titles {\n            font-size: var(--mobile-titles-font-size);\n            /* font-size: var(--desktop-titles-font-size); */\n        }\n    \n        .paragraphs {\n            /* font-size: var(--mobile-paragraph-font-size); */\n            font-size: var(--desktop-paragraph-font-size);\n        }\n    \n        #section-1-parent-container {\n            padding: 150px 0;\n            width: 100%;\n            height: auto;\n        overflow: hidden;    \n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n            position: relative;\n            text-align: center;\n            row-gap: 100px;\n        }\n        #section-1-image-container {\n            width: 100%;\n            height: auto;\n        \n        }\n        #section-1-image-wrapper {\n            width: 100%;\n            height: 100%;\n            /* background-image: url('section1image.jpg'); */\n            background-size: contain;\n        opacity: 0.9;    \n            background-position: center;\n            overflow: hidden;\n        }\n        #section-1-image-wrapper img {\n         /* object-fit: cover; */    \n            width: 100%;\n            height: auto;\n        \n        }\n        #section-1-text-container {\n                        width: 100%;\n            height: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        background-color: var(--secondary-background-color);    \n        /* border: 3px solid black; */\n        padding: 100px 0;\n        \n        }\n        \n        #section-1-title {\n            text-transform: uppercase;\n            width: 15ch;\n        text-align: center;\n        line-height: 1.5;\n        }\n        #section-1-paragraph {\n            color: black;\n            /* font-size: 0.9rem; */\n            font-style: italic;\n        \n        \n        } \n        #section-1-text-container a {\n            text-transform: uppercase;\n            text-decoration: none;\n            padding: var(--desktop-button-padding);\n        border: 1px solid black;\n        color: black;\n        }\n\n        \n\n        #section-4-text-container {    \n            /* position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);    */\n        /* background: linear-gradient(135deg, #DAB3FF, #FFB3B3); */\n        /* padding: 40px 80px; */\n        border-radius: 5px;\n        text-align: center;\n        width: 60%;\n        height: auto;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        }\n        #section-4-paragraph {\n            opacity: 0.7;\n        font-size: var(--desktop-paragraph-font-size);\n         font-style: italic;   \n         \n        }\n        #section-4-title {\n            text-transform: uppercase;\n            color: black;\n        width: 20ch;\n        text-align: center;\n        margin-bottom: 20px;\n            \n        }\n        #section-4-paragraph-2 {\n        width: 25ch;\n        margin-bottom: 40px;\n        opacity: 0.9;\n        line-height: 1.3;\n        }\n        #section-4-paragraph-3 {\n            width: 25ch;\n            margin-bottom: 40px;\n            opacity: 0.9;\n            line-height: 1.3;\n            }\n            #section-4-paragraph-3 {\n                width: 25ch;\n                margin-bottom: 40px;\n                opacity: 0.9;\n                line-height: 1.3;\n                }\n                #section-4-paragraph-4 {\n                    width: 25ch;\n                    margin-bottom: 40px;\n                    opacity: 0.9;\n                    line-height: 1.3;\n                    }\n                    #section-4-paragraph-5 {\n                        width: 25ch;\n                        margin-bottom: 40px;\n                        opacity: 0.9;\n                        line-height: 1.3;\n                        }\n                        #section-4-paragraph-6 {\n                            width: 20ch;\n                            margin-bottom: 80px;\n                            opacity: 0.9;\n                            line-height: 1.3;\n                            }\n        #section-4-text-container a {\n        border: 1px solid black;\n        padding: var(--desktop-button-padding);\n        cursor: pointer;\n        text-decoration: none;\n        color: black;\n        \n        }\n\n\n\n    \n\n        \n\n\n\n        #section-7-parent-container {\n\n            width: 99%;\n            height: auto;\n            background-color: var(--primary-background-color);\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            flex-direction: column;\n            position: relative;\n            text-align: center;\n            padding: 100px 0;\n            row-gap: 50px;\n                    \n        }\n        #section-7-text-container {\n            /* border: 4px solid black; */\n            width: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        background-color: var(--primary-background-color);\n        padding-top: 50px;\n        }\n    \n        #section-7-title {\n            color: black;\n            text-transform: uppercase;\n            text-align: center;\n            \n        }\n        #section-7-text-container ul {\ntext-align: center;\n\n            }\n        #section-7-text-container li {\n            list-style-type: none;\n            color: black;\n            width: 18ch;\n            padding-bottom: 25px;\n            /* line-height: 1.2; */\n            font-size: 1.3rem;\n        \n        }\n        \n        #section-9-parent-container {\nwidth: 100%;            \n            height: 800px;\n\n            background-color: var(--secondary-background-color);\n            margin-left: auto;\n            margin-right: auto; \n            display: flex;\n            justify-content: center;\n            align-items: center;\n            flex-direction: column;\n            position: relative;\n            text-align: left;\n            \n        \n        }\n\n    \n    \n    }\n`,""]);const f=h},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,a,i){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(r[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&r[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},r=[],c=0;c<n.length;c++){var s=n[c],l=o.base?s[0]+o.base:s[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var h=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==h)e[h].references++,e[h].updater(m);else{var g=a(m,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:g,references:1})}r.push(p)}return r}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var i=o(n=n||[],a=a||{});return function(n){n=n||[];for(var r=0;r<i.length;r++){var c=t(i[r]);e[c].references--}for(var s=o(n,a),l=0;l<i.length;l++){var d=t(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=s}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},746:(n,e,t)=>{n.exports=t.p+"bc7f741788186526098e.ttf"},219:(n,e,t)=>{n.exports=t.p+"b9ff88dbcd226a184889.ttf"},508:(n,e,t)=>{n.exports=t.p+"c7b24f2b3ec314ab53c1.jpg"}},e={};function t(o){var a=e[o];if(void 0!==a)return a.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&(!n||!/^http(s?):/.test(n));)n=o[a--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const n=t.p+"aa9de17b75197c93cb8f.png",e=t.p+"ec74f16f3b07f7619ed4.jpg",o=t.p+"d4b738987f1e05dfd00f.jpg",a=t.p+"a512504d04a3c66e5dd1.jpg",i=t.p+"0ed4982d50b0a732c829.jpg",r=t.p+"950526ca8be76c05ca63.jpg";t.p,t.p;var c=t(508);t.p;const s=t.p+"a1d9704fe46a1786a240.svg",l=t.p+"325604fff616346c8558.svg",d=t.p+"1c1687eefcfe0aa308b4.svg",p=t.p+"2ff229b220a412bdf096.svg";function h(){const e=document.createElement("div");e.classList.add("home-logo");const t=new Image;return t.src=n,t.alt="glow on flow logo... go home ",e.appendChild(t),e}t(219),t(746);var m=t(72),g=t.n(m),u=t(825),f=t.n(u),b=t(659),x=t.n(b),y=t(56),w=t.n(y),v=t(540),k=t.n(v),C=t(113),E=t.n(C),j=t(208),z={};z.styleTagTransform=E(),z.setAttributes=w(),z.insert=x().bind(null,"head"),z.domAPI=f(),z.insertStyleElement=k(),g()(j.A,z),j.A&&j.A.locals&&j.A.locals;const F=document.body,I=document.getElementById("content");F.insertBefore(h(),I),F.insertBefore(function(){const n=document.createElement("div");n.id="nav-container";const e=document.createElement("ul");e.id="nav-ul";const t=["About","Training","Contact"];for(let n=0;n<t.length;n++){const o=document.createElement("li");o.id=t[n];const a=document.createElement("a");a.id=t[n]+"-anchor",o.appendChild(a),a.textContent=t[n],e.appendChild(o)}return n.appendChild(e),n}(),I),document.getElementById("description-container"),I.appendChild(function(){const n=document.createElement("div");n.classList.add("bio"),n.id="section-1-parent-container";const t=document.createElement("div");t.id="section-1-image-container";const o=document.createElement("div");o.id="section-1-image-wrapper";const a=new Image;a.src=e,a.alt="majestic asian woman with eyes closed holding her chest",o.style.backgroundImage="url(image)",o.appendChild(a),t.appendChild(o);const i=document.createElement("div");i.id="section-1-text-container";const r=document.createElement("p");r.id="section-1-paragraph",r.textContent="A different approach to health and wellness";const c=document.createElement("h1");c.id="section-1-title",c.classList.add("titles"),c.textContent="experience the power of hollistic self-care rituals for radiant skin and wellbeing";const s=document.createElement("a");return s.textContent="our work",s.href="#section-2-parent-container",s.ariaLabel="click to discover our work",i.appendChild(r),i.appendChild(c),i.appendChild(s),n.appendChild(t),n.appendChild(i),n}()),I.appendChild(function(){const n=document.createElement("div");n.classList.add("bio"),n.id="section-4-parent-container";const e=document.createElement("div");e.id="section-4-text-container";const t=document.createElement("p");t.id="section-4-paragraph",t.textContent="About Me";const o=document.createElement("h1");o.id="section-4-title",o.classList.add("titles"),o.textContent="Helping you make better health choices";const a=document.createElement("p");a.id="section-4-paragraph-2",a.textContent="I'm Preechaya, and I'm on a mission to redefine the way we approach skincare, beauty, and aging.";const i=document.createElement("p");i.id="section-4-paragraph-3",i.textContent="My journey began when I became certified as a holistic facialist and integrative vibrational therapist. I blended my passion for wellness and sound healing into my facial treatments, which led me to establish Chaya Wellness, a holistic well-being studio in Koh Phangan.";const r=document.createElement("p");r.id="section-4-paragraph-4",r.textContent="As my passion for holistic beauty continued to grow, I pursued further certifications as a face yoga teacher and delved deeper into the iconic Sculptural Face Lifting™ method, which has now become my specialty. My commitment to holistic wellness and desire to empower others to embrace their natural beauty have guided each step of my journey.";const c=document.createElement("p");c.id="section-4-paragraph-5",c.textContent="While Chaya Wellness offers in-person treatments, I'm excited to share my knowledge with a broader audience through Glow on Flow, sharing my holistic skincare approach with those seeking to enhance their inner glow.";const s=document.createElement("p");s.id="section-4-paragraph-6",s.textContent="Are you ready to join me on the journey?";const l=document.createElement("a");return l.textContent="Learn more",l.href="#section-2-parent-container",l.ariaLabel="click to learn more",e.appendChild(t),e.appendChild(o),e.appendChild(a),e.appendChild(i),e.appendChild(r),e.appendChild(c),e.appendChild(s),e.appendChild(l),n.appendChild(e),n}()),I.appendChild(function(){const n=document.createElement("div");n.id="section-8-parent-container";const e=document.createElement("div");e.id="section-8-cards-container";const t=document.createElement("div");t.classList.add("card-item");const c=document.createElement("div");c.classList.add("card-item");const s=document.createElement("div");s.classList.add("card-item");const l=document.createElement("div");l.classList.add("card-item");let d=new Image;d.src=o,d.alt="close up of women getting face treatment",d.id="eye-icon-1",d.classList.add("services-image"),t.style.backgroundImage="url(eyeIcon)";const p=document.createElement("h5");p.textContent="In-Person Facial Treatments:";const h=document.createElement("p");h.textContent="Get visibly rejuvenated and relaxed with my signature facial treatments, which focus on hand massage techniques. My services include Sculptural Face Lifting, gua sha, and facial cupping. You can visit me at my Chaya Wellness Koh Phangan studio or as a guest therapist at various locations. Join my inner circle list for updates on availability.",t.appendChild(d),t.appendChild(p),t.appendChild(h);const m=new Image;m.src=a,m.alt="women in spa holding her face",m.id="eye-icon-2",m.classList.add("services-image"),c.style.backgroundImage="url(eyeIcon2)";const g=document.createElement("h5");g.textContent="Face Yoga Workshops:";const u=document.createElement("p");u.textContent="Join me for transformative Face Yoga workshops, offered both online and in-person in group settings or private sessions, which include personalized consultations and tailored face yoga guides to address your unique facial needs.",c.appendChild(m),c.appendChild(g),c.appendChild(u);const f=new Image;f.src=i,f.alt="portrait of women wearing white dress",f.id="eye-icon-3",f.classList.add("services-image"),s.style.backgroundImage="url(eyeIcon3)";const b=document.createElement("h5");b.textContent="Self-Care Resources:";const x=document.createElement("p");x.textContent="Through my self-care resources, you can access a wealth of holistic beauty education. Explore self-facial massage techniques, gua sha practices, and more on my social media platforms and newsletter. Stay connected and informed by subscribing to my email list, where you'll receive exclusive tips, updates, and links to all my channels.",s.appendChild(f),s.appendChild(b),s.appendChild(x);const y=new Image;y.src=r,y.alt="portrait of women white dress forest background",y.id="eye-icon-4",y.classList.add("services-image"),l.style.backgroundImage="url(eyeIcon4)";const w=document.createElement("h5");w.textContent="Collaboration Oppurtunities";const v=document.createElement("p");return v.textContent="I'm eager to collaborate with spas, beauty salons, and wellness retreats worldwide. Whether as a guest therapist offering in-person treatments or as part of your workshop or retreat teaching team, I bring expertise in holistic facial care. Email me to explore collaboration opportunities.",l.appendChild(y),l.appendChild(w),l.appendChild(v),n.appendChild(e),e.appendChild(t),e.appendChild(c),e.appendChild(s),e.appendChild(l),n}()),I.appendChild(function(){const n=document.createElement("div");n.classList.add("bio"),n.id="section-7-parent-container";const e=document.createElement("div");e.id="section-7-image-container";const t=document.createElement("div");t.id="section-7-image-wrapper";const o=new Image;o.src=c,o.alt="majestic asian woman with eyes closed holding her chest",t.appendChild(o),e.appendChild(t);const a=document.createElement("div");a.id="section-7-text-container";const i=document.createElement("h1");i.id="section-7-title",i.classList.add("titles"),i.textContent="Education & Certifications";const r=document.createElement("ul");r.classList.add("paragraphs");const s=document.createElement("li");s.textContent="Certified Facialist by Health & Beauty Development School of Thailand";const l=document.createElement("li");l.textContent="Certified Integrative Vibrational Therapist by Yoga Sound Therapy";const d=document.createElement("li");d.textContent="Certified Face Yoga Teacher by The Danielle Collins Face Yoga Method";const p=document.createElement("li");return p.textContent="Certified Sculptural Face Lifting™ Professional by Yakov Gershkovich",r.appendChild(s),r.appendChild(l),r.appendChild(d),r.appendChild(p),a.appendChild(i),a.appendChild(r),n.appendChild(e),n.appendChild(a),n}()),I.appendChild(function(){const n=document.createElement("div");n.id="section-9-parent-container";const e=document.createElement("div");e.id="section-9-text-container";const t=document.createElement("h1");t.id="section-7-title",t.classList.add("titles"),t.textContent="Contact Preechaya";const o=document.createElement("hr"),a=document.createElement("h6"),i=document.createElement("a");a.id="section-7-tel",i.textContent="Phone: +66 83 293 5905",i.href="tel:+66832935905",a.appendChild(i);const r=document.createElement("h6");r.id="section-7-paragraph-2";const c=document.createElement("a");c.href="mailto:chayawellnessth@gmail.com",c.textContent="Email: chayawellnessth@gmail.com",r.appendChild(c);const h=document.createElement("div");h.id="section-9-socials-container";const m=document.createElement("div");m.classList.add("socials-wrapper");const g=document.createElement("a");g.href="https://web.facebook.com/chayawellnessth/?_rdc=1&_rdr";const u=new Image;u.classList.add("socials"),u.src=s,u.alt="click to message us on facebook",g.appendChild(u);const f=document.createElement("a");f.href="https://web.facebook.com/chayawellnessth/?_rdc=1&_rdr",f.textContent="Message us on Facebook",m.appendChild(g),m.appendChild(f);const b=document.createElement("div");b.classList.add("socials-wrapper");const x=document.createElement("a");x.href="https://www.instagram.com/chayawellnessth/";const y=new Image;y.classList.add("socials"),y.src=l,x.appendChild(y);const w=document.createElement("a");w.href="https://www.instagram.com/chayawellnessth/",w.textContent="Explore our Instagram",b.appendChild(x),b.appendChild(w);const v=document.createElement("div");v.classList.add("socials-wrapper");const k=document.createElement("a");k.href="https://api.whatsapp.com/send/?phone=66832935905&text&type=phone_number&app_absent=0";const C=new Image;C.classList.add("socials"),C.src=d,k.appendChild(C);const E=document.createElement("a");E.href="https://api.whatsapp.com/send/?phone=66832935905&text&type=phone_number&app_absent=0",E.textContent="Call / Message our Whatsapp",v.appendChild(k),v.appendChild(E);const j=document.createElement("div");j.classList.add("socials-wrapper");const z=document.createElement("a");z.href="https://www.google.com/maps/place/Chaya+Wellness+-+Holistic+Facial+Massage/@9.756151,99.9687052,17z/data=!3m1!4b1!4m6!3m5!1s0x305501e808735d41:0x81816732eba7d8fb!8m2!3d9.756151!4d99.9687052!16s%2Fg%2F11tdcwzdbh?hl=en-TH&entry=ttu";const F=new Image;F.classList.add("socials"),F.src=p,z.appendChild(F);const I=document.createElement("a");I.href="https://www.google.com/maps/place/Chaya+Wellness+-+Holistic+Facial+Massage/@9.756151,99.9687052,17z/data=!3m1!4b1!4m6!3m5!1s0x305501e808735d41:0x81816732eba7d8fb!8m2!3d9.756151!4d99.9687052!16s%2Fg%2F11tdcwzdbh?hl=en-TH&entry=ttu",I.textContent="Find our location",j.appendChild(z),j.appendChild(I),h.appendChild(m),h.appendChild(b),h.appendChild(v),h.appendChild(j);const L=document.createElement("hr");return e.appendChild(t),e.appendChild(o),e.appendChild(a),e.appendChild(r),e.appendChild(L),e.appendChild(h),n.appendChild(e),n}()),I.appendChild(h()),document.getElementById("About-anchor").href="#section-2-parent-container",document.getElementById("Training-anchor").href="#section-7-parent-container",document.getElementById("Contact-anchor").href="#section-9-parent-container"})()})();