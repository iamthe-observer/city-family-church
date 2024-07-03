<template>
	<div
		class="w-full max-w-[900px] mx-auto h-full bg-clr1 rounded-[50px] relative drop-shadow-lg shadow-2xl py-5 px-8 flex flex-col gap-1">
		<!-- arrows -->
		<!-- back -->
		<div
			class="absolute top-1/2 left-[-24px] -translate-y-1/2 w-12 h-12 rounded-full border-2 border-black bg-clrr2 grid place-items-center">
			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
				<path fill="currentColor"
					d="m11.475 18.025l-8.15-5.175q-.475-.3-.475-.85t.475-.85l8.15-5.175q.5-.325 1.013-.037t.512.887V11h8q.425 0 .713.288T22 12t-.288.713T21 13h-8v4.175q0 .6-.513.888t-1.012-.038" />
			</svg>
		</div>
		<!-- foward -->
		<div
			class="absolute top-1/2 right-[-24px] -translate-y-1/2 w-12 h-12 rounded-full border-2 border-black bg-clrr2 grid place-items-center">
			<svg class="rotate-180" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
				<path fill="currentColor"
					d="m11.475 18.025l-8.15-5.175q-.475-.3-.475-.85t.475-.85l8.15-5.175q.5-.325 1.013-.037t.512.887V11h8q.425 0 .713.288T22 12t-.288.713T21 13h-8v4.175q0 .6-.513.888t-1.012-.038" />
			</svg>
		</div>

		<!-- top -->
		<div class="flex justify-between items-center w-full">
			<span class="uppercase font-PlusSans text-xs font-semibold">What's On</span>
			<span class="flex items-center w-[300px] gap-10" v-for="i in 3">
				.
			</span>
		</div>
		<!-- bottom -->
		<div class=" w-full h-full flex justify-between">
			<div class="flex flex-col">
				<h3 class="font-bold text-2xl pb-2 font-Cinzel">Head</h3>
				<span class="pr-20 font-semibold text-lg">Content Lorem ipsum dolor sit amet consectetur adipisicing
					elit.
					Asperiores,
					culpa. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, numquam?</span>
			</div>


			<button class="self-end w-60 bg-black rounded-full h-14 text-white font-PlusSans">
				Action Here
			</button>
		</div>


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