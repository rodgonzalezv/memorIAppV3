import { Injectable } from '@angular/core';
import { ClUsuario } from './model/ClUsuario';

// Importamos  las librerías necesarias
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

// creamos Constantes que utilizaremos en el envio
const apiUrl = "http://localhost:3000/usuarios";
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error("handleError Harrys", error);
      return of(result as T);
    };
  }


  getUsuarios(): Observable<ClUsuario[]> {
    console.log("getUsuarios ()");
    return this.http.get<ClUsuario[]>(apiUrl)
      .pipe(
        tap(heroes => console.log('traer Usuarios')),
        catchError(this.handleError('getUsuarios', []))
      );
  }

}