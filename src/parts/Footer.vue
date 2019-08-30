<template>
  <div class="flexi-footer footer-padding">
    <span>
      <a @click="handleClick(true)" class="buttons">{{ confirmButtonMessage }}</a>
    </span>
    <span>
      <a @click="handleClick(false)" class="buttons-transparent">{{ declineButtonMessage }}</a>
    </span>
  </div>
</template>

<script>
import Modal from '../ModalPlugin';
export default {
  props: {
    confirmButtonMessage: {// header message --
      type: String,
      default: 'DELETE'
    },
    declineButtonMessage: {// warning message --
      type: String,
      default: 'GO BACK'
    },
  },
  methods: {
    handleClick(confirmed) {
      Modal.events.$emit('clicked', confirmed)
      this.$modal.hide()
    }
  }
}
</script>

<style lang="scss" scoped>
.flexi-footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  @media (max-width: 767.98px) {
    display: -webkit-box;
  }
}

.footer-padding {
  padding-top: 20px;
  padding-bottom: 30px;
  padding-left: 20px;
  padding-right: 20px;
}

.buttons {
	background-color: #fc8d83;
	display: inline-block;
	cursor: pointer;
	color: #ffffff;
	font-family: Arial;
	font-size: 19px;
	padding: 21px 76px;
	text-decoration: none;
  width: 160px;
  height: 25px;
  border: 1px solid #fc8d83;
  
  @media (max-width: 767.98px) {
    width: 100px;
    margin-bottom: 20px;
  }
}

.buttons-transparent {
  background: transparent;
  display: inline-block;
  cursor: pointer;
  color: grey;
  font-family: Arial;
  font-size: 19px;
  padding: 21px 76px;
  text-decoration: none;
  width: 160px;
  height: 25px;
  border: 1px solid;
  
  @media (max-width: 767.98px) {
    width: 100px;
    margin-bottom: 20px;
  }
}

.buttons-transparent:hover {
  color: white;
  background-color:#f7c3c3;
}

.buttons:hover {
	background-color:#e4685d;
}

.buttons:active {
	position:relative;
	top:1px;
}
</style>

