<script>
	import { HeaderApp } from '../../lib/core/layout/widgets';
	import { Aside } from '../../lib/core/layout/entities';

	import { productsList } from '../../lib/core/data';
	import { convertObjToArray } from '../../lib/core/utils';

	const arrayOfProducts = convertObjToArray(productsList),
		productData = productsList.agileKit;
</script>

<HeaderApp {productData} />

<Aside />
