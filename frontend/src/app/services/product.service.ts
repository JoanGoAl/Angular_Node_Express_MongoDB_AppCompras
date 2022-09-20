import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { Product } from '../models';

const baseUrl: string = "http://localhost:3000/products"

@Injectable({
  providedIn: "root"
})
export class ProductService {

  constructor (private _http: HttpClient) { }

  allProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(`${baseUrl}/allproducts`);
  }

}
