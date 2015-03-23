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
			testHouseCon([1, 20, 21, 21, 33, 20, 30, 20, 0]);
