import { LightningElement } from 'lwc';

export default class A06ArabaComposition extends LightningElement {
arabaMarkasi='HONDA';
yakitTuruDede='ELEKTRIK';
handleYakitTuru(event){
  this.yakitTuruDede=event.target.value;
}

}