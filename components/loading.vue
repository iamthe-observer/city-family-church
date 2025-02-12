<template>
	<Teleport to="body">
		<div v-if="loading"
			class="w-screen h-screen backdrop-blur-xl bg-black/50 z-[100] absolute top-0 left-0 loading-bg">

		</div>

		<div
			class="w-fit h-fit flex flex-col justify-end gap-0 pl-10 font-black font-Cinzel loading-txt absolute bottom-0 left-0 z-[100]">
			<div class="text-white text-[8vw] p-0 m-0 translate-y-40 txt-container">
				<!-- <div
					class="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-white text-[8vw] p-0 m-0 translate-y-40"> -->
				<BubbleText text="CITY" />
			</div>
			<div class="text-white text-[8vw] p-0 m-0 txt-container translate-y-20">
				<BubbleText text="FAMILY" />
			</div>
			<div class="text-white text-[8vw] p-0 m-0 txt-container">
				<BubbleText text="CHURCH" />
			</div>
		</div>

	</Teleport>
</template>

<script setup lang="ts">
import appStore from '../stores/app';

const { loading } = storeToRefs(appStore())
const { $gsap: gsap } = useNuxtApp()

onMounted(() => {
	window.scrollTo(0, 0);

	const tl = gsap.timeline()
	const txt_containers = gsap.utils.toArray('.txt-container')
	document.body.style.overflow = 'hidden';


	tl.to(txt_containers, {
		delay: .3,
		opacity: 1,
		duration: .1,
		stagger: {
			amount: .2,
			from: 'start',
		},
		ease: 'power4.inOut',
	})
		.to(txt_containers, {
			delay: 1.5,
			opacity: 0,
			ease: 'power4.inOut',
			stagger: {
				amount: .1,
				from: 'start',
			}
		})
		.to('.loading-bg', {
			filter: 'blur(0px)',
			opacity: 0,
			duration: .3,
			onComplete: () => {
				document.querySelector<HTMLDivElement>('.loading-txt')!.classList.add('hidden');
				document.querySelector<HTMLDivElement>('.loading-bg')!.classList.add('hidden');

				appStore().$patch({
					loading: false,
					loading_anim_done: true
				})
			}
		})
})
</script>

<style scoped>
body {
	overflow-x: hidden;
	position: relative;
}

.txt-container {
	opacity: 0;
}

.loading-txt {
	/* perspective: 500px; */
}
</style>