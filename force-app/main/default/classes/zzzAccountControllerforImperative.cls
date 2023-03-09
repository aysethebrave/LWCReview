public with sharing class zzzAccountControllerforImperative {
   
 @AuraEnabled
   public static List<Account> findAccountList(String keyWord) {
    String key= '%'+keyWord+'%';
    return [SELECT id, name FROM Account WHERE name LIKE: key LIMIT 10 ];
    }
}