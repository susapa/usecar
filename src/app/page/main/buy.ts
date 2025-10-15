import { Component, OnInit } from '@angular/core';
import {  UserService } from '../../service/user.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
    selector: 'app-buy',
    imports: [],
    template: `
        <div class="grid grid-cols-12 gap-8">
          
        </div>
    `
})
export class Buy implements OnInit {
    constructor(private userService: UserService, private router: Router) {

    }
    ngOnInit(): void {
         this.getUserDetail()
    }

    getUserDetail() {
        console.log("getUserDetail")
        const item = localStorage.getItem('userDetail');

        if (item) {
            let jsonDetail = JSON.parse(item)
            this.userService.getUser(jsonDetail.id).subscribe({
                next: (response) => {
                    // Successful registration, save token and navigate
                    // localStorage.setItem('authToken', response.token); // Save token (use cookies in production!)
                    console.log(response)
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
        }else{
            this.router.navigate(['/buy']);
        }

    }
}
