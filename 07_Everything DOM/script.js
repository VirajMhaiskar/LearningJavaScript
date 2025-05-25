/**DOM stands for Document Object Model
 * 
 * Document simply refers to the HTML document, which gets loaded in the browser.
 * This HTML document will have elements like paragraphs, hyperlinks, buttons,input elements etc.
 * 
 * This Document object model, represents each of these elements as an object. So we can say
 * DOM is a structured representation of HTML elements as an object
 * 
 * Although the DOM is created from the source HTML document, but it is not always true.
 * There are two instances where the DOM can be different from the source HTML:
 * 
 * 1:- When the HTML is not valid ---> The DOM is representation of valid HTML
 * document. During the process of creating the DOM, the browser may correct some
 * invalidities in the HTML code, before creating a DOM for it.
 * 
 * 2:-When we add elements to the webpage programmatically ---> When we add HTML
 * to the webpage using a programming language like JS, the new elements will be added in the
 * DOM and not in the original HTML document. This will only update the DOM and not the
 * original HTML document.
 * 
 * tl;dr ---> The HTML DOM is a standard object model and programming interface for HTML.
 * It defines:-
 * 1:- The HTML elements as objects
 * 2:- The properties on those objects. For eg. it defines the attributes of HTML
 * elements as properties, and it has some other properties like textContent.
 * 3:- It also defines the methods to access HTML elements and manipulate them.
 * 4:- It also defines the events for all HTML elements.
 */


/**We can use JS in browser to access and manipulate DOM elements. The
 * document object of DOM provides some useful methods to access DOM elements
 * and change it. Following are three main methods which we can use to access DOM
 * elements:
 * 
 * getElementbyId()
 * querySelector()
 * querySelectorAll()
 */

/**getElementbyId()
 * 
 * This method is present on document object. This method is used to access a DOM element
 * using its ID.
 * 
 * Returns the first matching HTML element from the DOM. (BUT ID ARE ALWAYS UNIQUE?)
 * Returns null if no HTML element with the given Id is found in the DOM.
 */

const p = document.getElementById("intro");
// console.log(p.textContent);

// p.textContent = "This is demo paragraph explaining the use of getElementById()."


/**querySelector()
 * 
 * This method is present on the document object.This method is used to access a DOM 
 * element using its Id, className or tag name.
 * 
 * Returns the first matching HTML element from the DOM.
 * Returns null if no HTML element with given attribute is found in the DOM.
 */



// const paragraph = document.querySelector("#intro");
const paragraph = document.querySelector(".about-us");
// console.log(paragraph);

const h2 = document.querySelector("h2");
h2.textContent = "Welcome to out bank"
// console.log(h2);

const h1 = document.querySelector("h1")
// console.log(h1.innerHTML);

h1.innerHTML = `<b>WE HAVE THE BEST LOAN OFFERS FOR YOU.</b>SERIOUSLY`


/**CHANGING ATTRIBUTES AND STYLE DYNAMICALLY */

/**CHANGING ATTRIBUTES USING JS */

// let input = document.querySelector("#fname")
// input.value = "Iron Man";

/**STYLING USING JS */

// const bgColor = document.querySelector(".home-page-banner");
// bgColor.style.backgroundColor = "#FDEBD0";
// bgColor.style.color = "#28282B";

/**ADD OR REMOVE CLASS DYNAMICALLY */
// const bannerDiv = document.querySelector(".home-page-banner");
// bannerDiv.classList.remove("home-page-banner"); //removing
// bannerDiv.classList.add("home-page-banner"); //adding


/**RENDOR WEBPAGE CONTENT DYNAMICALLY */

const mainSectionArea = document.querySelector(".main-section-area");
let selectedTab = "home-page";

let homeContent = document.querySelector(".home-page");
let emiCalcContent = document.querySelector(".emi-calculator-page");
let loanContent = document.querySelector(".apply-loan-page");

const renderSelectedSection = (selectedTab) =>  {

    mainSectionArea.innerHTML = '';

    switch(selectedTab) {
        case "home-page":
            mainSectionArea.innerHTML = homeContent.outerHTML;
            break;
        case "emi-calculator-page":
            mainSectionArea.innerHTML = emiCalcContent.outerHTML;
            break;
        case "apply-loan-page":
            mainSectionArea.innerHTML = loanContent.outerHTML;
            break;
    }
}

renderSelectedSection("home-page")

/**EVENTS AND EVENT HANDLER
 * 
 * JS is an event-driven programming language. We mostly write Js code to respong to an event.
 * 
 * Three ways in which we can handle events
 * inline event handler
 * Event Handler Properties
 * Using addEventListener() method
 * 
 */

/**Using Inline Event Handler
 * 
 * Adding an attribute to the HTML element on which you want to listen to an event
 * The attribute name must be the event name prefixed with "on" like "onclick" etc
 * Assign any JS expression to the event attribute which you want to execute when that event happens.
 * 
 * 
 */


/**EVENT HANDLER PROPERTIES */

const applyBtn = document.querySelector(".apply-now-button");

applyBtn.onclick = () => {
    alert("Thanks for applying we will get back to you!")
}

applyBtn.onmouseover = () => {
    applyBtn.style.backgroundColor = "transparent";
    applyBtn.style.border = "#F39C12 2px solid"
}

