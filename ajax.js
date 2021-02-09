$(document).on('click', '#btn-add', function(e) {
    var data = $("#usuario_form").serialize();
    $.ajax({
        data: data,
        type: "post",
        url: "funcao.php",
        success: function(dataResult) {
            var dataResult = JSON.parse(dataResult);
            if (dataResult.statusCode == 200) {
                $('#addFuncModal').modal('hide');
                alert('Registro adicionado com sucesso!');
                location.reload();
            } else if (dataResult.statusCode == 201) {
                alert(dataResult);
            }
        }
    });
});
$(document).on('click', '.update', function(e) {
    var id = $(this).attr("data-id");
    var nome = $(this).attr("data-nome");
    var email = $(this).attr("data-email");
    var telefone = $(this).attr("data-telefone");
    var cidade = $(this).attr("data-cidade");
    $('#id_u').val(id);
    $('#nome_u').val(nome);
    $('#email_u').val(email);
    $('#telefone_u').val(telefone);
    $('#cidade_u').val(cidade);
});
$(document).on('click', '#update', function(e) {
    var data = $("#atualiza_form").serialize();
    $.ajax({
        data: data,
        type: "post",
        url: "funcao.php",
        success: function(dataResult) {
            var dataResult = JSON.parse(dataResult);
            if (dataResult.statusCode == 200) {
                $('#editFuncModal').modal('hide');
                alert('Registro atualizado com sucesso!');
                location.reload();
            } else if (dataResult.statusCode == 201) {
                alert(dataResult);
            }
        }
    });
});
$(document).on("click", ".delete", function() {
    var id = $(this).attr("data-id");
    $('#id_d').val(id);

});
$(document).on("click", "#delete", function() {
    $.ajax({
        url: "funcao.php",
        type: "POST",
        cache: false,
        data: {
            type: 3,
            id: $("#id_d").cal()
        },
        success: function(dataResult) {
            location.reload();
            $('deleteFuncModal').modal('hide');
            $("#" + dataResult).remove();

        }

    });
});
$(document).on("click", "#delete_multiple", function() {
    var user = [];
    $(".user_checkbox:checked").each(function() {
        user.push($(this).data('user-id'));
    });
    if (user.length <= 0) {
        alert("Por favor selecione um gravação.")
    } else {
        WRN_PROFILE_DELETE = "Tem certeza de que deseja excluir " + (user.length > 1 ? "estes" : "isto") + " linha?";
        if (checked == true) {
            var selected_values = user.join(",");
            console.log(selected_values);
            $.ajax({
                type: "POST",
                url: "funcao.php",
                cache: false,
                data: {
                    type: 4,
                    id: selected_values
                },
                success: function(response) {
                    var ids = response.split(",");
                    for (var i = 0; i < ids.length; i++) {
                        $("#" + ids[i]).remove();
                    }
                }
            });
            location: reload();
        }
    }
});
$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
    var checkbox = $('table tbody input [type="checkbox"]');
    $("selectAll").click(function() {
        if (this.checked) {
            checkbox.each(function() {
                this.checked = true;
            });
        } else {
            checkbox.each(function() {
                this.checked = false;
            });
        }
    });
    checkbox.click(function() {
        if (!this.checked) {
            $("#selectAll").prop("checked", false);
        }
    });
});