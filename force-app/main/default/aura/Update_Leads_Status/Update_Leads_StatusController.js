({
    accept : function(component, event, helper) {
        sforce.connection.sessionId='{!GETSESSIONID()}';
        
        // Get the values & Display result
        
        var leadObj = new sforce.SObject("Lead");
        leadObj.Id = '{!Lead.Id}';
        leadObj.status = 'Contacted';
        var result = sforce.connection.update([leadObj]);
        
        
        if (result[0].success =='false') {
            alert (result[0].errors.message);
        }
        else {
        //window.opener.location.href = "/{!Lead.Id}";
            window.location.reload();
        }
       // Close the action panel
        
       //var closeAction = $A.get("e.force:closeQuickAction");
       //closeAction.fire();
        $A.get("e.force:closeQuickAction").fire();
    }
})