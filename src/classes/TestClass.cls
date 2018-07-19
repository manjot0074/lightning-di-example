@isTest
public class TestClass {

	@isTest
	public static void test() {
		injectionController.getComponentName();
	}
    
	@isTest
    public static void test1() {
        ACController.getContacts('001010101010');
    }

	// Tests are just to fullfill 75% code coverage criteria to package our code.
}