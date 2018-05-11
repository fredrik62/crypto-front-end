import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  feedbackEnabled = false;
  error = null;
  processing = false;
  // ... model (e,g. username: String)

  username: String;
  password: String;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  
  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      const user = {
       username: this.username,
       password: this.password

      };

        this.authService.login(user)
        .then((result) => {
          this.router.navigate(['/'])
        })
  
        
         .catch((err) => {
           this.error = err.error.code; 
           this.processing = false;
           this.feedbackEnabled = false;
         });
    }
  }
}
