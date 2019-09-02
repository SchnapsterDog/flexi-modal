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
      :checkBoxes="[{text: 'Keep this information'}, {text: 'Keep history of transaction'}]"
      confirmButtonMessage="DDDD"
      declineButtonMessage="Decline Button Message"
></flexi-modal>
```


##### API

| Name        | Type        | Description                                                             |
| :-----      | :-------    | :----------------------------------------------- 

