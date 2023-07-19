<script>
	export let showFullInstruction, text, newValue;
</script>

<button
	on:click={() => (showFullInstruction = newValue)}
	class="btn-lg btn mt-6 mx-6 mx-auto mt-4 w-8/12 max-w-2xl bg-pink-600">{text}</button
>
