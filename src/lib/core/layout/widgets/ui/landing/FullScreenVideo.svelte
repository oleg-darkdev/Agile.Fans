<script>
	export let video;
</script>

<video
	class="video-hero"
	poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/fashion.jpg"
	playsinline
	autoplay
	muted
	loop
>
	<!-- <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/fashion.webm" type="video/webm" /> -->
	<source src={video} type="video/mp4" />
</video>

<style>
	.video-hero {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}
</style>
