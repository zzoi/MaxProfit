/*
 * input: positive integers array
 * output: Max profit
 */
function getMaxProfit(houses) {
	if (!houses) {
		return 0;
	}
	
	var houseCon = function(arr) {
		var costRobFirst;
		var costRobSecond;
		var bestRob = 0;
		var shortJump = false;
		var correction;
		
		for (var i = 0; i < arr.length;) {
			correction = (shortJump) ? Math.max(arr[i - 1] - arr[i - 2], 0) : 0;
			costRobFirst = (i + 1 < arr.length) ? arr[i + 1] : 0;
			costRobSecond = (i + 2 < arr.length) ? arr[i + 2] + arr[i] : arr[i];
		
			if (costRobFirst < costRobSecond - correction) {
				bestRob += arr[i];
				i += 2;
				shortJump = true;
			} else {
				bestRob += arr[i + 1] + correction;
				i += 3;
				shortJump = false;
			}
		}
		
		return bestRob;
	}
	
	return "$" + houseCon(houses);
}


function testHouseCon(arr) {
	console.log("[" + arr +"] => optimal robbing "+ getMaxProfit(arr));
	
}

testHouseCon([20, 10, 50, 5, 1]);
testHouseCon([20, 50, 10, 1, 5]);
testHouseCon([200]);
testHouseCon([200, 200]);
testHouseCon([200, 200, 200]);
testHouseCon([200, 399, 200]);
testHouseCon([200, 399, 200, 2]);
testHouseCon([200, 400, 200]);
testHouseCon([200, 401, 200]);
testHouseCon([]);
testHouseCon();
testHouseCon([20, 50, 10, 1, 5, 20, 50, 10, 1, 5]);
testHouseCon([20, 50, 10, 1, 50, 20, 20, 50, 10]);
testHouseCon([20, 50, 10, 1, 50, 20, 50, 20, 10]);	
