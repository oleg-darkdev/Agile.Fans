function extractFaqValues(objArray) {
	let faqValues = [];

	for (let i = 0; i < objArray.length; i++) {
		let obj = objArray[i],
			faq = obj.faq;

		faqValues.push(faq);
	}

	return faqValues;
}

export default extractFaqValues;
