import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUserData()
  }
  user = {
    email: null,
		password: null,
		token: localStorage.getItem('token')
  }

  async getUserData() {
    const token = localStorage.token
    const response = await fetch('http://localhost:5000/api/user-info', {
      headers: {'Authorization': 'Bearer ' + token }
    })

    console.log(response)
    this.user = await response.json()
    console.log(this.user)
    console.log('my JWT: ', localStorage.getItem('token'))
  }

}
