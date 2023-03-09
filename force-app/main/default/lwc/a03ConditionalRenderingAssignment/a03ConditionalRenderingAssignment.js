import { LightningElement } from 'lwc';

export default class A03ConditionalRenderingAssignment extends LightningElement {
flag;
pswrd;
predefinedPsw='AA0101';
handleBlur(event) {
  this.pswrd=event.target.value;
   if(this.pswrd===this.predefinedPsw){
    this.flag=true;
  }else{
   this.flag=false;
  }
}
}