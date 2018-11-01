import { Component, OnInit, Output } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  currentUrl: string;
  gridflag = true;
  postflag = false;
  usersflag = false;

  constructor(private router: Router) {
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url);
  }

  ngOnInit() {}

  setGridSelection() {
      this.gridflag = true;
	  this.postflag = false;
	  this.usersflag = false;
  }

  setPostSelection() {
      this.gridflag = false;
	  this.postflag = true;
	  this.usersflag = false;
  }

  setUsersSelection() {
      this.gridflag = false;
	  this.postflag = false;
	  this.usersflag = true;
  }

}
