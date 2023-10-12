import { Injectable } from '@angular/core';
import { ClUsuario } from './model/ClUsuario';

// Importamos  las librerías necesarias
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

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

  getUsuario(id: String): Observable<ClUsuario> {
    console.log("getUsuario ID:" + id);
    return this.http.get<ClUsuario>(apiUrl + "/" + id)
      .pipe(
        tap(_ => console.log('Trae el usuario id=${id}')),
        catchError(this.handleError<ClUsuario>('getUsuario id=${id}'))
      );
  }  

  borradoUsuario(id: number): Observable<ClUsuario> {
    return this.http.delete<ClUsuario>(apiUrl + "/" + id, httpOptions)
      .pipe(
        tap(_ => console.log('borrar borrar usuario id=${id}')),
        catchError(this.handleError<ClUsuario>('borradoUsuario'))
      );
  }

  actualizarUsuario(id: number, usuario: ClUsuario): Observable<ClUsuario> {
    return this.http.put<ClUsuario>(apiUrl + "/" + id, usuario, httpOptions)
      .pipe(
        tap(_ => console.log('usuario actualizado id=${id}')),
        catchError(this.handleError<any>('actualizarUsuario'))
      );
  }


}