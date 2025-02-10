<template>
	<div class="marquee-container">
		<div class="marquee-content" :style="marqueeStyle">
			{{ text }}
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	text: {
		type: String,
		required: true
	},
	speed: {
		type: Number,
		default: 50
	}
});

const marqueeWidth = ref(0);

const marqueeStyle = computed(() => {
	return {
		animation: marqueeWidth.value > 0 ? `marquee ${animationDuration.value}s linear infinite` : 'none'
	};
});

const animationDuration = computed(() => {
	return marqueeWidth.value / props.speed;
});

onMounted(() => {
	nextTick(() => {
		marqueeWidth.value = document.querySelector('.marquee-content').offsetWidth;
	});
});

watch(
	() => props.text,
	() => {
		nextTick(() => {
			marqueeWidth.value = document.querySelector('.marquee-content').offsetWidth;
		});
	}
);
</script>

<style scoped>
.marquee-container {
	overflow: hidden;
	/* Hide overflowing content */
	white-space: nowrap;
	/* Prevent text from wrapping */
	width: 100%;
	/* Or set a specific width */
	position: relative;
	/* Needed for absolute positioning of pseudo-element */
}

.marquee-content {
	padding-left: 100%;
	/* Initial offset */
	display: inline-block;
	/* needed to calculate width */
}

@keyframes marquee {
	0% {
		transform: translateX(0);
	}

	100% {
		transform: translateX(-100%);
	}
}

/* Optional styling - customize as needed */
.marquee-container {
	border: 1px solid #ccc;
	/* Example border */
	padding: 10px;
	/* Example padding */
	font-family: sans-serif;
	/* Example font */
}

.marquee-content {
	font-size: 16px;
	/* Example font size */
	color: #333;
	/* Example text color */
}
</style>