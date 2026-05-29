import {Component, Inject} from '@angular/core';import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-detail-dialog',
  imports: [
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './detail-dialog.html',
  styleUrl: './detail-dialog.scss',
})
export class DetailDialog
{
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log(data);
    }
}
