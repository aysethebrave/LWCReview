public with sharing class LWCAccountCreation {
    @AuraEnabled
    public static String accCreation(String accIsim) {
    Account acc = new Account();
    acc.name = accIsim;
    insert acc;
    if(acc.Id != null){
        return 'Tebrikler';
    }else{
        return 'Olmadı';
    }
    }
}