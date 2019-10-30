<template>
  <div :id="name"
       class="overlay-modal"
  >
    <a href="#" class="cancel-button"></a>

    <div class="flexi-modal">
      <div 
        class="flexi-modal-content" 
        v-if="modalType">
          <span class="flexi-checkmark"></span>
          <span
            class="fs-40 mb-30 mt-20"
            :class="{'text-red': !modalType }">
              {{ headerMessage }}
          </span>
      </div>
      <div 
        class="flexi-modal-content"
        v-else>
          <span class="icon text-red">&times;</span>
          <span 
            class="fs-40 mb-30 mmt-20"
            :class="{'text-red': !modalType }">
              {{ headerMessage }}
          </span>
      </div>
      
      <div v-if="!modalType"
           class="flexi-description custom-padding" :class="{'text-center': !this.checkBoxesAllowed}">
        <p><strong> {{ warningMessage }} </strong></p>
        <div class="page"
          v-show="checkBoxesAllowed"
          v-for="(value, key) in checkBoxes" 
          :key="key">
          <div class="page__toggle">
            <label class="toggle">
              <input @click="updateCheckbox(key)" class="toggle__input" type="checkbox">
              <span class="toggle__label">
                <span class="toggle__text">{{ value.text }}</span>
              </span>
            </label>
          </div>
        </div>
      </div>

      <a href="#" class="close-button">
        &times;
      </a>

      <footer class="mt-6">
        <app-footer
          :confirmButtonMessage="confirmButtonMessage"
          :declineButtonMessage="declineButtonMessage"
          :modalType="modalType"
          @update-modal-state="updateModalState"
        ></app-footer>
      </footer>

    </div>
  </div>
</template>

<script>
import Modal from './plugin';
import Footer from './parts/Footer.vue';

export default {
  props: {
    name: { // name of the modal --customize like error-modal/confirm-modal
      type: String,
      required: true
    },
    modalType: { // modal type --error/warning modal false, confirmation modal true 
      type: Boolean,
      default: false
    },
    headerMessage: {// header message --
      type: String,
      default: 'Are you sure?'
    },
    warningMessage: {// warning message --
      type: String,
      default: 'Warning, this cannot be undone!'
    },
    checkBoxesAllowed: {
      type: Boolean,
      default: false
    },
    checkBoxes: {// array piece of data that contain text messages for checkboxes
      type: Array,
      default: () => {
        return [
          { text: 'Remove all trade history related information', confirmed: false },
          { text: 'Remove stock exchanges database', confirmed: false }
        ]  
      },
    },
    confirmButtonMessage: {// header message --
      type: String,
      default: 'DELETE'
    },
    declineButtonMessage: {// warning message --
      type: String,
      default: 'GO BACK'
    },
  },
  
  components: { // import parts of the component
    appFooter: Footer
  }, 
  
  computed: {
    isValid() { //check if checkboxes are marked --return true if all are chekecked
      if(!this.checkBoxesAllowed) { return true; } //turn off validation in checkboxes are not allowed 
      let checked = [];
      for(let i=0; i < this.checkBoxes.length; i++){
        if(this.checkBoxes[i].confirmed){
          checked.push(this.checkBoxes[i].confirmed);
        }
      }
      return this.checkBoxes.length === checked.length;
    }
  },

  methods: {
    setModalName(name) { // helper function
      return location.hash = name;
    },
    updateCheckbox(key) { // update confirmed property from checkBoxes array
      this.checkBoxes[key].confirmed =! this.checkBoxes[key].confirmed;
    },
    updateModalState(confirmed) { // return true on confirmed action 
      if(confirmed) {
        !this.isValid ? this.setModalName(this.name) : this.setModalName('#');
      } else { this.setModalName('#'); return; }
      this.$emit('is-valid', this.isValid);
    }
  }
}
</script>

<style scoped>
.overlay-modal {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  visibility: hidden;
  position: fixed;
  top:0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, .4);
  transition: opacity .3s;
  opacity: 0;
  z-index: 9999;
}

.overlay-modal:target {
  visibility: visible;
  opacity: 1;
}

.overlay-modal *,
.overlay-modal *:before,
.overlay-modal *:after {
  -webkit-box-sizing: content-box;
     -moz-box-sizing: content-box;
          box-sizing: content-box;
}

.flexi-modal {
  position: relative;
  width: 700px;
  max-width: 80%;
  background: white;
  border-radius: 4px;
  box-shadow: 0 5px 11px rgba(36, 37, 38, 0.08);
  display: flex;
  flex-direction: column;
}

.flexi-modal-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.flexi-checkmark {
  display: inline-block;
  transform: rotate(45deg);
  height: 6rem;
  width: 2rem;
  border-bottom: 15px solid #78b13f;
  border-right: 15px solid #78b13f;
}
  
.flexi-modal .close-button {
  position: absolute;
  top: 15px;
  right: 15px;
  color: grey;
  text-decoration: none;
}

.overlay-modal .cancel-button {
  position: absolute;
  width: 100%;
  height: 100%;
}

.flexi-description {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-top: #f3ecec solid 1px;
  background-color: #f7f7f7;
}

