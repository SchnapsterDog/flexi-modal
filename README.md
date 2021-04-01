[[Flexi Modal]](https://akrinum.com)

[![prs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/SchnapsterDog/flexi-modal/pulls)
[![npm version](https://img.shields.io/bundlephobia/min/flexi-modal?style=flat-square)](https://www.npmjs.com/package/flexi-modal)
[![npm](https://img.shields.io/npm/dw/flexi-modal?style=flat-square)](https://www.npmjs.com/package/flexi-modal)


Welcome to [version 0.2.5]() of **Flexi Modal**, an easy to implement, and well maintained **Vue.js** plugin.

You can support this project by giving it a star, or following the author. :heart:.

## :exclamation::exclamation::exclamation: This is README for FlexiModal component :exclamation::exclamation::exclamation:

Flexi Modal vue plugin made by [Oliver](https://akrinum.com)

## ⚙ Installation

- npm install flexi-modal --save

## 🤔 How to use it? 

### Module usage 

```js
import FlexiModal from 'flexi-modal';

export default {
  name: 'someComponent',
  components: { FlexiModal }
```

Once installed, it can be used in every Vue component easy.

```html
<a href="#flexi-modal">Open Modal</a>

<flexi-modal 
  name="flexi-modal"
  :modalType="false"
  :checkBoxesAllowed="true"
  :checkBoxes="checkBoxes"
  headerMessage="Are you sure?"
  warningMessage="Warning, this cant be undone!"
  confirmButtonMessage="Proceed"
  declineButtonMessage="Go Back"
  @is-valid="isValid"
/>

```

1. Name property is mandatory. Without providing it, the component will not work.
2. warningMessage, checkBoxesAllowed and checkBoxes is available only for Error Modal(See MODAL TYPE)

## Modal Type
There are two type of modal that could be use, Error and Confirm Modal.
Default value "false", that mean Error Modal. Confirm modal doesnt 
support checkboxes and its validation. 

```html
<flexi-modal 
  name="flexi-modal"
  :modalType="false"
/>
```

Enabling of checkboxes (optional) // default option false

```html
<flexi-modal 
  :checkBoxes="checkBoxes"
  :checkBoxesAllowed="true"
  :modalType="false"
  :name="flexi-modal"
/>
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

## Event Listeners 

Listen for 'is-valid' event which returns true if all checkboxes are marked

```js
methods: {
  isValid(valid) {
    valid ? alert('Action Confirmed') : alert('Please Mark the checkboxes in order to proceed the request');
  }
}
```

## API

### ❔ Props & events

```

| Name                    | Type        | Mandatory     | Description 

| :-----                  | :-------    | :--------     |------------------------------- 
| name                    | String      | Yes           | This prop is mandatory. Give string name to your modal and invoke it.
| modalType               | Boolean     | Yes           | true/false. Set true for Confirm and false for Error Modal.
| headerMessage           | String      | No            | Set message on the Header of the Modal.
| warningMessage          | String      | No            | This option is only available for modalType=false (ErrorModal)
| confirmButtonMessage    | String      | No            | Set ConfirmButton title        
| declineButtonMessage    | String      | No            | Set DeclineButton title
| checkBoxesAllowed       | Boolean     | No            | true/false. This options is only available for modalType=false (ErrorModal).
| checkBoxes              | Array       | No            | Set array of checkboxes options that will be loop inside component. avl only if checkBoxedAllowed is true.
| is-valid                | Event       | /             | Listen for event. Return true if confirmButton is clicked and/or all checkBoxes are marked for modalType=false
```

## License

[MIT](http://opensource.org/licenses/MIT)