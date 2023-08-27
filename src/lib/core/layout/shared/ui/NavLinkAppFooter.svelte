<script>
	export let link, text, title;
</script>

<a href={link} {title} class="flex flex-col items-center">
	<slot />
	<span class=" text-xs font-semibold text-white">{text}</span>
</a>
