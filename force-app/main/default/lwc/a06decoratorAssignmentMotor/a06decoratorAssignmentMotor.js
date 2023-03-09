import {api, LightningElement } from 'lwc';

export default class A06decoratorAssignmentMotor extends LightningElement {

   motorSepetiArray=[{label:'Tek Silindir',value:'Tek Silindir'}, {label:'İki Silindir',value:'İki Silindir'},{label:'Uc Silindir','Uc Silindir':'Hyundai'},{label:'Dort Silindir',value:'Dort Silindir'},{label:'Bes Silindir',value:'Bes Silindir'},{label:'Alti+ Silindir',value:'Alti+ Silindir'}];
  @api motor='';
   get motorSepeti(){
  return this.motorSepetiArray;
  }
  handlePicklist(event){
    this.motor=event.detail.value;
  }
  




}