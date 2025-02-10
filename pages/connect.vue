<template>
	<Loading></Loading>

	<main class="bg-clrr2 w-full min-h-screen scroll-smooth overflow-hidden relative z-0 font-PlusSans" id="church">

		<!-- welcome hero -->
		<section class="welcome-hero w-full h-[calc(110vh)] flex flex-col bg-clrr2 z-10 section0">
			<div class="w-full h-full overflow-hidden rounded-b-[70px] relative">
				<!-- info tab -->
				<AnimHero>
					<span
						class="w-full h-full grid place-items-center text-clrr2 text-[8vw] font-black uppercase font-Cinzel">
						Connect
					</span>

				</AnimHero>
				<!-- bg-img -->
				<img src="../assets/bg.jpg" alt="" class="object-cover w-full h-full scale-125 home-img">
			</div>
		</section>

		<!-- logo -->
		<Logo />

		<!-- nav menu -->
		<Nav />

		<!-- church summary -->
		<SummaryBar />

		<!-- message -->
		<div class="w-full h-full bg-clrr2">
			<section
				class="w-full min-h-[90vh] bg-clrr2 rounded-b-[70px] z-[10] flex p-10 py-12 gap-2 pt-20 section1 justify-center">
				<div class="gap-10 flex flex-col justify-center w-1/2 pl-32">
					<h3 class="font-bold text-[4rem] pb-2 leading-snug font-Cinzel">
						<BubbleText text="The Head" default_clr="000" />
						<br />
						<BubbleText text="Topic" default_clr="000" />
					</h3>
					<span class="w-4/5 text-2xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi beatae
						obcaecati
						sit
						doloremque illum ratione quam consequatur amet! Laudantium, praesentium.</span>
				</div>

				<div class="flex-1 relative 1/2">
					<!-- img1 -->
					<div ref="img1" class="absolute top-0 right-1/2 translate-x-[90%] w-80 aspect-square img1">
						<img src="../assets/talk.png" alt=""
							class="hover:scale-125 transition-all duration-500 ease-in-out rounded-3xl shadow-xl object-cover w-full h-full brightness-50">
					</div>
					<!-- img2 -->
					<div ref="img2" class="absolute bottom-0 left-1/2 translate-x-[-90%] w-80 aspect-square img2">
						<img src="../assets/praying.png" alt=""
							class="rounded-3xl hover:scale-110 transition-all duration-500 ease-in-out shadow-xl object-cover w-full h-full">
					</div>

				</div>

			</section>
		</div>



		<!-- message 3 -->
		<section class="w-full bg-neutral-100 rounded-b-[70px flex-col flex section3">
			<div class="w-full bg-clrr2">
				<h1 class="text-6xl font-black text-black bg-orange-400 pt-16 pl-20 rounded-t-[70px]">
					<div class="head-text font-Cinzel text-[5rem]">
						<BubbleText text="New Here?" default_clr="fff" />
					</div>
				</h1>
			</div>
			<section class="w-full min-h-[600px] bg-orange-400 rounded-b-[70px] px-10 relative">

				<div class="Ccontainer">
					<div class="items-container">

						<div v-for="(item, i) in dataCards" :key="i"
							class="item flex flex-col p-10 justify-between hover:bg-orange-400">
							<div class="flex flex-col gap-6 justify-between">
								<div class="font-bold text-3xl font-Cinzel">{{ item.title }}</div>
								<div class="font-medium">
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
			</section>

			<section class="w-full h-screen bg-neutral-100 section-group flex p-10 py-12 gap-2 pt-20 justify-center">

				<div class="flex-1 relative">
					<!-- img1 -->
					<div ref="img1" class="absolute top-14 left-14 w-80 aspect-square img1">
						<img src="../assets/talk.png" alt=""
							class="hover:scale-125 transition-all duration-500 ease-in-out rounded-3xl shadow-xl object-cover w-full h-full brightness-50">
					</div>
					<!-- img2 -->
					<div ref="img2" class="absolute bottom-14 right-14 w-80 aspect-square img2">
						<img src="../assets/praying.png" alt=""
							class="rounded-3xl hover:scale-110 transition-all duration-500 ease-in-out shadow-xl object-cover w-full h-full">
					</div>

				</div>

				<div class="gap-10 flex flex-col justify-center w-1/2 pl-32">
					<h3 class="font-bold text-[4rem] pb-2 leading-snug font-Cinzel">
						<BubbleText text="Find A Family" default_clr="000" />
						<br />
						<!-- <BubbleText text="Group" default_clr="000" /> -->
					</h3>
					<span class="w-4/5 text-2xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
						beatae
						obcaecati
						sit
						doloremque illum ratione quam consequatur amet! Laudantium, praesentium.</span>
					<div class="btn bg-black text-white rounded-full w-fit font-bold uppercase text-lg px-5">Learn More
					</div>
				</div>

			</section>


			<section
				class="w-full h-screen bg-neutral-100 border-b-[3px] border-black/15 shadow-lg section-group flex p-10 py-12 gap-2 pt-20 justify-center">

				<div class="gap-10 flex flex-col justify-center w-1/2 pl-32">
					<h3 class="font-bold text-[4rem] pb-2 leading-snug font-Cinzel">
						<BubbleText text="Talents for GOD" default_clr="000" />
						<br />
						<!-- <BubbleText text="Group" default_clr="000" /> -->
					</h3>
					<span class="w-4/5 text-2xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
						beatae
						obcaecati
						sit
						doloremque illum ratione quam consequatur amet! Laudantium, praesentium.</span>
					<div class="btn bg-black text-white rounded-full w-fit font-bold uppercase text-lg px-5">Learn More
					</div>
				</div>

				<div class="flex-1 relative">
					<!-- img1 -->
					<div ref="img1" class="absolute top-14 left-14 w-80 aspect-square img1">
						<img src="../assets/talk.png" alt=""
							class="hover:scale-125 transition-all duration-500 ease-in-out rounded-3xl shadow-xl object-cover w-full h-full brightness-50">
					</div>
					<!-- img2 -->
					<div ref="img2" class="absolute bottom-10 right-10 w-80 aspect-square img2">
						<img src="../assets/praying.png" alt=""
							class="rounded-3xl hover:scale-110 transition-all duration-500 ease-in-out shadow-xl object-cover w-full h-full">
					</div>

				</div>
			</section>

		</section>

		<!-- space for footer to show -->
		<section class="footer-container w-full h-[100vh] pointer-events-none">
		</section>


		<Foooter></Foooter>
	</main>
