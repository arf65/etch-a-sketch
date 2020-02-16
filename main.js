const outerContainer = document.querySelector('#outerContainer');
const container = document.querySelector('#gridContainer');
const rows = 16;
initializeGrid(rows);

//function that initializes the grid and the event listeners associated with it
function initializeGrid(numRows) {
	container.style.gridTemplateColumns = `repeat(${numRows}, 2em)`;
	container.style.gridTemplateRows = `repeat(${numRows}, 2em)`;
	const cells = numRows * numRows;
	for (let i = 0; i < cells; i++) {
		const divs = document.createElement('div');
		divs.classList.add('allDivs');
		divs.style.border = '1px solid grey';
		divs.addEventListener('mouseover', () => {
			divs.style.backgroundColor = 'black';
		});
		container.appendChild(divs);
	}
	outerContainer.style.justifyItems = 'center';
}

const button = document.querySelector('button');
button.addEventListener('click', reset);

//function that resets the grid and then re-initializes it with the new user input for number of rows and columns
function reset() {
	console.log('reset button clicked');
	allDivs = document.querySelectorAll('.allDivs');
	for (i = 0; i < allDivs.length; i++) {
		container.removeChild(allDivs[i]);
	}
	let newRowNum = askForRows();

	initializeGrid(newRowNum);
}

//function that takes a new user input for number of rows and columns. Throws an error if their input is too high or low
function askForRows() {
	let userInput = Number(
		prompt(
			'How many rows and columns would you like to have in your next grid (please enter a positive whole number less than or equal to 30)'
		)
	);
	if (userInput > 30 || userInput < 1 || userInput === NaN) {
		alert('Invalid input. Please try again.');
		askForRows();
	} else {
		return userInput;
	}
}
