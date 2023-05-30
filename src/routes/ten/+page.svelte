<script>
	// import { productsList } from '../../lib/core/data';

	// const productData = productsList.agileFans;

	import {
		Motivators,
		Subscription,
		Logos,
		Prices,
		Video,
		CardsMatch,
		Description,
		Footer
	} from '../../lib/ten/widgets';

	import { motivatorsList, fearsList } from '../../lib/ten/shared';
</script>

<Subscription />
<Logos />

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

<Prices />
