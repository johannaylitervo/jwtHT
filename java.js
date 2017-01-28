//JavaScript-kooditiedosto

function annaMuokkauspaiva() {

	//Haetaan viikonpäivä.
	function haeViikonpaiva(paivays) {
		switch (paivays.getDay()) {
			case 0: return "sunnuntaina"; break;
			case 1: return "maanantaina"; break;
			case 2: return "tiistaina"; break;
			case 3: return "keskiviikkona"; break;
			case 4: return "torstaina"; break;
			case 5: return "perjantaina"; break;
			case 6: return "lauantaina"; break;
			default: return false;
		}
	}

	//Lisätään nollat kellonaikaan jos tarvetta.
	function lisaaNollat(i) {
		if(i < 10) {
			i = "0" + i;
		}
		return i;
	}
	
	//Verrataan aikoja millisekunteissa, onko muokkauksesta kulunut alle 24 tuntia, alle viikko vai enemmän. 
	function vertaaAjat(muokkauspaiva, tanaan) {
		//Jos alle 24 tuntia.
		if(tanaan.getTime() - muokkauspaiva.getTime() < 86400000) {
			return 1;
		}
		//Jos alle viikko.
		if(tanaan.getTime() - muokkauspaiva.getTime() < 604800000) {
			return 2;
		}
		//Jos yli viikko.
		if(tanaan.getTime() - muokkauspaiva.getTime() > 604800000) {
			return 3;
		}
	}

	//Haetaan muokkauspäivä.
	pvm = new Date(document.lastModified);

	//Haetaan nykyinen päivä.
	tanaan = new Date();

	//Verrataan onko muokkauksesta kulunut alle 24 tuntia, alle viikko vai enemmän. 
	var tulos = vertaaAjat(pvm, tanaan);
	
	kk = pvm.getMonth() + 1;
	paiva = pvm.getDate();
	vuosi = pvm.getFullYear();
	h = lisaaNollat(pvm.getHours());
	min = lisaaNollat(pvm.getMinutes());

	//Tulostetaan tuloksien mukainen päivämäärä.
	if(tulos == 1) {
		document.getElementById("muokkauspaiva").innerHTML = "Tätä dokumenttia on muokattu viimeksi "+ 
		haeViikonpaiva(pvm) + " " +paiva + "." + kk + "." + vuosi +" kello "+ h +":"+min;
	}
	if(tulos == 2) {
		document.getElementById("muokkauspaiva").innerHTML = "Tätä dokumenttia on muokattu viimeksi "+ 
		haeViikonpaiva(pvm) + " " +paiva + "." + kk + "." + vuosi +" kello "+ h;
	}
	if(tulos == 3) {
		document.getElementById("muokkauspaiva").innerHTML = "Tätä dokumenttia on muokattu viimeksi "+ 
		haeViikonpaiva(pvm) + " " +paiva + "." + kk + "." + vuosi;
	}

}