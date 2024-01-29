import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/service/products.service';
import { Tires } from 'src/app/models/tires';

@Component({
  selector: 'app-create-tire',
  templateUrl: './create-tire.component.html',
  styleUrls: ['./create-tire.component.css']
})
export class CreateTireComponent implements OnInit {
  newTire: Tires = new Tires();

  constructor(private prodService: ProductsService, private router: Router) {}

  ngOnInit(): void {}

  createTire() {
    this.prodService.createNewTire(this.newTire).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl("/");
    });
}

}
