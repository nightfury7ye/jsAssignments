//Driver Code

const User = require("./User");

try {
    const admin1 = User.newAdmin("yash", "yash1234")
    console.log("admin1>>>", admin1)
    const user1 = admin1.newUser("ritik", "ravi1234")
    console.log("user1>>>", user1)
    // const user2 = user1.newUser("Ravi", "ravi1234")
    // console.log("user2>>>", user2)
    admin1.updateUser("ravi1234", "name", "Ravi")
    console.log("user1  >>>", user1)
    user1.newContact("Vivek")
    user1.newContact("Praveen")
    user1.newContact("Pavan")
    console.log(user1.getContact())
    user1.deleteContact("Vivek")
    console.log(user1.getContact())
    console.log("*****************************");
    user1.addContactInfo("Praveen", "Home", "8879841862")
    user1.addContactInfo("Praveen", "Office", "9819420322")
    console.log("Contact will be displayed now",user1.getContact())
    user1.updateContact("Pavan", "Chotu")
    console.log(user1.getContact())
    console.log(user1.getContactInfo("Praveen"));
    console.log("*****************************");
    user1.updateContactInfo("Praveen", "Home", "type", "Main")
    console.log(user1.getContactInfo("Praveen"))
    user1.deleteContactInfo("Praveen", "Main")
    console.log(user1.getContactInfo("Praveen"))
    console.log(user1.getContactInfo("Chotu"))

} catch (error) {
    console.log(error.message)
}

