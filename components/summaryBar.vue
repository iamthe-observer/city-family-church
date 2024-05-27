<template>
	<section class="w-full h-20 fixed p-1 px-5 z-50 bottom-0 summary translate-y-[100px]">

		<div
			class="p-2 w-[95%] mx-auto h-full rounded-3xl backdrop-blur-md bg-black/5 flex items-center justify-between gap-2 text-sm">
			<div class="min-w-[300px] w-fit max-w-[700px] h-full flex items-center">
				<span class="px-3 border-r border-black font-bold">SUNDAY SERVICES</span>
				<span class="px-3 border-x border-black font-bold">9 AM</span>
				<span class="px-3 border-x border-black font-bold">11 AM</span>
				<span class="px-3 border-x border-black font-bold">4 PM</span>
				<span class="px-3 border-l border-black font-bold">WATCH ONLINE</span>
			</div>

			<div class="min-w-[300px] w-full max-w-[700px] h-full flex items-center">
				<Marquee class="text-lg" classer="px-10"></Marquee>
			</div>

			<div class="bg-black rounded-full h-full aspect-square"></div>
		</div>

	</section>
</template>

<script setup lang="ts">

</script>

<style scoped></style>