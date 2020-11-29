//Tee tänne uudellee tietovisan koodi niin, että saat sen nätimmäksi eikä ole koko ajan copy-paste koodia. (Ei vielä käytössä)

$(document).ready(function () {

    let points = 0;

    $("input:radio").click(function () {
        let val = $("input:radio:checked").val();

        if (val === 1) {
            points++;
            $("#nipa_small").html('Kyllä vain.');
        } else {
            $("#nipa_small").html('Vastasit väärin. Oikea vastaus on Niskapaska.');
        }

        $("input[name=nipa]").attr('disabled', true);
        $("#nipa_small").removeAttr('hidden');
        $("#answer").html("Pisteesi: " + points + "/10");
    });
})