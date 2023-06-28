class ContactInfo {
    constructor(type, value) {
        this.type = type
        this.value = value
    }
    static newContactInfo(type, value) {
        //type check
        return new ContactInfo(type, value)
    }
    // getContactInfo(){
    //     return this
    // }
    updateType(type){
        this.type = type
    }
    updateValue(value){
        this.value = value
    }
}
module.exports = ContactInfo