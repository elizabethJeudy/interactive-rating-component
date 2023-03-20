const card = document.querySelector(".card");

function flipCard() {
	card.classList.toggle("is-flipped");
}

submitBtn = document.querySelector(".submit");
submitBtn.addEventListener("click", function () {
	flipCard();
});

// select rating options
const ratingChosen = document.querySelector(".ratings");
let userChose;
ratingChosen.addEventListener("click", (event) => {
	console.log(event.target.innerHTML);
	userChose = event.target.innerHTML;
	event.target.classList.add("pressed");
	const submitRating = document.querySelector(".submit");
	submitRating.addEventListener("click", (event) => {
		const selection = document.querySelector(".selection");
		selection.innerHTML = `You selected ${userChose} out of 5`;
	});
});
