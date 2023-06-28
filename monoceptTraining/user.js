const Contact = require("./Contact")

class User {
    static allUser = []
    constructor(name, username, isAdmin) {
        this.name = name
        this.username = username
        this.isAdmin = isAdmin
        this.contacts = []
    }
    static findUser(username) {
        //type validation
        if(typeof username !== "string"){
            throw new Error("Invalid arguments! not String")
        }
        for (let index = 0; index < User.allUser.length; index++) {
            if (User.allUser[index].username == username) {
                return [true, index]
            }
        }
        return [false, -1]
    }
    findContact(cName) {
        if(typeof cName !== "string"){
            throw new Error("Invalid arguments! not String")
        }
        for (let index = 0; index < this.contacts.length; index++) {
            if (this.contacts[index].cName == cName) {
                return [true, index]
            }
        }
        return [false, -1]

    }
    newContact(cName) {
        //check cname is string
        //check not admin
        if(typeof cName !== "string"){
            throw new Error("Invalid arguments! not String")
        }
        if (this.isAdmin){
            throw new Error("Admin Cannot Create Contacts")
        }
        let [isContactExist, indexOfContact] = this.findContact(cName)
        if (isContactExist) {
            throw new Error("Contact Already Exist")
        }
        
        const newContact = Contact.newContact(cName)
        this.contacts.push(newContact)
        return newContact
    }

    getContact(){
        if (this.isAdmin) {
            throw new Error("Unauthorized")
        }
        return this.contacts
    }
    updateContact(cName, newName){
        if(typeof cName !== "string" && typeof newName !== "string"){
            throw new Error("Invalid arguments! not String")
        }
        if (this.isAdmin) {
            throw new Error("Unauthorized")
        }
        let [isUserExist, indexOfUserFound] = this.findContact(cName)
        if (!isUserExist) {
            throw new Error("Username Does not Exist")
        }
        this.contacts[indexOfUserFound].updateContactName(newName)
    }

    deleteContact(cName) {
        if(typeof cName !== "string"){
            throw new Error("Invalid arguments! not String")
        }
        if (this.isAdmin) {
            throw new Error("Unauthorized")
        }
        let [isUserExist, indexOfContactFound] = this.findContact(cName)
        if (!isUserExist) {
            throw new Error("Contact Does not Exist")
        }
        this.contacts.splice(indexOfContactFound, 1)
    }

    addContactInfo(cName, type, value){
        if(typeof cName !== "string" && typeof type !== "string" && typeof value !== "string"){
            throw new Error("Invalid arguments! not String")
        }
        if (this.isAdmin) {
            throw new Error("Unauthorized")
        }
        let [isUserExist, indexOfContactFound] = this.findContact(cName)
        if (!isUserExist) {
            throw new Error("Contact Does not Exist")
        }
        // console.log(this.contacts[indexOfContactFound]);
        return this.contacts[indexOfContactFound].addContactInfos(type, value)
    }
    getContactInfo(cName){
        if(typeof cName !== "string"){
            throw new Error("Invalid arguments! not String")
        }
        if (this.isAdmin) {
            throw new Error("Unauthorized")
        }
        let [isUserExist, indexOfContactFound] = this.findContact(cName)
        if (!isUserExist) {
            throw new Error("Contact Does not Exist")
        }
        return this.contacts[indexOfContactFound].getContactInfo()
    }
    updateContactInfo(cName, type, parameter, newValue){
        if(typeof cName !== "string" && typeof type !== "string" && typeof parameter !== "string" && typeof newValue !== "string"){
            throw new Error("Invalid arguments! not String")
        }
        if (this.isAdmin) {
            throw new Error("Unauthorized")
        }
        let [isContactExist, indexOfContactFound] = this.findContact(cName)
        if (!isContactExist) {
            throw new Error("Contact Does not Exist")
        }
        const contact = this.contacts[indexOfContactFound]
        let [isContactInfoExist, indexOfContactInfo] = contact.findContactInfo(type)
        if (!isContactInfoExist) {
            throw new Error("ContactInfo Do not Exist")
        }
        if (type === newValue) {
            throw new Error("Type Already Exist")
        }
        switch (parameter) {
            case "type": contact.getContactInfo()[indexOfContactInfo].updateType(newValue)
                break;
            case "value": contact.getContactInfo()[indexOfContactInfo].updateValue(newValue)
                break;
            default:
                throw new Error("Invalid Parameter")
        }
    }

