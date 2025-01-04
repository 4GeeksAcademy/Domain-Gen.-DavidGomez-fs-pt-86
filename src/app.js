import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const pronounList = ["the", "our"];
  const adjectiveList = ["great", "big"];
  const nounsList = ["jogger", "racoon"];
  const domains = [];

  pronounList.forEach(pronoun => {
    adjectiveList.forEach(adjective => {
      nounsList.forEach(noun => {
        domains.push(`${pronoun}${adjective}${noun}.com`);
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
