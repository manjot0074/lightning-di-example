({
	getInjectionComponent : function getInjectionComponent(component, event, helper) {
        var action = component.get('c.getComponentName');
        action.setBackground();
        return helper.executeAction(action);
	}
})