    deleteContactInfo(cName, type) {
        if(typeof cName !== "string" && typeof type !== "string"){
            throw new Error("Invalid arguments! not String")
        }
        if (this.isAdmin) {
            throw new Error("Unauthorized")
        }
        let [isUserExist, indexOfContactFound] = this.findContact(cName)
        if (!isUserExist) {
            throw new Error("Contact Does not Exist")
        }
        const contact = this.contacts[indexOfContactFound]
        let [isContactInfoExist, indexOfContactInfo] = contact.findContactInfo(type)
        if (!isContactInfoExist) {
            throw new Error("ContactInfo Do not Exist")
        }
        contact.getContactInfo().splice(indexOfContactInfo, 1)
    }

    static newAdmin(name, username) {
        //type validation - name -username
        if(typeof username !== "string" && typeof name !== "string"){
            throw new Error("Invalid arguments! not String")
        }
        let [isUserExist, indexOfUserFound] = User.findUser(username)
        if (isUserExist) {
            throw new Error("Username Already Exist")
        }
        const admin = new User(name, username, true)
        User.allUser.push(admin)
        return admin
    }
    newUser(name, username) {
        //type validation - name -username
        //check
        if(typeof username !== "string" && typeof name !== "string"){
            throw new Error("Invalid arguments! not String")
        }
        if (!this.isAdmin) {
            throw new Error("Unauthorized")
        }
        let [isUserExist, indexOfUserFound] = User.findUser(username)
        if (isUserExist) {
            throw new Error("Username Already Exist")
        }
        const user = new User(name, username, false)
        User.allUser.push(user)
        return user
    }
    getAllUser() {
        if (!this.isAdmin) {
            throw new Error("Unauthorized")
        }
        return User.allUser
    }
    updateUser(username, parameter, newValue) {
        //type validation - name -username
        //check
        if(typeof username !== "string" && typeof parameter !== "string" && typeof newValue !== "string"){
            throw new Error("Invalid arguments! not String")
        }
        if (!this.isAdmin) {
            throw new Error("Unauthorized")
        }
        let [isUserExist, indexOfUserFound] = User.findUser(username)
        if (!isUserExist) {
            throw new Error("Username Does not Exist")
        }
        switch (parameter) {
            case "name": User.allUser[indexOfUserFound].updateName(newValue)
                break;
            case "username": User.allUser[indexOfUserFound].updateUsername(newValue)
                break;
            default:
                throw new Error("Invalid Parameter")

        }
    }
    updateName(newName) {
        //newName string check
        if(typeof newName !== "string"){
            throw new Error("newName is not String")
        }
        this.name = newName
    }
    updateUsername(newUsername) {
        if(typeof newUsername !== "string"){
            throw new Error("newName is not String")
        }
        let [isUserExist, indexOfUserFound] = User.findUser(newUsername)
        if (isUserExist) {
            throw new Error("Username Already Exists")
        }
        this.username = newUsername
    }
    deleteUser(username) {
        if(typeof username !== "string"){
            throw new Error("newName is not String")
        }
        if (!this.isAdmin) {
            throw new Error("Unauthorized")
        }
        let [isUserExist, indexOfUserFound] = User.findUser(username)
        if (!isUserExist) {
            throw new Error("Username Does not Exist")
        }
        User.allUser.splice(indexOfUserFound, 1)
        // User.allUser.slice()
    }

}

module.exports = User