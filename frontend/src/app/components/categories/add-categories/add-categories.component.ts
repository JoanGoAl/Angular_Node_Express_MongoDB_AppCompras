import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Category } from 'src/app/models';


@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent implements OnInit {

  constructor(private dialog: MatDialog) { }


  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.height = "50%";

    this.dialog.open(AddCategoryDialog, dialogConfig);
  }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'category-dialaog',
  templateUrl: './dialog-category.html',
  styleUrls: []
})
export class AddCategoryDialog {
  constructor(
    public dialogRef: MatDialogRef<AddCategoryDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Category
  ) { }

  onNoClick(): void {
    this.dialogRef.close()
  }
}