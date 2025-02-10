<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
import { useNuxtApp } from '#app';

const props = defineProps(['text', 'classer']);
const { $gsap: gsap } = useNuxtApp();

let currentScroll = ref(0);
let isScrollingDown = ref(true);

onMounted(async () => {
	await nextTick();

	let tween = gsap.to(".marquee__part", { xPercent: -100, repeat: -1, duration: 10, ease: "linear" }).totalProgress(0.5);

	gsap.set(".marquee__inner", { xPercent: -50 });

	window.addEventListener("scroll", function () {
		if (window.pageYOffset > currentScroll.value) {
			isScrollingDown.value = true;
		} else {
			isScrollingDown.value = false;
		}

		gsap.to(tween, {
			timeScale: isScrollingDown.value ? 1 : -1
		});

		currentScroll.value = window.pageYOffset;
	});
});
</script>

<template>
	<section :class="['marquee w-full']">
		<div class="marquee__inner" aria-hidden="true">
			<div class="marquee__part" v-for="(part, index) in 2" :key="index">
				{{ props.text }}
			</div>
		</div>
	</section>
</template>

<style scoped>
.marquee__inner {
	display: flex;
	overflow: hidden;
	white-space: nowrap;
}

.marquee__part {
	flex: none;
	min-width: 100%;
}
</style>