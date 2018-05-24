function AddressBook() {
    this.contacts = [];


    this.getContact = function(contactPosition) {
        return this.contacts[contactPosition];
    };

    this.addContact = function(contact) {
        this.contacts.push(contact);
    };
}