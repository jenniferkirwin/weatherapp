$(document).ready(function () {

    // Variables

    let fiveDays;
    let currentDay;
    let iconURL = `http://openweathermap.org/img/wn/`;
    let forecastArray = [];
    let searchedCities = [];
    let $cityList = $(`.city-list`);

    // Convert Tempuratures

    function tempConvertor(givenTemp) {
        let conTemp = Math.round((parseInt(givenTemp) * (9 / 5) - 459.67));
        return conTemp;
    };

    // -------------------------------------------------------------------------------------
    // Create city, display on page, and set local storage
    // -------------------------------------------------------------------------------------

    // Search Button

    $(`.search-btn`).on(`click`, function (event) {
        event.preventDefault();
        let cityName = $(`#search`).val();
        // get API data
        getAPIData(cityName);

        // add to array
        searchedCities.unshift(cityName);

        // set local storage
        localStorage.setItem(`searchedCities`, JSON.stringify(searchedCities));

        // clear search and prepend li
        $(`#search`).val(``);
        $cityList.prepend($(`<li>`).text(cityName));
    });

    // Display saved searches on load

    if (localStorage.getItem("searchedCities") !== null) {
        searchedCities = JSON.parse(localStorage.getItem("searchedCities"));
        for (i = 0; i < searchedCities.length; i++) {
            $cityList.append($(`<li>`).text(searchedCities[i]));
        }
        getAPIData(searchedCities[0]);
    }

    else {
        searchedCities = [];
    };

    // -------------------------------------------------------------------------------------
    // API Responses
    // -------------------------------------------------------------------------------------

    function getAPIData(query) {
        let queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=05474e7fa3afee8267bb04cc411f4169`
        let currentQueryURL = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=05474e7fa3afee8267bb04cc411f4169`;
        $.get(queryURL).then(function (data) {
            fiveDays = data;
            forecastPopulate();
        });
        $.get(currentQueryURL).then(function (data) {
            currentDay = data;
            currentweatherPopulate();
        });
    };

    // -------------------------------------------------------------------------------------
    // 5 Day Forecast Display
    // -------------------------------------------------------------------------------------

    // Create array from API response

    function forecastArrayFunc() {
        forecastArray = [];
        for (i = 0; i < fiveDays.list.length; i++) {
            let noonForecast = fiveDays.list[i];
            if (noonForecast.dt_txt.includes("12:00:00")) {
                forecastArray.push(noonForecast);
            };
        };
        if (forecastArray.length > 5) {
            forecastArray.shift();
        }
    };

    // Display the forecasted 5 day weather

    function forecastPopulate() {
        forecastArrayFunc();
        for (i = 0; i < 5; i++) {
            let weatherPanel = $(`div[data-day="${i}"]`);
            weatherPanel.find(`.fcDate`).text(moment(forecastArray[i].dt_txt).format('M/D'));
            weatherPanel.find(`.fcIcon`).attr(`src`, `${iconURL}${forecastArray[i].weather[0].icon}@2x.png`);
            weatherPanel.find(`.fcTemp`).html(`${tempConvertor(forecastArray[i].main.temp)}&#176;`);
            weatherPanel.find(`.fcHumid`).html(`${forecastArray[i].main.humidity}&#37;`)
        };
    };

    // -------------------------------------------------------------------------------------
    // Current Weather Forecast
    // -------------------------------------------------------------------------------------

    // Display current weather

    function currentweatherPopulate() {

        console.log(currentDay);

        let city = currentDay.name;
        let temp = tempConvertor(currentDay.main.temp);
        let humid = currentDay.main.humidity;
        let wind = currentDay.wind.speed;
        let icon = currentDay.weather[0].icon;
        let date = moment.unix(currentDay.dt).format('MMMM Do YYYY');

        $(`.city`).text(city);
        $(`.current-date`).text(date);
        $(`.current-temp`).html(`${temp}&#176;`);
        $(`.current-humidity`).html(`${humid}&#37;`);
        $(`.current-wind`).html(`${wind} MPH`);
        $(`.current-icon`).attr(`src`, `${iconURL}${icon}@2x.png`);
    };

    // -------------------------------------------------------------------------------------
    // Clear searches and local storage
    // -------------------------------------------------------------------------------------

    $(".btn-clear").on("click", function () {
        localStorage.clear();
        searchedCities = [];
        $cityList.empty();
    });
});

