<template>
	<main class="bg-neutral-100 w-full min-h-screen scroll-smooth overflow-hidden relative z-0" id="church">

		<!-- welcome hero -->
		<section class="welcome-hero w-full h-[calc(100vh-64px)] flex flex-col bg-white z-10 section0">
			<div class="w-full h-full overflow-hidden rounded-b-[70px] relative">
				<!-- info tab -->
				<AnimHero>
					<div class="w-full h-full grid place-items-center">
						<span class="text-[7rem] font-bold uppercase text-red-600">GIVING</span>
					</div>
				</AnimHero>
				<!-- bg-img -->
				<img src="../assets/image.png" alt="" class="object-cover w-full h-full scale-125 home-img">
			</div>
		</section>

		<!-- logo -->
		<div class="fixed w-32 aspect-square rounded-[40px] bg-white z-50 top-8 left-8 shadow-xl"></div>

		<!-- nav menu -->
		<Nav />

		<!-- church summary -->
		<section class="rounded-3xl w-full h-16 fixed p-1 px-5 z-50 bottom-0 summary">
			<div class="w-full h-full rounded-3xl bg-amber-500">
			</div>
		</section>

		<!-- message -->
		<div class="w-full h-full bg-neutral-100">
			<section class="w-full min-h-[90vh] bg-white rounded-b-[70px] z-[10] flex p-10 py-12 gap-2 pt-20 section1">
				<div class="flex-1 gap-10 flex flex-col justify-center">
					<h3 class="font-bold text-[4rem] pb-2 leading-snug">The Head <br /> Topic</h3>
					<span class="w-4/5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi beatae obcaecati
						sit
						doloremque illum ratione quam consequatur amet! Laudantium, praesentium.</span>
				</div>

				<div class="flex-1 relative">
					<!-- img1 -->
					<div ref="img1"
						class="absolute top-0 right-1/2 translate-x-[90%] w-80 aspect-square rounded-2xl bg-lime-500 img1">
					</div>
					<!-- img2 -->
					<div ref="img2"
						class="absolute bottom-0 left-1/2 translate-x-[-90%] w-80 aspect-square rounded-2xl bg-lime-700 img2">
					</div>

				</div>

			</section>
		</div>


		<!-- message 2 -->
		<section class="w-full h-[100vh] rounded--[70px] section2 gap-14 bg-neutral-100">

			<div class="animate-container overflow-hidden relative w-full h-screen">
				<div
					class="__circle hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 aspect-square rounded-full border-2 border-black">
				</div>

				<div class="absolute font-bold text-[5rem] top-32 left-[300px] flex gap-1 items-center">
					<span class="born opacity-0" v-for="(letter, i) in ['BORN'].map(str => str.split('')).flat()"
						:key="i">
						{{ letter }}
					</span>
				</div>
				<div class="absolute font-bold text-[5rem] top-[30%] right-[400px] flex gap-1 items-center">
					<span class="in opacity-0" v-for="(letter, i) in ['IN'].map(str => str.split('')).flat()" :key="i">
						{{ letter }}
					</span>
				</div>
				<div class="absolute font-bold text-[5rem] bottom-32 left-1/2 -translate-x-1/2 flex gap-1 items-center">
					<span class="christ opacity-0" v-for="(letter, i) in ['CHRIST'].map(str => str.split('')).flat()"
						:key="i">
						{{ letter }}
					</span>
				</div>

				<div
					class="flex flex-col justify-center items-center font-bold text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mission opacity-0">
					<span class="">Our Mission Is For YOU To Be</span>
					<span class="">Be In Christ</span>
				</div>
			</div>

		</section>

		<!-- message 3 -->
		<section class="w-full bg-white rounded-b-[70px flex-col flex border-black border-b-2 section3">
			<h1 class="text-6xl font-bold text-white bg-primary pt-16 pl-20">
				<div class="head-text">
					Quote <br />
					Marquee
				</div>
			</h1>
			<section class="w-full min-h-[80vh] bg-primary rounded-b-[70px] pt-10 px-10 relative">

				<div class="Ccontainer">
					<div class="items-container">
						<div class="item"></div>
						<div class="item"></div>
						<div class="item"></div>
						<div class="item"></div>
						<div class="item"></div>
						<div class="item"></div>
						<div class="item"></div>
						<div class="item"></div>
						<div class="item"></div>
					</div>
				</div>
			</section>
			<!-- end quote marquee -->
			<section class="w-full h-[40vh] bg-white py-20 pb-60">
				<Marquee text="Quote Marquee" />
			</section>

		</section>

		<!-- space for footer to show -->
		<section class="footer-container w-full h-[85vh]">
		</section>



		<Foooter></Foooter>
	</main>
</template>

<script setup lang="ts">
const { $gsap: gsap } = useNuxtApp()
const img1 = ref()
const img2 = ref()
let pressed = ref(false)
let startX = ref()
let x = ref()

function homeAnimation() {
	const section: number = document.querySelector('.section2')!.getBoundingClientRect().height
	const born = gsap.utils.toArray('.born')
	const iN = gsap.utils.toArray('.in')
	const christ = gsap.utils.toArray('.christ')

	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: '.section2',
			start: 'top top',
			end: `+=${section}`,
			scrub: 1,
			pin: true
		}
	})

	tl.to('.animate-container', {
		y: 0,
		ease: 'power4.inOut',
		duration: 2
	})
		.to('.mission', {
			opacity: 1
		}, "<+=.5")
		.to('.__circle', {
			width: '200%',
			display: 'block',
			duration: 3,
			ease: 'power4.inOut'
		}, '<')
		.fromTo(born, {
			y: 100,
		}, {
			y: 0,
			stagger: 0.1,
			opacity: 1,
			ease: 'power4.inOut'
		})
		.fromTo(iN, {
			y: 100,
		}, {
			y: 0,
			stagger: 0.1,
			opacity: 1,
			ease: 'power4.inOut'
		})
		.fromTo(christ, {
			y: 100,
		}, {
			y: 0,
			stagger: 0.1,
			opacity: 1,
			ease: 'power4.inOut'
		})
}


onMounted(() => {
	gsap.to('.home-img', {
		scrollTrigger: {
			trigger: '.section0',
			start: 'top top',
			end: 'bottom top',
			scrub: 1,
		},
		y: -20
	})

	const homeTl = gsap.timeline()
	document.body.style.overflow = 'hidden';

	homeTl
		.from('.welcome-hero', {
			delay: 0.5,
			height: '110vh',
			duration: 2,
			ease: 'power4.inOut',
		})
		.from('.info-tab', {
			// delay: 0.5,
			opacity: 0,
			duration: .4,
		})
		.from('.summary', {
			y: 100,
			ease: 'power4.inOut',
			onComplete: () => {
				document.body.style.overflow = 'auto';
			}
		})

	homeAnimation()
	const imageMoveTl = gsap.timeline({
		scrollTrigger: {
			trigger: '.section1',
			start: 'top 40%',
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
			start: 'top 25%',
			end: '50 25%',
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
	background-color: lightgrey;
}
</style>