import { inject, Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  deleteDoc,
  doc,
  Firestore,
  setDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  private firestore: Firestore = inject(Firestore);

  constructor() {}

  getCollectionChanges<tipo>(path: string) {
    const item = collection(this.firestore, path);
    return collectionData(item) as Observable<tipo[]>;
  }

  deleteDocumentID(enlace: string, idDoc: string) {
    const document = doc(this.firestore, `${enlace}/${idDoc}`);
    return deleteDoc(document);
  }

  createDocumentID(data: any, enlace: string, idDoc: string) {
    const document = doc(this.firestore, `${enlace}/${idDoc}`);
    return setDoc(document, data);
  }

  createIdDoc() {
    return uuidv4();
  }
  updateDocument(data: any, enlace: string, idDoc: string) {
    const document = doc(this.firestore, `${enlace}/${idDoc}`);
    return setDoc(document, data, { merge: true }); // ✅ solo actualiza los campos dados
  }
}
