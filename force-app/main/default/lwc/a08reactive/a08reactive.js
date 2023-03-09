import { LightningElement } from 'lwc';

export default class A08reactive extends LightningElement {

  ad = 'Ayse';

  handleInput (event){
  this.ad = event.target.value;

  }

}