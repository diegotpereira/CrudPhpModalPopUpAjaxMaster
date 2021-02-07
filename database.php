<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "db_crud_php_modal_popup_ajax";
$conexao = mysqli_connect($servername, $username, $password, $dbname);
if (!$conexao) {
    die("Connection failed: " . mysqli_connect_error());
}
?>