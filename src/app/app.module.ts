import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostsComponent } from './posts/posts.component';
import { DetailsComponent } from './details/details.component';
import { UsersComponent } from './users/users.component';
import { TableComponent } from './table/table.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HttpClientModule } from '@angular/common/http';
import { TableService } from './table/table.service';
import { DownloadComponent } from './download/download.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PostsComponent,
    DetailsComponent,
    UsersComponent,
    TableComponent,
    DownloadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SmartTableModule,
    HttpClientModule
  ],
  providers: [TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
