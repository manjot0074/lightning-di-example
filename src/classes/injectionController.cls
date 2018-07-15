public class injectionController {
	@auraEnabled
    public static String getComponentName() {
        LightningInjection__c injectionRec = LightningInjection__c.getValues('AccountContact');
        if(injectionRec != null){
            return injectionRec.componentName__c;
        }
        return null;
    }
}