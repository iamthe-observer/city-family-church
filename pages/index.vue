<template>
	<main class="bg-base w-full min-h-screen scroll-smooth overflow-x-hidden relative z-0" id="church">

		<!-- welcome hero -->
		<section class="welcome-hero w-full h-[calc(100vh-64px)] flex flex-col bg-white z-10">
			<div class="w-full h-full overflow-hidden rounded-b-[70px] relative">
				<!-- info tab -->
				<InfoTab />
				<!-- bg-img -->
				<img src="../assets/image.png" alt="" class="object-cover w-full h-full">
			</div>
		</section>

		<!-- logo -->
		<div class="fixed w-32 aspect-square rounded-[40px] bg-white z-50 top-8 left-8 shadow-xl"></div>

		<!-- nav menu -->
		<Nav />

		<!-- church summary -->
		<section class="rounded-3xl w-full h-16 fixed p-1 px-5 bottom-0">
			<div class="w-full h-full rounded-3xl bg--500">
			</div>
		</section>

		<!-- message -->
		<div class="w-full h-full bg-base">
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
		<section
			class="relative w-full min-h-fit rounded-b-[70px] p-10 py-32 flex flex-col justify-center items-center section2 gap-14 bg-base">
			<div class="top-[60px] sticky rounded-3xl w-[70vw] h-[80vh] bg-lime-200 card"></div>
			<div class="top-[70px] sticky rounded-3xl w-[70vw] h-[80vh] bg-lime-300 card"></div>
			<div class="top-[80px] sticky rounded-3xl w-[70vw] h-[80vh] bg-lime-400 card"></div>
			<div class="top-[90px] sticky rounded-3xl w-[70vw] h-[80vh] bg-lime-500 card"></div>
		</section>

		<!-- message 3 -->
		<section class="w-full bg-white rounded-t-[70px] flex-col flex border-black border-b-2 section3">
			<h1 class="text-6xl font-bold text-white bg-primary rounded-t-[70px] pt-16 pl-20">
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

watchEffect(() => { console.log(pressed.value) })


onMounted(() => {
	const imageMoveTl = gsap.timeline({
		scrollTrigger: {
			trigger: '.section1',
			start: 'top 40%',
			end: 'bottom center',
			scrub: 1,
		}
	})

	imageMoveTl.to(img1.value, {
		y: 100
	}).to(img2.value, {
		y: -100
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