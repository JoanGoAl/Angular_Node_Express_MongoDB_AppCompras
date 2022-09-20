import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "../models"

const baseUrl: string = "http://localhost:3000/categories"

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    constructor(private _http: HttpClient) { }

    allCategories(): Observable<Category[]> {
        return this._http.get<Category[]>(`${baseUrl}/allcategories`)
    }
}




























