function convertObjToArray(productsList) {
	let tempArr = [];

	for (const key in productsList) {
		tempArr.push(productsList[key]);
	}
	// tempArr.unshift();
	return tempArr;
}


export default convertObjToArray;
