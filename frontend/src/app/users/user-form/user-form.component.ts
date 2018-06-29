import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Input() user;
  @Output() save = new EventEmitter<any>();
  public enableToSave: boolean = false;
  form = new FormGroup({
    nome: new FormControl('', Validators.required),
    idade: new FormControl('', [Validators.min(1), Validators.max(200)]),
    ativo: new FormControl(true)
  })
  constructor() { }
  get nome(): any { return this.form.get('nome'); }
  get idade(): any { return this.form.get('idade'); }
  get ativo(): any { return this.form.get('ativo'); }
  ngOnInit() {
    this.form.valueChanges.subscribe(() => {
      this.enableToSave = this.form.valid;
    })
  }
  ngOnChanges(changes) {
    if (changes.user.currentValue) {
      this.form.patchValue(changes.user.currentValue);
    }
  }
  submit() {
    this.save.emit(this.form.value);
  }
}
