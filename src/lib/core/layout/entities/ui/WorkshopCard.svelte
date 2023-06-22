<script>
	const communities = [
		{
			title: '',
			img: 'https://images.generated.photos/ADBiDLhLYriwtsaAaUiMrqn-TLCFP1rZJ-X7pUPd33U/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTcwODM4LmpwZw.jpg'
		},
		{
			title: '',
			img: 'https://images.generated.photos/tlFQtUEgXM0EVc9JxPMfNYcLmjpnZSqzNcy3FapLfXY/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjEwNTYzLmpwZw.jpg'
		},
		{
			title: '',
			img: 'https://images.generated.photos/hIpPYEwb-66NZQ73OhQvRfuDduqXTWMu_r3F_D-I6Cs/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTc4OTEzLmpwZw.jpg'
		},
		{
			title: '',
			img: 'https://images.generated.photos/UZGECd-IbC85-wiuBe6uSGCNUmaXv7FLoWT9VeCOQL4/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDg5ODI5LmpwZw.jpg'
		}
	];

	export let workshop;
</script>

<!--  -->
<div class="mb-6 lg:mb-0">
	<div class="relative block rounded-lg bg-gray-800">
		<div class="flex">
			<div
				class="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
				data-te-ripple-init
				data-te-ripple-color="light"
			>
				<img src={workshop.img} class="w-full opacity-60 blur-sm" />
			</div>
		</div>

		<div class="py-auto absolute  top-16 my-2  flex items-center justify-between px-6">
			<h5 class="text-3xl  font-black text-white">
				{workshop.title}
				<span
					class="font-sans text-base font-normal leading-relaxed text-inherit antialiased"
				>
					({workshop.date})
				</span>
			</h5>
		</div>
		<p class="absolute top-28 text-gray-100 px-6 ">{workshop.desc}</p>

		<div class="px-6  py-2">
			{#each workshop.tags as tag}
				<span
					class="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
				>
					{tag}
				</span>
			{/each}
		</div>
		<div class="border-t border-b px-4 text-xs text-gray-700">
			<div
				class="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-4 text-gray-700 shadow-none"
			>
				<img
					src={workshop.trainer.avatar}
					alt={workshop.trainer.title}
					class="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
				/>
				<div class="flex w-full flex-col gap-0.5">
					<div class="flex items-center justify-between">
						<h5
							class="font-sans block text-xl font-semibold leading-snug tracking-normal text-white antialiased"
						>
							{workshop.trainer.fullName}
						</h5>
					</div>
					<p class="font-sans block text-base font-light leading-relaxed text-white antialiased">
						{workshop.trainer.subTitle}
					</p>
				</div>
			</div>
		</div>

		<div style="justify-content: space-around;" class="flex flex-row flex-wrap items-center ">
			<div class="avatar-group mb-6 mt-4 flex flex-row flex-wrap justify-start  -space-x-4 pl-6 ">
				{#each communities as client}
					<div class="avatar bg-blue-600 ">
						<div class="w-10">
							<img class="text-white" src={client.img} alt={client.title} />
						</div>
					</div>
				{/each}

				<div class="placeholder avatar">
					<div class="w-10 bg-blue-600 text-neutral-content">
						<span class="text-xl  font-bold text-white">{communities.length}+</span>
					</div>
				</div>
			</div>
			<p class="font-sans block text-center text-base font-light text-white ">
				Max: <br /> <span class="font-black">16 places</span>
			</p>
		</div>
		<div class="py-6">
			<a
				href={workshop.link}
				class="w-full transform rounded-xl bg-blue-600 px-5 py-4 text-center text-base font-medium text-white transition duration-500 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 lg:px-10"
				>Registration</a
			>
		</div>
	</div>
</div>
