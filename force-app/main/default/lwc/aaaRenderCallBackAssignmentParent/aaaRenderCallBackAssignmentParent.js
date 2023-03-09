import { LightningElement } from 'lwc';
export default class AaaRenderCallBackAssignmentParent extends LightningElement {
   studentDetail = {};  
   name='Ayse'; 
   age=32;
  
handleName(event){
  this.name=event.target.value;
}
handleAge(event){
  this.age=event.target.value;
}
handleOnClick(){
  this.studentDetail={
    name:this.name,
    age: this.age
  }
}


}