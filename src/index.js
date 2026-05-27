
import {populateMenu} from "./menuModule.js";
import {populateAbout} from "./aboutModule.js";
import {populateHome} from "./homeModule.js";
let homeButton = document.querySelector(".homeBtn");
let menuButton = document.querySelector(".menuBtn");
let aboutButton = document.querySelector(".aboutBtn");
let divContent = document.querySelector("#content");

homeButton.addEventListener('click',populateHome);
menuButton.addEventListener('click',populateMenu);
aboutButton.addEventListener('click',populateAbout);


