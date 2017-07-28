$('#base').append('<span id="plus" class="glyphicon glyphicon-edit"></span>');
$('#plus').click(function(event) {
    $('#notes').append('<textarea id="note"></textarea>');
});