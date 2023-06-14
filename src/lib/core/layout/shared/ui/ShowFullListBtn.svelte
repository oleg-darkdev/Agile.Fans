<script>
	export let showFullList;
</script>

<button on:click={() => (showFullList = !showFullList)} class="btn-outline btn-primary btn w-full"
	>{showFullList ? 'Hide' : 'Show'} Full list</button
>
