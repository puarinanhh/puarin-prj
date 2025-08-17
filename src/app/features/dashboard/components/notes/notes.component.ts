import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Note } from "../../models/dashboard.model";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../../../../shared/shared.module";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, SharedModule]
})
export class NotesComponent {
  notes: Note[] = [
    {
      id: 1,
      title: 'Meeting Notes',
      content: 'Discuss project timeline and deliverables',
      createdAt: new Date().toLocaleDateString()
    },
    {
      id: 2,
      title: 'Ideas',
      content: 'New feature ideas for the app',
      createdAt: new Date().toLocaleDateString()
    }
  ];

  newNote: Note = { id: 0, title: '', content: '', createdAt: '' };
  editingNote: Note | null = null;
  showNoteForm: boolean = false;

  addNote(): void {
    if (this.newNote.title.trim() && this.newNote.content.trim()) {
      const note: Note = {
        id: Date.now(),
        title: this.newNote.title,
        content: this.newNote.content,
        createdAt: new Date().toLocaleDateString()
      };
      this.notes.unshift(note);
      this.newNote = { id: 0, title: '', content: '', createdAt: '' };
      this.showNoteForm = false;
    }
  }

  deleteNote(id: number): void {
    this.notes = this.notes.filter(note => note.id !== id);
  }

  startEdit(note: Note): void {
    this.editingNote = { ...note };
  }

  saveNoteEdit(): void {
    if (this.editingNote) {
      const index = this.notes.findIndex(note => note.id === this.editingNote!.id);
      if (index !== -1) {
        this.notes[index] = { ...this.editingNote };
      }
      this.editingNote = null;
    }
  }

  cancelEdit(): void {
    this.editingNote = null;
  }

  cancelAddNote(): void {
    this.showNoteForm = false;
    this.newNote = { id: 0, title: '', content: '', createdAt: '' };
  }
}
