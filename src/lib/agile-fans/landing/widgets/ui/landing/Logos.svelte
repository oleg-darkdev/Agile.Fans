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
		},
		{
			title: '',
			img: 'https://images.generated.photos/u0xE1OweZWT_lvCuhIEgE0YrW2Ogq1_kg-HTa8Jlu-k/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDU4MjcxLmpwZw.jpg'
		},
		{
			title: '',
			img: 'https://images.generated.photos/o_1IooHlPD2p-szNlApd4AUqoYS-oQV3bosLHb3dUxw/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDEzOTUwLmpwZw.jpg'
		},
		{
			title: '',
			img: 'https://images.generated.photos/ZgtjPNMppTA0Cvhq-VM4Lp99Jm52enG4f1oLqAxbwuc/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODQxOTcyLmpwZw.jpg'
		},
		{
			title: '',
			img: 'https://images.generated.photos/tNN4O5qPhQmAMu2Zm5cIrgMk6c6_kmzwEIWM3yO3jI0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Mjk0ODgyLmpwZw.jpg'
		},
		{
			title: '',
			img: 'https://images.generated.photos/xdc36LGgq1jqP1iC_k0QDSJ4Y9R5gWDh4SkzwWEIY-8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDQ1NDgyLmpwZw.jpg'
		},
		{
			title: '',
			img: 'https://images.generated.photos/U5geyoW3HBedM_F8nLFjBWH2C8f6mIDI09Qf0uTusu4/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODE5Nzk2LmpwZw.jpg'
		},
		{
			title: '',
			img: 'https://images.generated.photos/um6PY04xde-BTmRtDDb3EaJ8ocong-akuK-XlvxCB7A/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODE3NDc3LmpwZw.jpg'
		},
		{
			title: '',
			img: 'https://images.generated.photos/eLBk-_EnpdpufkwctOHNuMb0rPyxUO-KjdxCAab8Wb0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTM4MDkyLmpwZw.jpg'
		},
		{
			title: '',
			img: 'https://images.generated.photos/bsKscIUgRvgt6WPtI9uZLHME34QvreueQJ-R39plPFU/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTA1NTA0LmpwZw.jpg'
		},
		{
			title: '',
			img: 'https://images.generated.photos/4POL7pZ6fNTwySY47Lp7nV66b3Xc1WhVgKUXVDvPbRY/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDczMDY5LmpwZw.jpg'
		},
		{
			title: '',
			img: 'https://images.generated.photos/Sc0S_EPsJcxFR1xnfNeOXFhknXAqme-mIjfRxxNzS_g/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjcyNzk2LmpwZw.jpg'
		},
		{
			title: '',
			img: 'https://images.generated.photos/LXAiJNsdl9jLsDj80CT-TdtlJzn3gejXsvgEdxOWI80/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODg3NjY1LmpwZw.jpg'
		},
		{
			title: '',
			img: 'https://images.generated.photos/VNxVJ0zqkX_yCSXx00kiO7XsUDXIb1p9Gu2u4Dissy8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDA3NzAzLmpwZw.jpg'
		},
		{
			title: '',
			img: 'https://images.generated.photos/n6vcfe55MkoU2DqVa0Bl0W9pIOLIAhZ1KmpjbN0cPzI/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzkyNjQ4LmpwZw.jpg'
		},
		{
			title: '',
			img: 'https://images.generated.photos/lmMk6f1dU3NazSIlYoug-4c4-OghfpZDjZFGQR9-8i4/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODkyODcwLmpwZw.jpg'
		},
		{
			title: '',
			img: 'https://images.generated.photos/sHF1UKEhSzf7i8cxDQvBYZJkb7KmeT0td3VL2fX7Ue0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDQxMjM0LmpwZw.jpg'
		}
	];

	const clientsCategories = [
		{
			title: 'Enterprise',
			logos: [
				{
					title: 'Lorem impsum',
					link: '',

					img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/logo2-1.png'
				},
				{
					title: 'Lorem impsum',
					link: '',

					img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/logo2-1.png'
				},
				{
					title: 'Lorem impsum',
					link: '',

					img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/logo2-1.png'
				},
				{
					title: 'Lorem impsum',
					link: '',

					img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/logo2-1.png'
				}
			]
		},
		{
			title: 'Startups',
			logos: [
				{
					title: 'Lorem impsum',
					link: '',

					img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/logo2-1.png'
				},
				{
					title: 'Lorem impsum',
					link: '',

					img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/logo2-1.png'
				},
				{
					title: 'Lorem impsum',
					link: '',

					img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/logo2-1.png'
				},
				{
					title: 'Lorem impsum',
					link: '',

					img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/logo2-1.png'
				}
			]
		},
		{
			title: 'NGO',
			logos: [
				{
					title: 'Lorem impsum',
					link: '',

					img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/logo4-1.png'
				},
				{
					title: 'Lorem impsum',
					link: '',

					img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/logo4-1.png'
				},
				{
					title: 'Lorem impsum',
					link: '',

					img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/logo4-1.png'
				},
				{
					title: 'Lorem impsum',
					link: '',

					img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/logo4-1.png'
				}
			]
		},
		{
			title: 'Community',
			logos: [
				{
					title: 'Lorem impsum',
					link: '',

					img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/logo3-1.png'
				},
				{
					title: 'Lorem impsum',
					link: '',

					img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/logo3-1.png'
				},
				{
					title: 'Lorem impsum',
					link: '',

					img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/logo3-1.png'
				},
				{
					title: 'Lorem impsum',
					link: '',

					img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/logo3-1.png'
				}
			]
		}
	];

	let selectedCategory = clientsCategories[0];
