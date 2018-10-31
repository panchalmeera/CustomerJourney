import { Component, OnInit } from '@angular/core';
import { TableService } from './table.service';
import { Table } from './Table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: []
})
export class TableComponent implements OnInit {

  characters: Table[];

  settings = {
    columns: {
      datalink: {
        title: 'Data Link'
      },
      createdby: {
        title: 'Created By'
      },
      reportname: {
        title: 'Report Name'
      },
      reporttype: {
        title: 'Report Type'
      },
      path: {
      	title: 'Path'
      }
    }
  };

  constructor(private tservice: TableService) { }

  ngOnInit() {
    this
      .tservice
      .getCharacters()
      .subscribe((data: Table[]) => {
        this.characters = data;
    });
  }

}