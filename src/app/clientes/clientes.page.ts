import { FirestoreService } from './../common/services/firestore.service';
import { Component, OnInit } from '@angular/core';
import { ClientesI } from '../common/models/clientes';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
  standalone: false,
})
export class ClientesPage implements OnInit {
  clientes: ClientesI[] = [];
  newCliente!: ClientesI;
  constructor(private FirestoreService: FirestoreService) {}

  ngOnInit() {
    this.listarClientes();

  }

  listarClientes() {
    this.FirestoreService.getCollectionChanges<ClientesI>('clientes').subscribe(
      (data) => {
        if (data) {
          this.clientes = data;
        }
      }
    );
  }

}
