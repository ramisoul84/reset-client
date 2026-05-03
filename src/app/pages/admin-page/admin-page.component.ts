import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MaillingService } from '../../_services/mailling.service';
import { Client,User } from '../../_models/client';
import { concatMap, finalize, from, reduce } from 'rxjs';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-admin-page',
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  providers:[MaillingService],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent implements OnInit {
  clients!: Client[];
  user!:User;
  isLoggedin:boolean = false
  total!:number;
  totalPages!:number;
  selectedPage:number=1
  loginForm: FormGroup;
  constructor(private fb: FormBuilder,private maillingService:MaillingService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }


  onSubmit():void{

    if (this.loginForm.valid) {
      const user: User = {
        email: this.loginForm.controls['email'].value,
        password: this.loginForm.controls['password'].value,
      }
      this.maillingService.login(user).pipe(
        finalize(() => {
          this.getClients();
        })
      ).subscribe({
        next: (response) => {
          this.isLoggedin = true;
        },
        error: (err) => {
          this.isLoggedin = false;
        }
      });

     
    }
  }

  getClients(){
    this.maillingService.getAllClients(1).subscribe({
      next:data =>{
        this.clients =data.clients
        this.total = data.total
        this.totalPages=data.total_pages
        this.isLoggedin = true;
      },
      error: (err) => {
        this.isLoggedin = false;
      }
    })
  }

  logout(){
    this.isLoggedin = false;
    this.maillingService.logout()
  }

  ngOnInit(): void {
    this.getClients();

  }

  selectPage(page:number){
    this.selectedPage = page
    this.maillingService.getAllClients(page).subscribe(data => {
        this.clients =data.clients
        this.total = data.total
        this.totalPages=data.total_pages})
  }

  getPages(): number[] {
    return Array(this.totalPages).fill(0).map((x, i) => i + 1);
  }

  downloadAllClients() {
    const totalPages = this.totalPages; // Replace with actual total pages or get from API
    
    const pageNumbers = Array.from({length: totalPages}, (_, i) => i + 1);
    from(pageNumbers).pipe(
      concatMap(page => this.maillingService.getAllClients(page)),
      reduce((accumulatedRows, currentPageData) => {
        const pageRows = currentPageData.clients.map(client => 
          Object.values(client).map(value => 
            `"${value !== null && value !== undefined ? value.toString().replace(/"/g, '""') : ''}"`
          ).join(',')
        );
        return [...accumulatedRows, ...pageRows];
      }, [] as string[]),
    ).subscribe(allRows => {
      if (allRows.length > 0) {
        const headers = Object.keys(allRows[0].split(',')).join(',');
        const csvContent = [headers, ...allRows].join('\n');
        this.downloadCSV(csvContent);
      }
    });
  }
  
  private downloadCSV(content: string) {
    const blob = new Blob([content], { type: 'text/txt;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'all_clients.txt');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
