import { track ,LightningElement } from 'lwc';
export default class XxxPicklistLWC extends LightningElement {
secilen='';
seceneklerArray= [ {label : 'Turkiye' , value:'Ankara'},
                   {label : 'Fransa' , value:'Paris'},
                   {label : 'Norvec' , value:'Oslo'}   ]
get secenekler(){
    return this.seceneklerArray
} 
handlePicklist(event){
    this.secilen = event.detail.value;
}
}