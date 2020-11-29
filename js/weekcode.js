$(document).ready(function () {

    // Laskee raskausviikon lasketun ajan perusteella
    function preg_week_duedate(date1, date2) {
        let oneDay = 1000 * 60 * 60 * 24;

        let difference = Math.abs(date1 - date2);
        let daysBetween = Math.round(difference / oneDay);

        let weeks = Math.floor(daysBetween / 7);
        let days = daysBetween % 7;

        let pregweek = 40 - weeks - 1;
        let pregday = 7 - days - 1;

        return pregweek + "+" + pregday;
    }

    // Laskee raskausviikon viimeitsten kuukautisten perusteella
    function preg_week_period(date1, date2) {
        let oneDay = 1000 * 60 * 60 * 24;

        let difference = Math.abs(date2 - date1);
        let daysBetween = Math.round(difference / oneDay);

        let weeks = Math.floor(daysBetween / 7);
        let pregdays = daysBetween % 7 - 1;

        return weeks + "+" + pregdays;
    }

    // Luetaan arvo valitusta radiosta    
    let selected_radio = 0;

    // Tarkistaa, onko valittu päivämäärä kelpo EI VIELÄ TOIMI, JATKA MYÖHEMMIN
    /* function valid_date() {
        let today = new Date();
        let selected_date = new Date($("#date").val());

        if ($(selected_date == "")) {
            alert("Valitse päivä");

        } else if (selected_radio === 1) {
            if (selected_date < today + 30) {
                alert("Toivottavasti lapsi on jo syntynyt tai olet valinnut väärän päivän.");
            }
        } else if (selected_radio === 2) {
            if (selected_date > today) {
                alert("Viimeisten kuukautisten alkamispäivä ei voi olla tulevaisuudessa.");
            }
        }
    } */

    // Näytä tietojen syöttö valinnan jälkeen
    $("input:radio").click(function () {
        selected_radio = Number($("[name=countOpt]:checked").val());

        if (selected_radio === 1) {
            $("#label").html("Laskettu aika:");
            $("#dateInput").removeClass("d-none")
            $("#cycle").addClass("d-none");
        } else {
            $("#label").html("Viimeisten kuukautisten alkamispäivä:");
            $("#dateInput").removeClass("d-none")
            $("#cycle").removeClass("d-none");
            $("small").removeClass("hidden");
        }
    });

    $("#calculate").click(function () {

        $("#result").html("");

        let today = new Date();
        let date = new Date($("#date").val());
        let preg_weeks = 0;

        if (selected_radio == 1) {
            preg_weeks = preg_week_duedate(today, date);
            $("#result").html("Olet raskaana viikolla: " + preg_weeks);
        } else {
            preg_weeks = preg_week_period(today, date);
            $("#result").html("Olet raskaana viikolla: " + preg_weeks);
        }
    });
});

