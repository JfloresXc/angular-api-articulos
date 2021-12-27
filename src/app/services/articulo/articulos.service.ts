import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Articulo from 'src/app/models/Articulo.model';

@Injectable({
  providedIn: 'root',
})
export class ArticulosService {
  urlAPI = 'http://localhost:8080/articulos';
  constructor(private http: HttpClient) {}

  public getArticulos(): Observable<Articulo> {
    return this.http.get<Articulo>(this.urlAPI);
  }
}
