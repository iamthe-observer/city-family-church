const appStore = defineStore('app', () => {
  const loading = ref(true)
  const loading_anim_done = ref(false)

  return {
    loading,
    loading_anim_done,
  }
})

export default appStore
