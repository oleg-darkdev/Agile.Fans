<script>
	export let video;
</script>

<a href={video.link} target="_black" class="m-2 w-full  p-4 p-4 text-gray-500  lg:w-5/12 ">
	<h3 class="mb-4 max-w-lg text-center text-3xl font-semibold text-gray-100 ">{video.title}</h3>
	<video class="max-w-lg rounded-2xl" poster={video.poster} controls="true" playsinline muted loop>
		<source src={video.link} type="video/mp4" />
	</video>
</a>
