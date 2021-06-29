// create an instace from the XML HTTP Request class

let request = new XMLHttpRequest();

request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        console.log(JSON.parse(this.responseText))
    } else {
        console.log(this.status);
    }
}

// Enter destination of request
// da dies lokal ist, ist die url = dateiname
request.open('GET', 'data.json');
request.send();