//HTML id & class variables
let html_tmp = document.getElementById("current_tmp");
let html_weather = document.getElementById("current_weather");
let html_weather_logo = document.getElementById("current_weather_logo");
let html_min_tmp = document.getElementById("min_tmp");
let html_max_tmp = document.getElementById("max_tmp");
let html_wind = document.getElementById("current_wind");
let html_humidity = document.getElementById("current_humidity");

//HTTP request variable
let request = new XMLHttpRequest();
// Target Variables
let target = "Valence-16";
// let target = "Lyon"
let no_special_char_target = target.replace(/[^a-zA-Z0-9]/g, '');
let clean_target = no_special_char_target.replace(/[0-9]/g, '');


document.getElementById("current_weather_city").innerHTML = clean_target;

request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        let response = JSON.parse(this.responseText);

        //----display temp & current weather on app ------
        html_min_tmp.innerHTML = ""+response.fcst_day_0.tmin+"°";
        html_max_tmp.innerHTML = " "+response.fcst_day_0.tmax+"°";
        //get api logo in png format
        html_weather_logo.innerHTML = "<img src="+response.current_condition.icon_big+">";
        //get temp and current condition
        html_tmp.innerHTML = ""+response.current_condition.tmp+"°C";
        html_weather.innerHTML = response.current_condition.condition;
        //Small 
        html_wind.innerHTML = "<img src=\"images/compass-regular.svg\" alt=\"\"> "+response.current_condition.wnd_dir+"<br/>"+response.current_condition.wnd_spd+"km/h";
        html_humidity.innerHTML = "<img src=\"images/droplet-solid.svg\" alt=\"\"> "+response.current_condition.humidity+"%";
        // console.log(response);
    }
}

request.open("get", "https://www.prevision-meteo.ch/services/json/"+target+"");
request.send();






