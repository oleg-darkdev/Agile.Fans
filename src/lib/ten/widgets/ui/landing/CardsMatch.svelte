<script>
  import { CardPromo } from "../../../shared";

  export let cardList;
</script>

<section>
	<div class="relative mx-auto max-w-7xl">
    {#each cardList as card, i}
		<div class="mx-auto  grid max-w-lg gap-8 lg:max-w-none lg:grid-cols-2">
      <CardPromo {card} />
      <CardPromo {card} />
		</div>
    {/each}
	</div>
</section>
