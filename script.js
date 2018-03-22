$(document).ready(function(){

    $("body").on("click", ".open-modal", function() {
        var id = $(this).attr("data-modal");
        $("#"+id).fadeIn();
    });

    $("body").on("click", ".close-modal", function() {
        id = $(this).parent().parent().attr("id");
        $("#"+id).fadeOut();
    });

    $("body").on("click", ".open-video", function() {
        var id = $(this).attr("data-modal");
        $("#"+id).children(".item-modal").find(".wrapper").html("<div class='wrapper'><iframe width='100%' height='100%' src='https://www.youtube.com/embed/CrGlupn_DnQ?start=122' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe></div>");
    });

    $("body").on("click", ".close-video", function() {
        id = $(this).parent().parent().attr("id");
        $("#"+id).children(".item-modal").find(".wrapper iframe").remove();
    });

    var cena = Number($(".messages").attr("id"));

    var frase = {
        msg1: "A 'Ordenação por Bolha' (bubble) é um algoritmo usado para ordenar uma sequência de números",
        msg2: "Os indicadores na extremidade direita da sequência compararão os números aos seus lados esquerdo e direito.",
        msg3: "Neste caso, eles compararão 7 e 6",
        msg4: "Depois de compará-os, se o número à direita for menor que o da esquerda, os números são trocados de lugar.",
        msg5: "6 é menor do que 7, então os números foram trocados.",
        msg6: "Depois que a comparação é feita, os indicadores são movidos uma posição à esquerda.",
        msg7: "Os números são comparados novamente.",
        msg8: "Desta vez, 6 é maior do que 4, então os números não são trocados",
        msg9: "Os indicadores são movidos uma posição à esquerda.",
        msg10: "Esta operação é repetida até que a escala alcance a extremidade esquerda da sequência.",
        msg11: "Os indicadores chegaram à extremidade esquerda da sequência.",
        msg12: "Em um ciclo de operações, o menor valor da sequência foi movido para o começo da sequência, à esquerda.",
        msg13: "O número na extremidade esquerda é considerado totalmente ordenado...",
        msg14: "e os indicadores retornam para a extremidade direita.",
        msg15: "As mesmas operações são repetidas até que todos os números sejam completamente ordenados.",
        msg16: "A ordenação está completa.",
        msg17: "Isto conclui a explicação de ordenação por bolha."
    }

    var cores = {
        blue: "#4762D7",
        blueLight: "#478BD6",
        blueMarine: "#07B690",
        green: "#14C461",
        greenMoss: "#8CB528",
        beige: "#D8BC16",
        orange: "#FCA00E",
        orangeDark: "#E86E00",
        red: "#D52E1C",
        gray: "#DEDEDE"
    }

    $(".steps .prev").addClass("not-active");

    var step1 = function(elemento, movimento, order) {
        var r = $.Deferred();
            $('#item_'+elemento).addClass(movimento).delay(500).queue(function(){
            $(this).removeClass(movimento)
            $(this).css("order", order)
            $(this).dequeue();
        });
        return r;
    };

    var step2 = function(elemento) {
        var r = $.Deferred();
        $('#item_'+elemento).delay(200).queue(function(){
            $(this).css("background-color", "#DEDEDE")
            $(this).dequeue();
        })
        return r;
    };

    var step3 = function(move) {
    var r = $.Deferred();
        $(".navigation").delay(900).queue(function(){
            $(".navigation").css("right", move+"px");
            $(this).dequeue();
        })
        return r;
    };

    function orderReset(elemento, order){
        $('#item_'+elemento).css("order", order);
    }

    function mover(move) {
        $(".navigation").css("right", move+"px");
    }

    function color(item, cor){
        $("#item_"+item).css("background-color", cor);
    }

    function mensagens() {
        switch(cena) {
            case 1:
                mensagem(frase.msg1);
                mover(27);
                $(".steps .start").css("background-color", "gray");
                $(".steps .prev").css("background-color", "gray");
                $(".steps .next").removeClass("not-active");
                $(".steps .next").css("background-color", "");
            break;
            case 2:
                mensagem(frase.msg2);
                mover(27);
                $(".steps .start").css("background-color", "");
                $(".steps .prev").css("background-color", "");
                $(".steps .prev").removeClass("not-active");
            break;
            case 3:
                mensagem(frase.msg3);
                mover(27);
            break;
            case 4:
                mensagem(frase.msg4);
                mover(27);
            break;
            case 5:
                mensagem(frase.msg5);
                mover(27);
            break;
            case 6:
                mensagem(frase.msg6);
                mover(51);
            break;
            case 7:
                mensagem(frase.msg7);
                mover(51);
            break;
            case 8:
                mensagem(frase.msg8);
                mover(51);
            break;
            case 9:
                mensagem(frase.msg9);
                mover(75);
            break;
            case 10:
                mensagem(frase.msg10);
                mover(75);
            break;
            case 11:
                mensagem(frase.msg10);
            break;
            case 12:
                mensagem(frase.msg10);
                mover(123);
            break;
            case 13:
                mensagem(frase.msg10);
                mover(147);
            break;
            case 14:
                mensagem(frase.msg10);
            break;
            case 15:
                mensagem(frase.msg10);
            break;
            case 16:
                mensagem(frase.msg10);
                mover(196);
            break;
            case 17:
                mensagem(frase.msg11);
                mover(196);
            break;
            case 18:
                mensagem(frase.msg12);
                mover(196);
            break;
            case 19:
                mensagem(frase.msg13);
                mover(196);
            break;
            case 20:
                mensagem(frase.msg14);
                mover(27);
            break;
            case 21:
                mensagem(frase.msg15);
                mover(27);
            break;
            case 22:
                mensagem(frase.msg15);
                mover(51);
            break;
            case 23:
                mensagem(frase.msg15);
            break;
            case 24:
                mensagem(frase.msg15);
                mover(99);
            break;
            case 25:
                mensagem(frase.msg15);
                mover(123);
            break;
            case 26:
                mensagem(frase.msg15);
            break;
            case 27:
                mensagem(frase.msg15);
            break;
            case 28:
                mensagem(frase.msg15);
            break;
            case 29:
                mensagem(frase.msg15);
            break;
            case 30:
                mensagem(frase.msg15);
                mover(75);
            break;
            case 31:
                mensagem(frase.msg31);
                mover(99);
            break;
            case 32:
                mensagem(frase.msg15);
                mover(123);
            break;
            case 33:
                mensagem(frase.msg15);
            break;
            case 34:
                mensagem(frase.msg15);
            break;
            case 35:
                mensagem(frase.msg15);
                mover(51);
            break;
            case 36:
                mensagem(frase.msg15);
                mover(75);
            break;
            case 37:
                mensagem(frase.msg15);
                mover(99);
            break;
            case 38:
                mensagem(frase.msg15);
            break;
            case 39:
                mensagem(frase.msg15);
            break;
            case 40:
                mensagem(frase.msg15);
                mover(51);
            break;
            case 41:
                mensagem(frase.msg15);
                mover(75);
            break;
            case 42:
                mensagem(frase.msg15);
            break;
            case 43:
                mensagem(frase.msg15);
                mover(27);
            break;
            case 44:
                mensagem(frase.msg15);
                mover(51);
            break;
            case 45:
                mensagem(frase.msg15);
            break;
            case 46:
                mensagem(frase.msg15);
                mover(27);
            break;
            case 47:
                mensagem(frase.msg15);
                mover(51);
            break;
            case 48:
                mensagem(frase.msg15);
                mover(27);
            break;
            case 49:
                mensagem(frase.msg15);
                mover(27);
            break;
            case 50:
                mensagem(frase.msg16);
                mover(27);
            break;
            case 51:
                mensagem(frase.msg17);
                mover(27);
            break;
        }
    }

    function mensagem(msg) {
        $("#"+cena).children(".messages").find("p").html(msg);
    }

    cena = 1;

    $(".nav").on('click', function(event) {
        var action = $(this).attr('id');

        if(action == 'start') {

            cena = 1;
            $(".moves").html(cena);

            $(".messages").parent().attr("id", cena);

            switch(cena) {

                case 1:
                    orderReset(5, 1);
                    orderReset(9, 2);
                    orderReset(3, 3);
                    orderReset(1, 4);
                    orderReset(2, 5);
                    orderReset(8, 6);
                    orderReset(4, 7);
                    orderReset(7, 8);
                    orderReset(6, 9);
                    $(".flex-item .flex-wrapper div").css("background-color", "");
                break;
            }
        }

        if(action == 'next') {
            cena += 1;
            $(".moves").html(cena);
            $(".messages").parent().attr("id", cena);
            switch(cena) {
                case 2:
                    $(".steps .prev").css("background-color", "gray");
                    $(".steps .prev").removeClass("not-active");
                break;
                case 5:
                    step1(6, "move_left", 8)
                    step1(7, "move_right", 9);
                break;
                case 11:
                    step1(4, "move_left", 6).done(step3("+=24"));
                    step1(8, "move_right", 7);
                break;
                case 14:
                    step1(1, "move_left", 3).done(step3("+=24"));
                    step1(3, "move_right", 4);
                break;
                case 15:
                    step1(9, "move_right", 3).done(step3("+=24"));
                    step1(1, "move_left", 2);
                break;
                case 16:
                    step1(5, "move_right", 2);
                    step1(1, "move_left", 1);
                break;
                case 19:
                    color(1, cores.gray);
                break;
                case 23:
                    step1(6, "move_left", 7).done(step3("+=24"));
                    step1(8, "move_right", 8);
                break;
                case 26:
                    step1(2, "move_left", 4).done(step3("+=24"));
                    step1(3, "move_right", 5);
                break;
                case 27:
                    step1(2, "move_left", 3).done(step3("+=24"));
                    step1(9, "move_right", 4);
                break;
                case 28:
                    step1(2, "move_left", 2).done(step2(2).done(step3("27")));
                    step1(5, "move_right", 3);
                break;
                case 29:
                    step1(8, "move_right", 9).done(step3("+=24"));
                    step1(7, "move_left", 8);
                break;
                case 33:
                    step1(9, "move_right", 5).done(step3("+=24"));
                    step1(3, "move_left", 4);
                break;
                case 34:
                    step1(5, "move_right", 4);
                    step1(3, "move_left", 3).done(step2(3).done(step3("27")));
                break;
                case 38:
                    step1(9, "move_right", 6)
                    step1(4, "move_left", 5).done(step3("+=24"));
                break;
                case 39:
                    step1(5, "move_right", 5);
                    step1(4, "move_left", 4).done(step2(4).done(step3("27")));
                break;
                case 42:
                    step1(9, "move_right", 7).done(step3("+=24"));
                    step1(6, "move_left", 6);
                break;
                case 43:
                    color(5, cores.gray);
                break;
                case 45:
                    step1(9, "move_right", 8).done(step3("+=24"));
                    step1(7, "move_left", 7);
                break;
                case 46:
                    color(6, cores.gray);
                break;
                case 47:
                    step1(9, "move_right", 9);
                    step1(8, "move_left", 8);
                break;
                case 48:
                    color(7, cores.gray);
                break;
                case 49:
                    color(8, cores.gray);
                break;
                case 50:
                    color(9, cores.gray);
                break;
                case 51:
                    $(".steps .next").addClass("not-active");
                    $(".steps .next").css("background-color", "gray");
                break;

            }
        }

        if(action == 'prev') {
            cena -= 1;
            $(".messages").parent().attr("id", cena);
            $(".moves").html(cena);

            switch(cena) {
                case 4:
                    orderReset(7, 8);
                    orderReset(6, 9);
                break;
                case 10:
                    orderReset(8, 6);
                    orderReset(4, 7);
                    mover(75);
                break;
                case 11:
                    mover("-=24");
                break;
                case 13:
                    orderReset(3, 3);
                    orderReset(1, 4);
                    mover(147);
                break;
                case 14:
                    orderReset(9, 2);
                    orderReset(1, 3);
                    mover(171);
                break;
                case 15:
                    orderReset(5, 1);
                    orderReset(1, 2);
                break;
                case 18:
                    color(1, cores.blue);
                break;
                case 22:
                    orderReset(6, 8);
                    orderReset(8, 7);
                    mover(51);
                break;
                case 23:
                    mover(75);
                break;
                case 25:
                    orderReset(2, 5);
                    orderReset(3, 4);
                    mover(123);
                break;
                case 26:
                    orderReset(2, 4);
                    orderReset(9, 3);
                    mover(147);
                break;
                case 27:
                    orderReset(2, 3);
                    orderReset(5, 2);
                    color(2, cores.blueLight);
                    mover(171);
                break;
                case 28:
                    orderReset(8, 8);
                    orderReset(7, 9);
                    mover(27);
                break;
                case 29:
                 mover("-=24");
                break;
                case 32:
                    orderReset(9, 4);
                    orderReset(3, 5);
                break;
                case 33:
                    orderReset(5, 3);
                    orderReset(3, 4);
                    color(3, cores.blueMarine);
                    mover(147);
                break;
                case 34:
                    mover("-=24")
                break;
                case 37:
                    orderReset(9, 5);
                    orderReset(4, 6);
                break;
                case 38:
                    orderReset(5, 4);
                    orderReset(4, 5);
                    color(4, cores.green);
                    mover(123);
                break;
                case 39:
                    mover("27");
                break;
                case 41:
                    orderReset(9, 6);
                    orderReset(6, 7);
                break;
                case 42:
                    color(5, cores.greenMoss);
                    mover(99);
                break;
                case 44:
                    orderReset(9, 7);
                    orderReset(7, 8);
                break;
                case 45:
                    mover(75);
                    color(6, cores.beige);
                break;
                case 46:
                    orderReset(9, 8);
                    orderReset(8, 9);
                break;
                case 47:
                    color(7, cores.orange);
                break;
                case 48:
                    color(8, cores.orangeDark);
                break;
                case 49:
                    color(9, cores.red);
                break;
                case 50:
                    $(".steps .next").removeClass("not-active");
                    $(".steps .next").css("background-color", "");
                break;

            }
        }

        mensagens();

    });


});