import { Component, AfterViewInit, ViewChild, Input } from '@angular/core';
import { Category } from 'src/app/models';
import { CategoryService } from 'src/app/services/category.service';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements AfterViewInit {
  displayedColums: String[] = ['_id', 'name', 'description']
  dataSource = new MatTableDataSource<Category>();

  constructor(private _liveAnnouncer: LiveAnnouncer, private _categoriesService: CategoryService) { }

  @Input() categories?: Category[]


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  ngAfterViewInit(): void {
    console.log(this.categories);

    this.getCategories()

  }

  getCategories() {
    this._categoriesService.allCategories().subscribe((res) => {
      this.dataSource = new MatTableDataSource<Category>(res);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction} ending`)
    } else {
      this._liveAnnouncer.announce('Sorting Cleared')
    }
  }

}
