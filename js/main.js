function adicionarItem() {
    produto_digitado = document.getElementById('nome_do_produto').value
    preco_digitado = document.getElementById('preco_do_produto').value
    if (produto_digitado.length > 0 && preco_digitado.length > 0){
        
    var tabela = document.getElementById('estoque')
    var nova_linha = tabela.insertRow(0)
    var nova_celula_prod = nova_linha.insertCell(0)
    var nova_celula_preco = nova_linha.insertCell(1)
    nova_celula_prod.innerHTML = produto_digitado
    nova_celula_preco.innerHTML = preco_digitado
    document.getElementById('nome_do_produto').value = ''
    document.getElementById('preco_do_produto').value = ''
    }
 
}

function removerItem() {
    var tabela = document.getElementById('estoque').deleteRow(0)
}


$(function() {
  $(".exportToExcel").click(function(e){
    var table = $(this).prev('.table2excel');
    if(table && table.length){
      var preserveColors = (table.hasClass('table2excel_with_colors') ? true : false);
      $(table).table2excel({
        exclude: ".noExl",
        name: "Excel Document Name",
        filename: "estoque" + "_" + new Date().toISOString() + ".xls",
        fileext: ".xls",
        exclude_img: true,
        exclude_links: true,
        exclude_inputs: true,
        preserveColors: preserveColors
      });
    }
  });
  
});