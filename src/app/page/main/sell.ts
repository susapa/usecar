import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import Swal from 'sweetalert2'
import { Router, RouterModule } from '@angular/router';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import { ListboxModule } from 'primeng/listbox';

@Component({
    selector: 'app-sell',
    imports: [ListboxModule, InputTextModule, FluidModule, ButtonModule, SelectModule, FormsModule, TextareaModule],
    template: `
          <div class="card flex flex-col gap-8">
            <div class="font-semibold text-xl">Vertical</div>
            <div class="flex flex-col gap-2">

              <div class="font-semibold text-xl">Listbox</div>
                    <p-listbox [(ngModel)]="brand" [options]="listBrand" optionLabel="name" [filter]="true" />

            </div>
            <div class="flex flex-col gap-2">
                <label for="name1">Name</label>
                <input pinputtext="" id="name1" type="text" class="p-component p-inputtext p-inputtext-fluid" pc2031="">
             </div>
            <div class="flex flex-col gap-2"><label for="email1">Email</label>
            <input pinputtext="" id="email1" type="text" class="p-component p-inputtext p-inputtext-fluid" pc2032=""></div><div class="flex flex-col gap-2">
                <label for="age1">Age</label>
                <input pinputtext="" id="age1" type="text" class="p-component p-inputtext p-inputtext-fluid" pc2033="">
            </div>
        </div>
    `
})
export class Sell implements OnInit {
    brand: string = ""
    listBrand = []
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
        } else {
            this.router.navigate(['/buy']);
        }

    }
}
