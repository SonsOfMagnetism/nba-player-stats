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
const $logo = $("#logo")
const $name = $('#name')
const $pts = $('#pts')
const $fgm = $('#fgm')
const $fga = $('#fga')
const $fgp = $('#fgp')
const $asst = $('#asst')
const $reb = $('#reb')
// const $blk = $('#blk')
// const $stl = $('#stl')
// const $mins = $('#mins')

const subForm = $form.submit((event) => {
    event.preventDefault()
    const textInput = $("input[type=text]").val()
    getStats(textInput)
})


function getStats(player) {
	$.ajax(settings.url + player, settings)
	.then((data) => {

		// const info = data.response;
		// const arrLen = data.response.length
		const playerId = data.response[0].id
		const firstName = data.response[0].firstname
		const lastName = data.response[0].lastname
		const heightF = data.response[0].height.feets
		const heightI = data.response[0].height.inches
		const weight = data.response[0].weight.pounds
		const college = data.response[0].college
		const yrsPro = data.response[0].nba.pro
		const pos = data.response[0].leagues.standard.pos

		$("#name").empty()
		$(".appended").empty()

			$.ajax(idSettings.url + playerId, settings)
			.then(data => {

				// const teamName = data.response[0].team.name
				const teamLogo = data.response[0].team.logo

				$logo.append(`<span class="appended"><img src="${teamLogo}"></span>`)
				$name.append(`Name: ${firstName} ${lastName} Position: ${pos}<br>Height: ${heightF}'${heightI} Weight: ${weight}lbs <br>Years Pro: ${yrsPro} College: ${college}`)
				$pts.append(`<span class="appended">Points:<br></span>`)
				$fgm.append(`<span class="appended">FGM:<br></span>`)
				$fga.append(`<span class="appended">FGA:<br></span>`)
				$fgp.append(`<span class="appended">FGP:<br></span>`)
				$asst.append(`<span class="appended">Assists:<br></span>`)
				$reb.append(`<span class="appended">Rebounds:<br></span>`)
				// $blk.append(`<span class="appended">Blocks:<br></span>`)
				// $stl.append(`<span class="appended">Steals:<br></span>`)
				// $mins.append(`<span class="appended">Minutes:<br></span>`)

				for (let i = 0; i < data.response.length; i++) {

					const games = data.response[i]
					const pts = games.points
					const fgm = games.fgm
					const fga = games.fga
					const fgp = games.fgp
					const asst = games.assists
					const reb = games.totReb
					// const mins = games.min
					// const blk = games.blocks
					// const stl = games.steals

					$pts.append(`<span class="appended">${pts} <br></span>`)
					$fgm.append(`<span class="appended">${fgm} <br></span>`)
					$fga.append(`<span class="appended">${fga} <br></span>`)
					$fgp.append(`<span class="appended">${fgp}% <br></span>`)
					$asst.append(`<span class="appended">${asst} <br></span>`)
					$reb.append(`<span class="appended">${reb} <br></span>`)
					// $blk.append(`<span class="appended">${blk} <br></span>`)
					// $stl.append(`<span class="appended">${stl} <br></span>`)
					// $mins.append(`<span class="appended">${mins} <br></span>`)
				}
			})
	})
}