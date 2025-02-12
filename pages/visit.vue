<template>
	<Loading></Loading>

	<main class="bg-neutral-100 w-full min-h-screen scroll-smooth overflow-hidden relative z-0 font-PlusSans"
		id="church">

		<!-- welcome hero -->
		<section class="welcome-hero w-full h-[calc(110vh)] flex flex-col bg-white z-10 section0">
			<div class="w-full h-full overflow-hidden rounded-b-[70px] relative">
				<!-- info tab -->
				<AnimHero>
					<span
						class="w-full h-full grid place-items-center text-clrr2 text-[8vw] font-black uppercase font-Cinzel drop-shadow-lg">
						VISIT
						US</span>
				</AnimHero>
				<!-- bg-img -->
				<img src="https://live.staticflickr.com/65535/52918725652_323217ede7_o.png" alt=""
					class="object-cover w-full h-full scale-125 home-img brightness-50">
			</div>
		</section>

		<!-- logo -->
		<Logo />

		<!-- nav menu -->
		<Nav />

		<!-- church summary -->
		<SummaryBar />

		<!-- message -->
		<div class="w-full h-full bg-clrr1">
			<!-- <section
				class="w-full min-h-[90vh] bg-white rounded-b-[70px] z-[10] flex p-10 py-12 gap-2 pt-20 section1 justify-center">
				<div class="flex-1 relative 1/2">

					<div ref="img1" class="absolute top-0 right-1/2 translate-x-[90%] w-80 aspect-square img1">
						<img src="../assets/talk.png" alt=""
							class="hover:scale-125 transition-all duration-500 ease-in-out rounded-3xl shadow-xl object-cover w-full h-full brightness-50">
					</div>

					<div ref="img2" class="absolute bottom-0 left-1/2 translate-x-[-90%] w-80 aspect-square img2">
						<img src="../assets/praying.png" alt=""
							class="rounded-3xl hover:scale-110 transition-all duration-500 ease-in-out shadow-xl object-cover w-full h-full">
					</div>

				</div>

				<div class="gap-10 flex flex-col justify-center w-1/2 pl-32">
					<h3 class="font-bold text-[4rem] pb-2 leading-snug font-Cinzel">
						<BubbleText default_clr="000" text="The Family" /><br />
						<BubbleText default_clr="000" text="In the City" />
					</h3>
					<span class="w-4/5 text-2xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi beatae
						obcaecati
						sit
						doloremque illum ratione quam consequatur amet! Laudantium, praesentium.</span>
				</div>



			</section> -->


			<section
				class="w-full min-h-[50vh] bg-white rounded-b-[70px] z-[10] flex-col items-center flex p-10 pb-24 pt-20 gap-2 section1 justify-center">

				<BubbleText class="text-6xl	text-black font-Cinzel mb-20" text="Service Schedule" default_clr="000" />

				<div class="flex w-full items-center justify-evenly">

					<div class="flex flex-col gap-1 items-center">
						<svg class="w-32 aspect-square" viewBox="0 0 24 24" fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
							<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
							<g id="SVGRepo_iconCarrier">
								<path fill-rule="evenodd" clip-rule="evenodd"
									d="M4.25 19C4.25 18.5858 4.58579 18.25 5 18.25H19C19.4142 18.25 19.75 18.5858 19.75 19C19.75 19.4142 19.4142 19.75 19 19.75H5C4.58579 19.75 4.25 19.4142 4.25 19ZM7.25 22C7.25 21.5858 7.58579 21.25 8 21.25H16C16.4142 21.25 16.75 21.5858 16.75 22C16.75 22.4142 16.4142 22.75 16 22.75H8C7.58579 22.75 7.25 22.4142 7.25 22Z"
									fill="#000000"></path>
								<path fill-rule="evenodd" clip-rule="evenodd"
									d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V3C12.75 3.41421 12.4142 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3V2C11.25 1.58579 11.5858 1.25 12 1.25ZM4.39861 4.39861C4.6915 4.10572 5.16638 4.10572 5.45927 4.39861L5.85211 4.79145C6.145 5.08434 6.145 5.55921 5.85211 5.85211C5.55921 6.145 5.08434 6.145 4.79145 5.85211L4.39861 5.45927C4.10572 5.16638 4.10572 4.6915 4.39861 4.39861ZM19.6011 4.39887C19.894 4.69176 19.894 5.16664 19.6011 5.45953L19.2083 5.85237C18.9154 6.14526 18.4405 6.14526 18.1476 5.85237C17.8547 5.55947 17.8547 5.0846 18.1476 4.79171L18.5405 4.39887C18.8334 4.10598 19.3082 4.10598 19.6011 4.39887ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H3C3.41421 11.25 3.75 11.5858 3.75 12C3.75 12.4142 3.41421 12.75 3 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM20.25 12C20.25 11.5858 20.5858 11.25 21 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H21C20.5858 12.75 20.25 12.4142 20.25 12Z"
									fill="#000000"></path>
								<path
									d="M5.25 12C5.25 13.1778 5.5521 14.2858 6.08267 15.25H2C1.58579 15.25 1.25 15.5858 1.25 16C1.25 16.4142 1.58579 16.75 2 16.75H11.25V11.8107L10.5303 12.5303C10.2374 12.8232 9.76256 12.8232 9.46967 12.5303C9.17678 12.2374 9.17678 11.7626 9.46967 11.4697L11.4697 9.46967C11.7626 9.17678 12.2374 9.17678 12.5303 9.46967L14.5303 11.4697C14.8232 11.7626 14.8232 12.2374 14.5303 12.5303C14.2374 12.8232 13.7626 12.8232 13.4697 12.5303L12.75 11.8107V16.75H22C22.4142 16.75 22.75 16.4142 22.75 16C22.75 15.5858 22.4142 15.25 22 15.25H17.9173C18.4479 14.2858 18.75 13.1778 18.75 12C18.75 8.27208 15.7279 5.25 12 5.25C8.27208 5.25 5.25 8.27208 5.25 12Z"
									fill="#000000"></path>
							</g>
						</svg>

						<span class="font-bold font-Cinzel text-xl mt-5">Morning</span>
						<span class="">9:30 AM - 11:30 AM</span>
					</div>

					<div class="flex flex-col gap-1 items-center">
						<svg class="w-32 aspect-square" fill="#000000" viewBox="0 0 240 240" version="1.1" id="Layer_1"
							xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
							style="enable-background:new 0 0 240 240" xml:space="preserve" stroke="#000000">
							<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
							<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
							<g id="SVGRepo_iconCarrier">
								<g>
									<path
										d="M58.57,25.81c-2.13-3.67-0.87-8.38,2.8-10.51c3.67-2.13,8.38-0.88,10.51,2.8l9.88,17.1c2.13,3.67,0.87,8.38-2.8,10.51 c-3.67,2.13-8.38,0.88-10.51-2.8L58.57,25.81L58.57,25.81z M120,51.17c19.01,0,36.21,7.7,48.67,20.16 C181.12,83.79,188.83,101,188.83,120c0,19.01-7.7,36.21-20.16,48.67c-12.46,12.46-29.66,20.16-48.67,20.16 c-19.01,0-36.21-7.7-48.67-20.16C58.88,156.21,51.17,139.01,51.17,120c0-19.01,7.7-36.21,20.16-48.67 C83.79,58.88,101,51.17,120,51.17L120,51.17z M158.27,81.73c-9.79-9.79-23.32-15.85-38.27-15.85c-14.95,0-28.48,6.06-38.27,15.85 c-9.79,9.79-15.85,23.32-15.85,38.27c0,14.95,6.06,28.48,15.85,38.27c9.79,9.79,23.32,15.85,38.27,15.85 c14.95,0,28.48-6.06,38.27-15.85c9.79-9.79,15.85-23.32,15.85-38.27C174.12,105.05,168.06,91.52,158.27,81.73L158.27,81.73z M113.88,7.71c0-4.26,3.45-7.71,7.71-7.71c4.26,0,7.71,3.45,7.71,7.71v19.75c0,4.26-3.45,7.71-7.71,7.71 c-4.26,0-7.71-3.45-7.71-7.71V7.71L113.88,7.71z M170.87,19.72c2.11-3.67,6.8-4.94,10.48-2.83c3.67,2.11,4.94,6.8,2.83,10.48 l-9.88,17.1c-2.11,3.67-6.8,4.94-10.48,2.83c-3.67-2.11-4.94-6.8-2.83-10.48L170.87,19.72L170.87,19.72z M214.19,58.57 c3.67-2.13,8.38-0.87,10.51,2.8c2.13,3.67,0.88,8.38-2.8,10.51l-17.1,9.88c-3.67,2.13-8.38,0.87-10.51-2.8 c-2.13-3.67-0.88-8.38,2.8-10.51L214.19,58.57L214.19,58.57z M232.29,113.88c4.26,0,7.71,3.45,7.71,7.71 c0,4.26-3.45,7.71-7.71,7.71h-19.75c-4.26,0-7.71-3.45-7.71-7.71c0-4.26,3.45-7.71,7.71-7.71H232.29L232.29,113.88z M220.28,170.87 c3.67,2.11,4.94,6.8,2.83,10.48c-2.11,3.67-6.8,4.94-10.48,2.83l-17.1-9.88c-3.67-2.11-4.94-6.8-2.83-10.48 c2.11-3.67,6.8-4.94,10.48-2.83L220.28,170.87L220.28,170.87z M181.43,214.19c2.13,3.67,0.87,8.38-2.8,10.51 c-3.67,2.13-8.38,0.88-10.51-2.8l-9.88-17.1c-2.13-3.67-0.87-8.38,2.8-10.51c3.67-2.13,8.38-0.88,10.51,2.8L181.43,214.19 L181.43,214.19z M126.12,232.29c0,4.26-3.45,7.71-7.71,7.71c-4.26,0-7.71-3.45-7.71-7.71v-19.75c0-4.26,3.45-7.71,7.71-7.71 c4.26,0,7.71,3.45,7.71,7.71V232.29L126.12,232.29z M69.13,220.28c-2.11,3.67-6.8,4.94-10.48,2.83c-3.67-2.11-4.94-6.8-2.83-10.48 l9.88-17.1c2.11-3.67,6.8-4.94,10.48-2.83c3.67,2.11,4.94,6.8,2.83,10.48L69.13,220.28L69.13,220.28z M25.81,181.43 c-3.67,2.13-8.38,0.87-10.51-2.8c-2.13-3.67-0.88-8.38,2.8-10.51l17.1-9.88c3.67-2.13,8.38-0.87,10.51,2.8 c2.13,3.67,0.88,8.38-2.8,10.51L25.81,181.43L25.81,181.43z M7.71,126.12c-4.26,0-7.71-3.45-7.71-7.71c0-4.26,3.45-7.71,7.71-7.71 h19.75c4.26,0,7.71,3.45,7.71,7.71c0,4.26-3.45,7.71-7.71,7.71H7.71L7.71,126.12z M19.72,69.13c-3.67-2.11-4.94-6.8-2.83-10.48 c2.11-3.67,6.8-4.94,10.48-2.83l17.1,9.88c3.67,2.11,4.94,6.8,2.83,10.48c-2.11,3.67-6.8,4.94-10.48,2.83L19.72,69.13L19.72,69.13z">
									</path>
								</g>
							</g>
						</svg>
						<span class="font-bold font-Cinzel text-xl mt-5">Afternoon</span>
						<span class="">12:30 AM - 2:30 PM</span>
					</div>

					<div class="flex flex-col gap-1 items-center">
						<svg class="w-32 aspect-square" viewBox="0 0 48 48" version="1.1"
							xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
							fill="#000000">
							<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
							<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
							<g id="SVGRepo_iconCarrier">
								<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
								<title>ic_fluent_weather_partly_cloudy_night_48_filled</title>
								<desc>Created with Sketch.</desc>
								<g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<g id="ic_fluent_weather_partly_cloudy_night_48_filled" fill="#000000"
										fill-rule="nonzero">
										<path
											d="M26.0011082,16.0096412 C32.3381703,16.0096412 35.9330779,20.204222 36.4559068,25.2698939 L36.6158392,25.2698888 C40.6939986,25.2698888 44,28.5673365 44,32.6349444 C44,36.7025523 40.6939986,40 36.6158392,40 L15.3863771,40 C11.3082177,40 8.00221632,36.7025523 8.00221632,32.6349444 C8.00221632,28.5673365 11.3082177,25.2698888 15.3864221,25.2698888 L15.5463095,25.2698939 C16.0721799,20.1709267 19.664046,16.0096412 26.0011082,16.0096412 Z M13.1801445,8.0022343 C14.7701954,8.08753742 16.3141329,8.5457712 17.7063165,9.34955183 C19.8164919,10.5678634 21.3239633,12.4292038 22.1241199,14.5431601 C18.1079625,15.6869784 15.2468735,18.6258984 14.0972592,22.5916137 L14.0054316,22.9244503 L13.8898983,23.4001055 L13.4772477,23.4770233 C11.1861818,23.9579001 9.20028216,25.279971 7.86078228,27.1089615 L7.55192209,26.9373947 L7.55192209,26.9373947 C6.23688557,26.1780714 5.12054523,25.1471177 4.26766382,23.9086885 C3.70868496,23.0968478 4.07031943,21.9756219 4.99837648,21.6435152 C8.28321212,20.4678311 10.0530611,19.1447438 11.0652753,17.2123898 C12.1707642,15.1022216 12.3749819,12.8642573 11.6410379,9.8575041 C11.4024133,8.87950344 12.1749158,7.9482991 13.1801445,8.0022343 Z"
											id="🎨-Color"> </path>
									</g>
								</g>
							</g>
						</svg>
						<span class="font-bold font-Cinzel text-xl mt-5">Evening</span>
						<span class="">4:30 PM - 6:30 PM</span>

					</div>

				</div>
			</section>
		</div>


		<!-- message 2 -->
		<section class="w-full h-[100vh] rounded--[70px] section2 bg-clrr1 p-20 pt-20 flex flex-col">

			<BubbleText default_clr="000" class="mb-20 font-bold text-6xl font-Cinzel mx-auto"
				text="LOCATION AND FAQS" />


			<div class="flex gap-12 rounded-3xl p-10 w-full h-full bg-white drop-shadow-2xl">

				<div class="h-full w-[35%]">
					<iframe class="rounded-2xl outline-8 outline outline-black/10"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1714.5921512871546!2d-79.71325138101865!3d43.71909411492406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3dc4a2d9a599%3A0xeb6009c0f2222661!2sClark%20Blvd%2C%20Brampton%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sgh!4v1679394148613!5m2!1sen!2sgh"
						width="100%" height="100%" style="border:0;" loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"></iframe>
				</div>

				<div class="flex-1 flex flex-col gap-4 max-h-full">
					<!-- <h1 class="font-bold text-[5vw] font-Cinzel">
						<BubbleText default_clr="000" text="FAQS" />
					</h1> -->



					<div class="overflow-y-auto">

						<div v-for="i in 20" class="collapse collapse-plus bg-clrr1-200">
							<input type="radio" name="my-accordion-3" />
							<div class="collapse-title text-xl font-medium">
								Click to open this one and close others
							</div>
							<div class="collapse-content">
								<p>GOD IS GOOD</p>
							</div>
						</div>
					</div>

				</div>
			</div>
		</section>

		<!-- message 3 -->
		<!-- <section class="w-full bg-white rounded-b-[70px flex-col flex border-black border-b-2 section3"> -->
		<!-- <div class="w-full bg-clrr1">
				<h1 class="text-6xl font-black text-black bg-clr1 pt-16 pl-20 rounded-t-[70px]">
					<div class="head-text font-Cinzel">
						<BubbleText default_clr="000" text="Experience worshipping" />
						<br />
						<BubbleText default_clr="000" text="the Lord in a fulfilling way." />

					</div>
				</h1>
			</div> -->
		<!-- <section class="w-full min-h-[600px] bg-clr1 rounded-b-[70px] px-10 relative">

				<div class="Ccontainer">
					<div class="items-container">

						<div v-for="(item, i) in dataCards" :key="i"
							class="item flex flex-col p-10 justify-between hover:bg-clr2">
							<div class="flex flex-col gap-6 justify-between">
								<div class="font-bold text-3xl font-PlusSans text-black">{{ item.title }}</div>
								<div class="font-medium text-black">
									{{ item.content }}
								</div>
							</div>
							<div class="w-full flex justify-end">
								<button
									class="btn p-3 px-8 rounded-full bg-clrr2 text-black font-bold uppercase font-PlusSans hover:text-white hover:bg-black">{{
										item.action }}</button>
							</div>

						</div>
					</div>
				</div>
			</section> -->
		<!-- end quote marquee -->
		<!-- <section class="w-full h-[50vh] bg-white py-20 pb-60">
				<Marquee text="Quote Marquee" />
			</section> -->

		<!-- </section> -->

		<!-- space for footer to show -->
		<section class="footer-container w-full h-[100vh] pointer-events-none">
		</section>


		<Foooter></Foooter>
	</main>
