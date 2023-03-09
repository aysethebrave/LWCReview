import { LightningElement, wire } from 'lwc';
import findAccount from '@salesforce/apex/zzzAccountControllerforImperative.findAccountList';
export default class ZzzSearchAccountwireImperative extends LightningElement {

searchKey='';
accounts;
error;
handleOnchange(event){
this.searchKey=event.target.value;
}
  handleOnclick(){
    findAccount({keyWord:this.searchKey})
    .then(result=>{
      this.accounts=result;
      this.error=undefined;
    })
    .catch(error=>{
      this.accounts=undefined;
      this.error=error;
    });
  }
  
}