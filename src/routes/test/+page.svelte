<script>
  let videoSource = null;
  let canvas = null;
  let loading = false;

  const obtenerVideoCamara = async () => {
    try {
      loading = true;
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      videoSource.srcObject = stream;
      videoSource.play();
      loading = false;
    } catch (error) {
      console.log(error);
    }
  };

  const tomarFoto = () => {
    if (!videoSource) return;

    // Создаем canvas для отрисовки текущего кадра видео
    const context = canvas.getContext('2d');
    canvas.width = videoSource.videoWidth;
    canvas.height = videoSource.videoHeight;
    context.drawImage(videoSource, 0, 0, canvas.width, canvas.height);

    // Получаем Data URL текущего кадра и создаем ссылку для скачивания
    const dataURL = canvas.toDataURL('image/jpeg');
    const a = document.createElement('a');
    a.href = dataURL;
    a.download = 'snapshot.jpg';
    a.click();
  };
</script>

<div>
  {#if loading}
    <h1>LOADING</h1>
  {:else}
    <button on:click={tomarFoto}>Сделать фото</button>
  {/if}
  <!-- svelte-ignore a11y-media-has-caption -->
  <video bind:this={videoSource} />
  <canvas bind:this={canvas} style="display: none;"></canvas>
  <button on:click={obtenerVideoCamara}>Старт</button>
</div>
