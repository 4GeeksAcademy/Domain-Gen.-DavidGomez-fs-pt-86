import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const pronounList = ["The", "Our", "Yours", "This", "That"];
  const adjectiveList = ["Great", "Gig", "Small", "Tiny", "Green", "Special"];
  const nounsList = ["Jogger", "Racoon", "Machine", "Person", "Product"];
  const endList = [".es", ".com", ".io", ".net", ".urs"];
  const domains = [];

  pronounList.forEach(pronoun => {
    adjectiveList.forEach(adjective => {
      nounsList.forEach(noun => {
        endList.forEach(end => {
          domains.push(`${pronoun}${adjective}${noun}${end}`);
        });
      });
    });
  });

  window.addRandomDomain = function() {
    const domainDisplay = document.getElementById("domain-display");
    const randomIndex = Math.floor(Math.random() * domains.length);
    const randomDomain = domains[randomIndex];
    domainDisplay.textContent = randomDomain;
  };

  console.log("Hello Rigo from the console!");
};
