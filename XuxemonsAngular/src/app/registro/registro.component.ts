import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registerForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private userService: UsersService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      nom: ['', Validators.required],
      cognom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      nick: ['', Validators.required],
      repetir: ['', Validators.required],

    });

    console.log('Valor inicial del formulario:', this.registerForm.value);
  }

  onSubmit() {
    if (this.registerForm.valid) {
      // Check if passwords match
      const password = this.registerForm.get('password')?.value;
      const passwordrep = this.registerForm.get('repetir')?.value;
      
      if (password === passwordrep) {
        const userData = this.registerForm.value;

        this.userService.registerUser(userData).subscribe({
          next: (response) => {
            console.log('Registro exitoso', response);
            this.registerForm.reset();
            alert(`Registro con éxito`);
            this.router.navigateByUrl('/login');
          },
          error: (error) => {
            console.error('Error durante el registro', error);
          }
        });
      } else {
        // Passwords don't match, show an error message or handle it as needed
        alert('Las contraseñas no coinciden');
        // You can display an error message or take any other appropriate action.
      }
    }
  }

}
