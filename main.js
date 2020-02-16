const container = document.querySelector('#gridContainer');
initializeGrid();

function initializeGrid() {
	for (let i = 0; i < 256; i++) {
		const divs = document.createElement('div');
		divs.classList.add('allDivs');
		divs.style.border = '1px solid grey';
		divs.addEventListener('mouseover', () => {
			divs.style.backgroundColor = 'black';
		});

		container.appendChild(divs);
	}
}

const button = document.querySelector('button');
button.addEventListener('click', reset);

function reset() {
	console.log('reset button clicked');
	allDivs = document.querySelectorAll('.allDivs');
	for (i = 0; i < allDivs.length; i++) {
		container.removeChild(allDivs[i]);
	}
	initializeGrid();
}

// function hoverEffect(square) {
// 	const squareChange = document.querySelector('square');
// 	squareChange.addEventListener('click', (e) => {
// 		alert('AAAHHHHHHAHAHAHAHAHAHA');
// 	});
// }
