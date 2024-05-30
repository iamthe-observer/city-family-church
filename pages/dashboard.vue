<template>
	<div class="w-full h-screen flex bg-white font-PlusSans text-white">
		<!-- nav -->
		<div class="p-7 w-[30%] bg-neutral-900 h-full flex flex-col text-white relative">
			<!-- titleCard -->
			<div class="flex gap-2 items-center w-full text-white text-3xl font-Cinzel mb-10">
				<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
					<path fill="white"
						d="M21 16V4H3v12zm0-14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-7v2h2v2H8v-2h2v-2H3a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2zM5 6h9v5H5zm10 0h4v2h-4zm4 3v5h-4V9zM5 12h4v2H5zm5 0h4v2h-4z" />
				</svg>
				DASHBOARD
			</div>

			<!-- logo and name -->
			<div class="absolute bottom-5 left-5 w-full flex justify-start items-center">
				<div class=""><img src="../assets/logo2.png" alt="" class="w-10 bg-white rounded-full aspect-square">
				</div>
				<span class="ml-4 font-Cinzel text-xl whitespace-nowrap truncate text-white">
					<BubbleText default_clr="fff" text="City Family Church" />
				</span>
			</div>

			<!-- pages links -->
			<div class="flex flex-col">
				<h2 class="mb-4 text-neutral-400 font-Cinzel">Pages</h2>

				<div @click="page = route.component" v-for="(route, i) in routes" :key="i"
					class="w-fit flex items-center gap-5 group text-white text-xl cursor-pointer mb-4">
					<svg class="w-0 h-6 group-hover:w-6 group-hover:opacity-100 opacity-0 transition-all duration-200 ease-in-out"
						xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path fill="white" d="M9 2h6v5h5v6h-5v9H9v-9H4V7h5zm2 2v5H6v2h5v9h2v-9h5V9h-5V4z" />
					</svg>
					{{ route.name }}
					<!-- <span
						:class="[$route.path === route.path ? 'opacity-0' : '-translate-x-4 group-hover:opacity-100 opacity-0 transition-all duration-200 ease-in-out']">.</span> -->
				</div>

			</div>
		</div>

		<!-- content -->
		<div class="p-7 w-full h-full overflow-y-auto overflow-x-hidden">

			<component :is="page"></component>

		</div>

	</div>
</template>

<script setup lang="ts">
import home from '~/components/dash/home.vue';
import about from '~/components/dash/about.vue';
import connect from '~/components/dash/connect.vue';
import visit from '~/components/dash/visit.vue';
import giving from '~/components/dash/giving.vue';

const page = ref(home);

const routes = ref([
	{
		name: 'Home',
		component: home
	},
	{
		name: 'About Us',
		component: about
	},
	{
		name: 'Connect',
		component: connect
	},
	{
		name: 'Visit Us',
		component: visit
	},
	{
		name: 'Giving',
		component: giving
	},
])
</script>

<style scoped></style>