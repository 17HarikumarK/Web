import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any[] = [{
    pid : 'p001',
    pname: 'laptop'
  },{
    pid : 'p002',
    pname: 'mouse'
  }
]

  constructor() { }

  ngOnInit() {
  }

 

}


