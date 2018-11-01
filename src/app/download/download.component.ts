import { Component, OnInit, Input, Output } from '@angular/core';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {
  
  @Input() source: string;

  constructor() { }

  ngOnInit() {
  }

  downloadGridData() {
  		var data = this.source;

		var options = { 
		    fieldSeparator: ',',
		    quoteStrings: '"',
		    decimalseparator: '.',
		    showLabels: true, 
		    showTitle: true,
		    useBom: true,
		    noDownload: true,
		    headers: ["FirstName", "LastName", "UserID"]
		};

		new Angular5Csv(data, 'MyFileName');

  }


}
