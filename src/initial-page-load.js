export function initialPageLoad() {
    const headerDiv = document.querySelector("#header");
    headerDiv.replaceChildren();

    const headerList = document.createElement("ul");
    const headerHome = document.createElement("li");
    headerHome.classList.add("home");
    headerHome.textContent = "Home";
    const headerMenu = document.createElement("li");
    headerMenu.classList.add("menu");
    headerMenu.textContent = "Menu";
    const headerContact = document.createElement("li");
    headerContact.classList.add("contact");
    headerContact.textContent = "Contact";
    headerList.appendChild(headerHome);
    headerList.appendChild(headerMenu);
    headerList.appendChild(headerContact);

    headerDiv.appendChild(headerList);


    const contentDiv = document.querySelector("#content");
    contentDiv.replaceChildren();

    const heading = document.createElement("h1");
    heading.textContent = "Milk Steak Only - The Restaurant";
    contentDiv.appendChild(heading);

    const steakImage = document.createElement("img");
    steakImage.src = "assets/milksteak.jpeg";
    steakImage.alt = "picture of milk steak";
    contentDiv.appendChild(steakImage);

    const description = document.createElement("p");
    description.textContent = "Hello! Welcome to the amazing restaurant where you can only order milk steak";
    contentDiv.appendChild(description);

    

    
}