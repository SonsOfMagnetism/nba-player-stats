const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://api-nba-v1.p.rapidapi.com/players?search=",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "a2a63a7c59msha8758cc555ed553p136a91jsn192b7ec27de5",
		"X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com"
	}
};

const idSettings = {
	"async": true,
	"crossDomain": true,
	"url": "https://api-nba-v1.p.rapidapi.com/players/statistics?season=2022&id=",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "a2a63a7c59msha8758cc555ed553p136a91jsn192b7ec27de5",
		"X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com"
	}
};

const $form = $("form")
const $name = $('#name')
const $pts = $('#pts')
const $asst = $('#asst')
const $reb = $('#reb')

const subForm = $form.submit((event) => {
    event.preventDefault()
    const textInput = $("input[type=text]").val()
    getStats(textInput)
})


function getStats(player) {
	$.ajax(settings.url + player, settings)
	.then((data) => {

		const info = data.response;
		const arrLen = data.response.length
		const playerId = data.response[0].id
		const firstName = data.response[0].firstname
		const lastName = data.response[0].lastname

		$("#name").empty()
		$(".appended").empty()
		
		$name.append(`Name: ${firstName} ${lastName}` + "<br>")
			$.ajax(idSettings.url + playerId, settings)
			.then(data => {

				for (let i = 0; i < data.response.length; i++) {

					const games = data.response[i]
					const pts = games.points
					const asst = games.assists
					const reb = games.totReb
					
					$pts.append(`<span class="appended">${pts} <br></span>`)
					$asst.append(`<span class="appended">${asst} <br></span>`)
					$reb.append(`<span class="appended">${reb} <br></span>`)
					
				}
				
			})
	})
}

