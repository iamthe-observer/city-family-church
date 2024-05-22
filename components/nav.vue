<template>
	<Teleport to="body">
		<!-- bg -->
		<div class="fixed top-16 right-8 w-40 h-14 bg-white z-50 nav drop-shadow-xl">
		</div>
		<!-- action -->
		<div @click="toggleNav"
			class="fixed top-16 right-8 w-40 h-14 z-[100] flex justify-evenly items-center font-PlusSans">
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
			class="fixed top-0 left-0 w-full h-full z-50 flex-col nav-content hidden opacity-0  font-PlusSans font-bold">
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
						<span class="">Facebook</span>
						<span class="">Youtube</span>
						<span class="">Twitter</span>
						<span class="">Instagram</span>
					</div>
				</div>

				<!-- lineV -->
				<div class="w-[4px] h-0 bg-black line-v"></div>

				<div class="w-[60%] h-full flex flex-col p-20 font-bold text-[5.4rem] font-SpaceGrotesk">

					<NuxtLink :to="route.path" v-for="(route, i) in routes" :key="i"
						class="flex items-center gap-5 group">
						<svg v-if="$route.path === route.path" class="w-16 h-16 drop-shadow-xl"
							xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path fill="#34222E" d="M14 2h-4v6H4v4h6v10h4V12h6V8h-6z" />
						</svg>
						<svg v-else
							class="w-0 h-16 group-hover:w-16 group-hover:opacity-100 opacity-0 transition-all duration-200 ease-in-out"
							xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
							<path fill="currentColor" d="M9 2h6v5h5v6h-5v9H9v-9H4V7h5zm2 2v5H6v2h5v9h2v-9h5V9h-5V4z" />
						</svg>
						{{ route.name }}
						<span
							class="-translate-x-4 group-hover:opacity-100 opacity-0 transition-all duration-200 ease-in-out">.</span>
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
			<div class="h-24 w-full"></div>

		</div>
	</Teleport>
</template>

<style scoped>
.nav {
	border-radius: 50px;
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