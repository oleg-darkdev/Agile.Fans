const createLocalComponent = (component, count = 0) => {
	let tempComponent = structuredClone(component);
	// tempComponent.count = count;

	return tempComponent;
};


export default createLocalComponent;
