public with sharing class AccountController {
 
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAllAccounts(){
        
        /* 1. yol  
         List<account> accList = [SELECT id, name FROM account];
         return accList;
*/
       // 2. yontem
           
       return  [SELECT id, name FROM account];
        
      /* 3. yontem  
        string sorgu = 'SELECT id, name FROM account';
        
        return database.query(sorgu);
*/
        
    }
    
    
}