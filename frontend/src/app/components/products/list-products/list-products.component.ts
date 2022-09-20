import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { Product } from 'src/app/models';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { ProductService } from 'src/app/services';

<<<<<<< HEAD

const ELEMENT_DATA: Product[] = [
  {
    _id: "1",
    name: "Exmaple",
    content: "Example - Description - 1",
    category: "Examples",
  },
  {
    _id: "2",
    name: "Exmaple",
    content: "Example - Description - 2",
    category: "Examples",
  },
  {
    _id: "3",
    name: "Exmaple",
    content: "Example - Description - 3",
    category: "Examples",
  },
  {
    _id: "4",
    name: "Exmaple",
    content: "Example - Description - 4",
    category: "Examples",
  },
  {
    _id: "5",
    name: "Exmaple",
    content: "Example - Description - 5",
    category: "Examples",
  },
  {
    _id: "6",
    name: "Exmaple",
    content: "Example - Description - 6",
    category: "Examples",
  }
];

=======
>>>>>>> b3386dc017dd55e34422aece469cdf6f1591caef
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent implements AfterViewInit {
<<<<<<< HEAD
  displayedColums: String[] = ['_id', 'name', 'content', 'category']
  dataSource = new MatTableDataSource<Product>(ELEMENT_DATA);
=======
  displayedColums: String[] = ['_id', 'title', 'content', 'category', 'options']
  dataSource = new MatTableDataSource<Product>();
>>>>>>> b3386dc017dd55e34422aece469cdf6f1591caef

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