.text-center {
  align-items: center;
}

.custom-padding {
  padding: 10px 40px;
}

.toggle{
  --uiToggleSize: var(--toggleSize, 50px);
  --uiToggleIndent: var(--toggleIndent, .4em);
  --uiToggleBorderWidth: var(--toggleBorderWidth, 2px);
  --uiToggleColor: var(--toggleColor, #000);
  --uiToggleDisabledColor: var(--toggleDisabledColor, #868e96);
  --uiToggleBgColor: var(--toggleBgColor, #fff);
  --uiToggleArrowWidth: var(--toggleArrowWidth, 2px);
  --uiToggleArrowColor: var(--toggleArrowColor, #fff);

  display: inline-block;
  position: relative;
}

.toggle__input{
  position: absolute;
  left: -99999px;
}

.toggle__label{
  display: inline-flex;
  cursor: pointer;
  min-height: var(--uiToggleSize);
  padding-left: calc(var(--uiToggleSize) + var(--uiToggleIndent));
}

.toggle__label:before, .toggle__label:after{
  content: "";
  box-sizing: border-box;  
  width: 0.8em;
  height: 0.8em;
  font-size: var(--uiToggleSize);

  position: absolute;
  left: 0;
  top: 5px;
}

.toggle__label:before{
  border: var(--uiToggleBorderWidth) solid var(--uiToggleColor);
  z-index: 2;
}

.toggle__input:disabled ~ .toggle__label:before{
  border-color: var(--uiToggleDisabledColor);
}

.toggle__input:focus ~ .toggle__label:before{
  box-shadow: 0 0 0 2px var(--uiToggleBgColor), 0 0 0px 4px var(--uiToggleColor);
}

.toggle__input:not(:disabled):checked:focus ~ .toggle__label:after{
  box-shadow: 0 0 0 2px var(--uiToggleBgColor), 0 0 0px 4px var(--uiToggleColor);
}

.toggle__input:not(:disabled) ~ .toggle__label:after{
  background-color: var(--uiToggleColor);
  opacity: 0;
}

.toggle__input:not(:disabled):checked ~ .toggle__label:after{
  opacity: 1;
}

.toggle__text{
  margin-top: auto;
  margin-bottom: auto;
}

/*
The arrow size and position depends from sizes of square because I needed an arrow correct positioning from the top left corner of the element toggle
*/

.toggle__text:before{
  content: "";
  box-sizing: border-box;
  width: 0;
  height: 0;
  font-size: var(--uiToggleSize);

  border-left-width: 0;
  border-bottom-width: 0;
  border-left-style: solid;
  border-bottom-style: solid;
  border-color: var(--uiToggleArrowColor);

  position: absolute;
  top: .5428em;
  left: .2em;
  z-index: 3;

  transform-origin: left top;
  transform: rotate(-40deg) skew(10deg);
}

.toggle__input:not(:disabled):checked ~ .toggle__label .toggle__text:before{
  width: .4em;
  height: .20em;
  border-left-width: var(--uiToggleArrowWidth);
  border-bottom-width: var(--uiToggleArrowWidth);
  will-change: width, height;
  transition: width .1s ease-out .2s, height .2s ease-out;
}

.toggle__label:before, .toggle__label:after{
  border-radius: 0px;
}

.toggle__input:not(:disabled) ~ .toggle__label:before,
.toggle__input:not(:disabled) ~ .toggle__label:after{
  opacity: 1;
  transform-origin: center center;
  will-change: transform;
  transition: transform .2s ease-out;
}

.toggle__input:not(:disabled) ~ .toggle__label:before{
  transform: rotateY(0deg);
  transition-delay: .2s;
}

.toggle__input:not(:disabled) ~ .toggle__label:after{
  transform: rotateY(90deg);
}

.toggle__input:not(:disabled):checked ~ .toggle__label:before{
  transform: rotateY(-90deg);
  transition-delay: 0s;
}

.toggle__input:not(:disabled):checked ~ .toggle__label:after{
  transform: rotateY(0deg);
  transition-delay: .2s;
}

.toggle__text:before{
  opacity: 0;
}

.toggle__input:not(:disabled):checked ~ .toggle__label .toggle__text:before{
  opacity: 1;
  transition: opacity .1s ease-out .3s, width .1s ease-out .5s, height .2s ease-out .3s;
}

.toggle{
  --toggleColor:#de5a5a;
  --toggleBgColor:#de5a5a;
  --toggleSize: 50px;
}

footer:empty {
  display:none;
}

strong {
  color: #ab4242;
}

.icon {
  font-size: 7rem;
}

.text-red {
  color: #de5a5a;
}

.def-padding {
  padding: 1em 2.5em;
}

.mt-6 {
    margin-top: 6px;
  }

.mb-30 {
  margin-bottom: 30px;
}

.mt-20 {
  margin-top: 20px;
}

.mmt-20 {
  margin-top: -20px;
}

.p-10 {
  padding: 10px 0;
}

.p-20 {
  padding: 20px;
}

.fs-40 {
  font-size: 40px;
}
</style>
