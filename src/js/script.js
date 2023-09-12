$(document).ready(function () {
    var table = $('#myTable').DataTable({
        paging: true,
        lengthMenu: [5, 10, 25],
        pageLength: 5,
        language: {
            paginate: {
                previous: 'Anterior',
                next: 'Próxima'
            }
        },
        order: [[3, 'desc']]
    });

    console.log($('#myTable').DataTable())

    // Remover o elemento "dataTables_info"
    $('.dataTables_info').remove();

    $('#myTable_length').remove();

    // Obtendo o elemento com o ID "myTable_filter"
    var filterElement = document.getElementById("myTable_filter");

    // Obtendo o elemento de input dentro do elemento do filtro
    var inputElement = filterElement.getElementsByTagName("input")[0];

    // Definindo o novo valor do atributo "placeholder"
    inputElement.setAttribute("placeholder", "Buscar Atleta");

    var infoElement = $('.dataTables_info');
    var pagination = $('#pagination');
    pagination.empty();





    table.on('draw.dt', function () {
        var info = table.page.info();
        var pageNumber = info.page + 1;
        var totalPages = info.pages;

        pagination.empty();

        var pageLink = $('<li class="paginate_button"><a href="#">' + pageNumber + '</a></li>');
        pageLink.addClass('current');

        var searchInput = document.querySelector('#myTable_filter input');
        var searchValue = searchInput.value;

        var emptyCell = $('.dataTables_empty');
        emptyCell.html('Nenhum registro encontrado');
    });
});
