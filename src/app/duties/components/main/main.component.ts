import { Component } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { DutyInterface } from '../../types/duty.interface';
import { DutiesService } from '../../services/duty.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-duties-main',
  templateUrl: './main.component.html',
})
export class MainComponent {
  visibleTodos$: Observable<DutyInterface[]>;
  noTodoClass$: Observable<boolean>;
  isAllTodosSelected$: Observable<boolean>;
  editingId: string | null = null;


  constructor(private todosService: DutiesService) {
    this.isAllTodosSelected$ = this.todosService.todos$.pipe(
      map((todos) => todos.every((todo) => todo.isCompleted))
    );

    this.noTodoClass$ = this.todosService.todos$.pipe(
      map((todos) => todos.length === 0)
    );

    this.visibleTodos$ =  this.todosService.todos$.pipe(
      map((todos) => {
        return todos;
      })
    );
  }

  toggleAllTodos(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.todosService.toggleAll(target.checked);
  }

  setEditingId(editingId: string | null): void {
    this.editingId = editingId;
  }
}
