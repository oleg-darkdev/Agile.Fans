import { sectionComponent, holderComponent } from '$lib/core/data';
import { createLocalComponent } from '@coreSharedUtils';

let sectionComponentLocal = createLocalComponent(sectionComponent),
	holderComponentLocal = createLocalComponent(holderComponent);
const components = [sectionComponentLocal, holderComponentLocal];

export default components;
