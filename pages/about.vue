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
						About
						Us</span>
				</AnimHero>
				<!-- bg-img -->
				<img src="../assets/edited/05.jpg" alt=""
					class="object-cover w-full h-full brightness-75 scale-125 home-img">
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
			<section
				class="w-full min-h-[90vh] bg-white rounded-b-[70px] z-[10] flex p-10 py-12 gap-2 pt-20 section1 justify-center">
				<div class="gap-10 flex flex-col justify-center w-1/2 pl-32">
					<h3 class="font-bold text-[4rem] pb-2 leading-snug font-Cinzel">
						<BubbleText default_clr="000" text="OUR" /><br />
						<BubbleText default_clr="000" text="MISSION" />
					</h3>
					<span class="w-4/5 text-2xl">Our purpose is to help people who are distant from God to discover new
						life through Jesus Christ.</span>
				</div>

				<div class="flex-1 relative">
					<!-- img1 -->
					<div ref="img1" class="absolute top-0 right-1/2 translate-x-[90%] w-60 aspect-square img1">
						<img src="../assets/talk.png" alt=""
							class="hover:scale-125 transition-all duration-500 ease-in-out rounded-3xl shadow-xl object-cover w-full h-full brightness-50">
					</div>
					<!-- img2 -->
					<div ref="img2" class="absolute bottom-0 left-1/2 translate-x-[-90%] w-[400px] aspect-square img2">
						<img src="../assets/praying.png" alt=""
							class="rounded-3xl hover:scale-110 transition-all duration-500 ease-in-out shadow-xl object-cover w-full h-full">
					</div>

				</div>

			</section>
		</div>


		<!-- message 2 -->
		<section class="w-full h-[100vh] rounded--[70px] section2 gap-14 bg-clrr1 b-[100px] relative">
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
					class="absolute font-black text-[8vw] top-32 left-[300px] flex items-center font-BarlowCondensed italic">
					<span class="born opacity-0 uppercase"
						v-for="(letter, i) in ['Community'].map(str => str.split('')).flat()" :key="i">
						{{ letter }}
					</span>
				</div>
				<div
					class="absolute font-black text-[8vw] top-[30%] right-[300px] flex items-center font-BarlowCondensed italic">
					<span class="in opacity-0 uppercase"
						v-for="(letter, i) in ['LOVE'].map(str => str.split('')).flat()" :key="i">
						{{ letter }}
					</span>
				</div>
				<div
					class="absolute font-black text-[8vw] bottom-32 left-1/2 -translate-x-1/2 flex items-center font-BarlowCondensed italic">
					<span class="christ opacity-0 uppercase"
						v-for="(letter, i) in ['Inclusivity'].map(str => str.split('')).flat()" :key="i">
						{{ letter }}
					</span>
				</div>

				<div
					class="flex flex-col justify-center items-center font-bold text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mission opacity-0 font-PlusSans">
					<span class="text-3xl font-Cinzel">Our Core Values are</span>
				</div>
			</div>

		</section>

		<!-- message 3 -->
		<section class="w-full bg-white rounded-b-[70px flex-col flex rounded-b-[70px] section3 shadow-xl">
			<div class="w-full bg-clrr1">
				<h1 class="text-6xl font-black text-black bg-orange-300 pt-16 pl-20 rounded-t-[70px]">
					<div class="head-text font-Cinzel">
						<BubbleText text="Our Beliefs" default_clr="000" />

					</div>
				</h1>
			</div>

			<section class="w-full min-h-[600px] bg-orange-300 rounded-b-[70px] px-10 relative">

				<div class="Ccontainer">
					<div class="items-container">

						<div v-for="(item, i) in data" :key="i" class="item flex flex-col p-10 justify-between">
							<div class="flex flex-col gap-4 justify-between">
								<div class="font-bold text-2xl font-Cinzel">{{ item.head }}</div>
								<div class="font-medium">
									{{ item.body }}
								</div>
							</div>

						</div>
					</div>
				</div>

				<div class="flex w-full items-center justify-end gap-2 absolute bottom-10 right-32">
					<span class="drag_txt font-PlusSans font-lighter text-xl text-black font-semibold">Drag to
						Scroll</span>
					<svg xmlns="http://www.w3.org/2000/svg" class="w-5 aspect-square" viewBox="0 0 14 14">
						<path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round"
							d="m13.478 11.832l-.46-2.757a2.573 2.573 0 0 0-2.961-2.114l-2.171.362l-.683-4.09a1.194 1.194 0 0 0-1.374-.98v0c-.65.108-1.09.723-.98 1.374l.894 5.36l-.363.133a1.715 1.715 0 0 0-.643 2.803l.184.19l.954.988M1.75.5L.5 1.75L1.75 3M.5 1.75h3M10.25.5l1.25 1.25L10.25 3m1.25-1.25h-3" />
					</svg>
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

onMounted(() => {
	document.body.scrollTop = 0
	useTitle('CF Church - About')
})


const img1 = ref()
const img2 = ref()
let pressed = ref(false)
let startX = ref()
let x = ref()
const data = ref([
	{
		head: "Bible's Truth",
		body: 'The Bible is the inspired word of God and is the ultimate authority for all matters of faith and practice.',
	},
	{
		head: 'Jesus',
		body: 'Jesus Christ is the Son of God and the only way to salvation.',
	},
	{
		head: 'Faith',
		body: "Salvation is a free gift of God's grace, received through faith in Jesus Christ.",
	},
	{
		head: 'Holy Spirit',
		body: 'The Holy Spirit empowers believers to live a godly life and is present to guide and direct them.',
	},
	{
		head: 'Baptism',
		body: "Baptism by immersion is an important step of obedience for believers, signifying their identification with Christ's death, burial, and resurrection.",
	},
	{
		head: 'Communion',
		body: "Communion, or the Lord's Supper, is a symbolic remembrance of Christ's sacrifice for believers.",
	},
	{
		head: 'Church as a Body',
		body: 'The church is the body of Christ and is called to carry out His mission on earth.',
	},
	{
		head: 'His Return',
		body: 'The return of Jesus Christ is certain and will be visible, personal, and triumphant.',
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
	height: fit-content;
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