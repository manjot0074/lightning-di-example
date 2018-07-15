({
	init : function init(component, event, helper) {
		var ACDataService = component.find('ACDataService');
        ACDataService.getContacts({
            accountId : component.get('v.recordId')
        })
        .then( $A.getCallback(function(contactList){
            component.set('v.contactList', contactList);
        }))
        .catch( function(error){
            console.log(error.message); 
        });
        var injectionService = component.find('injectionService');
        injectionService.getComponentName()
        .then($A.getCallback(function(componentName){
            $A.createComponent(componentName,{
                accountId : component.get('v.recordId'),
                contact: component.get('v.cont'),
                "aura:id" : "injectedComponent"
            }
            , function (contentComponent, status, error) {
                if (status === 'SUCCESS') {
                    component.set('v.injectedComponent', contentComponent);
                } else {
                    $A.log(error);
                }
            });
        }))
        .catch( function(error){
            console.log(error.message); 
        });
	},
    selectContact : function selectContact(component, event){
      var index = event.currentTarget.id;
      component.set('v.cont',component.get('v.contactList')[index]);
      var injectedComponent = component.find('injectedComponent')
      if(injectedComponent && injectedComponent.isValid()){
      	injectedComponent.set('v.contact',component.get('v.contactList')[index]);   
      }
    }
})