<template>
	<div class="fixed top-0 left-0 w-full h-full flex items-end -z-10">
		<div class="w-full h-[85vh] flex gap-2 pt-40 bg-base px-32">

			<!-- socials and links -->
			<div class="cont flex-1 flex gap-10 justify-start">
				<!-- logo -->
				<div class="cont w-[200px] px-8">
					<div class="w-full aspect-square rounded-full bg-black"></div>
				</div>
				<div class="flex flex-col gap-3 max-w-[300px] font-medium">
					<h3 class="font-bold text-2xl font-PlusSans">Contact Us</h3>
					<div class="flex flex-col gap-1">
						<span class="">
							CITY FAMILY CHURCH
						</span>
						<span class="">
							9 ALPHA Rd, NR0 0AA
						</span>
						<span class="">
							‍info@church.com
						</span>
						<span class="">
							‍01234 567890
						</span>
					</div>
				</div>
				<div class="flex flex-col gap-3 min-h-[200px] max-w-[300px] px-3">
					<h3 class="font-bold text-2xl">Socials</h3>
					<div class="flex flex-col gap-1 font-medium">
						<span class="cursor-pointer">Youtube</span>
						<span class="cursor-pointer">Facebook</span>
						<span class="cursor-pointer">Twitter</span>
						<span class="cursor-pointer">Instagram</span>
					</div>
				</div>
				<div class="flex flex-col gap-3 max-w-[300px]  px-3">
					<h3 class="font-bold text-2xl">Links</h3>
					<div class="flex flex-col gap-1 font-medium">
						<span class="cursor-pointer">Connect</span>
						<span class="cursor-pointer">Homepage</span>
						<span class="cursor-pointer">About</span>
						<span class="cursor-pointer">Giving</span>
						<span class="cursor-pointer">Church Life</span>
						<span class="cursor-pointer">Plan your visit</span>
						<span class="cursor-pointer">New Build</span>
						<span class="cursor-pointer">Policies</span>
						<span class="cursor-pointer">Vacancies</span>
					</div>
				</div>
			</div>

			<!-- news letters -->
			<div class="cont w-[500px]">
				<div class="w-full h-full flex flex-col items-center px-20">

					<h3 class="font-bold text-2xl w-full pb-1">Subscribe To Our Newsletter</h3>
					<div class="w-full pb-10 font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
						asperiores!</div>
					<input class="mb-3 w-full h-10 rounded-2xl border border-black/20" type="text" name="" id="">
					<input class="mb-3 w-full h-10 rounded-2xl border border-black/20" type="text" name="" id="">
					<div class="mb-3 w-full h-10 rounded-2xl border border-black/20 bg-white flex items-center px-3">
						<input class="w-5 aspect-square" type="radio" name="" id="">
						<span class="ml-3 text-xs">I accept City Family Church's privacy policy</span>
					</div>
					<div class="flex w-full justify-end">
						<button class="bg-black text-white rounded-full py-3 mt-3 px-10 font-bold tracking-wider">SUBMIT</button>
					</div>

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
			start: 'bottom top',
			markers: true,
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