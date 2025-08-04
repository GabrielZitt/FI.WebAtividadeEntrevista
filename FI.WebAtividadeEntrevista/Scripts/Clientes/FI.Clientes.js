$(document).ready(function () {
    $('#formCadastro').submit(function (e) {
        e.preventDefault();

        $('#beneficiariosJson').val(JSON.stringify(beneficiarios));

        $.ajax({
            url: urlPost,
            method: "POST",
            data: {
                "NOME": $("#Nome").val(),
                "CEP": $("#CEP").val(),
                "Email": $("#Email").val(),
                "Sobrenome": $("#Sobrenome").val(),
                "Nacionalidade": $("#Nacionalidade").val(),
                "Estado": $("#Estado").val(),
                "Cidade": $("#Cidade").val(),
                "Logradouro": $("#Logradouro").val(),
                "Telefone": $("#Telefone").val(),
                "CPF": $("#CPF").val(),
                "beneficiariosJson": $('#beneficiariosJson').val() 
            },
            error: function (r) {
                if (r.status == 400)
                    ModalDialog("Ocorreu um erro", r.responseJSON);
                else if (r.status == 500)
                    ModalDialog("Ocorreu um erro", "Ocorreu um erro interno no servidor.");
            },
            success: function (r) {
                ModalDialog("Sucesso!", r);
                $("#formCadastro")[0].reset();
                $('#listaBeneficiarios').empty(); 
                beneficiarios = [];
            }
        });
    });
});
function ModalDialog(titulo, texto) {
    var random = Math.random().toString().replace('.', '');
    var texto = '<div id="' + random + '" class="modal fade">                                                               ' +
        '        <div class="modal-dialog">                                                                                 ' +
        '            <div class="modal-content">                                                                            ' +
        '                <div class="modal-header">                                                                         ' +
        '                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>         ' +
        '                    <h4 class="modal-title">' + titulo + '</h4>                                                    ' +
        '                </div>                                                                                             ' +
        '                <div class="modal-body">                                                                           ' +
        '                    <p>' + texto + '</p>                                                                           ' +
        '                </div>                                                                                             ' +
        '                <div class="modal-footer">                                                                         ' +
        '                    <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>             ' +
        '                                                                                                                   ' +
        '                </div>                                                                                             ' +
        '            </div><!-- /.modal-content -->                                                                         ' +
        '  </div><!-- /.modal-dialog -->                                                                                    ' +
        '</div> <!-- /.modal -->                                                                                        ';

    $('body').append(texto);
    $('#' + random).modal('show');

}


