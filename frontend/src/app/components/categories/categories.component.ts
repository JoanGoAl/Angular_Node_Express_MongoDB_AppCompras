import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private _categoriesService: CategoryService) { }


  // allCategories = this._categoriesService.allCategories()

  ngOnInit(): void {
    // console.log(this.allCategories)




  }

}
