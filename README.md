# Flexi Modal

Vue JS Modal that could be easy implement in your code. 

## Demo

Demo is uploaded on my server. Check this out:

https://flexivue.info

## Installation

```js
npm install flexi-modal --save
```

## Usage

```js
import FlexiModal from 'flexi-modal';

export default {
  name: 'someComponent',
  components: { FlexiModal },
```

Once installed, it can be used in every Vue component easy.

```html
<a href="#flexi-modal">Open Modal</a>

<flexi-modal 
      name="flexi-modal"
      :modalType="false"
      headerMessage="Are you sure?"
      warningMessage="Warning, this cant be undone!"
      confirmButtonMessage="Proceed"
      declineButtonMessage="Go Back"
      :checkBoxesAllowed="true"
      :checkBoxes="checkBoxes"
      @is-valid="isValid"
  ></flexi-modal>

```

1. Name property is mandatory. Without providing it, the component will not work.
2. warningMessage, checkBoxesAllowed and checkBoxes is available only for Error Modal(See MODAL TYPE)

### Modal Type
There are two type of modal that could be use, Error and Confirm Modal.
Default value "false", that mean Error Modal. Confirm modal doesnt 
support checkboxes and its validation. 

```html
<flexi-modal 
      name="flexi-modal"
      :modalType="false"
></flexi-modal>
```

Enabling of checkboxes (optional) // default option false

```html
<flexi-modal 
      name="flexi-modal"
      :modalType="false"
      :checkBoxesAllowed="true"
      :checkBoxes="checkBoxes"
></flexi-modal
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

### Event Listeners 

Listen for 'is-valid' event which returns true if all checkboxes are marked

```js
methods: {
  isValid(valid) {
    valid ? alert('Action Confirmed') : alert('Please Mark the checkboxes in order to proceed the request');
  }
}
```


## API

### Props

```

| Name                    | Type        | Mandatory     | Description 

| :-----                  | :-------    | :--------     |------------------------------- 
| name                    | String      | Yes           | THis prop is mandatory. Give string name to your modal and invoke it.
| modalType               | Boolean     | Yes           | true/false. Set true for Confirm and false for Error Modal.
| headerMessage           | String      | No            | Set message on the Header of the Modal.
| warningMessage          | String      | No            | This option is only available for modalType=false (ErrorModal)
| confirmButtonMessage    | String      | No            | Set ConfirmButton title        
| declineButtonMessage    | String      | No            | Set DeclineButton title
| checkBoxesAllowed       | Boolean     | No            | true/false. This options is only available for modalType=false (ErrorModal).
| checkBoxes              | Array       | No            | Set array of checkboxes options that will be loop inside component. avl only if checkBoxedAllowed is true.
| is-valid                | Event       | /             | Listen for event. Return true if confirmButton is clicked and/or all checkBoxes are marked for modalType=false
```
