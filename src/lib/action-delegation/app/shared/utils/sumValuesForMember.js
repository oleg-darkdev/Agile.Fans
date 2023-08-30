const sumValuesForMember = (array) => {
	let totalSum = 0;

	for (const obj of array) {
		if (obj.value) {
			totalSum += parseFloat(obj.value);
		}
	}

	return totalSum;
};


export default sumValuesForMember;
