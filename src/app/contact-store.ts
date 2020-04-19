import { observable, action } from 'mobx-angular';
class ContactStore {
  @observable contacts = [];
  @action setContacts(contacts) {
    this.contacts = contacts;
  }
}
export const contactStore = new ContactStore();
