<?php 
define('BASE_PATH', __DIR__ . '/..');
require BASE_PATH . '/vendor/autoload.php';
require BASE_PATH . '/app/partials/header.php' ;

$uri = $_SERVER['REQUEST_URI'];

$router = new  AltoRouter();

require_once BASE_PATH .'/app/routes/routes.php';

$match = $router->match();
if ($match) {
    call_user_func_array($match['target'],$match['params']);
} else {
    echo " Cette page n'existe pas ";
}

require BASE_PATH .'/app/partials/footer.php' ;