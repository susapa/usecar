import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';
import { UserService } from '../../service/user.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `<ul class="layout-menu">
        <ng-container *ngFor="let item of model; let i = index">
            <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
            <li *ngIf="item.separator" class="menu-separator"></li>
        </ng-container>
    </ul> `
})
export class AppMenu {
    model: MenuItem[] = [];
    constructor(private userService: UserService, private router: Router) {

    }
    ngOnInit() {
        this.getMenu()
        // this.model = [
        //     {
        //         label: 'Home',
        //         items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }]
        //     }
        //     // ,
        //     // {
        //     //     label: 'UI Components',
        //     //     items: [
        //     //         { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
        //     //     ]
        //     // }
        // ];
    }

    getMenu(): void {
        console.log("getUserDetail")
        const item = localStorage.getItem('userDetail');

        if (item) {
            let jsonDetail = JSON.parse(item)
            this.userService.getUser(jsonDetail.id).subscribe({
                next: (response) => {
                    // Successful registration, save token and navigate
                    // localStorage.setItem('authToken', response.token); // Save token (use cookies in production!)
                    localStorage.setItem("userDetail", JSON.stringify(response.data));
                    const menuList = response.data.menuList
                    this.model = [
                        {
                            label: 'Home',
                            items: menuList
                        }
                    ]
                    //    this.model = 
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
            this.router.navigate(['/']);
        }

    }
}
