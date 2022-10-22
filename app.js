const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://api-nba-v1.p.rapidapi.com/players?team=2&season=2022",
	"method": "GET",
    "timeout": 0,
	"headers": {
		"X-RapidAPI-Key": "a89584a87bmshd8602e41e99c3d1p190025jsnb1ab1d5587e1",
		"X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});