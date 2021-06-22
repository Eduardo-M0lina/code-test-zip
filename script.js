function submit() {
    var zipcode = document.getElementById("zipcode").value;
    var client = new XMLHttpRequest();
    client.open("GET", "http://api.zippopotam.us/us/" + zipcode, true);
    client.onreadystatechange = function () {
        if (client.readyState === 4) {
            if ((client.status == 200) && (client.response)) {
                var result = JSON.parse(client.response);
                document.getElementById('inputHelp').innerHTML = client.statusText;
                mapData(result);
            } else {
                document.getElementById('inputHelp').innerHTML = client.statusText;
            };
        }
    };
    client.send();
};

function mapData(result) {
    document.getElementById('resZipcode').innerHTML = 'post code: ' + result['post code'];
    document.getElementById('country').innerHTML = 'country: ' + result['country'];
    document.getElementById('countryAbbreviation').innerHTML = 'country abbreviation: ' + result['country abbreviation'];
    document.getElementById('placeName').innerHTML = 'place name: ' + result['places'][0]['place name'];
    document.getElementById('longitude').innerHTML = 'longitude: ' + result['places'][0]['longitude'];
    document.getElementById('state').innerHTML = 'state: ' + result['places'][0]['state'];
    document.getElementById('stateAbbreviation').innerHTML = 'place name: ' + result['places'][0]['state abbreviation'];
    document.getElementById('latitude').innerHTML = 'latitude: ' + result['places'][0]['latitude'];
    document.getElementById("image").src = "states/" + result['places'][0]['state abbreviation'] + ".svg";

}