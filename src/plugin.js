let Plugin = {
  install: function (Vue, options = {}) {
    Vue.component('flexi-modal', FlexiModal)
    Plugin.events = new Vue();

    Vue.prototype.$modal = {
      show(name, params = {}) {
        location.hash = name;
      },

      hide(name) {
        location.hash = '#'
      },

      scope(message) {
        return new Promise((resolve, reject) => {
          this.show('flexi-modal', { message });
        });
      }
    }
  }
}

export default Plugin

