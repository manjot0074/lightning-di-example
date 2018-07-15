public class ACController {
    @auraEnabled
    public static List<Contact> getContacts(String account) {
        return [Select id,name,MobilePhone from contact where accountId = :account];
    }
}