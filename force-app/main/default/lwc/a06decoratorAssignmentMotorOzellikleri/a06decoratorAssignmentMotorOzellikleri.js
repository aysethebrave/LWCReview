import { LightningElement } from 'lwc';

export default class A06decoratorAssignmentMotorOzellikleri extends LightningElement {


  yakitTurleriArray=[{label:'Benzin',value:'Benzin'}, {label:'Dizel',value:'Dizel'},{label:'Elektrik',value:'Elektrik'},{label:'LPG',value:'LPG'},{label:'Hybrid',value:'Hybrid'}];
  yakit='';
  get yakitTurleri(){
  return this.yakitTurleriArray;
  }
  handleYakitPicklist(event){
    this.yakit=event.detail.value;
  }
  
  motorGucleriArray=[{label:1000,value:1000}, {label:1200,value:1200},{label:1300,value:1300},{label:1600,value:1600},{label:1800,value:1800},{label:2000,value:2000},{label:3000,value:3000}];
  motorGucu='';
  get motorGucleri(){
  return this.motorGucleriArray;
  }
  handleMotorGucuPicklist(event){
    this.motorGucu=event.detail.value;
  }
  beygirGucleriArray=[{label:75,value:75}, {label:90,value:90},{label:100,value:100},{label:120,value:120},{label:150,value:150}];
  beygirGucu='';
  get beygirGucleri(){
  return this.beygirGucleriArray;
  }
  handleBeygirGucuPicklist(event){
    this.beygirGucu=event.detail.value;
  }



}