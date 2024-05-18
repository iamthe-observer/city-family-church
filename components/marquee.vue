<script setup lang="ts">
const props = defineProps(['text'])
</script>

<template>
	<div class="marquee">
		<div class="marquee-content">
			<span>OUTWARD FOCUSED - LIFE GIVING - SPIRIT OF EXCELLENCE - PEOPLE EMPOWERING</span>
			<span>OUTWARD FOCUSED - LIFE GIVING - SPIRIT OF EXCELLENCE - PEOPLE EMPOWERING</span>
			<span>OUTWARD FOCUSED - LIFE GIVING - SPIRIT OF EXCELLENCE - PEOPLE EMPOWERING</span>
			<span>OUTWARD FOCUSED - LIFE GIVING - SPIRIT OF EXCELLENCE - PEOPLE EMPOWERING</span>
			<span>OUTWARD FOCUSED - LIFE GIVING - SPIRIT OF EXCELLENCE - PEOPLE EMPOWERING</span>
			<span>OUTWARD FOCUSED - LIFE GIVING - SPIRIT OF EXCELLENCE - PEOPLE EMPOWERING</span>
		</div>
	</div>
</template>

<style scoped>
.marquee {
	width: 100%;
	overflow: hidden;
	background: #fff;
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
	font-size: 70px;
	font-weight: bold;
	padding-right: 50px;
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