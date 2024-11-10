import { Component } from '@angular/core';
import { MultiSelectDropdownComponent } from "../../shared/multi-select-dropdown/multi-select-dropdown.component";

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [MultiSelectDropdownComponent],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  name = 'Angular';
  

  constructor() { }

  onHandleSelectedContacts(contacts: any) {
    console.log(contacts);

  }
}
