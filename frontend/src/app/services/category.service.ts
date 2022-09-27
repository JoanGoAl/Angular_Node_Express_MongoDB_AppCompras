import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Category } from '../models';

const baseUrl: string = "http://localhost:3000/categories"

@Injectable({ providedIn: 'root' })
export class CategoryListService {
    private state = new BehaviorSubject<Category[]>([]);
    state$ = this.state.asObservable();

    constructor(private http: HttpClient) { }

    get categories(): Category[] {
        return this.state.getValue();
    }

    set categories(data: Category[]) {
        this.state.next(data);
    }

    allCategories(): Observable<Category[]> {
        return this.http.get<Category[]>(`${baseUrl}/allcategories`);
    }

    addOne(body: Category): Observable<Category> {
        return this.http.post<Category>(`${baseUrl}/addcategory`, body)
    }

    deleteOne(id: String): Observable<String> {
        return this.http.delete<String>(`${baseUrl}/deletecategory/${id}`)
    }

}