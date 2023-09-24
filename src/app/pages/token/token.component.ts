import { Component } from '@angular/core';
import { TokenService } from './token.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent {
  token: string | undefined;
  form=this.fb.group({
    UserName:"",
    Password:"",
  });
  constructor(private tokenService: TokenService,private fb:FormBuilder) { }
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

  login():void{
    this.tokenService.login(this.form.value).subscribe(x=>{
      console.log(x);
    })
  }
  btnSQLInsert(){
this.tokenService.SQLInsert().subscribe();
  }
}
