import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudsServicesService } from '../../CrudsServices/CrudsServices.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-ourproducts',
  templateUrl: './ourproducts.component.html',
  styleUrls: ['./ourproducts.component.css'],
})
export class OurproductsComponent implements OnInit {
  AllProducts: any = [];
  ProductSample: any = [];
  public readonly image_url = environment.ImgUrl;

  constructor(
    private tosterService: ToastrService,
    private router: Router,
    private apiServices: CrudsServicesService
  ) {}

  ngOnInit() {
    this.GetAllProducts();
  }

  //here is the function needed to get all added products
  GetAllProducts() {
    this.apiServices.GetMethod('Product').subscribe(
      (data) => {
        //show only first 3
        this.AllProducts = data;
      },
      (error) => {
        this.tosterService.error(
          'Loading products is faild , please try again',
          'Wrong operation'
        );
      }
    );
  }
  ShowDetails(selected_prodid: any) {
    this.router.navigateByUrl(`/product_details/${selected_prodid}`);
  }

  //here is the function needed to add a select product to the favorait list or whishlist
  //Favourites/AddToFavourites
  AddToFavoraits(product_id: any) {
    this.apiServices
      .PostMethod(`Favourites/AddToFavourites/3/${product_id}`)
      .subscribe(
        (data) => {
          this.tosterService.success(
            'Done added selected product to the wishlist',
            'Successfull operation'
          );
        },
        (error) => {
          this.tosterService.error(
            'Error on adding selected product to the cart',
            'Error operation'
          );
        }
      );
  }
}