</script>

<!-- mb-32 text-center my-24 mx-auto md:px-6 -->
<section class="w-12/12 flex w-full justify-center  bg-gray-800 lg:py-24 py-12 px-4 lg:px-12">
	<div class="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
		<div class="lg:mb-6 mb-0  ">
			<h2 class="mb-6 lg:text-5xl text-3xl lg:text-left text-center font-black text-blue-600">
				Trusted by
				<br />
				<u class=""> 200+ customers</u> and <br />
				<u class=""> 30+ companies</u>
			</h2>
			<p class="mb-6 text-blue-500 max-w-xs lg:text-left text-center">
				Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
				industries for previewing layouts and visual mockups.
			</p>

			<!-- <button
				data-te-ripple-init
				data-te-ripple-color="light"
				type="button"
				class="hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 inline-block rounded-full bg-primary px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
			>
				Pre-order now
			</button> -->
		</div>

		<div class="mb-6 md:mb-0">
			<div class="avatar-group mb-6 flex flex-row flex-wrap justify-center  -space-x-6 px-6">
				{#each communities as client}
					<div class="avatar bg-blue-600 ">
						<div class="w-12">
							<img class="text-white" src={client.img} alt={client.title} />
						</div>
					</div>
				{/each}

				<div class="placeholder avatar">
					<div class="w-12 bg-blue-600 text-neutral-content">
						<span class="text-xl  font-bold text-white">{communities.length}+</span>
					</div>
				</div>
			</div>

			<div class="-mx-2 px-1 overflow-x-auto whitespace-nowrap py-2">
				{#each clientsCategories as category, i}
					<button
						on:click={() => (selectedCategory = category)}
						class="mx-2 inline-flex cursor-pointer rounded-2xl py-0.5 px-4 text-2xl transition-colors duration-300
    {selectedCategory.title == category.title
							? 'bg-blue-500  text-white hover:bg-indigo-400'
							: 'border-gray-6000 border-2 text-white hover:bg-blue-500/70 hover:text-white focus:outline-none'}"
						>{category.title}
					</button>
				{/each}
			</div>

			<div class="grid grid-cols-2 gap-6 rounded-lg bg-blue-600 py-8 px-4">
				{#each selectedCategory.logos as logo}
					<div class="mb-6">
						<img src={logo.img} alt={logo.title} class="px-6 dark:brightness-150" />
					</div>
				{/each}
			</div>
		</div>
	</div>
	<!-- <div class="py-12 md:px-12">
		<div class="container mx-auto xl:pr-32">
			<div class="flex grid items-center lg:grid-cols-2">
				<div class="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
					<div
						class="relative z-[1] block rounded-lg bg-[hsla(0,0%,5%,0.55)] px-6 py-12 shadow-black/20 backdrop-blur-[30px] md:px-12 lg:-mr-14"
					>
						<h2 class="mb-16 text-3xl font-bold">
							Trusted by the best companies <br />
							<span class="">around the world</span>
						</h2>
						<div class="grid gap-x-6 md:grid-cols-2">

							{#each clients as client}
								<div class="mb-12">
									<img
										class="neutralscale mx-auto px-6 "
										src="https://d33wubrfki0l68.cloudfront.net/07ddf740e29509004147c6a83c09f299366546c9/03a26/images/logos/logofive.svg"
										alt="Invision"
									/>
								</div>
							{/each}
						</div>
					</div>
				</div>
				<div class="md:mb-12 lg:mb-0">
					<img
						src="https://mdbcdn.b-cdn.net/img/new/textures/full/166.jpg"
						class="w-full rounded-lg shadow-lg dark:shadow-black/20"
						alt="image"
					/>
				</div>
			</div>
		</div>
	</div> -->

	<!-- <div class=" mx-auto px-5  lg:px-16">
		<div class="mb-8 flex w-full flex-col text-center">
			<span class="mb-4 text-sm font-medium uppercase tracking-wide text-gray-600">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
				<a
					href="https://www.wickedtemplates.com/expo.html"
					class="font-semibold text-blue-600 hover:text-blue-500 lg:mb-0">Our customers »</a
				>
			</span>
		</div>
		<div class="mx-auto text-center">
			<div class="mx-auto grid grid-cols-5 gap-4 lg:grid-cols-5">
				{#each clients as client}
					<div>
						<img
							class="mx-auto h-4 lg:h-12"
							src="https://d33wubrfki0l68.cloudfront.net/07ddf740e29509004147c6a83c09f299366546c9/03a26/images/logos/logofive.svg"
							alt="Invision"
						/>
					</div>
				{/each}
			</div>
		</div>
	</div> -->
</section>
