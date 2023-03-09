import { LightningElement ,api } from 'lwc';
export default class AaaRenderCallBackAssignmentChild extends LightningElement {
@api studentInfo={} ;
@api get student (){
    return this.studentInfo;
}

}