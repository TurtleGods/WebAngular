import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user = {
    email: '',
    password: ''
  };
  confirmPassword: string = '';

  onSubmit() {
    if (this.user.password === this.confirmPassword) {
      // Implement registration logic here
      console.log('User registered:', this.user);
    } else {
      alert('Passwords do not match.');
    }
  }
}
