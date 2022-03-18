import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudsServicesService } from '../CrudsServices/CrudsServices.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css'],
})
export class ProductdetailsComponent implements OnInit {
  inputnumber: number = 0;
  ProductDetails: any;

  public readonly image_url = environment.ImgUrl;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: CrudsServicesService,
    private toster: ToastrService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((Params) => {
      this.GetSelectedProductsDetails(Params['id']);
    });
  }

  //here is the function needed to get the selected product details
  GetSelectedProductsDetails(id: any) {
    this.apiService.GetMethod('Product', id).subscribe(
      (data: any) => {
        this.ProductDetails = data;
      },
      (error) => {
        this.toster.error(
          'Cannot load products details under category',
          'Wrong operation'
        );
      }
    );
  }
  //here is the function needed to increase the quantity
  plus() {
    this.inputnumber = this.inputnumber + 1;
  }

  //here is the function needed to decrease the quantity
  minus() {
    if (this.inputnumber != 0) {
      this.inputnumber = this.inputnumber - 1;
    }
  }

  AddToCart() {
    //here is calling for the api needed to post products to the cart
    let body = {
      // userId : ,
      // totalPrice : ,
      // products : [
      //   {
      //     id : ,
      //     name : ,
      //     details : ,
      //     categoryId : ,
      //     quantity : ,
      //     image : ,
      //     price : ,
      //     file : ,
      //     sizes : [
      //       {
      //         id : ,
      //         title :
      //       }
      //     ]
      //   }
      // ]
    };
    // this.apiService.PostMethod('Cart/AddToCart', body).subscribe(
    //   (data) => {
    //     debugger;
    //   },
    //   (error) => {
    //     this.toster.error(
    //       'Error adding selected products in the cart',
    //       'Wrong operation'
    //     );
    //   }
    // );
    this.router.navigateByUrl('/cart');
  }
}
