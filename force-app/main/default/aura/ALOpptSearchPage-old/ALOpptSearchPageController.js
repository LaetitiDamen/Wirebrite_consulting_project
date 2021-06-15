({
    handleClick : function (component, event, helper) {

        // Ici on fait l'action appellé la méthode search
        // définie dans la class Apex LCOpportunitySearchController
        var action = component.get("c.search");

        // Ici on récupére le input lightnig grace au tage html aura:id="searchText".
        var inputCmp = component.find("searchText");

        // get('v.value') pour récupérer la valeur saisie.
        var searchText = inputCmp.get("v.value");

        //Ici on récupére l'id du compte qui représenté par recordId dans salesforce.
        var accountId = component.get('v.recordId');

        // Ici on passe à la méthode searche les paramettres necessaire pour faire la recherche
        action.setParams({
            "searchText": searchText,
            "accountId": accountId
        });

        // Ici on configure l'appele pour contacter la class Apex et ensuite la méthode search
        action.setCallback(this, function (response) {
            // Ici on recupéré l'état de requete.
            var state = response.getState();

            // Ici on test la réponse.
            if (state === "SUCCESS") {
                // ici on récupére le resultat de la quette
                var res = response.getReturnValue();

                console.log('###Res '+JSON.stringify(res));

                //Ici on récupére la liste des opportunités trouvé
                // et on le passe au variable searchResult pour ensuite l'affiché dans le tableau.
                component.set('v.searchResults', res);
            }
            else if (state === "INCOMPLETE") {
                // do something
            }
            else if (state === "ERROR") {
                // Ici On gére  les erreur (On peut même utilisé
                // un Toast pour afficher l'erreur sous forme de message)
                var errors = response.getError();
                console.log('###Errors '+JSON.stringify(errors));
            }
        });

        // Ici on lance l'action pour l'appelle.
        $A.enqueueAction(action);
    }

})