import { LightningElement  } from 'lwc';

export default class z05CustomEventComponent extends LightningElement {
 city;
handleCustomEvent(event) {
this.city =event.detail.value.toUpperCase();
       
    }
}