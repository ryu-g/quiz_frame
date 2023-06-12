export default {
  async mounted() {
    try {
      const csv = await this.$axios.$get(
        'スプレッドシートのURL'
      )
      console.log(csv)
    } catch (error) {
      // noop
    }
  }
}
