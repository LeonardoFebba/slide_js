import {slideNav} from "./slide.js";

const slide = new slideNav('.slide', '.slide-wrapper');

slide.init();
slide.addArrow('.prev', '.next');
slide.addControl('.custom-controls');