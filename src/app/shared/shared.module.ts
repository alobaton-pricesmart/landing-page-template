import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbLayoutModule, NbSidebarModule, NbActionsModule,
  NbIconModule, NbUserModule, NbContextMenuModule, NbMenuModule, NbButtonModule, NbCardModule, NbTabsetModule, NbInputModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { TranslateModule } from '@ngx-translate/core';
import { CookieModule } from 'ngx-cookie';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { InputErrorComponent } from './components/input-error/input-error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { StaffMemberComponent } from './components/staff-member/staff-member.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';

@NgModule({
  declarations: [
    InputErrorComponent,
    StaffMemberComponent
  ],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbMenuModule,
    NbContextMenuModule,
    NbUserModule,
    NbButtonModule,
    NbCardModule,
    NbTabsetModule,
    NbActionsModule,
    NbEvaIconsModule,
    NbIconModule,
    NbInputModule,
    NgbCarouselModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCpVhQiwAllg1RAFaxMWSpQruuGARy0Y1k',
      libraries: ['places'],
    }),
    NgxPageScrollModule,
  ],
  exports: [
    NbLayoutModule,
    NbMenuModule,
    NbContextMenuModule,
    NbUserModule,
    NbButtonModule,
    NbCardModule,
    NbTabsetModule,
    NbActionsModule,
    NbEvaIconsModule,
    NbIconModule,
    NbInputModule,
    TranslateModule,
    CookieModule,
    NgbCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule,
    NgxPageScrollModule,
    InputErrorComponent,
    StaffMemberComponent,
  ],
  providers: [
    ...NbSidebarModule.forRoot().providers,
    ...NbMenuModule.forRoot().providers,
  ]
})
export class SharedModule { }
