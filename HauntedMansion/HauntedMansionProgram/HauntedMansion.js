/*
Programmer: Dominic Roudabush
Team Member: Brendan 
Date: 1.26.2022
Program: We will be making a prrogram to go through a haunted Mansion maze filled wth hauted sounds, changing of colors, and other obstacles along the way using a sphero bolt abd Java script
*/
async function startProgram() {
	// Write code here
	
	await scrollMatrixText('Start', { r: 255, g: 245, b: 0 }, 15, false);				// Spelling out "Start" on the display as our starting text in Yellow 
	await roll(0, 50, 3);										// moving straight at a speed of 50 for 3 sceonds
	setMainLed({ r:0, g:0, b: 255 });								// checkpoint hit turned display Blue
	stopRoll();											// stops roll to give Sphero a break and allow it to process the code
	setHeading(90);											// set the direction of the sphero to make a 90 degree turn
	await roll(0, 40, 1);										// sphero moves forward at a speed of 40 for 1 second
	await roll(90,35,4);										// sphero moves forward at a 90 degree angle at 35 speed for 4 seconds 
	await speak('music note number 1');								// plays music note number one outloud
	await roll(180,40,2);										// sphero moves at a 180 angle at 40 speed for 2 seconds 
	await roll(-137,40,2);										// sphero moves 137 degrees in negative direction at a speed of 40 for 2 seconds 
	await roll(120,33,2);										// sphero moves 120 degrees at 33 speed for 2 seconds 
	setMainLed({ r:255, g:0, b:0 });								// set sphero display to color red 
	await roll(40,38,3);										// sphero moves 40 degrees at 38 speed for 2 seconds 
 	await speak('music note number 2');								// plays music note number 2 outloud
	await roll(140,40,2);										// sphero moves 140 degrees at 40 speed for 3 seconds 
	stopRoll();											// stops roll to give Sphero a break and allow it to process the code															// set the spheros heading to 90 degrees 
	await roll(90,45,1);										// sphero moves 90 degrees at 35 speed for 1 seconds
	setMainLed({ r:0, g:255, b:0 });								// set sphero display to color green 
	await roll(0,40,2);										// sphero moves at 40 speed for 2 seconds 
	await roll(-50,30,2);										// sphero moves -50 degrees at 30 speed for 2 seconds
	await speak('music note number 3');								// plays music note number 3 outloud
	setMainLed({ r:255, g:0, b:255 });								// sets final LED display to Purple 
	await roll(0,40,3);										// sphero moves at 40 speed for 3 seconds 
	await scrollMatrixText('End', { r: 255, g: 245, b: 0 }, 15, false);				// Spelling out "End" on the display as our ending text in Yellow 
