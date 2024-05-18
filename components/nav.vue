<template>
	<Teleport to="body">
		<!-- bg -->
		<div class="fixed top-16 right-8 w-40 h-14 bg-white z-50 nav drop-shadow-xl">
		</div>
		<!-- action -->
		<div @click="opened = !opened; opened ? closeNav() : openNav()"
			class="fixed top-16 right-8 w-40 h-14 z-50 flex justify-evenly items-center">
			<span class="">{{ !opened ? 'Close' : 'Menu' }}</span>
			<svg v-if="opened" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
				<path fill="currentColor" d="M21 18H3v-2h18v2Zm0-5H3v-2h18v2Zm0-5H3V6h18v2Z" />
			</svg>
			<svg v-else xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
				<path fill="currentColor"
					d="M8.4 17L7 15.6l3.6-3.6L7 8.425l1.4-1.4l3.6 3.6l3.575-3.6l1.4 1.4l-3.6 3.575l3.6 3.6l-1.4 1.4L12 13.4z" />
			</svg>
		</div>
	</Teleport>
</template>

<style scoped>
.nav {
	border-radius: 50px;
}
</style>

<script setup lang="ts">
import type { TimelineMax } from 'gsap';

const opened = ref(true)

const { $gsap: gsap } = useNuxtApp()
let tl: TimelineMax;
onMounted(() => {
	tl = gsap.timeline()
	tl.pause()
	tl.to('.nav', {
		duration: .3,
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		ease: 'expo.inOut',
	})
		.to('.nav', {
			duration: .3,
			borderRadius: '20px',
			width: '99vw',
			height: '98vh',
			backgroundColor: '#a2d4eb',
		})

})
function openNav() {
	console.log('open');
	tl.play()
	document.body.style.overflow = 'hidden';
}

function closeNav() {
	console.log('close');
	tl.reverse()
	document.body.style.overflow = 'auto';
}
</script>

<style scoped></style>