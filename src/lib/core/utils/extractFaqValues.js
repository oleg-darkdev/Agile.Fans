function extractFaqValues(objArray) {
	var faqValues = [];

	for (var i = 0; i < objArray.length; i++) {
		var obj = objArray[i];
		var faq = obj.faq;

		faqValues.push(faq);
	}

	return faqValues;
}

export default extractFaqValues;
