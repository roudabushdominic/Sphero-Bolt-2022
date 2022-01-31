async function startProgram() {
	// Write code here
	
	await scrollMatrixText('Start', { r: 255, g: 245, b: 0 }, 15, false);
	await roll(0, 50, 3);
	setMainLed({ r:0, g:0, b: 255 });
	stopRoll();
	setHeading(90);
	await roll(0, 40, 1);
	await roll(90,40,4)
	await speak('music note number 1');

 
}
