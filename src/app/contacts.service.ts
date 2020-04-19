import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor(private http: HttpClient) {}
  getContacts() {
    return this.http.get(`${environment.apiUrl}/contacts`);
  }
  addContact(data) {
    return this.http.post(`${environment.apiUrl}/contacts`, data);
  }
  editContact(data) {
    return this.http.put(`${environment.apiUrl}/contacts/${data.id}`, data);
  }
  deleteContact(id) {
    return this.http.delete(`${environment.apiUrl}/contacts/${id}`);
  }
}
