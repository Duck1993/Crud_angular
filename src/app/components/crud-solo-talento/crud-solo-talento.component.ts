import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crud-solo-talento',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './crud-solo-talento.component.html',
  styleUrl: './crud-solo-talento.component.css'
})
export class CrudSoloTalentoComponent {
  list: any[] = [
    { titulo: 'Dukens Robert', numero:'8556788767', fecha: '10/10', cvv:'000'},
    { titulo: 'Jean Charles', numero:'855336788767', fecha: '13/10', cvv:'0200'},
  
];

form: FormGroup;

constructor(private fb: FormBuilder, private toastr: ToastrService)
{
  this.form = this.fb.group({
    titulo: ['', Validators.required],
    numero: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
    fecha:['', [Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
    cvv:['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]],

  })
}

ngOnInit(): void {
  
}

agregar(){
  console.log(this.form);

  const tarjeta : any = {
    titulo: this.form.get('titulo')?.value,
    numero: this.form.get('numero')?.value,
    fecha: this.form.get('fecha')?.value,
    cvv: this.form.get('cvv')?.value,
  }
  this.list.push(tarjeta);
  this.toastr.success('Hello world!', 'Dato Agregado');
  this.form.reset();
}
eliminar(index: number){
  this.list.splice(index, 1)
  this.toastr.error('Hello world!', 'Dato Borrado');
}


}
