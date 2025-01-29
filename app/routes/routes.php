<?php
$router->map('GET','/', function () {
     require __DIR__ . '/../templates/home.php' ;
});
$router->map('GET','/chien', function () {
    require __DIR__. '/../templates/dog.php' ;
});
$router->map('GET','/chat', function () {
    require __DIR__. '/../templates/cats.php' ;
});