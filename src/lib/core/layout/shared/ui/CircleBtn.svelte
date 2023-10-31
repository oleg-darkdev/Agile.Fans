<script>
	export let buttonFunction, text;
</script>

<button title={text} class="btn-outline btn-secondary btn" on:click={buttonFunction}>
	<slot />
</button>
