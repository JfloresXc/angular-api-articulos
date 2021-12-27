import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Categoria from 'src/app/models/Categoria.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriasService {
  urlAPI = 'http://localhost:8080/categorias';
  constructor(private http: HttpClient) {}

  public getCategorias(): Observable<Categoria> {
    return this.http.get<Categoria>(this.urlAPI);
  }
}
