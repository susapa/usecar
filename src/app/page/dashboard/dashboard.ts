import { Component, OnInit } from '@angular/core';
import { NotificationsWidget } from './components/notificationswidget';
import { StatsWidget } from './components/statswidget';
import { BestSellingWidget } from './components/bestsellingwidget';
import { RevenueStreamWidget } from './components/revenuestreamwidget';
import { UserService } from '../../service/user.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    imports: [StatsWidget, BestSellingWidget, RevenueStreamWidget, NotificationsWidget],
    template: `
        <div class="grid grid-cols-12 gap-8">
            <app-stats-widget class="contents" />
            <div class="col-span-12 xl:col-span-6">
                <app-best-selling-widget />
            </div>
            <div class="col-span-12 xl:col-span-6">
                <app-revenue-stream-widget />
                <app-notifications-widget />
            </div>
        </div>
    `
})
export class Dashboard implements OnInit {
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
                    console.log(response)
                },
                error: (err) => {
                    Swal.fire({
                        title: err.error.status,
                        text: err.error.message,
                        icon: 'error',
                        confirmButtonText: 'Close'
                    })
                    console.error('getUserDetail failed:', err.error.message); // Display error to user
                }
            });
        } else {
            this.router.navigate(['/']);
        }

    }
}
