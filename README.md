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
      confirmButtonMessage="Proceed"
      declineButtonMessage="Go Back"
      :checkBoxesAllowed="true"
      :checkBoxes="checkBoxes"
      @is-valid="isValid"
></flexi-modal>
```

Enabling of checkboxes (optional) // default option false

```html
 :checkBoxesAllowed="true"
 :checkBoxes="checkBoxes"
```

```js
data: () { 
  return {
    checkBoxes: [ 
      { text: 'Remove all trade history related information', confirmed: false },
      { text: 'Remove stock exchanges database', confirmed: false }
    ]  
  }
}
```

####Event Listeners 

Listen for 'is-valid' event which returns true if all checkboxes are marked

```js
methods: {
  isValid(valid) {
    valid ? alert('Action Confirmed') : alert('Please Mark the checkboxes in order to proceed the request');
  }
}
```


##### API

| Name        | Type        | Description                                                             |
| :-----      | :-------    | :----------------------------------------------- 

