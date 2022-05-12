import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  ElementRef,
  ViewChild,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { DutyInterface } from '../../types/duty.interface';
import { DutiesService } from '../../services/duty.service';

@Component({
  selector: 'app-duties-todo',
  templateUrl: './duty.component.html',
})
export class DutyComponent implements OnInit, OnChanges {
  @Input('todo') todoProps!: DutyInterface ;
  @Input('isEditing') isEditingProps: boolean = false;
  @Output('setEditingId') setEditingIdEvent: EventEmitter<
    string | null
  > = new EventEmitter();

  editingText: string = '';
  @ViewChild('textInput') textInput: ElementRef |null = null ;

  constructor(private todosService: DutiesService) {}

  ngOnInit(): void {
    if(this.todoProps) this.editingText = this.todoProps.text;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);
    if (changes['isEditingProps'].currentValue) {
      setTimeout(() => {
       if(this.textInput) this.textInput.nativeElement.focus();
      }, 0);
    }
  }

  setTodoInEditMode(): void {
    console.log('setTodoInEditMode');
    if(this.todoProps) this.setEditingIdEvent.emit(this.todoProps.id);
  }

  removeTodo(): void {
    console.log('removeTodo');
    if(this.todoProps) this.todosService.removeTodo(this.todoProps.id);
  }

  toggleTodo(): void {
    console.log('toggleTodo');
    if(this.todoProps) this.todosService.toggleTodo(this.todoProps.id);
  }

  changeText(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.editingText = value;
    console.log('changeText');
  }

  changeTodo(): void {
    console.log('change todo', this.editingText);
    if(this.todoProps) this.todosService.changeTodo(this.todoProps.id, this.editingText);
    this.setEditingIdEvent.emit(null);
  }
}
