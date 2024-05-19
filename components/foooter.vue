<template>
	<div class="fixed top-0 left-0 w-full h-full flex items-end -z-10">
		<div class="w-full h-[85vh] flex gap-2 pt-40">
			<!-- logo -->
			<div class="cont w-[200px] px-8">
				<div class="w-full aspect-square rounded-full bg-black"></div>
			</div>
			<!-- socials and links -->
			<div class="cont flex-1 flex gap-2 justify-start px-10">
				<div class="flex flex-col gap-3 max-w-[300px]">
					<h3 class="font-bold text-xl">Contact Us</h3>
					<p class="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, vero.</p>
				</div>
				<div class="flex flex-col gap-3 min-h-[200px] max-w-[300px]">
					<h3 class="font-bold text-xl">Socials</h3>
					<p class="flex flex-col">
						<span class="">Youtube</span>
						<span class="">Facebook</span>
						<span class="">Twitter</span>
						<span class="">Instagram</span>
					</p>
				</div>
				<div class="flex flex-col gap-3 max-w-[300px]">
					<h3 class="font-bold text-xl">Links</h3>
					<p class="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, vero.</p>
				</div>
			</div>
			<!-- news letters -->
			<div class="cont w-[500px]">
				<div class="w-full h-full flex flex-col items-center px-20">

					<h3 class="font-bold text-xl">Subscribe To Our Newsletter</h3>
					<p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, asperiores!</p>
					<input type="text" name="" id="">
					<input type="text" name="" id="">
					<input type="text" name="" id="">
					<button class="bg-black text-white rounded-full py-2 px-4 w-full">Submit</button>

				</div>
			</div>
		</div>
	</div>

</template>

<script setup lang="ts">
const { $gsap: gsap } = useNuxtApp()

onMounted(() => {
	const conts = gsap.utils.toArray('.cont')
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: '.footer-container',
			start: 'bottom 30%',
		},
	})

	tl.fromTo(conts, {
		opacity: 0,
	}, {
		duration: .8,
		stagger: .3,
		opacity: 1,
		ease: 'linear',
	})
})
</script>

<style scoped></style>