<script>
	export let video;
</script>

<a href={video.link} target="_black" class="w-full m-2 p-2 text-gray-500  max-w-md hover:bg-pink-600 rounded-lg">
	<h3 class="mb-4 w-full text-center text-3xl font-semibold text-gray-100 ">{video.title}</h3>
	<video class="w-full rounded-2xl" poster={video.poster} controls="true" playsinline muted loop>
		<source src={video.link} type="video/mp4" />
	</video>
</a>
