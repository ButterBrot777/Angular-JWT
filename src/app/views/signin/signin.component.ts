import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor() { }

  email: string
  password: string
  errorMessage: string

  ngOnInit(): void {
  }

  async submit() {
    try {
      event.preventDefault();
  
      const user = {
        email: this.email,
        password: this.password
      }
      
      const response = await fetch('http://localhost:5000/api/authenticate', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
      })
      const data = await response.json()
  
      if (!data.token)  throw new Error('Неверный логин/пароль')
  
      localStorage.setItem('token', data.token)
      location.replace('/user')

    } catch (error) {
      console.log(error.message)
      this.errorMessage = error.message
      setTimeout(()=> {
        this.errorMessage = ''
      }, 3000)
    }
  }

}
