/*
Programmer: Dominic Roudabush
Date:1/13/2022
Program: Figure 8
*/

async function upperLoop(){
		setSpeed(80);
		await spin(355,4.5);
		stop roll();
}


async function startProgram(){
		await upperLoop();
		
}
		
