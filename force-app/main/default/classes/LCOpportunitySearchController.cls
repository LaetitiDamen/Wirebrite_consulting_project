public with sharing class LCOpportunitySearchController {

   @AuraEnabled
    public List<opportunity> searchResults {get;set;}

 @AuraEnabled
 static String accountId;


    public LCOpportunitySearchController() {

    }

@AuraEnabled (Cacheable=true)
public static  List<opportunity>  search(String searchText, String accountId) {
        searchResults = new List<opportunity>(); // init the list if it is null
    
    // Note: you could have achieved the same results as above by just using:
    // searchResults = new List<categoryWrapper>();

    // use some dynamic soql to find the related opportunities by name
    
    String acctId = accountId;
    //String qry = 'Select o.Id, o.Name, o.CloseDate, o.Amount from Opportunity o Where AccountId = '
    //     +a.Id ; 
    //string searchquery='select Name,id from account where name like \'%'+searchKey+'%\' Limit 10';
   String searchquery='select Name,id,StageName,CloseDate,Amount from Opportunity where  name like \'%'+searchText+'%\' and AccountId = :acctId ';
   System.debug('search query obtained '+searchquery);     
    searchResults = Database.query(searchquery);
    return searcResults;
}


}
