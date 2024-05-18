<template>
	<div class="max-w-[900px] w-full h-52 absolute bottom-10 left-1/2 -translate-x-1/2">
		<div
			class="  w-full h-full bg-primary rounded-[50px] relative drop-shadow-lg info-tab shadow-2xl  py-5 px-8 flex flex-col gap-1">
			<!-- arrows -->
			<!-- back -->
			<div
				class="absolute top-1/2 left-[-24px] -translate-y-1/2 w-12 h-12 rounded-full border-2 border-black bg-white grid place-items-center">
				<svg class="rotate-180" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
					<path fill="currentColor" d="M11 19v-6H2v-2h9V5l11 7zm2-3.65L18.275 12L13 8.65zM13 12" />
				</svg>
			</div>
			<!-- foward -->
			<div
				class="absolute top-1/2 right-[-24px] -translate-y-1/2 w-12 h-12 rounded-full border-2 border-black bg-white grid place-items-center">
				<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
					<path fill="currentColor" d="M11 19v-6H2v-2h9V5l11 7zm2-3.65L18.275 12L13 8.65zM13 12" />
				</svg>
			</div>

			<!-- top -->
			<div class="flex justify-between items-center w-full">
				<span class="uppercase">What's On</span>
				<span class="flex items-center">
					<svg v-for="i in 5" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
						<g fill="currentColor">
							<path
								d="M152 128a24 24 0 1 1-24-24a24 24 0 0 1 24 24M48 104a24 24 0 1 0 24 24a24 24 0 0 0-24-24m160 0a24 24 0 1 0 24 24a24 24 0 0 0-24-24"
								opacity=".2" />
							<path
								d="M128 96a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16M48 96a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16m160-48a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16" />
						</g>
					</svg>
				</span>
			</div>
			<!-- bottom -->
			<div class=" w-full h-full flex justify-between">
				<div class="flex flex-col">
					<h3 class="font-bold text-2xl pb-2">Head</h3>
					<span class="pr-20">Content Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
						culpa. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, numquam?</span>
				</div>


				<button class="self-end w-60 bg-black rounded-full h-14 text-white">
					Action Here
				</button>
			</div>


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