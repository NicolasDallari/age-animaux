// Fonction pour remplir les options du <select>
function typeDogSelectOptions() {
  // Sélectionner l'élément <select>
  const selectElement = document.getElementById("type-chien");

  // Parcourir le tableau de données et créer des éléments <option>
  typeDog.forEach(function (data) {
    const optionElement = document.createElement("option");
    optionElement.value = data.value;
    optionElement.textContent = data.text;
    selectElement.appendChild(optionElement);
  });
}
// Fonction pour remplir les options du <select>
function ageDogSelectOptions() {
  // Sélectionner l'élément <select>
  const selectElement = document.getElementById("age-chien");

  // Parcourir le tableau de données et créer des éléments <option>
  ageDataDog.forEach(function (data) {
    const optionElement = document.createElement("option");
    optionElement.value = data.value;
    optionElement.textContent = data.text;
    selectElement.appendChild(optionElement);
  });
}

function selectDataForm() {
  const form = document.getElementById("myForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut

    //recuperer les données du type chien avec la value du poids
    const typeChien = document.getElementById("type-chien").value;
   
    const ageChien = document.getElementById("age-chien").value;

    let selectedAgeData = null;
        if (typeChien === "-15kg") {
            selectedAgeData = ageDataLittle.find((data) => data.value === ageChien);
        } else if (typeChien === "-40kg") {
            selectedAgeData = ageDataMedium.find((data) => data.value === ageChien);
        } else if (typeChien === "+40kg") {
            selectedAgeData = ageDataBig.find((data) => data.value === ageChien);
        } else {
          console.error("Type de chien non reconnu:", typeChien);
        }
    
    const ageHumain = selectedAgeData ? selectedAgeData.text : "Âge non trouvé";

     // Sélectionner l'élément <p class="resultat">
     const resultatElement = document.querySelector(".resultat");

     // Mettre à jour le contenu de l'élément
     resultatElement.textContent = `Votre chien de ${ageChien} aurait ${ageHumain} s'il était un humain`;
 
     // Ajouter l'élément au DOM
     const container = document.querySelector(".resultat"); // Sélectionnez le conteneur approprié
     container.appendChild(resultatElement);
 
  });
}
