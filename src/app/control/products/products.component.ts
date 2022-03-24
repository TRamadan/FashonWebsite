import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudsServicesService } from '../CrudsServices/CrudsServices.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  selected_category_id: any;
  AllCategoryProducts: any;

  public readonly image_url = environment.ImgUrl;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: CrudsServicesService,
    private toster: ToastrService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((Params) => {
      this.GetAllProducts(Params['id']);
    });
  }

  NoProductsFound!: string;
  GetAllProducts(id: any) {
    this.apiService.GetMethod('Category/GetProducts', id).subscribe(
      (data: any) => {
        this.AllCategoryProducts = data;
        if (this.AllCategoryProducts.length == 0) {
          this.NoProductsFound =
            'There is no added products to the selected category';
        } else {
          this.AllCategoryProducts = data;
        }
      },
      (error) => {
        this.toster.error(
          'Cannot load products under category',
          'Wrong operation'
        );
      }
    );
  }

  ShowDetails(selected_prod: any) {
    this.router.navigateByUrl(`/product_details/${selected_prod}`);
  }

  //here is the function needed to add a select product to the favorait list or whishlist
  AddToFavoraits(selected_prod: any) {
    let body = {};

    this.apiService.PostMethod('', body).subscribe(
      (data) => {
        debugger;
      },
      (error) => {
        this.toster.error(
          'Error on adding selected product to the cart',
          'Error operation'
        );
      }
    );
  }
}
