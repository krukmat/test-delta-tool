/**
 * @description       : 
 * @author            : Matias Kruk
 * @group             : 
 * @last modified on  : 01-14-2021
 * @last modified by  : Matias Kruk
 * Modifications Log 
 * Ver   Date         Author        Modification
 * 1.0   01-14-2021   Matias Kruk   Initial Version
**/
({
    navigateTo: function(component, recId) {
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId": recId
        });
        navEvt.fire();
    }
})

