const ContactInfo = require("./ContactInfo")
class Contact {
    constructor(cName) {
        this.cName = cName
        this.contactInfos = []
    }
    static newContact(cName) {
        //cName check
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
        this.cName = newName
    }
    getContactInfo(){
        return this.contactInfos
    }
    findContactInfo(type){
        for (let index = 0; index < this.contactInfos.length; index++) {
            if (this.contactInfos[index].type == type) {
                return [true, index]
            }
        }
        return [false, -1]
    }
}
module.exports = Contact