import { initialPageLoad } from "./initial-page-load";
import { homePageLoad } from "./home-page-load";
import { menuPageLoad } from "./menu-page-load";
import { contactPageLoad} from "./contact-page-load"
initialPageLoad();

const homeLoad = document.querySelector(".home");
homeLoad.addEventListener("click", homePageLoad);

const menuLoad = document.querySelector(".menu");
menuLoad.addEventListener("click", menuPageLoad);

const contactLoad = document.querySelector(".contact");
contactLoad.addEventListener("click", contactPageLoad);