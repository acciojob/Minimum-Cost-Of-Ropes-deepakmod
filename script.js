let arr=inputText.value.split(",");
			arr.forEach(function(element,index){
				arr[index]=Number(element);
			});

			let price=[];
			while ( arr.length > 1 ) {
				arr.sort(function(a,b){return a-b});
				let sum=arr[0]+arr[1];
				price.push(sum);
				arr.splice(0,2,sum);
			}
			let cost=0;
			for (let i = 0; i < price.length; i++) {
				cost+=price[i];
			}
			let div=document.getElementById("result");
			div.innerText=cost;