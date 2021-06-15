public with sharing class LCOpportunitySearchController {


    /**
     * @description constructeur de la classe LCOpportunitySearchController
     */
    public LCOpportunitySearchController() {

    }

    /**
     * @description chercher les opportunités liés à un compte (account) avec la clé de recger passée en parametre
     * @param searchText parametre search text pour le clé de la recherche
     * @param accountId represente l'id de compte lié a l'opportunité à chercher dans la base.
     *
     * @return List<Opportunity> retourne la liste des opportunités liés au compte (account) en fonction de la clé de recherche.
     */
    @AuraEnabled (Cacheable=true)
    public static  List<Opportunity>  search(String searchText, String accountId) {

        List<Opportunity> searchResults = new List<Opportunity>(); // init the list if it is null

        String acctId = accountId;
        String searchquery='select Name,id,StageName,CloseDate,Amount from Opportunity where  name like \'%'+searchText+'%\' and AccountId = :acctId ';
        System.debug('search query obtained '+searchquery);
        searchResults = Database.query(searchquery);

        return searchResults;
    }


}
