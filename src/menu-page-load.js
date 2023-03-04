export function menuPageLoad(){

    

    const contentDiv = document.querySelector("#content");
    contentDiv.replaceChildren();

    const heading = document.createElement("h1");
    heading.textContent = "Milk Steak Only";
    contentDiv.appendChild(heading);

    const steakImage = document.createElement("img");
    steakImage.src = "assets/milksteak.jpeg";
    steakImage.alt = "picture of milk steak";
    contentDiv.appendChild(steakImage);

    const description = document.createElement("p");
    description.textContent = "Milk Steak $19.99";
    contentDiv.appendChild(description);
}