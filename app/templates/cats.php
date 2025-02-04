<title>Calculez l'âge du chat</title>
<link rel="stylesheet" href="assets/css/cats.css">
<nav class="cats">
    <div class="home">
        <a class="navCats" href="/">accueil</a>
    </div>
    <div class="chien">
        <a class="navCats" href="">chat</a>
    </div>
    <div class="chat">
        <a class="navCats" href="/chien">chien</a>
    </div>
</nav>
<main>
<div class="containerCats">
    <h1>Calculer l'âge de mon chats</h1>
    <form id="myForm" action="votre_url_de_traitement" method="GET">
        <div class="selectAge">
            <label for="age-chat">Age réel :</label>
            <select name="age_chat" id="age-chat" required aria-required="true">
            </select>
        </div>
        <div class="button">
            <button type="submit">Valider</button>
        </div>
    </form>
    <p class="resultat"></p>
    <div class="containerSavaisTu">
        <h3>Le savais tu ?</h3>
        <p class="ageChat">Les âges du chat :<br></p>
        <p class="reponse">Tout au long de sa vie, le chat comme l'humain, voit sa physiologie, sa santé et son physique évoluer.</p>
        <p class="question">Voici quelques repères :</p>
        <ol>
            <li>Age pour castrer un chat:<br>Un chat peut être castré à n'importe quel âge mais il est préférable de procéder à cette castration dès que l'animal a atteint sa maturité sexuelle et avant ses premiers rapports. Cet âge se situe aux alentours de 8 mois pour les mâles.</li>
            <li>Age pour stériliser une chatte : <br>Une chatte peut être stérilisée à n'importe quel âge mais il est préférable de procéder à cette opération dès que l'animal a atteint sa maturité sexuelle et avant ses premières chaleurs. Cet âge se situe aux alentours de 6 mois pour les femelles.</li>
            <li>Espérance de vie du chat :<br>un chat peut vivre de 15 à 20 ans.</li>
        </ol>
    </div>
</div>
<div class="containerQuestion">
    <h2>Et vous, quel âge à votre chat ?</h2>
    <img class="chatSeul" src="assets/images/cats/chat-seul.webp" alt="image de chat">
</div>
</main>
<script src="assets/js/animationCats.js"></script>
<script src="assets/js/data/cats.js"></script>
<script src="assets/js/selectCats.js"></script>