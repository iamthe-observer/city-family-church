<template>
	<section class="w-full h-20 fixed p-1 px-5 z-50 bottom-0 summary translate-y-[100px]">

		<div
			class="p-2 w-[95%] mx-auto h-full rounded-3xl backdrop-blur-md bg-black/15 flex items-center justify-between gap-2 text-sm">
			<div class="min-w-[300px] w-fit max-w-[700px] h-full flex items-center">
				<span class="px-3 border-r border-black font-bold">SUNDAY SERVICES</span>
				<span class="px-3 border-x border-black font-bold">9:30 AM</span>
				<span class="px-3 border-x border-black font-bold">12:30 PM</span>
				<span class="px-3 border-x border-r-2 border-black font-bold">4:30 PM</span>
				<span
					class="px-3 border-black font-bold cursor-pointer hover:bg-white ml-2 rounded-md py-2 hover:scale-105 transition-all duration-150 ease-out">WATCH
					ONLINE</span>
			</div>

			<div class="min-w-[300px] w-full max-w-[700px] h-full flex items-center">
				<div class="marquee">
					<div class="marquee-content">
						<span>
							JOHN 1:14 | JOHN 1:14 | JOHN 1:14 | JOHN 1:14 | JOHN 1:14 | JOHN 1:14 | JOHN
							1:14 | JOHN 1:14 | JOHN 1:14 | JOHN 1:14 | JOHN 1:14 | JOHN 1:14 | JOHN 1:14 |
							JOHN 1:14 | JOHN 1:14 | JOHN 1:14 | JOHN 1:14 | JOHN 1:14 | JOHN 1:14 | JOHN
							1:14 | JOHN 1:14 | JOHN 1:14 | JOHN 1:14 | JOHN 1:14 | JOHN 1:14 | JOHN 1:14 |
							JOHN 1:14 |
						</span>
					</div>
				</div>
			</div>

			<div class="grid place-items-center rounded-full h-full aspect-square">
				<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
					<path fill="currentColor"
						d="M6 22h15v-2H6.012C5.55 19.988 5 19.805 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3M5 8V5c0-.805.55-.988 1-1h13v12H5z" />
					<path fill="currentColor" d="M11 14h2v-4h2V8h-2V6h-2v2H9v2h2z" />
				</svg>
			</div>
		</div>

	</section>
</template>

<script setup lang="ts">

</script>

<style scoped>
.marquee {
	width: 100%;
	overflow: hidden;
	/* background: #fff; */
	white-space: nowrap;
	box-sizing: border-box;
	padding: 10px 0;
	position: relative;
}

.marquee-content {
	display: flex;
	animation: marquee 5s linear infinite;
}

.marquee-content span {
	display: inline-block;
	/* font-size: 20px; */
	font-weight: bolder;
	padding-right: 30px;
	/* Adjust for spacing between repeated texts */
}

@keyframes marquee {
	from {
		transform: translateX(0);
	}

	to {
		transform: translateX(-50%);
	}
}
</style>