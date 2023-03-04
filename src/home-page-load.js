export function homePageLoad() {
    const contentDiv = document.querySelector("#content");
    contentDiv.replaceChildren();

    const heading = document.createElement("h1");
    heading.textContent = "Milk Steak Only - The Restaurant";
    contentDiv.appendChild(heading);

    const steakImage = document.createElement("img");
    steakImage.src = "../src/assets/milksteak.jpeg";
    steakImage.alt = "picture of milk steak";
    contentDiv.appendChild(steakImage);

    const description = document.createElement("p");
    description.textContent = "Hello Welcome to the amazing restaurant where you can only order milk steak";
    contentDiv.appendChild(description);

    
}