</template>

<script setup lang="ts">
import appStore from '../stores/app';
const { loading_anim_done } = storeToRefs(appStore())

appStore().$patch((state) => {
	return state.loading = true
})

const img1 = ref()
const img2 = ref()

const { $gsap: gsap } = useNuxtApp()

onMounted(() => {
	window.scrollTo(0, 0);

	document.body.style.overflow = 'hidden';

	gsap.to('.home-img', {
		scrollTrigger: {
			trigger: '.section0',
			start: 'top top',
			end: 'bottom top',
			scrub: 1,
		},
		y: -20
	})

	watchEffect(() => {
		if (loading_anim_done.value) {
			loading_anim_done.value = false
			const homeTl = gsap.timeline()

			homeTl
				.to('.welcome-hero', {
					delay: 0,
					height: () => `calc(100vh - 80px)`, // this uses a function to calculate the height
					duration: 1,
					ease: 'power4.inOut',
				})
				.to('.info-tab', {
					// delay: 0.5,
					opacity: 1,
					duration: .4,
				})
				.to('.nav-item', {
					stagger: 0.1,
					opacity: 1,
				}, '<')
				.to('.summary', {
					y: 0,
					ease: 'power4.inOut',
					onComplete: () => {
						document.body.style.overflow = 'auto';
					}
				})

		}
	})

	const imageMoveTl = gsap.timeline({
		scrollTrigger: {
			trigger: '.section1',
			start: 'top bottom',
			end: 'bottom center',
			scrub: 1,
		}
	})

	imageMoveTl.to(img1.value, {
		y: 200
	}).to(img2.value, {
		y: -200
	}, '<')

	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: '.section3',
			start: 'top 50%',
			end: '70 30%',
			scrub: 1,
		}
	})

	tl.to('.head-text', {
		x: 100,
		ease: 'power4.inOut',
	})


	// let container = document.querySelector<HTMLDivElement>(".Ccontainer")
	// let innerContainer = document.querySelector<HTMLDivElement>(".items-container")

	// container!.addEventListener("mousedown", (e) => {
	// 	pressed.value = true;
	// 	startX.value = e.offsetX - innerContainer!.offsetLeft;
	// 	container!.style.cursor = "grabbing";
	// });

	// container!.addEventListener("mouseenter", () => {
	// 	container!.style.cursor = "grab";
	// });

	// container!.addEventListener("mouseup", () => {
	// 	pressed.value = false;
	// 	container!.style.cursor = "grab";
	// });

	// container!.addEventListener("mousemove", (e) => {
	// 	if (!pressed.value) return;
	// 	e.preventDefault();

	// 	x.value = e.offsetX;
	// 	innerContainer!.style.left = `${x.value - startX.value}px`;
	// });
	// let boundItems = () => {
	// 	let outer = container!.getBoundingClientRect();
	// 	let inner = innerContainer!.getBoundingClientRect();

	// 	if (parseInt(innerContainer!.style.left) > 0) {
	// 		innerContainer!.style.left = "0px";
	// 	}

	// 	if (inner.right < outer.right) {
	// 		innerContainer!.style.left = `-${inner.width - outer.width}px`;
	// 	}
	// }

	// container!.addEventListener("mousemove", (e) => {
	// 	if (!pressed.value) return;
	// 	e.preventDefault();

	// 	x.value = e.offsetX;
	// 	innerContainer!.style.left = `${x.value - startX.value}px`;
	// 	boundItems();
	// });

})
</script>

<style scoped>
.perspective {
	perspective: 500px;
}

.Ccontainer {
	width: 100%;
	height: 400px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	overflow: hidden;
}

.items-container {
	padding-left: 80px;
	padding-right: 100px;
	display: flex;
	gap: 20px;
	pointer-events: none;
	position: absolute;
	top: 0;
	left: 0;
}

.item {
	height: 400px;
	width: 300px;
	border-radius: 20px;
	background-color: white;
}

.item:hover {
	background-color: #49108B;
}

.marquee {
	width: 100%;
	overflow: hidden;
	/* background: #fff; */
	white-space: nowrap;
	box-sizing: border-box;
	padding: 10px 0;
	position: relative;
}

.marquee-content {
	display: flex;
	animation: marquee 5s linear infinite;
}

.marquee-content span {
	display: inline-block;
	/* font-size: 20px; */
	font-weight: bolder;
	padding-right: 30px;
	/* Adjust for spacing between repeated texts */
}

@keyframes marquee {
	from {
		transform: translateX(0);
	}

	to {
		transform: translateX(-50%);
	}
}
</style>