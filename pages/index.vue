<template>
	<Loading></Loading>

	<main class="bg-clrr1 w-full min-h-screen scroll-smooth overflow-hidden relative z-0 font-PlusSans" id="church">

		<!-- welcome hero -->
		<section class="welcome-hero w-full h-[calc(110vh)] flex flex-col bg-white z-10 section0">
			<div class="w-full h-full overflow-hidden rounded-b-[70px] relative">
				<!-- info tab -->
				<AnimHero>
					<InfoTab />
				</AnimHero>
				<!-- bg-img -->
				<img src="../assets/praying2.jpg" alt="" class="object-cover w-full h-full scale-125 home-img">
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
						<BubbleText text="Why We Are" default_clr="000" />
						<br />
						<BubbleText text="Here" default_clr="000" />
					</h3>
					<span class="w-4/5 text-2xl">We exist to bring people to a personal relationship with Jesus Christ
						and membership in His family; and to develop a Christ-like character; building and restoring
						them through spiritual and economic development to become mature Christians, equipped for
						ministry in the church, the community, and around the world, in order to declare God's
						glory.</span>
				</div>

				<div class="flex-1 relative 1/2">
					<!-- img1 -->
					<div ref="img1" class="absolute top-0 right-1/2 translate-x-[90%] w-80 aspect-square img1">
						<img src="../assets/edited/04.jpg" alt=""
							class="hover:scale-125 transition-all duration-500 ease-in-out rounded-3xl shadow-xl object-cover w-full h-full brightness-50">
					</div>
					<!-- img2 -->
					<div ref="img2" class="absolute bottom-0 left-1/2 translate-x-[-90%] w-80 aspect-square img2">
						<img src="../assets/edited/08.jpg" alt=""
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
					<span class="born opacity-0" v-for="(letter, i) in ['BORN'].map(str => str.split('')).flat()"
						:key="i">
						{{ letter }}
					</span>
				</div>
				<div
					class="absolute font-black text-[8vw] top-[30%] right-[400px] flex items-center font-BarlowCondensed italic">
					<span class="in opacity-0" v-for="(letter, i) in ['IN'].map(str => str.split('')).flat()" :key="i">
						{{ letter }}
					</span>
				</div>
				<div
					class="absolute font-black text-[8vw] bottom-32 left-1/2 -translate-x-1/2 flex items-center font-BarlowCondensed italic">
					<span class="christ opacity-0" v-for="(letter, i) in ['CHRIST'].map(str => str.split('')).flat()"
						:key="i">
						{{ letter }}
					</span>
				</div>

				<div
					class="flex flex-col justify-center items-center font-bold text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mission opacity-0 font-Cinzel uppercase">
					<span class="">Our Mission Is For <span class="text-2xl">YOU</span> To Be</span>
					<!-- <span class="">Be In Christ</span> -->
				</div>
			</div>

		</section>

		<!-- message 3 -->
		<section class="w-full bg-white rounded-b-[70px flex-col flex rounded-b-[70px] section3 shadow-xl">
			<div class="w-full bg-clrr1">
				<h1 class="text-6xl font-black text-black bg-orange-300 pt-16 pl-20 rounded-t-[70px]">
					<div class="head-text font-Cinzel">
						<BubbleText text="Find Your Place at City Family Church" default_clr="000" />

					</div>
				</h1>
			</div>

			<section class="w-full min-h-[600px] bg-orange-300 rounded-b-[70px] px-10 relative">

				<div class="Ccontainer">
					<div class="items-container">

						<div v-for="(item, i) in data" :key="i" class="item flex flex-col p-10 justify-between">
							<div class="flex flex-col gap-4 justify-between">
								<div class="font-bold text-2xl font-Cinzel">{{ item.title }}</div>
								<div class="font-medium">
									{{ item.content }}
								</div>
							</div>
							<div class="w-full flex justify-end">
								<button
									class="btn p-3 px-8 rounded-full bg-clrr2 text-black font-bold uppercase font-PlusSans hover:text-white hover:bg-black cursor-pointer">{{
										item.action }}</button>
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

// footer animation
onMounted(() => {
	const conts = gsap.utils.toArray('.cont')
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: '.footer-container',
			start: 'bottom top',
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


onMounted(() => {
	window.scrollTo(0, 0)
	useTitle('CF Church - Home')
})

const img1 = ref()
const img2 = ref()
let pressed = ref(false)
let startX = ref()
let x = ref()
const data = ref([
	{
		title: 'New to the Living Truth?',
		action: 'Get Started',
		content: 'We believe that everyone at LTWC has the potential to find truth through Jesus and his teachings, and we are committed to creating a community where everyone can thrive.',
		link: '/aboutLTWC',
		link_text: 'Get Started',
	},
	{
		title: 'Connect With Us',
		content: 'Join our email list to get updates from Living Truth Worship Centre.',
		action: 'Sign Up',
		func: () =>
			document
				.getElementsByClassName('footer-container')[0]
				.scrollIntoView({ behavior: 'smooth', block: 'start' }),
	},
	{
		title: 'Join Us Online',
		content: 'We gather online each Sunday at 9:30am - 11:45:am GMT. Join Us This Sunday!',
		action: 'Watch us Live!',
	},
	{
		title: 'Serve and Protect His Home',
		content: 'Participate in all sort of activities that will contribute to the operations nad development of the chapel.',
		action: 'Get Started',
	},
	{
		title: 'Give',
		action: 'Donate',
		content: 'Your generosity will go a long way! God Bless you.',
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
					opacity: 1,
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