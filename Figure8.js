/*
Programmer: Dominic Roudabush
Date:1/13/2022
Program: Figure 8
*/

async function upperLoop(){					
		setSpeed(86);				// sets the speed for the Sphero to move 
		await spin(349,5);			// makes sphero change to direction to make the upperloop 
		stop roll();				//stops roll 
}

async function lowerLoop(){
		setSpeed(86);				// sets the speed of the Sphero to move 
		await spin(-349,5);			// makes sphero change direction to make the lowerloop 
		stop roll();				// stops roll 
}

async function startProgram(){
		await upperLoop();			// call upperLoop Function 
		await lowerLoop();			// call lowerLoop Function 
}
		
