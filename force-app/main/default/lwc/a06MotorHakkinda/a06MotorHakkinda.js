import { api, LightningElement } from 'lwc';

export default class A06MotorHakkinda extends LightningElement {
@api motorCinsi='Vtec';
@api yakitTuruParent='Benzinli Kardes';
motorGucuBaba=2
handleMotorGucu(event){
  this.motorGucuBaba=event.target.value;
}
}