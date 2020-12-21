import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IssueService } from '../issue.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: String;
  Employee: any={};
  updatedata: FormGroup;

  constructor(private issueService: IssueService, private fb: FormBuilder, private router: Router) { 
    this.editdata();
  }

  ngOnInit(): void {
    this.router.params.subscribe(params=>{
    this.id = params.id;
    this.issueService.getDataById(this.id).subscribe(Response => {
      this.Employee = Response;
      this.updatedata.get('firstname').setValue(this.Employee.firstname);
      this.updatedata.get('lastname').setValue(this.Employee.lastname);
      this.updatedata.get('phone').setValue(this.Employee.phone);
    });
    });
  }

  editdata(){
    this.updatedata = this.fb.group({
      firstname: ['', Validators.required ],
      lastname: '',
      phone:''
    });
  }

  
}
