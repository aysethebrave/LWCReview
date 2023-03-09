import { LightningElement } from 'lwc';

export default class A091getter extends LightningElement {
sayi1 = 9;
sayi2 = 3;
ortalama = (this.sayi1 + this.sayi2)/2;

get sayilarinOrtalamasi(){
return ((this.sayi1 + this.sayi2)/2);

}

isimler =['Ali', 'Veli', 'Hasan', 'Resul', 'Ayse', 'Ertugrul'];
 istekisim = this.isimler[2];
get istekisimGet(){
  return this.isimler[2];
}


}