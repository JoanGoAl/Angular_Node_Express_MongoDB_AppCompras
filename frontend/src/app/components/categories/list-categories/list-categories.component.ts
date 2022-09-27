import { Component, AfterViewInit, ViewChild, Input } from '@angular/core';
import { Category } from 'src/app/models';
import { CategoryListService } from 'src/app/services';
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
  displayedColums: String[] = ['_id', 'name', 'description', 'options']
  dataSource = new MatTableDataSource<Category>();

  constructor(private _liveAnnouncer: LiveAnnouncer,
    public _categoryListService: CategoryListService
  ) { }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  ngAfterViewInit(): void {
    this.getCategories()
  }

  getCategories() {

    if (this._categoryListService.categories.length == 0) {
      this._categoryListService.allCategories().subscribe({
        next: res => {
          this._categoryListService.categories = res

          this.dataSource = new MatTableDataSource<Category>(this._categoryListService.categories);

          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: e => console.error(e)
      });
    }
    this._categoryListService.state$.subscribe({
      next: res => this.dataSource = new MatTableDataSource<Category>(res),
      error: e => console.error(e)
    });


    // this.categories = this._categoryListService.categories

    // this._categoryListService.getCategories().subscribe((res) => {


    // })
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction} ending`)
    } else {
      this._liveAnnouncer.announce('Sorting Cleared')
    }
  }

}
