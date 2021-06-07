({
    myAction : function(component, event, helper) {

    },

    handleClick : function (cmp, event, helper) {
        
        alert("You clicked: " + event.getSource().get("v.label"));


        /*var action = component.get("c.searchText");
        action.setCallback(this, function (response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var res = response.getReturnValue();
                component.set('v.searchResult', res);
            }
            else if (state === "INCOMPLETE") {
                // do something
            }
            else if (state === "ERROR") {
                var errors = response.getError();
    }

    */
})
