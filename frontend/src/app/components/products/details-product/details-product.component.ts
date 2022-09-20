import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Product } from 'src/app/models';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {
  product: Product = {
    _id: "56789",
    title: "Moises",
    category: "Farlopa",
    content: "A"
  };

  val!: Product;

  constructor(private dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(ProductDialog, {
      width: '50%',
      height: '50%',
      data: {
        _id: this.product._id,
        title: this.product.title
      },
    });

    dialogRef.afterClosed().subscribe(res => {
      console.log('The dialog was closed');
      this.val = res;
    });
  }

  ngOnInit(): void { }

}

@Component({
  selector: 'product-dialaog',
  templateUrl: './product-dialog.html',
  styleUrls: []
})
export class ProductDialog {
  constructor(
    public dialogRef: MatDialogRef<ProductDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Product
  ) {}

  onNoClick(): void {
    this.dialogRef.close()
  }
}
