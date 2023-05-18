<script>
	import {
		Features,
		Description,
		Product,
		Price,
		Header,
		Hero,
		Footer,
		Reviews,
    Logos
	} from '../lib/widgets';

	import { products } from '../lib/shared';
</script>

<Header />

<Hero />
<Logos />

<a name="about" />
<Description />

<a name="features" />
<Features />

{#each products as product}
	<Product {product} />
{/each}
<a name="price" />

<Price />
<Reviews />

<a name="faq" />
<a name="contact" />

<Footer />
