import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user = {
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    // Implement your login logic here
    // For example, you could call an authentication service, or use a static check for demonstration

    if (this.user.email === 'test@example.com' && this.user.password === 'password123') {
      // If login is successful, navigate to the main page or dashboard
      this.router.navigate(['/main']);
    } else {
      // Handle failed login attempt (e.g., show an error message)
      alert('Invalid email or password.');
    }
  }
}
