import { Component, AfterViewInit } from '@angular/core';
import { Category } from 'src/app/models';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements AfterViewInit {

  categoryDate: Category[] = []
  constructor(private _categoriesService: CategoryService) { }

  ngAfterViewInit(): void {
    this._categoriesService.allCategories().subscribe((res) => {
      console.log(res)
      // this.categoryDate = new Array.from()
    })

    console.log(this.categoryDate)
  }

}
