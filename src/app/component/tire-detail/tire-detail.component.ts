import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/service/products.service';


@Component({
  selector: 'app-tire-detail',
  templateUrl: './tire-detail.component.html',
  styleUrls: ['./tire-detail.component.css']
})
export class TireDetailComponent implements OnInit {
  id: number = 0;
  name: string = "";
  imageURL: string = "";
  price: number = 0;
  description: string = "";
  warrantyinfo: string = "";

  constructor(private productsService: ProductsService, private router: Router, private actRoute: ActivatedRoute) {}

  ngOnInit(): void {
      console.log(this.actRoute.snapshot.paramMap);
      let y = parseInt(this.actRoute.snapshot.paramMap.get("id")?? "");
      console.log(y);
      this.productsService.getTiresById(y).subscribe(res => {
        this.id = res.id;
        this.name = res.name;
        this.imageURL = res.imageURL;
        this.price = res.price;
        this.description = res.description;
        this.warrantyinfo = res.warrantyInfo;
      });
  }

  onDelete(id: number) {
    this.productsService.deleteTireById(id).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl("/tires")
    })
  }

}
