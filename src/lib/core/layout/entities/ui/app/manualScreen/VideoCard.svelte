<script>
	export let video;
</script>

<a
	href={video.link}
	target="_black"
	class="rounded-lg w-full m-2 border-2 border-pink-700 bg-black p-4 shadow-md shadow-pink-700 hover:bg-pink-700 lg:w-5/12 "
>
	<h3 class="mb-4 max-w-4xl text-center text-3xl font-semibold text-gray-100 ">{video.title}</h3>
	<video class="rounded-2xl" poster={video.poster} controls playsinline  muted loop>
		<source src={video.link} type="video/mp4" />
	</video>
</a>
