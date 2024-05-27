<template>
	<div class="max-w-[1100px] w-full h-52 absolute bottom-10 left-1/2 -translate-x-1/2 z-10 info-tab opacity-0">

		<slot />

	</div>
</template>

<script setup lang="ts">
const { $gsap: gsap } = useNuxtApp()
onMounted(() => {
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: '.welcome-hero',
			start: '30% top',
			end: '+=500',
			scrub: 1,
		}
	})

	tl.to('.info-tab', {
		y: 500,
		ease: 'power1.inOut',
	})
		.to('.info-tab', {
			scale: .5,
			ease: 'linear',
		}, '<')
})
</script>