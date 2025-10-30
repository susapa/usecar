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
import { ListboxChangeEvent, ListboxModule } from 'primeng/listbox';
import { GlobalService } from '../../service/global.service';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-sell',
    imports: [ToastModule, FileUploadModule, ListboxModule, InputTextModule, FluidModule, ButtonModule, SelectModule, FormsModule, TextareaModule],
    template: `
          <div class="card flex flex-col gap-8">
            <div class="font-semibold text-xl">ข้อมูลรถ</div>
            <div class="flex flex-col gap-2">

          
           <div class="flex gap-4">
    <div class="flex-1">
        <div class="font-semibold text-xl">ยี่ห้อ</div>
        <p-listbox [listStyle]="{'max-height': '100px'}" (onChange)="onSelectionChange($event)" [(ngModel)]="brand" [options]="listBrand" optionLabel="brandname" [filter]="true" />
    </div>

    <div class="flex-1">
        <div  [hidden]="brand == ''">
             <div class="font-semibold text-xl">รุ่น</div>
        <p-listbox [listStyle]="{'max-height': '100px'}"  [(ngModel)]="model" [options]="listModel" optionLabel="modelname" [filter]="true" /> 
    </div>
        </div>
    </div>
</div>
<div class="col-span-full lg:col-span-6">
   <div class="card">
      <div class="font-semibold text-xl mb-4">Advanced</div>
      <p-fileupload  (onSelect)="onFileSelect($event)" [multiple]="true" name="demo[]" accept="image/*" maxfilesize="1000000" mode="advanced" url="" pc1604="">
         <div class="p-component p-fileupload p-fileupload-advanced ng-star-inserted" data-pc-name="fileupload" data-pc-section="root">
            <input type="file" multiple="" accept="image/*" aria-label="Browse Files" title="" data-pc-section="input" style="display: none;">
            <div class="p-fileupload-header">
               <p-button data-pc-section="choosebutton" pc1609="" class="ng-star-inserted">
                  <button pripple="" class="p-ripple p-button p-component p-fileupload-choose-button" type="button" data-pc-name="button" data-pc-section="root" autofocus="true" pc1610="" pc1611="">
                     <input type="file" multiple="" accept="image/*" aria-label="Browse Files" title="" data-pc-section="input">
                     <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" data-p-icon="plus" aria-label="true" data-pc-section="chooseicon" class="p-icon ng-star-inserted" pc1620="">
                        <g clip-path="url(#pui_id_122)">
                           <path d="M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z" fill="currentColor"></path>
                        </g>
                        <defs>
                           <clipPath id="url(#pui_id_122)">
                              <rect width="14" height="14" fill="white"></rect>
                           </clipPath>
                        </defs>
                     </svg>
                     <span class="p-button-label ng-star-inserted" data-pc-section="label">Choose</span><!----><!---->
                  </button>
               </p-button>
               <!-- <p-button pc1612="" class="ng-star-inserted">
                  <button pripple="" class="p-ripple p-button p-button-secondary p-component p-fileupload-upload-button" disabled="" type="button" data-pc-name="button" data-pc-section="root" autofocus="true" pc1613="" pc1614="">
          
                     <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" data-p-icon="upload" class="p-icon ng-star-inserted" pc1618="">
                        <g clip-path="url(#pui_id_121)">
                           <path fill-rule="evenodd" clip-rule="evenodd" d="M6.58942 9.82197C6.70165 9.93405 6.85328 9.99793 7.012 10C7.17071 9.99793 7.32234 9.93405 7.43458 9.82197C7.54681 9.7099 7.61079 9.55849 7.61286 9.4V2.04798L9.79204 4.22402C9.84752 4.28011 9.91365 4.32457 9.98657 4.35479C10.0595 4.38502 10.1377 4.40039 10.2167 4.40002C10.2956 4.40039 10.3738 4.38502 10.4467 4.35479C10.5197 4.32457 10.5858 4.28011 10.6413 4.22402C10.7538 4.11152 10.817 3.95902 10.817 3.80002C10.817 3.64102 10.7538 3.48852 10.6413 3.37602L7.45127 0.190618C7.44656 0.185584 7.44176 0.180622 7.43687 0.175736C7.32419 0.063214 7.17136 0 7.012 0C6.85264 0 6.69981 0.063214 6.58712 0.175736C6.58181 0.181045 6.5766 0.186443 6.5715 0.191927L3.38282 3.37602C3.27669 3.48976 3.2189 3.6402 3.22165 3.79564C3.2244 3.95108 3.28746 4.09939 3.39755 4.20932C3.50764 4.31925 3.65616 4.38222 3.81182 4.38496C3.96749 4.3877 4.11814 4.33001 4.23204 4.22402L6.41113 2.04807V9.4C6.41321 9.55849 6.47718 9.7099 6.58942 9.82197ZM11.9952 14H2.02883C1.751 13.9887 1.47813 13.9228 1.22584 13.8061C0.973545 13.6894 0.746779 13.5241 0.558517 13.3197C0.370254 13.1154 0.22419 12.876 0.128681 12.6152C0.0331723 12.3545 -0.00990605 12.0775 0.0019109 11.8V9.40005C0.0019109 9.24092 0.065216 9.08831 0.1779 8.97579C0.290584 8.86326 0.443416 8.80005 0.602775 8.80005C0.762134 8.80005 0.914966 8.86326 1.02765 8.97579C1.14033 9.08831 1.20364 9.24092 1.20364 9.40005V11.8C1.18295 12.0376 1.25463 12.274 1.40379 12.4602C1.55296 12.6463 1.76817 12.7681 2.00479 12.8H11.9952C12.2318 12.7681 12.447 12.6463 12.5962 12.4602C12.7453 12.274 12.817 12.0376 12.7963 11.8V9.40005C12.7963 9.24092 12.8596 9.08831 12.9723 8.97579C13.085 8.86326 13.2378 8.80005 13.3972 8.80005C13.5565 8.80005 13.7094 8.86326 13.8221 8.97579C13.9347 9.08831 13.998 9.24092 13.998 9.40005V11.8C14.022 12.3563 13.8251 12.8996 13.45 13.3116C13.0749 13.7236 12.552 13.971 11.9952 14Z" fill="currentColor"></path>
                        </g>
                        <defs>
                           <clipPath id="url(#pui_id_121)">
                              <rect width="14" height="14" fill="white"></rect>
                           </clipPath>
                        </defs>
                     </svg>
                 <span class="p-button-label ng-star-inserted" data-pc-section="label">Upload</span>
                  </button>
               </p-button> -->
               <p-button pc1615="" class="ng-star-inserted">
                  <button pripple="" class="p-ripple p-button p-button-secondary p-component p-fileupload-cancel-button" disabled="" type="button" data-pc-name="button" data-pc-section="root" autofocus="true" pc1616="" pc1617="">
                 <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" data-p-icon="times" aria-hidden="true" class="p-icon ng-star-inserted" pc1619="">
                        <path d="M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z" fill="currentColor"></path>
                     </svg>
                <span class="p-button-label ng-star-inserted" data-pc-section="label">Cancel</span>
                  </button>
               </p-button>
            </div>
         </div>
      </p-fileupload>
   </div>
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
    readonly MAX_FILES = 2;
    brand: string = ""
    model: string = ""
    listModel = []
    listBrand: string[] = []
    constructor(private messageService: MessageService, private userService: UserService, private router: Router, private globalService: GlobalService) {

    }
    ngOnInit(): void {
        this.getUserDetail()
        this.getBrandList()
    }

    onFileSelect(event: any) {
        const allFile = event.currentFiles;

        if (allFile.length > this.MAX_FILES) {

            console.error(`Can't upload more than ${this.MAX_FILES} files.`);
            this.messageService.add({
                severity: 'warn',
                summary: 'เกิดข้อผิดพลาด',
                detail: 'file upload limit',
                life: 2000 // (Optional) กำหนดระยะเวลาแสดงผล (เป็นมิลลิวินาที)
            });
            // Loop for delete last file 
            for (let i = allFile.length - 1; i >= this.MAX_FILES; i--) {
                allFile.splice(i, 1);

            }
        }
    }

    onSelectionChange($event: ListboxChangeEvent) {
        console.log($event.value.brand_id)
        this.getModelList($event.value.brand_id)
    }

    getBrandList() {
        this.globalService.getBrand(this.globalService.getUserIDFromLocal()).subscribe({
            next: (response) => {
                console.log(response.data)
                this.listBrand = response.data
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
    }
    getModelList(brand_id: number) {
        this.globalService.getModel(this.globalService.getUserIDFromLocal(), brand_id).subscribe({
            next: (response) => {
                console.log(response.data)
                this.listModel = response.data
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
