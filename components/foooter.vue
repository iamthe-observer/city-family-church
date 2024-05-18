<template>
	<div class="fixed top-0 left-0 w-full h-full flex items-end -z-10">
		<div class="w-full h-[85vh] flex gap-2">
			<!-- logo -->
			<div class="cont border-x-2 border-black w-[100px]"></div>
			<!-- socials and links -->
			<div class="cont border-x-2 border-black flex-1"></div>
			<!-- news letters -->
			<div class="cont border-x-2 border-black w-[300px]"></div>
		</div>
	</div>

</template>

<script setup lang="ts">
const { $gsap: gsap } = useNuxtApp()

onMounted(() => {
	const conts = gsap.utils.toArray('.cont')

	gsap.to(conts, {
		stagger: 0.3,
		scrollTrigger: {
			trigger: '.footer-container',
			start: 'top 50%',
		},

		backgroundColor: '#a020f0',
		ease: 'none',
	})
})
</script>

<style scoped></style>