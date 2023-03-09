import { LightningElement } from 'lwc';

export default class A06decoratorAssignmentAraba extends LightningElement {
arabaSepetiArray=[{label:'Honda',value:'Honda'}, {label:'BMW',value:'BMW'},{label:'Hyundai',value:'Hyundai'},{label:'Toyota',value:'Toyota'},{label:'Volkswagen',value:'Volkswagen'},{label:'Audi',value:'Audi'},{label:'Opel',value:'Opel'}];
araba='';
get arabaSepeti(){
return this.arabaSepetiArray;
}
handlePicklist(event){
  this.araba=event.detail.value;
}
motorArabadan=[{label:'BIR SILINDIR', value:'BIR SILINDIR'},{label:'IKI SILINDIR', value:'IKI SILINDIR'},{label:'UC SILINDIR', value:'UC SILINDIR'}];
get motorSepeti(){
  return this.motorArabadan;
  }
}