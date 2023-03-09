import { LightningElement, track } from 'lwc';
export default class A092getSetParent extends LightningElement {
    girilenYas=0
    handleYas(event){
    this.girilenYas = event.target.value
    }
  customerDetail={
    name:'Resul',
    yas: 9
  }

isim;
yas;
handleisim(event){
  this.customerDetail.isim=event.target.value;
}
handleYas(event){
  this.customerDetail.yas=event.target.value;
}




}