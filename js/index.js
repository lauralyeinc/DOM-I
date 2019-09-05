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

//task 1 & 2 
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

let navAs = document.querySelectorAll("a");
console.log(navAs);
// NodeList(6) [a, a, a, a, a, a]
// 0: a
// 1: a
// 2: a
// 3: a
// 4: a
// 5: a
// length: 6
// __proto__: NodeList
navAs[0].textContent = "Services";
navAs[1].textContent = "Product";
navAs[2].textContent = "Vision";
navAs[3].textContent = "Features";
navAs[4].textContent = "About";
navAs[5].textContent = "Contact";

// Section cta <--- classname---------

let DOMtitle = document.querySelector("h1");
DOMtitle.textContent = "DOM Is Awesome";

let ctaButton = document.querySelector("button");
ctaButton.textContent = "Get Started";

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

// Section main-content --------------
const h4title = document.querySelectorAll("h4");

// console.log(h4title)
// NodeList(6) [h4, h4, h4, h4, h4, h4]
// 0: h4
// 1: h4
// 2: h4
// 3: h4
// 4: h4
// 5: h4
// length: 6
// __proto__: NodeList
h4title[0].textContent = "Features";
h4title[1].textContent = "About";
h4title[2].textContent = "Services";
h4title[3].textContent = "Product";
h4title[4].textContent = "Vision";

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const contentParas = document.querySelectorAll("p");
// console.log(contentParas);
// NodeList(9) [p, p, p, p, p, p, p, p, p]
// 0: p
// 1: p
// 2: p
// 3: p
// 4: p
// 5: p
// 6: p
// 7: p
// 8: p
// length: 9
// __proto__: NodeList
contentParas[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

contentParas[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

contentParas[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

contentParas[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

contentParas[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";




//Section Contact 
h4title[5].textContent = "Contact";

contentParas[5].textContent = "123 Way 456 Street Somewhere, USA";

contentParas[6].textContent = "1 (888) 888-8888";

contentParas[7].textContent = "sales@greatidea.io";

// footer 
contentParas[8].textContent = "Copyright Great Idea! 2018";

// task 3 
// change color of nav text to green. 
navAs.style.color = "Green";

h1.style.color = "green";

//utilize .appendChild() & .prepend()  to add tow new items to the nav system. 
//adding two anchors
const HomeAnchor = document.createElement('a');

HomeAnchor.textContent = "Home";

navAs.prepend(HomeAnchor);

const FAQsAnchor = document.createElement('FAQs');

FAQsAnchor.textContent = "FAQs";

navAs.appendChild(FAQsAnchor);



