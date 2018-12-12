import {Component, OnInit, Input, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

const TAB_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TabComponent),
  multi: true
};

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  providers: [TAB_VALUE_ACCESSOR]
})
export class TabComponent implements OnInit, ControlValueAccessor {

  constructor() {
  }

  @Input() data: any[] = [];
  private _selectedItem: any;

  // getter
  get selectedItem() {
    return this._selectedItem;
  }

  // setter
  set selectedItem(value: any) {
    this._selectedItem = value;
    this.propagationChange(this._selectedItem);
  }

  // implements
  propagationChange: Function;
  propagationTouched: Function;

  ngOnInit() {
    setTimeout(() => {
      if (this.data.length > 0) {
        this.selectedItem = this.data[0];
      }
    }, 0);
  }

  tabChange(item: any) {
    this.selectedItem = item;
  }

  registerOnChange(fn: any): void {
    console.log('registerOnChange triggered');
    this.propagationChange = fn;
  }

  registerOnTouched(fn: any): void {
    console.log('registerOnTouched triggered');
    this.propagationTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    console.log('setDisabledState triggered');
    console.log(isDisabled);
  }

  writeValue(obj: any): void {
    if (obj) {
      this.selectedItem = obj;
    }
  }
}
