<title>Calculez l'âge du chien</title>
<link rel="stylesheet" href="assets/css/dog.css">
<nav class="dog">
    <div class="home">
        <a class="navDog" href="/">accueil</a>
    </div>
    <div class="chien">
        <a class="navDog" href="/chat">chat</a>
    </div>
    <div class="chat">
        <a class="navDog" href="">chien</a>
    </div>
</nav>
<main>
    <div class="containerDog">
        <h1>Calculer l'âge de mon chien </h1>
        <form id="myForm" action="votre_url_de_traitement" method="GET">
            <div class="selectType">
                <label for="type-chien">Type de chien :</label>
                <select name="type_chien" id="type-chien" required aria-required="true">
                </select><br>
            </div>
            <div class="selectAge">
                <label for="age-chien">Age réel :</label>
                <select name="age_chien" id="age-chien" required aria-required="true">
                </select>
            </div>
            <div class="button">
                <button type="submit">Valider</button>
            </div>
        </form>
        <p class="resultat"></p>
        <div class="containerQuestion">
            <h3>Le savais tu ?</h3>
            <p class="question">Comment appelle-t-on ?</p>
            <ol>
                <li>Un bébé chien: un chiot</li>
                <li>Un chien femelle: une chienne</li>
                <li>Un chien mâle: un chien !</li>
            </ol>
            <p class="esperenceVie">Espérance de vie du chien?<br></p>
            <p class="reponse">Un chien peut vivre de 10 à 15 ans selon sa corpulence.</p>
        </div>
        <h2>Et vous, quel âge à votre chien ?</h2>
    </div>
</main>
<img class="chienSeul" src="assets/images/dogs/chien-seul.webp" alt="image de chien ">
<script src="assets/js/animationDog.js"></script>