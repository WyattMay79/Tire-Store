import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/service/products.service';
import { Tires } from 'src/app/models/tires';

@Component({
  selector: 'app-edit-tire',
  templateUrl: './edit-tire.component.html',
  styleUrls: ['./edit-tire.component.css']
})
export class EditTireComponent implements OnInit {
  id: number = 0;
  name: string = "";
  price: number = 0;
  description: string = "";
  image: string = "";
  warranty: string = "";


  edittedTire: Tires = new Tires();

  constructor(private router: Router, private actRoute: ActivatedRoute, private prodService: ProductsService ) {}

  ngOnInit() {
    const routeId = this.actRoute.snapshot.paramMap.get('id') ?? "";
    this.id = parseInt(routeId);
    console.log(this.id);
    console.log(this.actRoute.snapshot.paramMap);
    this.prodService.getTiresById(this.id).subscribe(res => {
      console.log(res);
      this.edittedTire = res;
    });

  }

  editTire(){
    this.prodService.editTireById(this.id, this.edittedTire).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl("/tires");
    })
  }
}
