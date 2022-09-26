import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Category } from 'src/app/models';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  @Input() data?: Category
  @Input() categories?: Category[]

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '30%';
    dialogConfig.height = "30%";

    dialogConfig.data = [this.data, this.categories]

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
    @Inject(MAT_DIALOG_DATA) public data: Category,
    private _catgoryService: CategoryService
  ) { }



  deleteCategory() {

    console.log(this.data)
    // const info: Category = {
    //   name: this.catName || '',
    //   description: this.catDescription || ''
    // }

    // this._catgoryService.addOne(info).subscribe(e => {
    //   console.log(e);
    // })
    // console.log(info)
    // this.dialogRef.close()
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