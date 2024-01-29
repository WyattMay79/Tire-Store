import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { debounce, debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs';
import { Tires } from 'src/app/models/tires';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-tire-list',
  templateUrl: './tire-list.component.html',
  styleUrls: ['./tire-list.component.css']
})
export class TireListComponent {

  tireList: Tires[] = [];
  sortBy: string = "";
  
  constructor(private prodService: ProductsService, private actRoute: ActivatedRoute, private router: Router) {}

  search(term: string): void {
    this.router.navigate([], {queryParams: {search: term}});
  }

  ngOnInit(): void {
    console.log(this.actRoute.snapshot.paramMap);
    this.prodService.getAllTires().subscribe(res => {
      console.log(res);
      this.tireList = res;
    });
  }

  onDelete(id: number){
    this.prodService.deleteTireById(id).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/products');
    });
  }

  sortProducts(): void {
    this.prodService.sortProducts(this.sortBy).subscribe(res => {this.tireList = res});
  }



}
