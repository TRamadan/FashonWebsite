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
  AllProducts: any[] = [];
  ProductSample: any = [];
  FetchedUserData: any;
  public readonly image_url = environment.ImgUrl;

  constructor(
    private tosterService: ToastrService,
    private router: Router,
    private apiServices: CrudsServicesService
  ) {}

  ngOnInit() {
    this.GetAllProducts();
    this.FetchedUserData = JSON.parse(localStorage.getItem('UserData')!).id;
  }

  //here is the function needed to get all added products
  ParsedProductsArray: any = [];
  GetAllProducts() {
    this.apiServices.GetMethod('Product').subscribe(
      (data: any) => {
        //show only first 3
        this.AllProducts = data;
        this.AllProducts.forEach((element: any) => {
          if (this.ParsedProductsArray.length < 3) {
            this.ParsedProductsArray.push({
              image: element.image,
              name: element.name,
              details: element.details,
              id: element.id,
            });
          }
        });
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
    if (this.FetchedUserData == undefined) {
      this.tosterService.error('Please login first to add to favoraits');
      this.router.navigateByUrl('auth/login');
    } else {
      this.apiServices
        .PostMethod(
          `Favourites/AddToFavourites/${this.FetchedUserData}/${product_id}`
        )
        .subscribe(
          (data) => {
            this.tosterService.success(
              'Done added selected product to the wishlist',
              'Successfull operation'
            );
          },
          (error) => {
            if (error.status == 400) {
              this.tosterService.error(
                'Product already added to the wishlist',
                'Error operation'
              );
            }
          }
        );
    }
  }
}
