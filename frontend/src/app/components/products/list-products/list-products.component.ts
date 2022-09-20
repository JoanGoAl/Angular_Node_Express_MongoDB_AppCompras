import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { Product } from 'src/app/models';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { ProductService } from 'src/app/services';


const ELEMENT_DATA: Product[] = [
  {
    id: "1",
    name: "Exmaple",
    content: "Example - Description - 1",
    category: "Examples",
  },
  {
    id: "2",
    name: "Exmaple",
    content: "Example - Description - 2",
    category: "Examples",
  },
  {
    id: "3",
    name: "Exmaple",
    content: "Example - Description - 3",
    category: "Examples",
  },
  {
    id: "4",
    name: "Exmaple",
    content: "Example - Description - 4",
    category: "Examples",
  },
  {
    id: "5",
    name: "Exmaple",
    content: "Example - Description - 5",
    category: "Examples",
  },
  {
    id: "6",
    name: "Exmaple",
    content: "Example - Description - 6",
    category: "Examples",
  }
];

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent implements AfterViewInit {
  displayedColums: String[] = ['id', 'name', 'content', 'category']
  dataSource = new MatTableDataSource<Product>(ELEMENT_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer, private _productService: ProductService) { }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    console.log(this._productService.allProducts().subscribe((e) => e));

  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction} ending`)
    } else {
      this._liveAnnouncer.announce('Sorting Cleared')
    }
  }

}
