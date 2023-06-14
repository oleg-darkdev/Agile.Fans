<script>
  export let card;
</script>

<div class="mb-2 flex cursor-pointer flex-col overflow-hidden">
	<a href={card.link}>
		<div class="flex-shrink-0">
			<img class="h-48 w-full rounded-lg object-none object-center " src={card.img} alt="" />
		</div>
	</a>
</div>
