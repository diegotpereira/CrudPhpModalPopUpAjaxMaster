<?php
include 'database.php';

        if (count($_POST)>0) {
            # code...
            if ($_POST['type'] ==1) {
                # code...
                $nome=$_POST['nome']; 
                $email=$_POST['email'];
                $telefone=$_POST['telefone'];
                $cidade=$_POST['cidade'];

                $sql = "INSERT INTO `ESTUDANTE` (`nome`, `email`, `telefone`, `cidade`) VALUES ('$nome', '$email', '$telefone', '$cidade')";

                if (mysqli_query($conexao, $sql)) {
                    # code...
                    echo json_encode(array("statusCode"=>200));
                }else {
                    # code...
                    echo "Error: " . $sql . "<br>" . mysqli_error($conexao);
                }
                mysqli_close($conexao); 
            }
        }
        if (count($_POST)>0) {
            # code...
            if ($_POST['type'] ==2) {
                # code...
                $id=$_POST['id'];
                $nome=$_POST['nome'];
                $email=$_POST['email'];
                $telefone=$_POST['telefone'];
                $cidade=$_POST['cidade'];

                $sql = "UPDATE `ESTUDANTE` SET `nome`='$nome',`email`='$email',`telefone`='$telefone',`cidade`='$cidade' WHERE id=$id";
                if (mysqli_query($conexao, $sql)) {
                    # code...
                echo json_encode(array("statusCode" => 200));
                }else {
                    # code...
                    echo "Error: " . $sql . "<br>" . mysqli_error($conexao);
                }
                mysqli_close($conexao);
            }
        }
        if (count($_POST)>0) {
            # code...
            if ($_POST['type']==3) {
                # code...
                $id=$_POST['id'];
                $sql="DELETE FROM `ESTUDANTE` WHERE id=$id";
                if (mysqli_query($conexao,$sql)) {
                    # code...
                    echo $id;
                }else {
                    # code...
                    echo "Error: " . $sql . "<br>" . mysqli_error($conexao);
                }
                mysqli_close($conexao);
            }
        }
        if(count($_POST)>0){
            if($_POST['type']==4){
                $id=$_POST['id'];
                $sql = "DELETE FROM 'ESTUDANTE' WHERE id in ($id)";
                if (mysqli_query($conexao, $sql)) {
                    echo $id;
                } 
                else {
                    echo "Error: " . $sql . "<br>" . mysqli_error($conexao);
                }
                mysqli_close($conn);
            }
        }
?>
