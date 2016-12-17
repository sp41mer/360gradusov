/**
 * Created by sp41mer on 17.12.16.
 */

var cards;

function show(cards){
    cards.first().show();
    cards.splice(0,1);

}

$(document).ready(function(){
    cards = $('.scoring-card');
    show(cards);
    $('.button-grid__button').click(function(){
        $(this).parent().parent().hide();
        swal("Поля заполнены", "Оценка сохранена", "success");
        show(cards);
    });
});