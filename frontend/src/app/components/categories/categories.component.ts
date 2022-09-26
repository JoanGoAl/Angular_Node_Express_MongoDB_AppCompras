import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/models';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories?: Category[]
  constructor(private _categorieService: CategoryService) { }


  ngOnInit(): void {

    this._categorieService.allCategories().subscribe((res: Category[]) => {
      this.categories = res
    })

    console.log(this.categories);

  }

}
