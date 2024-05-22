<template>
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
			<div class="marquee">
				<div class="marquee-content">
					<span>JOIN MID WEEK SERVICE HERE! | JOIN MID WEEK SERVICE HERE! | JOIN MID WEEK SERVICE
						HERE! | JOIN MID WEEK SERVICE HERE! | JOIN MID WEEK SERVICE HERE! | JOIN MID WEEK
						SERVICE HERE! | JOIN MID WEEK SERVICE HERE! | JOIN MID WEEK SERVICE HERE! | JOIN MID
						WEEK SERVICE HERE! | JOIN MID WEEK SERVICE HERE! | JOIN MID WEEK SERVICE HERE! | JOIN
						MID WEEK SERVICE HERE! | JOIN MID WEEK SERVICE HERE! | JOIN MID WEEK SERVICE HERE! |
						JOIN MID WEEK SERVICE HERE! | JOIN MID WEEK SERVICE HERE! | JOIN MID WEEK SERVICE HERE!
						| JOIN MID WEEK SERVICE HERE! | JOIN MID WEEK SERVICE HERE! | JOIN MID WEEK SERVICE
						HERE! | JOIN MID WEEK SERVICE HERE! | JOIN MID WEEK SERVICE HERE! | JOIN MID WEEK
						SERVICE HERE! | JOIN MID WEEK SERVICE HERE! | JOIN MID WEEK SERVICE HERE! | JOIN MID
						WEEK SERVICE HERE!</span>
				</div>
			</div>
		</div>
		<div class="bg-black rounded-full h-full aspect-square"></div>
	</div>
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