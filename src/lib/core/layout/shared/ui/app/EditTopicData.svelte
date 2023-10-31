<script>
	export let topic;
</script>

<div class="flex w-full flex-col items-start justify-start">
	<input type="text" placeholder={topic.title} class="input-bordered input mb-2 w-full " />
	<textarea placeholder={topic.desc} class="textarea-bordered textarea textarea-xs w-full " />
</div>
 