import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-multi-select-dropdown',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './multi-select-dropdown.component.html',
  styleUrl: './multi-select-dropdown.component.scss'
})
export class MultiSelectDropdownComponent {
  showDropDown = false;
  @Input() list?: any[];

  @Output() shareCheckedList = new EventEmitter();
  // @Output() shareIndividualCheckedList = new EventEmitter();

  checkedList: any[];
  currentSelected!: {};

  constructor() {
    this.checkedList = [];
  }

  getSelectedValue(status: Boolean, value: String) {
    if (status) {
      this.checkedList.push(value);
    } else {
      var index = this.checkedList.indexOf(value);
      this.checkedList.splice(index, 1);
    }

    this.currentSelected = { checked: status, name: value };

    this.shareCheckedlist();

    //share individual selected item
    // this.shareIndividualStatus();
  }

  shareCheckedlist() {
    this.shareCheckedList.emit(this.checkedList);
  }

  // shareIndividualStatus() {
  //   this.shareIndividualCheckedList.emit(this.currentSelected);
  // }
}
