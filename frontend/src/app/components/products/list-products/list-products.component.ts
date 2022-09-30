import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { Product } from 'src/app/models';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { ProductService } from 'src/app/services';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent implements AfterViewInit {
  displayedColums: String[] = ['_id', 'title', 'content', 'category', 'options']
  dataSource = new MatTableDataSource<Product>();

  constructor(private _liveAnnouncer: LiveAnnouncer, private _productService: ProductService) { }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  ngAfterViewInit(): void {
    this._productService.allProducts().subscribe((docs) => {
      this.dataSource = new MatTableDataSource<Product>(docs);

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
