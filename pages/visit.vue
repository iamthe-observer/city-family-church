<template>
	<main class="bg-neutral-100 w-full min-h-screen scroll-smooth overflow-hidden relative z-0 font-SpaceGrotesk"
		id="church">

		<!-- welcome hero -->
		<section class="welcome-hero w-full h-[calc(100vh-80px)] flex flex-col bg-white z-10 section0">
			<div class="w-full h-full overflow-hidden rounded-b-[70px] relative">
				<!-- info tab -->
				<AnimHero>
					<span
						class="uppercase text-base00 w-full h-full grid place-items-center font-black font-BarlowCondensed text-[10rem]">FINDING
						US</span>
				</AnimHero>
				<!-- bg-img -->
				<img src="../assets/praying.png" alt="" class="object-cover w-full h-full scale-125 home-img">
			</div>
		</section>

		<!-- logo -->
		<div class="fixed w-32 aspect-square rounded-[40px] bg-white z-50 top-8 left-8 shadow-xl"></div>

		<!-- nav menu -->
		<Nav />

		<!-- church summary -->
		<section class="w-full h-20 fixed p-1 px-5 z-50 bottom-0 summary">

			<div
				class="p-2 w-[95%] mx-auto h-full rounded-3xl backdrop-blur-md bg-black/5 flex items-center justify-between gap-2 text-sm">
				<div class="min-w-[300px] w-fit max-w-[700px] h-full flex items-center">
					<span class="px-3 border-r border-black font-bold">SUNDAY SERVICES</span>
					<span class="px-3 border-x border-black font-bold">9 AM</span>
					<span class="px-3 border-x border-black font-bold">11 AM</span>
					<span class="px-3 border-x border-black font-bold">4 PM</span>
					<span class="px-3 border-l border-black font-bold">WATCH ONLINE</span>
				</div>
				<div class="min-w-[300px] w-full max-w-[700px] h-full flex items-center">
					<div class="marquee">
						<div class="marquee-content">
							<span>JOIN MID WEEK SERVICE HERE! | JOIN MID WEEK SERVICE HERE! | JOIN MID WEEK SERVICE
								HERE! | JOIN MID WEEK SERVICE HERE! | JOIN MID WEEK SERVICE HERE! | JOIN MID WEEK
								SERVICE HERE! | JOIN MID WEEK SERVICE HERE! | JOIN MID WEEK SERVICE HERE! | JOIN MID
								WEEK SERVICE HERE! | JOIN MID WEEK SERVICE HERE! | JOIN MID WEEK SERVICE HERE! | JOIN
								MID WEEK SERVICE HERE! | JOIN MID WEEK SERVICE HERE! | JOIN MID WEEK SERVICE HERE! |
								JOIN MID WEEK SERVICE HERE! | JOIN MID WEEK SERVICE HERE! | JOIN MID WEEK SERVICE HERE!
								| JOIN MID WEEK SERVICE HERE! | JOIN MID WEEK SERVICE HERE! | JOIN MID WEEK SERVICE
								HERE! | JOIN MID WEEK SERVICE HERE! | JOIN MID WEEK SERVICE HERE! | JOIN MID WEEK
								SERVICE HERE! | JOIN MID WEEK SERVICE HERE! | JOIN MID WEEK SERVICE HERE! | JOIN MID
								WEEK SERVICE HERE!</span>
						</div>
					</div>
				</div>
				<div class="bg-black rounded-full h-full aspect-square"></div>
			</div>

		</section>

		<!-- message -->
		<div class="w-full h-full bg-base">
			<section
				class="w-full min-h-[90vh] bg-white rounded-b-[70px] z-[10] flex p-10 py-12 gap-2 pt-20 section1 justify-center">
				<div class="gap-10 flex flex-col justify-center w-1/2 pl-32">
					<h3 class="font-bold text-[4rem] pb-2 leading-snug font-PlusSans">The Head <br />Topic</h3>
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


		<!-- message 2 -->
		<section class="w-full h-[100vh] rounded--[70px] section2 gap-14 bg-base b-[100px] relative">
			<div
				class="absolute top-2 left-1/2 -translate-x-1/2 uppercase text-xs font-bold tracking-wider flex items-center">
				Keep
				Scrolling
				<svg xmlns="http://www.w3.org/2000/svg" class="w-5 animate-bounce" viewBox="0 0 24 24">
					<path fill="currentColor"
						d="M11.997 20.92q-.159 0-.295-.057t-.267-.186l-5.427-5.421q-.14-.14-.15-.344t.13-.35q.147-.166.357-.156t.357.156l4.798 4.784V12.73q0-.213.144-.356q.144-.144.357-.144t.356.144t.143.356v6.636l4.823-4.803q.136-.14.339-.14t.353.145q.137.134.137.341t-.14.348l-5.447 5.42q-.13.132-.27.187q-.139.056-.298.056M12 10.23q-.212 0-.356-.144T11.5 9.73v-2q0-.213.144-.356q.144-.144.357-.144t.356.144t.143.356v2.02q0 .203-.144.342q-.144.138-.357.138m0-5q-.212 0-.356-.144T11.5 4.73v-1q0-.213.144-.356q.144-.144.357-.144t.356.144t.143.356v1.02q0 .203-.144.342q-.144.138-.357.138" />
				</svg>
			</div>

			<div class="animate-container overflow-hidden relative w-full h-screen">
				<div
					class="__circle hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 aspect-square rounded-full border-2 border-black">
				</div>

				<div
					class="absolute font-black text-[10rem] top-32 left-[300px] flex items-center font-BarlowCondensed italic">
					<span class="born opacity-0" v-for="(letter, i) in ['BORN'].map(str => str.split('')).flat()"
						:key="i">
						{{ letter }}
					</span>
				</div>
				<div
					class="absolute font-black text-[10rem] top-[30%] right-[400px] flex items-center font-BarlowCondensed italic">
					<span class="in opacity-0" v-for="(letter, i) in ['IN'].map(str => str.split('')).flat()" :key="i">
						{{ letter }}
					</span>
				</div>
				<div
					class="absolute font-black text-[10rem] bottom-32 left-1/2 -translate-x-1/2 flex items-center font-BarlowCondensed italic">
					<span class="christ opacity-0" v-for="(letter, i) in ['CHRIST'].map(str => str.split('')).flat()"
						:key="i">
						{{ letter }}
					</span>
				</div>

				<div
					class="flex flex-col justify-center items-center font-bold text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mission opacity-0 font-PlusSans">
					<span class="">Our Mission Is For YOU To Be</span>
					<span class="">Be In Christ</span>
				</div>
			</div>

		</section>

		<!-- message 3 -->
		<section class="w-full bg-white rounded-b-[70px flex-col flex border-black border-b-2 section3">
			<div class="w-full bg-base">
				<h1 class="text-6xl font-black text-black bg-secondary pt-16 pl-20 rounded-t-[70px]">
					<div class="head-text font-PlusSans">
						Lorem Text About Church
					</div>
				</h1>
			</div>
			<section class="w-full min-h-[600px] bg-secondary rounded-b-[70px] px-10 relative">

				<div class="Ccontainer">
					<div class="items-container">

						<div v-for="(item, i) in dataCards" :key="i"
							class="item flex flex-col p-10 justify-between hover:bg-secondary">
							<div class="flex flex-col gap-6 justify-between">
								<div class="font-bold text-3xl font-PlusSans">{{ item.title }}</div>
								<div class="font-medium">
									{{ item.content }}
								</div>
							</div>
							<div class="w-full flex justify-end">
								<button
									class="btn p-3 px-8 rounded-full bg-base00 text-black font-bold uppercase font-PlusSans hover:text-white hover:bg-black">{{
										item.action }}</button>
							</div>

						</div>
					</div>
				</div>
			</section>
			<!-- end quote marquee -->
			<section class="w-full h-[50vh] bg-white py-20 pb-60">
				<Marquee text="Quote Marquee" />
			</section>

		</section>

		<!-- space for footer to show -->
		<section class="footer-container w-full h-[85vh] pointer-events-none">
		</section>


		<Foooter></Foooter>
	</main>
</template>

<script setup lang="ts">
const img1 = ref()
const img2 = ref()
let pressed = ref(false)
let startX = ref()
let x = ref()
const dataCards = ref([
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

function homeAnimation() {
	const section: number = document.querySelector('.section2')!.getBoundingClientRect().height
	const born = gsap.utils.toArray('.born')
	const iN = gsap.utils.toArray('.in')
	const christ = gsap.utils.toArray('.christ')

	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: '.section2',
			start: 'top top',
			end: `+=${section * 2}`,
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