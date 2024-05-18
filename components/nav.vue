<template>
	<Teleport to="body">
		<!-- bg -->
		<div class="fixed top-16 right-8 w-40 h-16 bg-white z-20 nav">
		</div>
		<!-- action -->
		<div @click="opened = !opened; opened ? closeNav() : openNav()"
			class="fixed top-16 right-8 w-40 h-16 z-20 flex justify-evenly items-center">
			<span class="">Menu</span>
			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
				<path fill="currentColor" d="M21 18H3v-2h18v2Zm0-5H3v-2h18v2Zm0-5H3V6h18v2Z" />
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
const opened = ref(true)

const { $gsap: gsap } = useNuxtApp()
let tl;
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
			backgroundColor: '#A0C49D',
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