import { Routes } from "@angular/router";

import { SummeryComponent } from "../summery/summery.component";
import { BoardComponent } from "../board/board.component";
import { AddTaskComponent } from "../task/add-task/add-task.component";
import { ContactsComponent } from "../contacts/contacts.component";

export const homeRoutes: Routes = [
    { path: '', redirectTo: 'summery', pathMatch: 'full' },
    { path: 'summery', component: SummeryComponent },
    { path: 'board', component: BoardComponent },
    { path: 'add-task', component: AddTaskComponent },
    { path: 'contacts', component: ContactsComponent },
]