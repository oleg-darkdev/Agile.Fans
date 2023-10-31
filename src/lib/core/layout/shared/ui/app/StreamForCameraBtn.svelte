<script>
	import Icon from 'svelte-awesome';
	import camera from 'svelte-awesome/icons/camera';

	export let videoSource = null,
		useCamera;

	const obtenerVideoCamara = async () => {
		try {
			// loading = true;
			const stream = await navigator.mediaDevices.getUserMedia({
				video: true
			});
			videoSource.srcObject = stream;
			videoSource.play();
			// loading = false;
		} catch (error) {
			// error notification
			console.log(error);
		}
	};
</script>

<button
	class="btn-outline btn-secondary btn-circle btn"
	on:click={() => {
		useCamera = !useCamera;
		obtenerVideoCamara;
	}}
>
	<Icon data={camera} scale={1.5} />
</button>
