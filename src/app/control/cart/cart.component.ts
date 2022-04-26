import { Component, OnInit } from '@angular/core';
import { CrudsServicesService } from '../CrudsServices/CrudsServices.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  AllCartItems: any = [];
  Products: any = [];
  TotalPrice!: number;
  public readonly image_url = environment.ImgUrl;
  FetchedData: any;

  constructor(
    private toster: ToastrService,
    private apiService: CrudsServicesService
  ) {}

  ngOnInit() {
    this.GetAllCartItems();
    this.FetchedData = JSON.parse(localStorage.getItem('UserData')!).id;
  }

  Delete() {
    //function body go here
  }

  //here is the function needed to get all the added items in the cart
  GetAllCartItems() {
    this.apiService
      .GetMethod('Cart', JSON.parse(localStorage.getItem('UserData')!).id)
      .subscribe(
        (data: any) => {
          this.AllCartItems = data;
          this.Products = data.products;
          this.TotalPrice = data.totalPrice;
        },
        (error) => {
          this.toster.error(
            'Error happens when fetching data from the cart',
            'Error operation'
          );
        }
      );
  }

  MakeOrder() {
    this.apiService
      .PostMethod(`Orders/AddOrder/${this.FetchedData}/`)
      .subscribe(
        (Data) => {
          this.toster.success('Successfull Place this order');
          location.href = '/';
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
