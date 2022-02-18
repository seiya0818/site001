window.onload = function() {
    var url = "https://worldtimeapi.org/api/timezone/Asia/Tokyo";
    let r = new XMLHttpRequest();
    r.open('GET', url);
    r.responseType = 'json';
    r.send();

    r.onreadystatechange = () => {
        if (r.readyState == 4 && r.status == 200) {
            const jsonStr = JSON.stringify(r.response);
            const obj = JSON.parse(jsonStr);
            var time = document.getElementById("time");
            time.innerHTML = obj["datetime"];
        }
    }
}
