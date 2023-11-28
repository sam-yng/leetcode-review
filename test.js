const sortData = () => {
	let data = [9, 5, 7, 4, 2, 8, 1, 10, 6, 3];
		for (let scanIndex = 0; scanIndex < data.length; scanIndex++) {
		    let minIndex = scanIndex;
		    for (let compIndex = scanIndex + 1; compIndex < data.length; compIndex++) {
		        if (data[compIndex] < data[minIndex]) {
		            minIndex = compIndex;
		        }
		    }
		    if (minIndex !== scanIndex) {
		        [data[scanIndex], data[minIndex]] = [data[minIndex], data[scanIndex]];
		        console.log(data);
		    }
		}
}

