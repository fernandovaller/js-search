//Pesquisa rapida
$("#find").on('keyup', function(e) {    
    
    //se apagar todos os caracter exibi todos os registros novamente
    if($(this).val() == ''){
        find();
    }

    //ao presionar [ENTER] faz a pesquisa
    //pode ser remover para pesquisar ao presionar qualquer tecla
    //if(e.which == 13) {
      find();
    //}    
});

$('#find-btn').click(function(){
    find();
});

function find(){
    var el = $('#find');
    var f = el.val();  
    var div = el.data('target');    
    $(div).each(function() {
        if ($(this).text().search(new RegExp(f, "i")) < 0) {
            $(this).fadeOut(500);
        } else {
            $(this).show(200);
        }
    });  
}