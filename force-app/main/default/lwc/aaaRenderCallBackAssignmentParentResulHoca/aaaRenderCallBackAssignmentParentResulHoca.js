import { LightningElement } from 'lwc';

export default class AaaRenderCallBackAssignmentResulHoca extends LightningElement {

  import { LightningElement , track} from 'lwc';
export default class A09getSetParent extends LightningElement {
    age=0
    handleAge(event){
    this.age= event.target.value
    }
    handleName(event){
this.customer.name=event.target.value
    }
@track customer={
    name:'mahmut',
    age:45
}
goster=true
handleSakla(){
    this.goster=false
}
renderedCallback(){
    this.goster=true;
}
}
}