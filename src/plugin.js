let Plugin = {
  install: function (Vue, options = {}) {
    Vue.component('flexi-modal', FlexiModal) // init Component
    Plugin.events = new Vue(); // init events

      Vue.prototype.$modal = { // extend $modal
          show(name, params = {}) { // set modal name --name=flexi-modal, params--optional
            location.hash = name;
            // Plugin.events.$emit('show', params)
          },

          hide(name) { // hide modal
            location.hash = '#'
          },

          scope(message) {
            return new Promise((resolve, reject) => {
              this.show('flexi-modal', { message });

              // Plugin.events.$on('clicked', confirmed => {
              // resolve(confirmed);
              // })
            });
          }
      }
  }
}

export default Plugin

