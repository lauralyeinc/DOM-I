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

//task 1 

// nav area  In inspect the element place"holders" are already there. Header -> nav -> 

// const navItems = document.getElementsByTagName("a");
// console.log(navItems);
// HTMLCollection(6) [a, a, a, a, a, a]
// 0: a
// 1: a
// 2: a
// 3: a
// 4: a
// 5: a
// length: 6
// __proto__: HTMLCollection

// const navAs = document.querySelectorAll("a");
// console.log(navAs);
// NodeList(6) [a, a, a, a, a, a]
// 0: a
// 1: a
// 2: a
// 3: a
// 4: a
// 5: a
// length: 6
// __proto__: NodeList

let navAone = document.querySelector("a")[0];
// NavAone.textContent = "Services";
// navAone.setAttribute( siteContent ["nav"]["nav-item-1"])




// Section cta <--- classname---------

let DOMtitle = document.querySelector("h1");
DOMtitle.textContent = "DOM Is Awesome";

let ctaButton = document.querySelector("button");
ctaButton.textContent = "Get Started";

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

// Section main-content --------------
let featureh4 = document.querySelector("h4");

featureh4.textContent = "Features";

let featureCont = document.querySelector("p");

featureCont.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";


// let abouth4 = document.querySelector("h4");
// abouth4.textContent = "About";

// let aboutCont = document.querySelector("p");
// aboutCont.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let codeImg = document.getElementById("middle-img"); 
codeImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// let Servicesh4 = document.querySelector("h4");
//Servicesh4.textContent = "Services";

// let ServicesCont = document.querySelector("p"); 
// ServicesCont.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

// let producth4 = document.querySelector("h4");
// producth4.textContent = "Product";

// let productCont = document.querySelector("p");
// productCont.textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

// let visionh4 = document.querySelector("h4");
// visionh4.textContent = "Vision";

// let visionCont = document.querySelector("p");
// visionCont.textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

//Section Contact 

// let contacth4 = document.getElementByName("h4");

// contacth4.setAttribute("h4", siteContent["contact"]["contact-h4"])


// footer 