<script>
	export let registrationLink, price;
</script>

<div
	class="sticky bottom-0 left-0 z-50 flex  h-20 w-full items-center justify-between rounded-md bg-pink-600 px-8 py-4"
>
	<span class="text-3xl font-bold text-gray-900 dark:text-white">{price} zł</span>
	<a href={registrationLink} class="btn-primary btn-active btn ">Registration</a>
</div>
