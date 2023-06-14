<script>
	import { contact, social } from '../../../../data/index';
</script>

<section class="mt-12 min-h-screen  ">
	<div
		class="container mx-auto flex w-10/12 flex-col rounded-2xl bg-gradient-to-r from-blue-600 via-blue-800 to-blue-900 px-6 text-center lg:text-left xl:px-32"
	>
		<div class="-my-14 grid items-center lg:grid-cols-2">
			<div class="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
				<div
					class="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[25px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14"
				>
					<h1 class="mt-0 mb-12 text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">
						Are you ready <br /><span class="text-danger dark:text-danger-400"
							>for an adventure?</span
						>
					</h1>
					<div class="mb-6 flex-row md:mb-0 md:flex">
						<div class="relative mb-3 w-full md:mr-3 md:mb-0" data-te-input-wrapper-init>
							<input
								type="text"
								class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
								id="exampleFormControlInput2"
								placeholder="Enter your email"
							/>
							<label
								for="exampleFormControlInput2"
								class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
								>Enter your email
							</label>
						</div>
						<button
							type="submit"
							class="bg-danger hover:bg-danger-600 focus:bg-danger-600 active:bg-danger-700 inline-block rounded px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] "
						>
							Subscribe
						</button>
					</div>
				</div>
			</div>
			<div class="md:mb-12 lg:mb-0">
				<img
					src="https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/056.jpg"
					class="rotate-lg-6 w-full rounded-lg shadow-lg dark:shadow-black/20"
					alt=""
				/>
			</div>
		</div>
	</div>
	<!-- Container for demo purpose -->
	<!-- <div class="flex-1 lg:-mx-6 lg:flex lg:items-center">
			<div class="text-white lg:mx-6 lg:w-1/2">
				<a name="contact" />
				<h1 class="text-2xl font-semibold capitalize lg:text-3xl">Get a quote</h1>

				<p class="mt-6 max-w-xl">Ask us everything and we would love to hear from you</p>

				<div class="mt-6 space-y-8 md:mt-8">
					<p class="-mx-2 flex items-start">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="mx-2 h-6 w-6 text-white"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>

						<span class="mx-2 w-72 truncate text-white">
							Lorem ipsum is placeholder text commonly used in the graphic.
						</span>
					</p>

					<p class="-mx-2 flex items-start">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="mx-2 h-6 w-6 text-white"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
							/>
						</svg>

						<span class="mx-2 w-72 truncate text-white">{contact.phone}</span>
					</p>

					<p class="-mx-2 flex items-start">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="mx-2 h-6 w-6 text-white"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>

						<span class="mx-2 w-72 truncate text-white">{contact.email} </span>
					</p>
				</div>

				<div class="mt-6 md:mt-8">
					<h3 class="text-gray-300 ">Follow us</h3>

					<div class="-mx-1.5 mt-4 flex ">
						<a
							class="mx-1.5 transform text-white transition-colors duration-300 hover:text-blue-500"
							href={social.linkedin}
						>
							<svg
								class="h-8 w-8"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z"
									fill="currentColor"
								/>
								<path d="M7.2 9.6001H4V19.2001H7.2V9.6001Z" fill="currentColor" />
								<path
									d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z"
									fill="currentColor"
								/>
							</svg>
						</a>
					</div>
				</div>
			</div>

			<div class="mt-8 lg:mx-6 lg:w-1/2">
				<div
					class="mx-auto w-full overflow-hidden rounded-xl bg-white px-8 py-10 shadow-2xl  lg:max-w-xl"
				>
					<h1 class="text-xl font-medium text-gray-700 ">Contact form</h1>

					<form class="mt-4">
						<div class="flex-1">
							<label class="mb-2 block text-sm text-gray-600 ">Full Name</label>
							<input
								type="text"
								placeholder="John Doe"
								class="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 "
							/>
						</div>

						<div class="mt-6 flex-1">
							<label class="mb-2 block text-sm text-gray-600 ">Email address</label>
							<input
								type="email"
								placeholder="johndoe@example.com"
								class="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 "
							/>
						</div>

						<div class="mt-6 w-full">
							<label class="mb-2 block text-sm text-gray-600 ">Message</label>
							<textarea
								class="mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 md:h-48"
								placeholder="Message"
							/>
						</div>

						<button
							class="mt-6 w-full transform rounded-md bg-blue-600 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
						>
							get in touch
						</button>
					</form>
				</div>
			</div> -->
	<!-- </div> -->
</section>

<style>
	@media (min-width: 992px) {
		.rotate-lg-6 {
			transform: rotate(3deg);
		}
	}
</style>
