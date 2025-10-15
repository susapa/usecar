import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { User, UserService } from '../../../service/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  imports: [ButtonModule, CheckboxModule, InputTextModule, PasswordModule, FormsModule, RouterModule, RippleModule],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {

  }

  ngOnInit(): void {
  }
  signIn() {
    console.log("signIn")
    const userLogin: User = {
      email: this.email,
      password: this.password
    }
    this.userService.login(userLogin).subscribe({
      next: (response) => {
        // Successful registration, save token and navigate
        // localStorage.setItem('authToken', response.token); // Save token (use cookies in production!)
        localStorage.setItem("userDetail",JSON.stringify(response.data.user));
        this.router.navigate(['/']);
      },
      error: (err) => {
        Swal.fire({
          title: err.error.status,
          text: err.error.message,
          icon: 'error',
          confirmButtonText: 'Close'
        })
        console.error('Registration failed:', err.error.message); // Display error to user
      }
    });
  }
  register(): void {
    this.router.navigate(['/register']);
  }
  email: string = '';

  password: string = '';

  checked: boolean = false;

}
