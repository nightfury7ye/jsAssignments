class ContactInfo {
    constructor(type, value) {
        this.type = type
        this.value = value
    }
    static newContactInfo(type, value) {
        //type check
        if(typeof type !== "string" && typeof value !== "string"){
            throw TypeError("Invalid arguments! not String")
        }
        return new ContactInfo(type, value)
    }
    // getContactInfo(){
    //     return this
    // }
    updateType(type){
        if(typeof type !== "string"){
            throw TypeError("Invalid arguments! not String")
        }
        this.type = type
    }
    updateValue(value){
        if(typeof value !== "string"){
            throw TypeError("Invalid arguments! not String")
        }
        this.value = value
    }
}
module.exports = ContactInfo