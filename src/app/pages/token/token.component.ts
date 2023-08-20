import { Component } from '@angular/core';
import { TokenService } from './token.service';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent {
  token:string | undefined;
  constructor(private tokenService:TokenService){}
  generateToken(): void {
    this.tokenService.generateToken().subscribe(
      (response: any) => {
        this.token = response.token;
      },
      (error) => {
        console.error('Error generating token:', error);
      }
    );
}
}
