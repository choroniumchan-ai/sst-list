import { Component, signal, AfterViewInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import {DetailDialog} from './dialog/detail-dialog/detail-dialog'

export interface PeriodicElement {
  position: number;
  theme: string;
  meeting: string;
  others: string;
  timestamp: string;
  movielink: string;
  administration: string;
  date: string;
  type: string;
  minutes: string;
  member: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];

const EXPANDED_ELEMENT_DATA: PeriodicElement[] = [];
for (let x = 0; x < 250; x++) {
  for (const entry of ELEMENT_DATA) {
    EXPANDED_ELEMENT_DATA.push({...entry, position: entry.position + 10 * x});
  }
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatTableModule, MatPaginatorModule, ScrollingModule, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
  protected readonly title = signal('test-app');
  // displayedColumns: string[] = ['position', 'date', 'movielink', 'member', 'theme', 'minutes', 'meeting'];
  displayedColumns: string[] = ['position', 'date', 'movielink', 'member', 'theme'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.getSpreadsheetData().subscribe(data => {
      // ここでログ出力
      console.log('取得したデータ:', data);

      // jsonの配列から順番にインターフェースの型に変換して代入
      var dataList = data
        .filter(item => item.日付) // ← 日付が空・null・undefinedを除外
        .map(item => {
        return {
          position: Number(item.No),
          theme: String(item.テーマ),
          meeting: String(item.会議名),
          others: String(item.備考・リンクなど),
          timestamp: String(item.タイムスタンプ),
          movielink: String(item.動画リンク),
          administration: String(item.政権),
          date: String(item.日付).substring(0, 10).replace(/-/g, '/'),
          type: String(item.衆議院・参議院),
          minutes: String(item.議事録リンク),
          member: String(item.議員名),
        } as PeriodicElement;
      });

      this.dataSource.data = dataList;
      this.dataSource.paginator = this.paginator;
    });
  }

  ngAfterViewInit() {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private http = inject(HttpClient);
  private url = 'https://script.google.com/macros/s/AKfycbxYcU4RUl8z2_-WJ8BY7rErBIqJ0Jou38N7unlb4uqcWNDflclU1rkPbtP3IF-_5snkSw/exec';

  getSpreadsheetData() {
    return this.http.get<any[]>(this.url);
  }

  openDetail(row: PeriodicElement) {
    console.log(row);
    this.dialog.open(DetailDialog, {
      data: {row: row}
    });
  }
}
