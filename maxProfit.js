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
		
			if (costRobFirst <= costRobSecond - correction) {
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
