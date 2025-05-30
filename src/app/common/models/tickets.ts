import { Timestamp } from "@angular/fire/firestore";

export interface TicketI {
  id: string;
  asunto: string;
  descripcion: string;
  estado: string;
  fecha_creacion: string;
  asignado_a: string;
}
