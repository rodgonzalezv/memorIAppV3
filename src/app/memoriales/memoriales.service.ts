import { Injectable } from '@angular/core';
import { apiMemoriales } from './model/apiMemoriales';

// Importamos  las librerías necesarias
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

// creamos Constantes que utilizaremos en el envio
const apiUrl = "https://sumativa2.onrender.com/api/productos";
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class MemorialesService {
  // Injectamos HttpClient, para poder consular una página
  constructor(private http: HttpClient) { }

  // Controla y enviará un mensaje a consola para todos los errores
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error("handleError datos de la api externa", error); // log to console instead
      return of(result as T);
    };
  }

  // Obtenemos todos los Productos
  getMemoriales(): Observable<apiMemoriales[]> {
    console.log("apiMemoriales ()");
    return this.http.get<apiMemoriales[]>(apiUrl)
      .pipe(
        tap(heroes => console.log('traer memoriales')),
        catchError(this.handleError('getMemoriales', []))
      );
  }
  


  //  Obtener un Producto
  getMemorial(idProducto: String): Observable<apiMemoriales> {
    //const url = '${apiUrl}/${id}';
    //return this.http.get<Producto>(url).pipe(
    console.log("getMemorial idProducto x:" + idProducto);
    return this.http.get<apiMemoriales>(apiUrl + "/" + idProducto)
      .pipe(
        tap(_ => console.log('fetched product id=${codigo}')),
        catchError(this.handleError<apiMemoriales>('getMemorial id=${codigo}'))
      );
  }

  borrarMemorial(id: number): Observable<apiMemoriales> {
    return this.http.delete<apiMemoriales>(apiUrl + "/" + id, httpOptions)
      .pipe(
        tap(_ => console.log('borrar memorial id=${idProducto}')),
        catchError(this.handleError<apiMemoriales>('deleteMemorial'))
      );
  }

  actualizarMemorial(idProducto: number, nombreprod: apiMemoriales): Observable<apiMemoriales> {
    return this.http.put<apiMemoriales>(apiUrl + "/" + idProducto, nombreprod, httpOptions)
      .pipe(
        tap(_ => console.log('memorial actualizado id=${idProducto}')),
        catchError(this.handleError<any>('actualizarMemorial'))
      );
  }

}