</template>

<script setup lang="ts">
import { useTitle } from '@vueuse/core';
import appStore from '../stores/app';
const { loading_anim_done } = storeToRefs(appStore())

appStore().$patch((state) => {
	return state.loading = true
})

// footer animation
onMounted(() => {
	window.scrollTo(0, 0)
	useTitle('CF Church - Connect')

	const conts = gsap.utils.toArray('.cont')
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: '.footer-container',
			start: 'top 80%',
		},
	})

	tl.fromTo(conts, {
		opacity: 0,
	}, {
		duration: .8,
		stagger: .3,
		opacity: 1,
		ease: 'linear',
	})
})


const img1 = ref()
const img2 = ref()
let pressed = ref(false)
let startX = ref()
let x = ref()
const dataCards = ref([
	{
		title: 'Alpha Hour',
		content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quam in optio nostrum tempora sit, repellendus asperiores tenetur veniam nisi?',
		action: 'Learn More'
	},
	{
		title: 'Chidren Time',
		content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quam in optio nostrum tempora sit, repellendus asperiores tenetur veniam nisi?',
		action: 'Learn More'
	},
	{
		title: 'Mid-Week Service',
		content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quam in optio nostrum tempora sit, repellendus asperiores tenetur veniam nisi?',
		action: 'Learn More'
	},
	{
		title: 'Services',
		content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quam in optio nostrum tempora sit, repellendus asperiores tenetur veniam nisi?',
		action: 'Learn More'
	},
	{
		title: 'Services',
		content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quam in optio nostrum tempora sit, repellendus asperiores tenetur veniam nisi?',
		action: 'Learn More'
	},
	{
		title: 'Services',
		content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quam in optio nostrum tempora sit, repellendus asperiores tenetur veniam nisi?',
		action: 'Learn More'
	},
	{
		title: 'Services',
		content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quam in optio nostrum tempora sit, repellendus asperiores tenetur veniam nisi?',
		action: 'Learn More'
	},
])

const { $gsap: gsap } = useNuxtApp()


onMounted(() => {
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


	let container = document.querySelector<HTMLDivElement>(".Ccontainer")
	let innerContainer = document.querySelector<HTMLDivElement>(".items-container")

	container!.addEventListener("mousedown", (e) => {
		pressed.value = true;
		startX.value = e.offsetX - innerContainer!.offsetLeft;
		container!.style.cursor = "grabbing";
	});

	container!.addEventListener("mouseenter", () => {
		container!.style.cursor = "grab";
	});

	container!.addEventListener("mouseup", () => {
		pressed.value = false;
		container!.style.cursor = "grab";
	});

	container!.addEventListener("mousemove", (e) => {
		if (!pressed.value) return;
		e.preventDefault();

		x.value = e.offsetX;
		innerContainer!.style.left = `${x.value - startX.value}px`;
	});
	let boundItems = () => {
		let outer = container!.getBoundingClientRect();
		let inner = innerContainer!.getBoundingClientRect();

		if (parseInt(innerContainer!.style.left) > 0) {
			innerContainer!.style.left = "0px";
		}

		if (inner.right < outer.right) {
			innerContainer!.style.left = `-${inner.width - outer.width}px`;
		}
	}

	container!.addEventListener("mousemove", (e) => {
		if (!pressed.value) return;
		e.preventDefault();

		x.value = e.offsetX;
		innerContainer!.style.left = `${x.value - startX.value}px`;
		boundItems();
	});

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