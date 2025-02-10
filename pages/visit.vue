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
				<img src="../assets/image.png" alt="" class="object-cover w-full h-full scale-125 home-img">
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



			</section>
		</div>


		<!-- message 2 -->
		<section class="w-full h-[100vh] rounded--[70px] section2 bg-clrr1 p-20">

			<div class="flex gap-12 rounded-3xl p-10 w-full h-full bg-white drop-shadow-2xl">



				<div class="h-full w-[35%]">
					<iframe class="rounded-2xl outline-8 outline outline-black/10"
						src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2883.574653149503!2d-79.711719!3d43.7193878!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sgh!4v1716806066583!5m2!1sen!2sgh"
						width="100%" height="100%" style="border:0;" loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"></iframe>
				</div>



				<div class="flex-1 flex flex-col gap-4 max-h-full">
					<h1 class="font-bold text-[5vw] font-Cinzel">
						<BubbleText default_clr="000" text="FAQS" />
					</h1>



					<div class="overflow-y-auto">

						<div v-for="i in 20" class="collapse collapse-plus bg-clrr1-200">
							<input type="radio" name="my-accordion-3" />
							<div class="collapse-title text-xl font-medium">
								Click to open this one and close others
							</div>
							<div class="collapse-content">
								<p>hello</p>
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
const { loading, loading_anim_done } = storeToRefs(appStore())

appStore().$patch((state) => {
	return state.loading = true
})



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