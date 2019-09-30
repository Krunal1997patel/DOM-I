const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//All the nav links
let navLink  = document.querySelectorAll('a');

for(let i = 0; i < navLink.length; i++){
  navLink[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
  navLink[i].style.color = 'green';
}


//the main title of the page
let mainTitle = document.querySelector('h1');
mainTitle.textContent = siteContent.cta.h1;

mainTitle.innerText = 'DOM \n Is \n Awesome'

//the big image in circle
let circleImage = document.querySelector('#cta-img');
circleImage.src = siteContent.cta["img-src"];
circleImage.alt = 'code in circle'

//the button text
let buttonText = document.querySelector('button');

buttonText.textContent = siteContent.cta.button;

//features and about for main content
let topContentTitle = document.querySelectorAll('.text-content h4');
topContentTitle[0].textContent = siteContent["main-content"]["features-h4"];
topContentTitle[1].textContent = siteContent["main-content"]["about-h4"];

let topContentPara = document.querySelectorAll('.text-content p');
topContentPara[0].textContent = siteContent["main-content"]["features-content"];
topContentPara[1].textContent = siteContent["main-content"]["about-content"];


//image with code 
let boxImage = document.querySelector('.middle-img');
boxImage.src = siteContent["main-content"]["middle-img-src"];
boxImage.alt = 'code in a box'

//service, product, vision for bottom content
let bottomContentTitle = document.querySelectorAll('.bottom-content h4');
bottomContentTitle[0].textContent = siteContent["main-content"]["services-h4"];
bottomContentTitle[1].textContent = siteContent["main-content"]["product-h4"];
bottomContentTitle[2].textContent = siteContent["main-content"]["vision-h4"];

//service, product, vision paragraph for bottom content
let bottomContentPara = document.querySelectorAll('.bottom-content p');
bottomContentPara[0].textContent = siteContent["main-content"]["services-content"];
bottomContentPara[1].textContent = siteContent["main-content"]["product-content"];
bottomContentPara[2].textContent = siteContent["main-content"]["vision-content"];

// the contact title
let contactTitle = document.querySelector('.contact h4');
contactTitle.textContent = siteContent.contact["contact-h4"];

//contact p tag
let contactPara = document.querySelectorAll('.contact p');
contactPara[0].textContent = siteContent.contact.address;
contactPara[1].textContent = siteContent.contact.phone;
contactPara[2].textContent = siteContent.contact.email;

contactPara[0].innerText = '123 Way 456 Street \n Somewhere, USA'

//footer of the page
let footer = document.querySelector('footer p');
footer.textContent = siteContent.footer.copyright;