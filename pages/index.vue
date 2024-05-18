<template>
	<main class="bg-base w-full min-h-screen scroll-smooth" id="church">

		<!-- welcome hero -->
		<section class="welcome-hero w-full h-[calc(100vh-96px)] flex flex-col bg-white">
			<div class="w-full h-full overflow-hidden rounded-b-[100px] relative">
				<!-- info tab -->
				<div
					class="w-[50%] rounded-[50px] h-52 absolute bottom-10 left-1/2 -translate-x-1/2 bg-primary drop-shadow-lg info-tab">
				</div>
				<!-- bg-img -->
				<img src="../assets/image.png" alt="" class="object-cover w-full h-full">
			</div>
		</section>

		<!-- logo -->
		<div class="fixed w-32 aspect-square rounded-[40px] bg-white z-10 top-8 left-8 drop-shadow-lg"></div>

		<!-- nav menu -->
		<Nav />

		<!-- church summary -->
		<section class="rounded-3xl w-full h-24 fixed p-1 px-5 bottom-0">
			<div class="w-full h-full rounded-3xl bg-white"></div>
		</section>

		<!-- message -->
		<section class="w-full h-screen bg-white rounded-b-[100px] p-10">
		</section>

		<!-- message 2 -->
		<section class="w-full h-screen rounded-b-[100px] p-10">
		</section>

		<!-- message 3 -->
		<section class="w-full bg-white rounded-t-[100px] flex-col flex border-black border-b-2">

			<section class="w-full h-[80vh] bg-primary rounded-[100px] p-10 flex">
			</section>
			<!-- end quote marquee -->
			<section class="w-full h-[40vh] bg-white p-10">
			</section>

		</section>

		<!-- space for footer to show -->
		<section class="w-full h-[70vh]">

		</section>



	</main>
</template>

<script setup lang="ts">
const { $gsap: gsap } = useNuxtApp()
onMounted(() => {
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: '.welcome-hero',
			start: '50% top',
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

<style scoped></style>