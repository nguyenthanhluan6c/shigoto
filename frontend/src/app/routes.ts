import { Routes } from '@angular/router'
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent as ArticleIndexComponent } from './article/index/index.component';
import { NewComponent as ArticleNewComponent } from './article/new/new.component';
import { ShowComponent as ArticleShowComponent } from './article/show/show.component';
import { EditComponent as ArticleEditComponent } from './article/edit/edit.component';

export const appRoutes: Routes = [
    {
        path: 'login', component: SignInComponent
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'articles', component: ArticleIndexComponent
    },
    {
        path: 'articles/new', component: ArticleNewComponent
    },
    {
        path: 'articles/:id', component: ArticleShowComponent
    },
    {
        path: 'articles/:id/edit', component: ArticleEditComponent
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' }

];
