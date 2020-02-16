for (let i = 1; i < 257; i++) {
	const container = document.querySelector('#gridContainer');
	const divs = document.createElement('div');
	divs.classList.add('div' + i);
	divs.classList.add('allDivs');
	divs.style.border = '1px solid grey';
	divs.addEventListener('mouseover', () => {
		divs.style.backgroundColor = 'black';
	});

	container.appendChild(divs);
}

const button = document.querySelector('button');
button.addEventListener('click', reset);

function reset() {
	console.log('reset button clicked');
	const allDivs = document.querySelector('.allDivs');
	allDivs.style.backgroundColor = 'white';
}

// function hoverEffect(square) {
// 	const squareChange = document.querySelector('square');
// 	squareChange.addEventListener('click', (e) => {
// 		alert('AAAHHHHHHAHAHAHAHAHAHA');
// 	});
// }
