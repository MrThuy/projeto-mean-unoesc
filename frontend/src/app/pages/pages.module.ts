import { SearchComponent } from './../shared/search/search.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { UsersComponent } from './users/users.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UsersModule } from '../users/users.module';
import { UserListComponent } from '../users/user-list/user-list.component';
import { UserFormComponent } from '../users/user-form/user-form.component';

@NgModule({
  imports: [
    CommonModule,
    UsersModule,
    SharedModule,
    PagesRoutingModule
  ],
  declarations: [
    UsersComponent,
    UserCreateComponent,
    UserUpdateComponent
  ],
  entryComponents: [
    UserListComponent,
    UserFormComponent,
    SearchComponent
  ]
})
export class PagesModule { }
