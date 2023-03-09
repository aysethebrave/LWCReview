import { LightningElement, track } from 'lwc';

export default class A08trackDecorator extends LightningElement {

  ad = 'Ayse';
soyad='Yigit';
@track aileBireyi = {
  name: 'Resul' ,
  yas:50
 }
  handleAd (event){
  //this.ad = event.target.value;
this.aileBireyi.name=event.target.value;
  }

  handleYas (event){
    //this.soyad = event.target.value;
  this.aileBireyi.yas=event.target.value;
    }
    handleClick(){
     this.aileBireyi={
        name:this.aileBireyi.name,
        yas:this.aileBireyi.yas
      }
    }
}