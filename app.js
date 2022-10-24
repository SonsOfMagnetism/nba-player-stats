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

const $form = $("form")
const $fName = $('#fName')


function getStats(player) {
	$.ajax(settings.url + player, settings)
	.then((data) => {
		for (let i = 0; i < data.response.length; i++) {
			const search = data.response[i];
			const playerId = data.response[i].id
			const firstName = data.response[i].firstname
			const lastName = data.response[i].lastname
			if (search <= 1) {
				$fName.append(`<span class="appended">Name: ${firstName} ${lastName}<br></span>`)
			} else {
				$fName.append(`<span class="appended">Name: ${firstName} ${lastName}</span>` + "<br>")
			}

			console.log(data)
			console.log(playerId)
		}


	})
}

$form.submit((event) => {
    event.preventDefault()
    const textInput = $("input[type=text]").val()
    getStats(textInput)
})
