export function contactPageLoad(){

    

    const contentDiv = document.querySelector("#content");
    contentDiv.replaceChildren();

    const fakeperson = document.createElement("img");
    fakeperson.src = "assets/fakeperson.jpg";
    fakeperson.alt = "picture of a faker person";
    contentDiv.appendChild(fakeperson);

    const heading = document.createElement("h1");
    heading.textContent = "Joshua Joshuason the third";
    contentDiv.appendChild(heading);


    const phoneNumber = document.createElement("p");
    phoneNumber.textContent = "555-555-5555";
    contentDiv.appendChild(phoneNumber);

    const description = document.createElement("p");
    description.textContent = "I'm not real please dont contact me";
    contentDiv.appendChild(description);
}