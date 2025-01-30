
const app = {
    init: function() {
      
      console.log('app init - si besoin de JS ;)');
      initApp()
    },
  };
  function initApp() {
    document.body.classList.add("anim-ready");
    
}
  
  document.addEventListener('DOMContentLoaded', app.init);