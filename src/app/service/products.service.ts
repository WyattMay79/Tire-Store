import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { Tires } from '../models/tires';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  dataSource: string = "http://localhost:3000/products"

  product?: Tires[];

  constructor(private http: HttpClient) { }

  getTiresById(id: number): Observable<Tires> {
    return this.http.get<Tires>(this.dataSource + "/" + id);
  }

  getAllTires(): Observable<Tires[]> {
    return this.http.get<Tires[]>(this.dataSource);
  }

  createNewTire(newTire: Tires): Observable<Tires> {
    return this.http.post<Tires>(this.dataSource, newTire)
  }

  editTireById(id: number, edittedTire: Tires): Observable<Tires>{
    return this.http.put<Tires>(this.dataSource + "/" + id, edittedTire)
  }

  deleteTireById(id: number): Observable<any>{
    return this.http.delete<any>(this.dataSource + "/" + id)
  }

  sortProducts(sortBy: string): Observable<any>{
    return this.http.get<any>(`${this.dataSource}/?_sort=${sortBy}`);
  }
}
