({
	getContactsAction : function getContactsAction(component, event, helper) {
		var params = event.getParam('arguments');
        if (params && params.payload) {
            var action = component.get('c.getContacts');
            action.setParams({
                account : params.payload.accountId
            });
            return helper.executeAction(action);
        }
	}
})