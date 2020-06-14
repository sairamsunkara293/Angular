import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import DataTableDataSource from './data-table-datasource';
import { Employee } from '../Models/employee.model';
import { EmployeeService } from '../Services/employee.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Employee>;
  dataSource: DataTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['_id', 'name', 'position', 'office', 'salary'];
  constructor(private employeeService: EmployeeService) { }
  ngOnInit() {
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employeeService.employees = data

    })
    this.dataSource = new DataTableDataSource(this.employeeService);
  }

  ngAfterViewInit() {

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
