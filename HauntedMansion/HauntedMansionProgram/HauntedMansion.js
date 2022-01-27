/*
Programmer: Dominic Roudabush
Team Member: Brendan 
Date: 1.26.2022
Program: We will be making a prrogram to go through a haunted Mansion maze filled wth hauted sounds, changing of colors, and other obstacles along the way using a sphero bolt abd Java script
*/
async function startProgram() {
	await scrollMatrixText('Start', { r: 255, g: 245, b: 0 }, 15, false);
	await roll(0, 50, 3);
	setMainLed({ r:0, g:0, b: 255 })
	stopRoll();
	setHeading(90);
	await roll(0, 40, 2);  
	await speak('musik note number 1');
	
}

