<template>
	<div class="w-full relative flex justify-start items-center">
		<span class="font-medium cursor-pointer peer whitespace-nowrap">
			<slot />
		</span>
		<span
			class="absolute opacity-0 top-0 -left-7 h-full grid place-items-center peer-hover:opacity-100 transition-all duration-300 ease-in-out">
			<slot name="svg" />
		</span>
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>