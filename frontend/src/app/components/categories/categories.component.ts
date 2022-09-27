import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/models';
import { CategoryService } from 'src/app/services/category.service';
import { lastValueFrom, timeout } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private _categorieService: CategoryService) { }

  setReload() {
    console.log('reload');
  }

  ngOnInit(): void {
  }

}
