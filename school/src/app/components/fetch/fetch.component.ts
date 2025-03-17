import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { GetDataService } from './get-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fetch',
  standalone: true,
  imports: [CommonModule],
  providers: [GetDataService],
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent implements OnInit {
  data: any;

  constructor(private dataService: GetDataService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.dataService.fetchData()
      .subscribe(response => {
        this.data = response;
      });
  }
}