<script>
	import Icon from 'svelte-awesome';

	import meetup from 'svelte-awesome/icons/meetup';
	import questionCircleO from 'svelte-awesome/icons/questionCircleO';
	import linkedinSquare from 'svelte-awesome/icons/linkedinSquare';
	import shareSquareO from 'svelte-awesome/icons/shareSquareO';

	export let links;
</script>

<!-- rounded-lg border-2 border-pink-500 -->
<div
	class="mb-6 flex  flex-col  px-2 py-2 group-hover:border-black"
>
	<h3 class="text-lg group-hover:text-black">Follow us</h3>
	<div class="flex w-[120px] flex-row flex-wrap justify-between">
		<Icon data={meetup} scale={2} class="group-hover:fill-black" />
		<Icon data={linkedinSquare} scale={2} class="group-hover:fill-black" />
		<!-- <Icon data={questionCircleO} scale={3} class='group-hover:fill-black'/> -->
		<Icon data={shareSquareO} scale={2} class="group-hover:fill-black" />
	</div>
</div>
