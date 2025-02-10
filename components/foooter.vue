<template>
	<div class="fixed top-0 left-0 w-full h-full flex items-end z-[-1] ">
		<div class="w-full h-[100vh] flex items-end gap-2 py-20 bg-clrr1 px-10 pb-40">

			<!-- socials and links -->
			<div class="cont flex-1 flex gap-10 justify-start">
				<!-- logo -->
				<div class="cont w-[200px] px-8">
					<div class="w-full aspect-square rounded-full">
						<img src="../assets/logo.png" alt="" class="w-full aspect-square object-cover">
					</div>
				</div>
				<div class="flex flex-col gap-3 max-w-[300px] font-medium">
					<h3 class="font-bold text-2xl font-Cinzel">Contact Us</h3>
					<div class="flex flex-col gap-1">
						<span class="">
							{{ contactUs.addr0 }}
						</span>
						<span class="">
							{{ contactUs.addr1 }}
						</span>
						<span class="">
							{{ contactUs.email }}
						</span>
						<span class="">
							{{ contactUs.phone }}
						</span>
					</div>
				</div>
				<div class="flex flex-col gap-3 min-h-[200px] max-w-[300px] px-3">
					<h3 class="font-bold text-2xl font-Cinzel">Socials</h3>
					<div class="flex flex-col items-start gap-1 font-medium">
						<ListText v-for="(soc, i) in socials" :key="i">
							<template #svg>
								<svg xmlns="http://www.w3.org/2000/svg" class="w-8" viewBox="0 0 256 256">
									<path fill="currentColor"
										d="M128 96a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16" />
								</svg>
							</template>
							{{ soc }}
						</ListText>
						<!-- <span class="cursor-pointer">Youtube</span>
						<span class="cursor-pointer">Facebook</span>
						<span class="cursor-pointer">Twitter</span>
						<span class="cursor-pointer">Instagram</span> -->
					</div>
				</div>
				<div class="flex flex-col gap-3 max-w-[300px]  px-3">
					<h3 class="font-bold text-2xl font-Cinzel">Links</h3>
					<div class="flex flex-col gap-1 font-medium">
						<ListText v-for="(link, i) in links" :key="i">
							<template #svg>
								<svg xmlns="http://www.w3.org/2000/svg" class="w-8" viewBox="0 0 256 256">
									<path fill="currentColor"
										d="M128 96a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16" />
								</svg>
							</template>
							{{ link }}
						</ListText>
					</div>
				</div>
			</div>

			<!-- news letters -->
			<div class="cont w-[500px]">
				<div class="w-full h-full flex flex-col items-center px-10">

					<h3 class="font-bold text-2xl w-full pb-1 font-Cinzel">Subscribe To Our Newsletter</h3>
					<div class="w-full pb-10 font-medium">Let us get to know you as well as share the gospel with you.
					</div>
					<input class="mb-3 w-full h-10 rounded-2xl border px-5 border-black/20 bg-white" type="text" name=""
						placeholder="Name" id="">
					<input class="mb-3 w-full h-10 rounded-2xl border px-5 border-black/20 bg-white" type="text" name=""
						placeholder="Email" id="">
					<div class="mb-3 w-full h-10 rounded-2xl border border-black/20 bg-white flex items-center px-3">
						<input class="w-5 aspect-square" type="radio" name="" id="">
						<span class="ml-3 text-xs">I accept City Family Church's privacy policy</span>
					</div>
					<div class="flex w-full justify-end">
						<button
							class="bg-black text-white rounded-full py-3 mt-3 px-10 font-bold tracking-wider">SUBMIT</button>
					</div>

				</div>
			</div>
		</div>
	</div>

</template>

<script setup lang="ts">
const { $gsap: gsap } = useNuxtApp()

const contactUs = ref({
	addr0: 'CITY FAMILY CHURCH',
	addr1: '9 ALPHA Rd, NR0 0AA',
	email: 'ltwc-main@ltwc.com',
	phone: '+1 490-554-5543',
})

const socials = ref([
	'Youtube',
	'Facebook',
	'Twitter',
	'Instagram',
])

const links = ref([
	'Home',
	'About',
	'Connect',
	'Giving',
	'Plan your visit',
])

</script>

<style scoped></style>