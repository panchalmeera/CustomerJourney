import { Component, OnInit, Output } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  currentUrl: string;
  loginflag = true;
  gridflag = false;
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
	  this.loginflag = false;
  }

  setPostSelection() {
      this.gridflag = false;
	  this.postflag = true;
	  this.usersflag = false;
	  this.loginflag = false;
  }

  setUsersSelection() {
      this.gridflag = false;
	  this.postflag = false;
	  this.usersflag = true;
	  this.loginflag = false;
  }

  setLoginSelection() {
      this.gridflag = false;
	  this.postflag = false;
	  this.usersflag = false;
	  this.loginflag = true;
  }

}
