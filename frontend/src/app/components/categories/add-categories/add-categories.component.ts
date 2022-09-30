import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Category } from 'src/app/models';
import { CategoryListService } from 'src/app/services';

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
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoryDialog implements OnInit {
  catName?: String
  catDescription?: String

  constructor(
    public dialogRef: MatDialogRef<AddCategoryDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Boolean,
    public _categoryListService: CategoryListService
  ) { }

  getFormInfo() {
    const info: Category = {
      name: this.catName || '',
      description: this.catDescription || ''
    }

    // this._catgoryService.addOne(info).subscribe(e => {
    //   console.log(e);
    // })

    this._categoryListService.addOne(info).subscribe({
      next: res => {

        this._categoryListService.categories = [...this._categoryListService.categories, res]
      },
      error: e => console.error(e)
    })

    this.dialogRef.close()
  }

  closeModal() {
    this.dialogRef.close()

  }

  onNoClick(): void {
    this.closeModal()
  }

  ngOnInit(): void {
  }
}