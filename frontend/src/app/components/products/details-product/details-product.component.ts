import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Product } from 'src/app/models';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.height = "50%";

    this.dialog.open(ProductDialog, dialogConfig);
  }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'product-dialaog',
  template: `
      <h1 mat-dialog-title>Hi Moises</h1>
      <div mat-dialog-content>
        <p>¿Como Estás?</p>
      </div>
    `,
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
