import { Component } from '@angular/core';
import { DutiesService } from '../../services/duty.service';

@Component({
  selector: 'app-duties-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  text: string = '';

  constructor(private todoService: DutiesService) {}


  changeText(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.text = target.value;
  }

  addTodo(): void {
    this.todoService.addTodo(this.text);
    console.log('add todo ', this.text);
    this.text = '';

  }
}
