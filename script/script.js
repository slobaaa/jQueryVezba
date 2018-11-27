//ZA BRISANJE RECORD-A
$("table").on('click', '.brisi', function() {
	$(this).fadeOut("500", function () {
		$(this).closest('tr').remove();
	});
});

//OTVARAJNE JEZICKA ZAPOSLENOG
function otvoriJezicakZaposlenog() {
	$("#formaDodatiNovogZaposlenog").show("400");
	$('#txtIme, #txtPrezime, #txtEmail').val("");
	$('#txtIme').focus();
}

//DODAVANJE NOVOG ZAPOSLENOG
function dodajZaposlenog() {
	let ime=$("#txtIme").val();
	let prezime=$("#txtPrezime").val();
	let email=$("#txtEmail").val();
	let zaDodavanje = "<tr><td onclick='izmeniZaposlenog(this)' for='ime' style='cursor: pointer;'>" + ime + "</td><td onclick='izmeniZaposlenog(this)' for='prezime' style='cursor: pointer;'>" + prezime + " </td><td onclick='izmeniZaposlenog(this)' for='email' style='cursor: pointer;'>" + email + "</td><td class='text-right'><i class='material-icons brisi' style='font-size:36px; cursor: pointer;'>highlight_off</i></td></tr>";

	$("table").append(zaDodavanje); //dodavajne record-a
	alert("Dodat zaposleni");
	$("#formaDodatiNovogZaposlenog").hide();
}

$(document).ready(function($) {
	$("form").submit(function() {
		dodajZaposlenog();
		return false;
	});
});

//Da doda klasu za otvaranja prompta i izmene
$(document).ready(function($) {
	$('table tr td:not(:last-child)').attr('onclick', 'izmeniZaposlenog(this)'); //da ne bude zadnji td u recordu
	$('table tr td:not(:last-child)').css('cursor', 'pointer'); //da ne bude zadnji td u recordu
});

//za izmenu zaposlenog
function izmeniZaposlenog(e) {
	var zaIspisPrompta = $(e).attr("for");


		do{
			var upit = prompt("Uneti " + zaIspisPrompta + ":", "");
		    if (upit != null && upit!="") {
		        $(e).text(upit);
		        alert("Izmenjen zaposleni");
		    }
		    else if (upit=="") {
		    	alert("Morati uneti nesto, pokusajte ponovo");
		    }
		   } while (upit=="");
	
}

//pretraga
$(document).ready(function(){
  $("#txtPretraga").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("table tbody tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});