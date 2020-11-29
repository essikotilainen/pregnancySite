$(document).ready(function () {

    let points = 0;

    $("input[name=nipa]").click(function () {
        let nipa = $("input[name=nipa]:checked").val();

        if (nipa === 1) {
            points++;
            $("#nipa_small").html('Kyllä vain.');
        } else {
            $("#nipa_small").html('Vastasit väärin. Oikea vastaus on Niskapaska.');
        }

        $("input[name=nipa]").attr('disabled', true);
        $("#nipa_small").removeAttr('hidden');
        $("#answer").html("Pisteesi: " + points + "/10");
    });

    $("input[name=rv]").click(function () {
        let rv = $("input[name=rv]:checked").val();

        if (rv == 1) {
            points ++;
            $("#rv_small").html('Jep, tämä saattaa olla ihan hyödyllinen.');
        } else {
            $("#rv_small").html('Vastasit väärin. Oikea vastaus on Raskausviikko.');
        }

        $("input[name=rv]").attr('disabled', true);
        $("#rv_small").removeAttr('hidden');
        $("#answer").html("Tuloksesi: " + points + "/10");
    });

    $("input[name=pk]").click(function () {
        let pk = $("input[name=pk]:checked").val();

        if (pk == 1) {
            points ++;
            $("#pk_small").prepend('Oikein. Kunpa oiski päiväkahvit.');
        } else {
            $("#pk_small").prepend('Vastasit väärin. Oikea vastaus on päiväkoti. Kunpa ois päiväkahvit.');
        }

        $("input[name=pk]").attr('disabled', true);
        $("#pk_small").removeAttr('hidden');
        $("#answer").html("Tuloksesi: " + points + "/10");
    });

    $("input[name=sss]").click(function () {
        let sss = $("input[name=population]:checked").val();

        if (sss == 1) {
            points ++;
            $("#sss_small").prepend('Vastasit oikein. Kolme perinteistä konstia synnytyksen käynnistämiseen.');
        } else {
            $("#sss_small").prepend('Ei aivan. Perinteiset kolme ässää synnytyksen käynnistykseen ovat siivous, sauna ja seksi.');
        }

        $("input[name=sss]").attr('disabled', true);
        $("#sss_small").removeAttr('hidden');
        $("#answer").html("Tuloksesi: " + points + "/10");
    });
});