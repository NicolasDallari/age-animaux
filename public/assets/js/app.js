const app = {
  init: function () {
    console.log("app init - si besoin de JS ;)");
    initApp();
    // Vérifiez la présence d'éléments spécifiques pour déterminer la page
    if (document.querySelector("#age-chat")) {
      ageSelectOptions();
      selectDataFormCats();
    }

    if (document.querySelector("#type-chien")) {
      typeDogSelectOptions();
      ageDogSelectOptions()
      selectDataForm();
    }
  },
};
function initApp() {
  document.body.classList.add("anim-ready");
}

document.addEventListener("DOMContentLoaded", app.init);
