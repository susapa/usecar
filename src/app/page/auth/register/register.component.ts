import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { UserService } from '../../../layout/service/user.service';

@Component({
  selector: 'app-register',
  imports: [ButtonModule, CheckboxModule, InputTextModule, PasswordModule, FormsModule, RouterModule, RippleModule],
  standalone: true,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  isTermsAccepted: boolean = false;

  constructor(
    private userService: UserService, 
    private router: Router 
  ) { }
  ngOnInit(): void {
     // Example: Fetching data when the component initializes
    // this.userService.getUsers().subscribe({
    //   next: (data) => {
    //     // Data received successfully
    //     this.users = data;
    //     console.log('Users fetched:', data);
    //   },
    //   error: (err) => {
    //     // Handle API errors (e.g., 401 Unauthorized, 404 Not Found)
    //     console.error('API Error:', err);
    //   },
    //   complete: () => {
    //     // Optional: Operation finished
    //     console.log('User fetching complete.');
    //   }
    // });
  }

  handleRegistration(formData: any): void {
    this.userService.registerUser(formData).subscribe({
      next: (response) => {
        // Successful registration, save token and navigate
        // localStorage.setItem('authToken', response.token); // Save token (use cookies in production!)
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Registration failed:', err.error.message); // Display error to user
      }
    });
  }

  // Check if passwords match (return TRUE if they match)
  checkSamePassword(): boolean {
    // If passwords match AND they are not empty, return true
    return this.password !== '' && this.password === this.confirmPassword;
  }

  // 💡 New Method: This method returns TRUE if the button should be DISABLED
  isRegisterButtonDisabled(): boolean {
    // Disable if:
    return (
      !this.isTermsAccepted ||
      this.email.trim() === '' ||               // Email is empty
      this.password === '' ||                   // Password is empty
      this.confirmPassword === '' ||            // Confirm password is empty
      !this.checkSamePassword()                 // Passwords do NOT match (since checkSamePassword returns true on match)
    );
  }

}
