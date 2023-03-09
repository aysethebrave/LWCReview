public with sharing class ContactController {
  @AuraEnabled(cacheable=true)
    public static list<Contact>  getContactList(){
        return [SELECT id, name, firstName, lastName FROM CONTACT limit 5];
    }
}