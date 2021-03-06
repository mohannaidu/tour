import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import {
  componentDeclarations,
  providerDeclarations,
  routes,
} from './travel.common';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forChild(routes)
  ],
  exports: [
    NativeScriptRouterModule
  ],
  declarations: [
    ...componentDeclarations
  ],
  providers: [
    ...providerDeclarations
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class TravelModule { }
