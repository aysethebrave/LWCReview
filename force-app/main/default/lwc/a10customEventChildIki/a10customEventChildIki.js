import { LightningElement } from 'lwc';
export default class A10customEventChildIki extends LightningElement {
    sehir='SIVAS Turkiyenin baskentidir'
    handelClick(){
        const cstEvent = new CustomEvent('armut' , {detail:this.sehir}    )
         this.dispatchEvent(cstEvent)
      }
      
}