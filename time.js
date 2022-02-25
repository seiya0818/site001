function() {
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
            var date = new Date(obj["unixtime"] * 1000);//付け足したやつなので変になったら消しておいてください
            //time.innerHTML = obj["unixtime"]*;
            time.innerHTML= date
        }
    }
}
