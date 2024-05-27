<template>
	<Teleport to="body">
		<!-- bg -->
		<div class="fixed top-16 right-8 w-40 h-14 bg-white z-[95] nav drop-shadow-xl nav-item opacity-0">
		</div>
		<!-- action -->
		<div @click="toggleNav"
			class="cursor-pointer fixed top-16 right-8 w-40 h-14 z-[99] flex justify-evenly items-center font-PlusSans nav-item opacity-0">
			<span class="font-bold text-lg mix-blend-overlay">{{ opened ? 'Close' : 'Menu' }}</span>
			<svg v-if="!opened" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
				<path fill="currentColor" d="M21 18H3v-2h18v2Zm0-5H3v-2h18v2Zm0-5H3V6h18v2Z" />
			</svg>
			<svg v-else xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
				<path fill="currentColor"
					d="M8.4 17L7 15.6l3.6-3.6L7 8.425l1.4-1.4l3.6 3.6l3.575-3.6l1.4 1.4l-3.6 3.575l3.6 3.6l-1.4 1.4L12 13.4z" />
			</svg>
		</div>

		<!-- nav content -->
		<div
			class="fixed top-0 left-0 w-full h-full z-[95] flex-col nav-content hidden opacity-0 font-PlusSans font-bold">
			<!-- top -->
			<div class="flex-1 flex">
				<div class="relative flex-1 flex flex-col justify-between p-10">

					<!-- info -->
					<div class="flex flex-col gap-5 text-xl">
						<!-- addr -->
						<div class="">
							<span class="block">Address:</span>
							<span class="block font-SpaceGrotesk">CITY FAMILY CHURCH</span>
							<span class="font-SpaceGrotesk">4 Mason Rd, NR6 6RF</span>
						</div>
						<!-- email -->
						<div class="">
							<span class="block">Email:</span>
							<span class="font-SpaceGrotesk">cfc@example.com</span>
						</div>
						<!-- call -->
						<div class="">
							<span class="block">Phone:</span>
							<span class="font-SpaceGrotesk">+233 000 0000</span>
						</div>

					</div>
					<!-- socials -->
					<div class="flex flex-col gap-5 text-xl">
						<span class="cursor-pointer hover:text-tertiary font-SpaceGrotesk w-fit">Facebook</span>
						<span class="cursor-pointer hover:text-tertiary font-SpaceGrotesk w-fit">Youtube</span>
						<span class="cursor-pointer hover:text-tertiary font-SpaceGrotesk w-fit">Twitter</span>
						<span class="cursor-pointer hover:text-tertiary font-SpaceGrotesk w-fit">Instagram</span>
					</div>
				</div>

				<!-- lineV -->
				<div class="w-[4px] h-0 bg-black line-v"></div>

				<div class="w-[60%] h-full flex flex-col p-20 font-bold text-[3.7vw] font-SpaceGrotesk">

					<NuxtLink :to="route.path" v-for="(route, i) in routes" :key="i"
						class="w-fit flex items-center gap-5 group">
						<svg v-if="$route.path === route.path" class="w-10 h-10 drop-shadow-xl"
							xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path fill="#34222E" d="M14 2h-4v6H4v4h6v10h4V12h6V8h-6z" />
						</svg>
						<svg v-else
							class="w-0 h-10 group-hover:w-10 group-hover:opacity-100 opacity-0 transition-all duration-200 ease-in-out"
							xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path fill="currentColor" d="M9 2h6v5h5v6h-5v9H9v-9H4V7h5zm2 2v5H6v2h5v9h2v-9h5V9h-5V4z" />
						</svg>
						{{ route.name }}
						<span
							:class="[$route.path === route.path ? 'opacity-0' : '-translate-x-4 group-hover:opacity-100 opacity-0 transition-all duration-200 ease-in-out']">.</span>
					</NuxtLink>

					<!-- <span class="">Connect</span>
					<span class="">Plan your Visit</span>
					<span class="">About Us</span>
					<span class="">Giving</span> -->
				</div>
			</div>
			<!-- lineH -->
			<div class="h-[4px] w-0 bg-black line-h"></div>
			<!-- bottom -->
			<div class="h-24 w-full grid place-items-center">

				<section class="font-SpaceGrotesk w-full h-20 fixed p-1 px-5 z-50">
					<div
						class="p-2 w-fit mx-auto h-full rounded-3xl backdrop-blur-md bg-black/0 flex items-center justify-between gap-6 text-sm">
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
									<span>JOIN MID WEEK SERVICE HERE! | JOIN MID WEEK SERVICE HERE! | JOIN MID WEEK
										SERVICE
										HERE! | JOIN MID WEEK SERVICE HERE! | JOIN MID WEEK SERVICE HERE! | JOIN MID
										WEEK
										SERVICE HERE! | JOIN MID WEEK SERVICE HERE! | JOIN MID WEEK SERVICE HERE! | JOIN
										MID
										WEEK SERVICE HERE! | JOIN MID WEEK SERVICE HERE! | JOIN MID WEEK SERVICE HERE! |
										JOIN
										MID WEEK SERVICE HERE! | JOIN MID WEEK SERVICE HERE! | JOIN MID WEEK SERVICE
										HERE! |
										JOIN MID WEEK SERVICE HERE! | JOIN MID WEEK SERVICE HERE! | JOIN MID WEEK
										SERVICE HERE!
										| JOIN MID WEEK SERVICE HERE! | JOIN MID WEEK SERVICE HERE! | JOIN MID WEEK
										SERVICE
										HERE! | JOIN MID WEEK SERVICE HERE! | JOIN MID WEEK SERVICE HERE! | JOIN MID
										WEEK
										SERVICE HERE! | JOIN MID WEEK SERVICE HERE! | JOIN MID WEEK SERVICE HERE! | JOIN
										MID
										WEEK SERVICE HERE!</span>
								</div>
							</div>
						</div>
						<div class="bg-black rounded-full h-full aspect-square"></div>
					</div>

				</section>

			</div>

		</div>
	</Teleport>
