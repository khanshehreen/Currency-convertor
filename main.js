function convertCurrency(){
    var source = document.getElementById("source").value;
    var destination = document.getElementById("destination").value;

    //Create new obj of httprequest
    var xmlreq = new XMLHttpRequest();

    
    /* https://data.fixer.io/api/latest?access_key=e8f49ec75436655e7571477c69d5bc48&symbols= */
    var url = "https://api.exchangeratesapi.io/latest?symbols=" + source + "," + destination;
    
    xmlreq.open("GET",url,true);
    xmlreq.send();

    xmlreq.onreadystatechange = function () {

        if (xmlreq.readyState == 4    &&    xmlreq.status == 200) {

            var result = xmlreq.responseText;   //Get the response
            var jsResult = JSON.parse(result);  //Parse it 
            var oneUnit = jsResult.rates[destination] / jsResult.rates[source];

            var amt = document.getElementById("source-text").value;
            document.getElementById("destination-text").value = (oneUnit * amt).toFixed(2);
        }
    } 
}