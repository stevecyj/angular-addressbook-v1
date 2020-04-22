import { observable, action } from 'mobx-angular';
class ContactStore {
  @observable contacts = [];
  @action setContacts(contacts) {
    this.contacts = contacts.data;
  }
}
export const contactStore = new ContactStore();
