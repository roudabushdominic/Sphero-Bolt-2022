/*
Programmer: Mr Lange 
Date: 1.12.2022
Programm: This is a Sandbox Program which is being used to experiment with Sphero Bolt and Java. 
*/

async function startProgram() {
	// Write code here
	setStabilization(false);
	while (true) {
		if ((getGyroscope().yaw > 1.0)) {
			setMainLed({ r: 0, g: getGyroscope().yaw / 7.84, b: 0 });
		} else {
			setMainLed({ r: Math.abs(getGyroscope().yaw / 7.84), g: 0, b: 0 });
		}
		await delay(0.25);

}

