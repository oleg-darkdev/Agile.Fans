import { sectionComponent, holderComponent } from '$lib/core/data';
import { createLocalComponent } from '@coreSharedUtils';

let sectionComponentLocal = createLocalComponent(sectionComponent);

const components = [sectionComponentLocal];

export default components;
