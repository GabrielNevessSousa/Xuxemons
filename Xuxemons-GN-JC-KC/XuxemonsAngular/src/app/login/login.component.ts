import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UsersService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

onSubmit() {
  if (this.loginForm.valid) {
    const credentials = this.loginForm.value;
    this.userService.loginUser(credentials).subscribe({
      next: (response) => {
        console.log('Inicio de sesión exitoso', response);
        this.loginForm.reset();
        alert(`Inicio de sesión con éxito`);
        // Puedes redirigir a la página principal o a otra página después del inicio de sesión
        this.router.navigateByUrl('/pag-principal-admin');
      },
      error: (error) => {
        let errorMessage = 'Credenciales invalidas';
        if (error && error.error && error.error.message) {
          errorMessage = error.error.message; // Puedes personalizar el mensaje según la respuesta del servidor
        }
        alert(errorMessage, );
        console.log(this.loginForm.value);
      }
    });
  }
}
}