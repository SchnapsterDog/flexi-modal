import Component from './Component'

let Plugin = {
  install: function (Vue, options = {}) {
      Vue.component('modal', Component)

      Plugin.events = new Vue();

      Vue.prototype.$modal = {
          show(name, params = {}) {
            location.hash = name;
            
            Plugin.events.$emit('show', params)
          },

          hide(name) {
            location.hash = '#'
          },

          scope(message) {
            return new Promise((resolve, reject) => {
              this.show('flexi-modal', { message });

              Plugin.events.$on('clicked', confirmed => {
                resolve(confirmed);
              })
            });
          }
      }
  }
}

export default Plugin

