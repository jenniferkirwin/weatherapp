$(document).ready(function () {

  let apiresponse = {
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
        {
            "dt": 1581282000,
            "main": {
                "temp": 279.17,
                "feels_like": 270.81,
                "temp_min": 279.15,
                "temp_max": 279.17,
                "pressure": 979,
                "sea_level": 979,
                "grnd_level": 948,
                "humidity": 81,
                "temp_kf": 0.02
            },
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 9.8,
                "deg": 253
            },
            "rain": {
                "3h": 3.13
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-02-09 21:00:00"
        },
        {
            "dt": 1581292800,
            "main": {
                "temp": 278.55,
                "feels_like": 269.44,
                "temp_min": 278.53,
                "temp_max": 278.55,
                "pressure": 982,
                "sea_level": 982,
                "grnd_level": 952,
                "humidity": 73,
                "temp_kf": 0.02
            },
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 10.38,
                "deg": 257
            },
            "rain": {
                "3h": 4.25
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-02-10 00:00:00"
        },
        {
            "dt": 1581303600,
            "main": {
                "temp": 276.92,
                "feels_like": 266.83,
                "temp_min": 276.91,
                "temp_max": 276.92,
                "pressure": 987,
                "sea_level": 987,
                "grnd_level": 956,
                "humidity": 71,
                "temp_kf": 0.01
            },
            "weather": [
                {
                    "id": 601,
                    "main": "Snow",
                    "description": "snow",
                    "icon": "13n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 11.38,
                "deg": 272
            },
            "snow": {
                "3h": 1.94
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-02-10 03:00:00"
        },
        {
            "dt": 1581314400,
            "main": {
                "temp": 276.79,
                "feels_like": 266.23,
                "temp_min": 276.78,
                "temp_max": 276.79,
                "pressure": 991,
                "sea_level": 991,
                "grnd_level": 960,
                "humidity": 54,
                "temp_kf": 0.01
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 11.39,
                "deg": 270
            },
            "snow": {
                "3h": 0.75
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-02-10 06:00:00"
        },
        {
            "dt": 1581325200,
            "main": {
                "temp": 276.61,
                "feels_like": 267.35,
                "temp_min": 276.61,
                "temp_max": 276.61,
                "pressure": 993,
                "sea_level": 993,
                "grnd_level": 962,
                "humidity": 58,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 9.65,
                "deg": 256
            },
            "snow": {
                "3h": 0.5
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-02-10 09:00:00"
        },
        {
            "dt": 1581336000,
            "main": {
                "temp": 277.89,
                "feels_like": 269.18,
                "temp_min": 277.89,
                "temp_max": 277.89,
                "pressure": 992,
                "sea_level": 992,
                "grnd_level": 961,
                "humidity": 51,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 8.78,
                "deg": 254
            },
            "snow": {
                "3h": 0.69
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-02-10 12:00:00"
        },
        {
            "dt": 1581346800,
            "main": {
                "temp": 275.16,
                "feels_like": 267.3,
                "temp_min": 275.16,
                "temp_max": 275.16,
                "pressure": 990,
                "sea_level": 990,
                "grnd_level": 960,
                "humidity": 83,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 8.27,
                "deg": 262
            },
            "snow": {
                "3h": 1.06
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-02-10 15:00:00"
        },
        {
            "dt": 1581357600,
            "main": {
                "temp": 275.86,
                "feels_like": 265.83,
                "temp_min": 275.86,
                "temp_max": 275.86,
                "pressure": 992,
                "sea_level": 992,
                "grnd_level": 960,
                "humidity": 54,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 601,
                    "main": "Snow",
                    "description": "snow",
                    "icon": "13n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 10.5,
                "deg": 267
            },
            "snow": {
                "3h": 2.13
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-02-10 18:00:00"
        },
        {
            "dt": 1581368400,
            "main": {
                "temp": 275.61,
                "feels_like": 265.45,
                "temp_min": 275.61,
                "temp_max": 275.61,
                "pressure": 993,
                "sea_level": 993,
                "grnd_level": 963,
                "humidity": 63,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 10.96,
                "deg": 266
            },
            "snow": {
                "3h": 0.25
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-02-10 21:00:00"
        },
        {
            "dt": 1581379200,
            "main": {
                "temp": 275.83,
                "feels_like": 265.46,
                "temp_min": 275.83,
                "temp_max": 275.83,
                "pressure": 996,
                "sea_level": 996,
                "grnd_level": 965,
                "humidity": 61,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 11.23,
                "deg": 265
            },
            "snow": {
                "3h": 0.25
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-02-11 00:00:00"
        },
        {
            "dt": 1581390000,
            "main": {
                "temp": 275.57,
                "feels_like": 265.27,
                "temp_min": 275.57,
                "temp_max": 275.57,
                "pressure": 998,
                "sea_level": 998,
                "grnd_level": 967,
                "humidity": 60,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 11.06,
                "deg": 271
            },
            "snow": {
                "3h": 0.31
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-02-11 03:00:00"
        },
        {
            "dt": 1581400800,
            "main": {
                "temp": 275.28,
                "feels_like": 264.86,
                "temp_min": 275.28,
                "temp_max": 275.28,
                "pressure": 1001,
                "sea_level": 1001,
                "grnd_level": 969,
                "humidity": 54,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 10.98,
                "deg": 271
            },
            "snow": {
                "3h": 0.63
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-02-11 06:00:00"
        },
        {
            "dt": 1581411600,
            "main": {
                "temp": 275.07,
                "feels_like": 264.77,
                "temp_min": 275.07,
                "temp_max": 275.07,
                "pressure": 1002,
                "sea_level": 1002,
                "grnd_level": 971,
                "humidity": 54,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 10.78,
                "deg": 269
            },
            "snow": {
                "3h": 0.88
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-02-11 09:00:00"
        },
        {
            "dt": 1581422400,
            "main": {
                "temp": 275.87,
                "feels_like": 265.48,
                "temp_min": 275.87,
                "temp_max": 275.87,
                "pressure": 1004,
                "sea_level": 1004,
                "grnd_level": 972,
                "humidity": 50,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 10.88,
                "deg": 267
            },
            "snow": {
                "3h": 0.88
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-02-11 12:00:00"
        },
        {
            "dt": 1581433200,
            "main": {
                "temp": 275.88,
                "feels_like": 265.82,
                "temp_min": 275.88,
                "temp_max": 275.88,
                "pressure": 1004,
                "sea_level": 1004,
                "grnd_level": 973,
                "humidity": 52,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 10.48,
                "deg": 269
            },
            "snow": {
                "3h": 0.88
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-02-11 15:00:00"
        },
        {
            "dt": 1581444000,
            "main": {
                "temp": 275.4,
                "feels_like": 265.86,
                "temp_min": 275.4,
                "temp_max": 275.4,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 974,
                "humidity": 56,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 9.81,
                "deg": 269
            },
            "snow": {
                "3h": 0.94
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-02-11 18:00:00"
        },
        {
            "dt": 1581454800,
            "main": {
                "temp": 275.25,
                "feels_like": 266.14,
                "temp_min": 275.25,
                "temp_max": 275.25,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 975,
                "humidity": 58,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 9.24,
                "deg": 267
            },
            "snow": {
                "3h": 0.88
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-02-11 21:00:00"
        },
        {
            "dt": 1581465600,
            "main": {
                "temp": 274.99,
                "feels_like": 266.17,
                "temp_min": 274.99,
                "temp_max": 274.99,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 976,
                "humidity": 60,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 8.86,
                "deg": 262
            },
            "snow": {
                "3h": 0.75
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-02-12 00:00:00"
        },
        {
            "dt": 1581476400,
            "main": {
                "temp": 274.94,
                "feels_like": 266.26,
                "temp_min": 274.94,
                "temp_max": 274.94,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 977,
                "humidity": 64,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 8.78,
                "deg": 263
            },
            "snow": {
                "3h": 0.5
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-02-12 03:00:00"
        },
        {
            "dt": 1581487200,
            "main": {
                "temp": 274.8,
                "feels_like": 266.94,
                "temp_min": 274.8,
                "temp_max": 274.8,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 977,
                "humidity": 68,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 7.72,
                "deg": 264
            },
            "snow": {
                "3h": 0.5
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-02-12 06:00:00"
        },
        {
            "dt": 1581498000,
            "main": {
                "temp": 275.01,
                "feels_like": 267.69,
                "temp_min": 275.01,
                "temp_max": 275.01,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 979,
                "humidity": 70,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 7.05,
                "deg": 261
            },
            "snow": {
                "3h": 0.69
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-02-12 09:00:00"
        },
        {
            "dt": 1581508800,
            "main": {
                "temp": 276.24,
                "feels_like": 268.36,
                "temp_min": 276.24,
                "temp_max": 276.24,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 980,
                "humidity": 60,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 7.7,
                "deg": 266
            },
            "snow": {
                "3h": 0.87
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-02-12 12:00:00"
        },
        {
            "dt": 1581519600,
            "main": {
                "temp": 276.87,
                "feels_like": 269.96,
                "temp_min": 276.87,
                "temp_max": 276.87,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 980,
                "humidity": 57,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13d"
                }
            ],
            "clouds": {
                "all": 90
            },
            "wind": {
                "speed": 6.3,
                "deg": 268
            },
            "snow": {
                "3h": 0.31
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-02-12 15:00:00"
        },
        {
            "dt": 1581530400,
            "main": {
                "temp": 275.52,
                "feels_like": 270.46,
                "temp_min": 275.52,
                "temp_max": 275.52,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 980,
                "humidity": 68,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 86
            },
            "wind": {
                "speed": 3.84,
                "deg": 237
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-02-12 18:00:00"
        },
        {
            "dt": 1581541200,
            "main": {
                "temp": 274.1,
                "feels_like": 270.03,
                "temp_min": 274.1,
                "temp_max": 274.1,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 979,
                "humidity": 81,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 43
            },
            "wind": {
                "speed": 2.59,
                "deg": 181
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-02-12 21:00:00"
        },
        {
            "dt": 1581552000,
            "main": {
                "temp": 274,
                "feels_like": 270.18,
                "temp_min": 274,
                "temp_max": 274,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 976,
                "humidity": 88,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 66
            },
            "wind": {
                "speed": 2.44,
                "deg": 165
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-02-13 00:00:00"
        },
        {
            "dt": 1581562800,
            "main": {
                "temp": 274.32,
                "feels_like": 271,
                "temp_min": 274.32,
                "temp_max": 274.32,
                "pressure": 1004,
                "sea_level": 1004,
                "grnd_level": 972,
                "humidity": 95,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.01,
                "deg": 135
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-02-13 03:00:00"
        },
        {
            "dt": 1581573600,
            "main": {
                "temp": 275.2,
                "feels_like": 271.31,
                "temp_min": 275.2,
                "temp_max": 275.2,
                "pressure": 1000,
                "sea_level": 1000,
                "grnd_level": 969,
                "humidity": 92,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.91,
                "deg": 104
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-02-13 06:00:00"
        },
        {
            "dt": 1581584400,
            "main": {
                "temp": 275.4,
                "feels_like": 270.67,
                "temp_min": 275.4,
                "temp_max": 275.4,
                "pressure": 999,
                "sea_level": 999,
                "grnd_level": 969,
                "humidity": 93,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.19,
                "deg": 84
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-02-13 09:00:00"
        },
        {
            "dt": 1581595200,
            "main": {
                "temp": 276.18,
                "feels_like": 271.44,
                "temp_min": 276.18,
                "temp_max": 276.18,
                "pressure": 1002,
                "sea_level": 1002,
                "grnd_level": 971,
                "humidity": 87,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.17,
                "deg": 57
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-02-13 12:00:00"
        },
        {
            "dt": 1581606000,
            "main": {
                "temp": 276.93,
                "feels_like": 272.75,
                "temp_min": 276.93,
                "temp_max": 276.93,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 974,
                "humidity": 81,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.31,
                "deg": 67
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-02-13 15:00:00"
        },
        {
            "dt": 1581616800,
            "main": {
                "temp": 275.65,
                "feels_like": 273.51,
                "temp_min": 275.65,
                "temp_max": 275.65,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 979,
                "humidity": 93,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 79
            },
            "wind": {
                "speed": 0.54,
                "deg": 30
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-02-13 18:00:00"
        },
        {
            "dt": 1581627600,
            "main": {
                "temp": 274.77,
                "feels_like": 271.89,
                "temp_min": 274.77,
                "temp_max": 274.77,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 982,
                "humidity": 95,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 31
            },
            "wind": {
                "speed": 1.48,
                "deg": 132
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-02-13 21:00:00"
        },
        {
            "dt": 1581638400,
            "main": {
                "temp": 274.59,
                "feels_like": 271.21,
                "temp_min": 274.59,
                "temp_max": 274.59,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 983,
                "humidity": 89,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 52
            },
            "wind": {
                "speed": 1.95,
                "deg": 140
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-02-14 00:00:00"
        },
        {
            "dt": 1581649200,
            "main": {
                "temp": 274.95,
                "feels_like": 270.83,
                "temp_min": 274.95,
                "temp_max": 274.95,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 981,
                "humidity": 84,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.93,
                "deg": 178
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-02-14 03:00:00"
        },
        {
            "dt": 1581660000,
            "main": {
                "temp": 275.25,
                "feels_like": 270.75,
                "temp_min": 275.25,
                "temp_max": 275.25,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 979,
                "humidity": 84,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.53,
                "deg": 174
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-02-14 06:00:00"
        },
        {
            "dt": 1581670800,
            "main": {
                "temp": 276.43,
                "feels_like": 270.41,
                "temp_min": 276.43,
                "temp_max": 276.43,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 977,
                "humidity": 86,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 6.02,
                "deg": 179
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-02-14 09:00:00"
        },
        {
            "dt": 1581681600,
            "main": {
                "temp": 278.34,
                "feels_like": 272.62,
                "temp_min": 278.34,
                "temp_max": 278.34,
                "pressure": 1003,
                "sea_level": 1003,
                "grnd_level": 972,
                "humidity": 91,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 6.25,
                "deg": 179
            },
            "rain": {
                "3h": 2
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-02-14 12:00:00"
        },
        {
            "dt": 1581692400,
            "main": {
                "temp": 278.85,
                "feels_like": 272.99,
                "temp_min": 278.85,
                "temp_max": 278.85,
                "pressure": 1001,
                "sea_level": 1001,
                "grnd_level": 971,
                "humidity": 87,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 6.41,
                "deg": 238
            },
            "rain": {
                "3h": 4.06
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-02-14 15:00:00"
        },
        {
            "dt": 1581703200,
            "main": {
                "temp": 277.87,
                "feels_like": 271.93,
                "temp_min": 277.87,
                "temp_max": 277.87,
                "pressure": 1003,
                "sea_level": 1003,
                "grnd_level": 972,
                "humidity": 77,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 89
            },
            "wind": {
                "speed": 5.87,
                "deg": 242
            },
            "rain": {
                "3h": 0.63
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-02-14 18:00:00"
        }
    ],
    "city": {
        "id": 2643123,
        "name": "Manchester",
        "coord": {
            "lat": 53.4809,
            "lon": -2.2374
        },
        "country": "GB",
        "population": 395515,
        "timezone": 0,
        "sunrise": 1581234055,
        "sunset": 1581267928
    }
};

// Variables

let iconURL = `http://openweathermap.org/img/wn/`;
let forecastArray = [];

// Convert Tempuratures

function tempConvertor(givenTemp) {
    let conTemp = Math.round((parseInt(givenTemp)*(9/5) - 459.67));
    return conTemp;
};

// Create array from API response

function forecastArrayFunc() {
    forecastArray = [];
    for (i = 0; i < apiresponse.list.length; i++) {
        let noonForecast = apiresponse.list[i];
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

// Display current weather

function currentweather() {

    let city = apiresponse.city.name;
    let temp = tempConvertor(apiresponse.list[0].main.temp);
    let humid = apiresponse.list[0].main.humidity;
    let wind = apiresponse.list[0].wind.speed;

    $(`.city`).text(city);
    $(`.current-temp`).html(`${temp}&#176;`);
    $(`.current-humidity`).html(`${humid}&#37;`);
    $(`.current-wind`).html(`${wind} MPH`);
};

// Temporarily calling functions, remove later

currentweather();
forecastPopulate();

});

