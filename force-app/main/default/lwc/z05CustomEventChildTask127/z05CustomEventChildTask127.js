import { LightningElement } from 'lwc';

export default class Z05CustomEventChild extends LightningElement {

  handleChange(event){
event.preventDefault;
const cityName=event.target.value;
const customEvent=new CustomEvent('mycustomevent', {detail:cityName});
this.dispatchEvent(customEvent);
  }
}