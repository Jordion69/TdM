import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NoticiasRoutingModule } from './noticias-routing.module';
import { PageComponent } from './page/page.component';
import { CardComponent } from './components/card/card.component';
import { SearchComponent } from './components/search/search.component';
import { MainComponent } from './components/main/main.component';
import { HeadingComponent } from './components/heading/heading.component';
import { CardNewsComponent } from './components/card-news/card-news.component';
import { SharedModule } from "../../shared/shared.module";


@NgModule({
    declarations: [
        PageComponent,
        CardComponent,
        SearchComponent,
        MainComponent,
        HeadingComponent,
        CardNewsComponent
    ],
    imports: [
        CommonModule,
        NoticiasRoutingModule,
        SharedModule,
        FormsModule
    ]
})
export class NoticiasModule { }
