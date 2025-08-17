import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NotesComponent } from "../components/notes/notes.component";
import { TodosComponent } from "../components/todos/todos.component";

@Component({
  selector: 'app-overview',
  template: `
      <h1>Overview Page</h1>
      <app-notes></app-notes>
      <app-todos></app-todos>
  `,
  standalone: true,
  imports: [CommonModule, RouterModule, NotesComponent, TodosComponent]
})
export class OverviewComponent {}
