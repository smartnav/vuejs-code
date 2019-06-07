const myMixins = {
  data: function () {
    return {
      menutoggle: true,
      foo: 'abc'
    }
  },
  created: function () {
    var menutoggle = this.$options.menutoggle
  },
  methods: {
    toggle: function () {
      this.menutoggle = !this.menutoggle
    }
  }
}

export default myMixins