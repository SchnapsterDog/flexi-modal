# Flexi Modal

Vue JS Modal Plugin that could easy be implemented in your code

## Installation

```js
npm install flexi-modal --save
```

### Usage

Global

```js
import FlexiModal from 'flexi-modal';
Vue.use(FlexiModal);
```

Once installed, it can be used in every Vue component easy.

```html
<flexi-modal 
      name="flexi-modal"
      headerMessage="Are you sure?"
      warningMessage="Warning, this cant be undone!"
      confirmButtonMessage="DDDD"
      declineButtonMessage="Decline Button Message"
      :checkBoxesAllowed="true"
      :checkBoxes="[{text: 'Keep this information', confirmed: false }, {text: 'Keep history of transaction', confirmed: false}]"
      @is-valid="checkBoxes"
></flexi-modal>
```

You can listen for is-valid event that return true if provided checkboxes are marked in the modal

methods: {
  checkBoxes(valid) {
    valid ? alert('Action Confirmed') : alert('Please Mark the checkboxes in order to proceed the request');
  }
}



##### API

| Name        | Type        | Description                                                             |
| :-----      | :-------    | :----------------------------------------------- 

