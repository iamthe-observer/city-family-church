<script setup lang="ts">
const props = defineProps(['text', 'classer'])
const { $gsap: gsap } = useNuxtApp()

let currentScroll = ref(0);
let isScrollingDown = ref(true);

onMounted(() => {

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

		currentScroll.value = window.pageYOffset
	});

})
</script>

<template>
	<section :class="['marquee w-full']">
		<div class="marquee__inner" aria-hidden="true" ref="inner">
			<div v-for="i in 10" :class="['marquee__part', classer]">
				JOHN 3:16
			</div>

		</div>
	</section>
</template>

<style scoped>
.marquee__part {
	flex-shrink: 0;
	padding: 0 50px;
	font-smooth: always;
}

.marquee {
	/* background: ; */
	color: black;
	text-transform: uppercase;
	font-weight: 600;
	/* font-size: 10vw; */
	padding: 32px 0;

	position: relative;
	overflow: hidden;
}

.marquee__inner {
	-webkit-font-smoothing: antialiased;
	width: fit-content;
	display: flex;
	flex: auto;
	flex-direction: row;
}
</style>