applyBtn.onmouseout = () => {
    applyBtn.style.backgroundColor = "#F39C12";
    applyBtn.style.border = "none"
}


/**addEventListener() */

const header = document.querySelector("header");
header.addEventListener("mouseover", () => {
    header.style.color = 'black';
});

header.addEventListener("mouseout", () => {
    header.style.color = 'white';
});



/**CHOOSING AN EVENT HANDLING APPROACH
 * 
 * For dynamically generated content inline event handler must be used
 * but for static content addEventListner() or Event Handler Properties can be used
 */


const calculateEMI = () => {
    let principal = document.getElementById('amount').value;
    let duration = document.getElementById('duration').value;
    let rate = document.getElementById('roi').value / 100 / 12;

    //calculate emi
    const emi = ((principal * rate * Math.pow(1 + rate, duration)) / (Math.pow(1 + rate, duration) - 1)).toFixed(2);

    //Total payable amount
    const paybleAmount = (emi * duration).toFixed(2);

    // alert('EMI: ' + emi + '. Total payable amount: ' + paybleAmount);
    showModal(emi, paybleAmount);
}

const modalDiv = document.querySelector("#calculate-emi-modal");
const okButton = document.querySelector(".close-modal-btn");

const showModal = (emi, paybleAmount) => {
    document.querySelector("#calculated-emi-cell").textContent = "$" + emi;
    
    document.querySelector("#calculated-payable-amount-cell").textContent = "$" + paybleAmount;
    modalDiv.classList.remove("hide");
}
okButton.addEventListener("click", () => {
    modalDiv.classList.add("hide");
});


/**READING FORM ELEMENT VALUES
 * 
 */

const applyForLoan = (event) => {
    event.preventDefault();

    const fname = document.querySelector("#fname").value;
    const lname = document.querySelector("#lname").value;
    const email = document.querySelector("#email").value;

    //Reading select lest selected values
    const occupation = document.querySelector("#occupation").value;

    //Reading input type=date element values
    const dateOfBirth = document.querySelector("#dob").value;

    //Reading radio button selected element values
    const gender = document.querySelector("input[name='gender']:checked").value;

    //Reading values of selected checkboxes
    const howToContact = [];
    const contacts = document.getElementsByName("contact")
    for(let i = 0; i < contacts.length; i++) {
        if(contacts[i].checked) {
            howToContact.push(contacts[i].value);
        }
    }
    // console.log(howToContact);
    showMessage(fname);
}

/**CREATING DOM ELEMENTS DYNAMICALLY */

const showMessage = (name) => {
    const overlayDiv = document.createElement("div");
    overlayDiv.classList.add("modal-overlay");

    const modalWrapper = document.createElement("div");
    modalWrapper.classList.add("modal-wrapper");

    const modalHeader = document.createElement("div");
    modalHeader.classList.add("modal-header");
    const header2 = document.createElement("h2");
    header2.textContent = "Load Request Received";
    modalHeader.appendChild(header2);

    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");

    const header3 = document.createElement("h3");
    const textNode = document.createTextNode(`Hello ${name}`);
    header3.appendChild(textNode);
    modalContent.insertAdjacentElement("afterbegin",header3);

    const p = document.createElement("p");
    p.style.marginTop = "30px"
    p.textContent = `We have received your load request and we will contact you through your provided contact`
    modalContent.insertAdjacentElement("beforeend",p);

    const modalFooter = document.createElement("div");
    modalFooter.classList.add("modal-footer");
    const closeBtn = document.createElement("button");
    closeBtn.classList.add("close-modal-btn");
    closeBtn.textContent = "OK";
    closeBtn.onclick = () => {
        overlayDiv.remove();
    };
    modalFooter.insertAdjacentElement("beforeend",closeBtn);

    modalWrapper.appendChild(modalHeader);
    modalWrapper.appendChild(modalContent);
    modalWrapper.appendChild(modalFooter);

    overlayDiv.appendChild(modalWrapper);

    document.querySelector(".main-content-area").insertAdjacentElement("beforeend",overlayDiv);
}

/**Handling Keyboard Events
 * 
 * Keypress
 * keyup
 * keydown
 */


document.addEventListener("keydown", (event) => {
    console.log(event);
    if(event.key === "Enter" && !(modalDiv.classList.contains("hide"))) {
        modalDiv.classList.add("hide");
    }
});

/** UNDERSTANDING EVENT BUBBLING
 * 
 * Event Bubbling is a fundamental concept in JS DOM that govers how events
 * propagate through nested elements. It defines the order in which event 
 * listeners are triggered when an event occurs on an element withing a nested element structure.
 * 
 */

/** DOM is not JS
 * 
 * The Document object and its methods are not part of JS programming language.
 * These methods are provided by browser's web API.
 * 
 * These methods cannot be used in JS, if we are using JS outside the browser environment.
 * For eg. Node JS
 */

/**
 * When we run JS in browser, browser is the runtime environment for compiling and 
 * executing JS code. A browser consists of 4 main part which works with JS in browser.
 * 
 * JS Engine, Web API, Callback Queue/Microtask Queue, Event Loop
 * 
 * Web API ---> provides us DOM and console.log as well.
 */










