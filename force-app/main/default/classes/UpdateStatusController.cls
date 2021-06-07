public class UpdateStatusController {
    @AuraEnabled

    public static void updateLeadStatus(Id recordId){
       
        lead statusObj= [SELECT Id, Status FROM Lead WHERE Id=:recordId];
        Lead leadObj = new Lead();
        leadObj.id = statusObj.id;
        leadObj.status = statusObj.status;
        

        update leadObj;

    }

}