</template>

<style scoped>
.nav {
	border-radius: 50px;
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

<script setup lang="ts">

const routes = reactive([
	{
		name: 'Home',
		path: '/',
	},
	{
		name: 'Connect',
		path: '/connect',
	},
	{
		name: 'Plan your Visit',
		path: '/visit',
	},
	{
		name: 'About Us',
		path: '/about',
	},
	{
		name: 'Giving',
		path: '/giving',
	},
])
const opened = ref(false)
let navTl: gsap.core.Timeline

onMounted(() => {
	navTl = gsap.timeline()
	navTl.pause()
	navTl.to('.nav', {
		duration: .3,
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		ease: 'expo.inOut',
	})
		.to('.nav', {
			duration: .3,
			ease: 'sine.inOut',
			borderRadius: '0px',
			width: '100vw',
			height: '100vh',
			backgroundColor: '#F1EEDC',
		})
		.to('.nav-content', {
			duration: .3,
			ease: 'sine.inOut',
			opacity: 1,
		})
		.to('.line-v', {
			height: '100%',
			duration: .5,
			ease: 'circ.out',
		})
		.to('.line-h', {
			width: '100%',
			duration: .5,
			ease: 'circ.out',
			delay: .1
		}, "<")
})

async function toggleNav() {
	opened.value = !opened.value;
	console.log(opened.value);

	if (opened.value) {
		await openNav()
	} else {
		await closeNav()
	}
}

const { $gsap: gsap } = useNuxtApp()

async function openNav() {
	await document.querySelector<HTMLElement>('.nav-content')!.classList.remove('hidden')
	await document.querySelector<HTMLElement>('.nav-content')!.classList.add('flex')

	navTl.play()

	document.body.style.overflow = 'hidden';
}

async function closeNav() {
	await navTl.reverse()
	document.querySelector<HTMLElement>('.nav-content')!.classList.remove('flex')
	document.querySelector<HTMLElement>('.nav-content')!.classList.add('hidden')
	document.body.style.overflow = 'auto';

}
</script>