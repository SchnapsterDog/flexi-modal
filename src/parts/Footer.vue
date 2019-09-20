<template>
  <div class="flexi-footer footer-padding">
    <span class="flexi-button">
      <a @click="handleClick(true)" class="buttons" :class="{'btn-red': !modalType }">{{ confirmButtonMessage }}</a>
    </span>
    <span class="flexi-button">
      <a @click="handleClick(false)" class="buttons-transparent" :class="{'btn-red': !modalType }">{{ declineButtonMessage }}</a>
    </span>
  </div>
</template>

<script scoped>
import Modal from '../plugin';
export default {
  props: {
    confirmButtonMessage: { // header message --
      type: String,
      default: 'DELETE'
    },
    declineButtonMessage: { // warning message --
      type: String,
      default: 'GO BACK'
    },
    modalType: { // modal type --error/warning modal false, confirmation modal true 
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick(confirmed) {
      this.$emit('update-modal-state', confirmed);
    }
  }
}
</script>

<style scoped lang="scss">
.flexi-footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  @media (max-width: 767.98px) {
    display: flex;
    flex-direction: column;
  }
}

.footer-padding {
  padding-top: 20px;
  padding-bottom: 30px;
  padding-left: 20px;
  padding-right: 20px;
}

.flexi-button {
  display: flex;
  justify-content: center;
  align-items: center;
}

.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
	background-color:#78b13f;
	cursor: pointer;
	color: #ffffff;
	font-family: Arial;
	font-size: 19px;
	padding: 21px 76px;
	text-decoration: none;
  width: 160px;
  height: 25px;
  border: 1px solid #fc8d83;
  text-align: center;
  box-sizing: content-box!important;
  
  @media (max-width: 767.98px) {
    width: 100px;
    margin-bottom: 20px;
  }
}

.btn-red {
  background-color:#fc8d83; 
}

.buttons-transparent {
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  cursor: pointer;
  color: grey;
  font-family: Arial;
  font-size: 19px;
  padding: 21px 76px;
  text-decoration: none;
  width: 160px;
  height: 25px;
  border: 1px solid;
  text-align: center;
  box-sizing: content-box!important;
  
  @media (max-width: 767.98px) {
    width: 100px;
    margin-bottom: 20px;
  }
}

.buttons-transparent:hover {
  color: white;
  background-color:#78b13f;
  opacity: .3;
}

.buttons:hover {
	background-color: #78b13f;
  opacity: .3;
}

.btn-red:hover {
  background-color: #e4685d;
}

.buttons:active {
	position:relative;
	top:1px;
}
</style>

