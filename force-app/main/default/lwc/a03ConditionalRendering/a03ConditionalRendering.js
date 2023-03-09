import { LightningElement } from 'lwc';

export default class A03ConditionalRendering extends LightningElement {
flag = true;
handlerFlag(event){
  this.flag=event.target.checked;
}

}