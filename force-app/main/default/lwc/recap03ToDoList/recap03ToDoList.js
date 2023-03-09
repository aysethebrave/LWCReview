import { LightningElement, track} from 'lwc';

export default class Recap03ToDoList extends LightningElement {
 
 
  @track 
  todoList=[];
  myTask=''; 
  handleTask(event){
  this.myTask = event.target.value;
  }
  handleAdd(event){
  this.todoList.push({
  id:(this.todoList.length)+1,
  name:this.myTask
  });
  this.myTask ='';
  }
  handleDelete(event){
  let idToDelete=event.target.name;
  let indexofIdToDelete;
  let  todoList=this.todoList;
  for(let i=0; i<todoList.length; i++){
  if(idToDelete === todoList[i].id ){
    indexofIdToDelete = i;
}
}  todoList.splice(indexofIdToDelete, 1);

 }
}

   
 
 

