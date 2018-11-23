import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from './employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[];
  show = true;

  constructor(private es: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();

   }
  getEmployees() {
    this.es.getEmployees()
    .subscribe(employees => this.employees = employees);
  }
  toggleCollapse() {
    this.show = !this.show;
  }
}
