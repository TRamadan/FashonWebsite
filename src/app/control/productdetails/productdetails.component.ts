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
  totalprice: number = 0;
  AllowedSizes: any = [];
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
        this.AllowedSizes = this.ProductDetails.sizes;
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
    this.totalprice = this.inputnumber * this.ProductDetails.price;
  }

  //here is the function needed to decrease the quantity
  minus() {
    if (this.inputnumber != 0) {
      this.inputnumber = this.inputnumber - 1;
      this.totalprice = this.inputnumber * this.ProductDetails.price;
    }
  }

  SelectedSizeUser: any;
  SelectSize(e: any) {
    this.SelectedSizeUser = JSON.parse(e.target.value);
  }

  AddToCart() {
    //here is calling for the api needed to post products to the cart
    if (this.ProductDetails.quantity < this.inputnumber) {
      this.toster.error(
        'Needed quantity is more than stock quantity',
        'Error operation'
      );
    } else {
      let body = {
        userId: JSON.parse(localStorage.getItem('UserData')!).id,
        totalPrice: this.totalprice,
        productId: this.ProductDetails.id,
        productQuantity: this.inputnumber,
      };
      this.apiService.PostMethod('Cart/AddToCart', body).subscribe(
        (data) => {
          this.toster.success(
            'Done add selected product to the cart',
            'Done messgae'
          );
          this.router.navigateByUrl('/cart');
        },
        (error) => {
          this.toster.error(
            'Error adding selected products in the cart',
            'Wrong operation'
          );
        }
      );
    }
  }
}
