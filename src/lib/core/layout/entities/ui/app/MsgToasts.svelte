<script>
	export let showGreenMsg = false,
		showRedMsg = false,
		textMsg = '';


</script>

<div class="toast-end toast toast-top">
	{#if showGreenMsg}
		<div class="alert alert-info">
			<span>{textMsg}</span>
		</div>
	{/if}
	{#if showRedMsg}
		<div class="alert alert-error">
			<span>{textMsg}</span>
		</div>
	{/if}
</div>
