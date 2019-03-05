import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from "@angular/router";



import { AppComponent } from './app.component';
import { FatherComponent } from './family/father/father.component';
import { SonComponent } from './family/son/son.component';
import { DaughterComponent } from './family/daughter/daughter.component';
import { FordirectiveComponent } from './directive/fordirective/fordirective.component';
import { NumbersortPipe } from './custompipe/numbersort.pipe';
import { StringsortPipe } from './custompipe/stringsort.pipe';
import { TemplateformComponent } from './forms/templateform/templateform.component';
import { ReactiveformsComponent } from './forms/reactiveforms/reactiveforms.component';
import { NotfoundComponent } from './notfound/notfound/notfound.component';
import { ParentformComponent } from './forms/parentform/parentform.component';
import { TaskmanagerComponent } from './task/taskmanager/taskmanager.component';

@NgModule({
            imports: [
                      BrowserModule,
                      FormsModule,
                      ReactiveFormsModule,
                      RouterModule.forRoot([
                        {
                           path:'',
                           redirectTo:'form',
                           pathMatch:'full' 
                        },
                        {
                          path:'family',
                          component:FatherComponent
                        },
                        {
                          path:'directive',
                          component:FordirectiveComponent
                        },
                        {
                          path:'form',
                          component:ParentformComponent,
                          children:[
                                      {
                                          path:'',
                                          redirectTo:'templateform',
                                          pathMatch:'full' 
                                      },
                                      {
                                        path:'templateform',
                                        component:TemplateformComponent
                                      },
                                      {
                                        path:'reactiveform',
                                        component:ReactiveformsComponent
                                      }
                                    ]
                        },
                        {
                          path:'task',
                          component:TaskmanagerComponent
                        },

                        {
                          path:'**',
                          component:NotfoundComponent
                        }
                        
                      ])
                    ],
            declarations: [
              AppComponent,
              FatherComponent, 
              SonComponent,  
              DaughterComponent,
              FordirectiveComponent,
              NumbersortPipe,
              StringsortPipe,
              TemplateformComponent,
              ReactiveformsComponent,
              NotfoundComponent,
              ParentformComponent,
              TaskmanagerComponent
            ],
             providers: [],
             bootstrap: [AppComponent]
})
export class AppModule { }
