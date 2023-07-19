<script>
	import {
		Motivators,
		Subscription,
		Logos,
		Video,
		CardsMatch,
		Description
	} from '../../../lib/ten/landing/widgets';

	import { motivatorsList, fearsList } from '../../../lib/ten/app/shared';
	import { ProductLanding } from '../../../lib/core/layout/features';

	import { ten } from '../../../lib/core/data';
	const productData = ten;
</script>

<ProductLanding {productData}>
	<!-- motivators -->
	<Description />
	<Motivators />
	<Video />
	<CardsMatch cardList={motivatorsList} />

	<!-- fears -->
	<Description />
	<Motivators />
	<Video />
	<CardsMatch cardList={fearsList} />
</ProductLanding>
