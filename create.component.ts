import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IssueService } from '../issue.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;
  constructor(private issueService: IssueService, private fb: FormBuilder, private router: Router) { 
    this.createForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: '',
      phone: ''
    });
  }

  adddata(firstname, lastname, phone){
    this.issueService.adddata(firstname, lastname, phone).subscribe(() => {
      this.router.navigate([]);
    });
  }
  ngOnInit(): void {
  }

}
