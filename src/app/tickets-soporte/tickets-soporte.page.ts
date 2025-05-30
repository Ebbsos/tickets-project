import { Timestamp } from '@angular/fire/firestore';
import { TicketI } from '../common/models/tickets';
import { FirestoreService } from './../common/services/firestore.service';
import { Component, OnInit } from '@angular/core';
import { timestamp } from 'rxjs';

@Component({
  selector: 'app-tickets-soporte',
  templateUrl: './tickets-soporte.page.html',
  styleUrls: ['./tickets-soporte.page.scss'],
  standalone: false,
})
export class TicketsSoportePage implements OnInit {
  tickets: TicketI[] = [];
  newTicket!: TicketI;
  constructor(private FirestoreService: FirestoreService) {}

  ngOnInit() {
    this.listarTickets();
    this.initTicket();
  }

  listarTickets() {
    this.FirestoreService.getCollectionChanges<TicketI>('tickets').subscribe(
      (data) => {
        if (data) {
          this.tickets = data;
        }
      }
    );
  }

  initTicket() {

    this.newTicket = {
      id: '',
      asunto: '',
      descripcion: '',
      estado: '',
      fecha_creacion: '',
      asignado_a: '',
    };
  }


  edit(ticket: TicketI) {
    this.newTicket = { ...ticket };
    console.log('editando el ticket', ticket);
  }
  async delete(ticket: TicketI) {
    await this.FirestoreService.deleteDocumentID('tickets', ticket.id);
    console.log('Eliminando el ticket', ticket);
  }
  async save() {
    //si es un nuevo ticket osea no tiene ID, le asignamos uno nuevo
    if (!this.newTicket.id) {
      this.newTicket.id = this.FirestoreService.createIdDoc();
      await this.FirestoreService.createDocumentID(
        this.newTicket,
        'tickets',
        this.newTicket.id
      );
    } else {
      await this.FirestoreService.updateDocument(
        this.newTicket,
        'tickets',
        this.newTicket.id
      );
    }
    this.initTicket(); //limpiar despues de guardar
  }
}
