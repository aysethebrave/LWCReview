import { LightningElement } from 'lwc';

export default class A2DataBinding extends LightningElement {

  isim = 'Ayse Yigit';
  ad = 'Ayse';

  handleInput (event){
  this.ad = event.target.value;

  } 
name = 'Ahmet';
buyukisim;
handleOnchange(event){
  this.name = event.target.value;
}
get ismiBuyukHarfeCevir(){
this.buyukisim = this.name.toUpperCase();
return this.buyukisim;
}
firstName = 'Ahmet';

handleIsim(event){
  this.firstName = event.target.value;
}
lastName = 'koc';
handleSoyIsim(event){
  this.lastName = event.target.value;
}


upperCaseFullName;
get TamIsim(){
this.upperCaseFullName = this.firstName.toUpperCase() +' '+ this.lastName.toUpperCase();
return this.upperCaseFullName;
}
num1;
handlenum1(event){
this.num1=event.target.value;
}
num2;
handlenum2(event){
  this.num2=event.target.value;
}
result;
  get   HandleResult(){
  this.result = this.num1 * this.num2;
  return this.result;
}

}