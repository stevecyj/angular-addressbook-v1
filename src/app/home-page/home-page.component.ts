import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ContactsService } from '../contacts.service';
import { contactStore } from '../contact-store';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  modalRef: BsModalRef;
  store = contactStore;
  edit: boolean;
  contacts: any[] = [];
  selectedContact: any = <any>{};
  // @ViewChild('closebutton') closebutton;
  constructor(
    private modalService: BsModalService,
    private contactsService: ContactsService
  ) {}
  openModal(addTemplate: TemplateRef<any>) {
    this.modalRef = this.modalService.show(addTemplate);
  }
  openEditModal(editTemplate: TemplateRef<any>, contact) {
    this.selectedContact = contact;
    this.modalRef = this.modalService.show(editTemplate);
  }
  closeModal() {
    this.modalRef.hide();
    this.selectedContact = {};
  }
  ngOnInit() {
    this.contactsService.getContacts().subscribe((res) => {
      this.store.setContacts(res);
    });
  }
  deleteContact(id) {
    this.contactsService.deleteContact(id).subscribe((res) => {
      this.getContacts();
    });
  }
  getContacts() {
    this.contactsService.getContacts().subscribe((res) => {
      this.store.setContacts(res);
    });
  }
}
