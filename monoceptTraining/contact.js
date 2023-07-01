const ContactInfo = require("./ContactInfo")
class Contact {
    constructor(cName) {
        this.cName = cName
        this.contactInfos = []
    }
    static newContact(cName) {
        //cName check
        if(typeof cName !== "string"){
            throw TypeError("Invalid arguments! not String")
        }
        return new Contact(cName)
    }
    addContactInfos(type, value) {
        if (typeof type !== 'string')
            throw TypeError('Type must be a string!')
        const newContactInfo = ContactInfo.newContactInfo(type, value)
        this.contactInfos.push(newContactInfo)
        return newContactInfo
    }
    updateContactName(newName){
        if(typeof newName !== "string"){
            throw TypeError("Invalid arguments! not String")
        }
        this.cName = newName
    }
    getContactInfo(){
        return this.contactInfos
    }
    findContactInfo(type){
        if(typeof type !== "string"){
            throw TypeError("Invalid arguments! not String")
        }
        for (let index = 0; index < this.contactInfos.length; index++) {
            if (this.contactInfos[index].type == type) {
                return [true, index]
            }
        }
        return [false, -1]
    }
    updateContactInfo(type, parameter, newValue){
        let [isContactInfoExist, indexOfContactInfo] = this.findContactInfo(type)
        if (!isContactInfoExist) {
            throw new Error("ContactInfo Do not Exist")
        }
        if (type === newValue) {
            throw new Error("Type Already Exist")
        }
        switch (parameter) {
            case "type": this.getContactInfo()[indexOfContactInfo].updateType(newValue)
                break;
            case "value": this.getContactInfo()[indexOfContactInfo].updateValue(newValue)
                break;
            default:
                throw new Error("Invalid Parameter")
        }
    }
    deleteContactInfo(type){
        let [isContactInfoExist, indexOfContactInfo] = this.findContactInfo(type)
        if (!isContactInfoExist) {
            throw new Error("ContactInfo Do not Exist")
        }
        this.getContactInfo().splice(indexOfContactInfo, 1)
    }
}
module.exports = Contact