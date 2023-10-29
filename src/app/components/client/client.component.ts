import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit{

  client$!: Observable<Client>

  constructor(private clientService: ClientService){}

  ngOnInit(): void {
    this.client$ = this.clientService.getClient()
    this.client$.subscribe((clientData) => {
      console.log(clientData); // Affiche les données du client dans la console
    });
  }

}
