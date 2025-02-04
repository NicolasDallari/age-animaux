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
        <form action="votre_url_de_traitement" method="GET">
            <div class="selectType">
                <label for="type-chien">Type de chien :</label>
                <select name="type_chien" id="type-chien" required aria-required="true">
                    <option value="petit chien">Petit chien</option>
                    <option value="petit chien">Moyen chien</option>
                    <option value="petit chien">Gros chien</option>
                </select><br>
            </div>
            <div class="selectAge">
                <label for="age-chien">Age réel :</label>
                <select name="age_chien" id="age-chien" required aria-required="true">
                    <option value="1an">1 an</option>
                    <option value="1an">2 an</option>
                    <option value="1an">3 an</option>
                    <option value="1an">4 an</option>
                </select>
            </div>
            <div class="button">
                <button type="submit">Valider</button>
            </div>
        </form>
        <p class="resultat">Votre chien de 1an aurait 20 ans s'il etait un humain</p>
        <p class="note"><strong>Note :</strong> Petit chien = chien de moins de 15kg,<br> Chien moyen = chien entre 15 et 45 kg ,<br>Gros chien = chien de plus de 45kg</p>
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