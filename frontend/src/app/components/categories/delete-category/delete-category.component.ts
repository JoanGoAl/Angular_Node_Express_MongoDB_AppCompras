import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Category } from 'src/app/models';
import { CategoryListService } from 'src/app/services';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  @Input() data?: Category[] | any

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '30%';
    dialogConfig.height = "30%";

    dialogConfig.data = this.data

    this.dialog.open(DeleteCategoryDialog, dialogConfig);
  }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'category-dialaog',
  templateUrl: './delete-category-dialog.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryDialog implements OnInit {
  catName?: String
  catDescription?: String

  constructor(
    public dialogRef: MatDialogRef<DeleteCategoryDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Category | any,
    private _categoryListService: CategoryListService,
  ) { }

  deleteCategory() {

    this._categoryListService.deleteOne(this.data._id).subscribe(({
      next: res => {
        this._categoryListService.categories = this._categoryListService.categories.filter(p => p._id !== this.data._id);
      },
      error: e => console.error(e)
    }))

    this.closeModal()
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