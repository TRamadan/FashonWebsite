import { Component, OnInit } from '@angular/core';
import { CrudsServicesService } from '../CrudsServices/CrudsServices.service';
import { environment } from '../../../environments/environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  ShowProfileDataBool!: boolean;
  ShowOrdersDataBool!: boolean;
  ShowWishListDataBool!: boolean;
  AllFavoraits = [];
  AllOrders = [];
  constructor(
    private apiService: CrudsServicesService,
    private tosterService: ToastrService
  ) {}

  ngOnInit() {}

  //here is the function needed to get all orders based on the loggined user
  GetOrders() {
    this.apiService.GetMethod('Orders', 3).subscribe(
      (data: any) => {
        this.AllOrders = data;
      },
      (error) => {
        this.ShowOrdersDataBool = false;
        this.tosterService.error(
          'Error on loading order items , try again later',
          'Error operation'
        );
      }
    );
  }

  //here is the function needed to show all profile data for the user
  ShowYourProfile() {
    this.ShowProfileDataBool = true;
    this.ShowOrdersDataBool = false;
    this.ShowWishListDataBool = false;
  }

  //here is the function needed to show all wishlist
  ShowWishList() {
    this.ShowProfileDataBool = false;
    this.ShowOrdersDataBool = false;
    this.ShowWishListDataBool = true;
    this.GetWishList();
  }

  //here is the function needed to show all orders
  ShowOrders() {
    this.ShowProfileDataBool = false;
    this.ShowOrdersDataBool = true;
    this.ShowWishListDataBool = false;
    this.GetOrders();
  }

  //here is the fucntion needed to delete a selected order
  DeleteSelectedOrder() {}

  //here is the function needed to delete a selected product added to the wishlist
  DeleteSelectedWishListItem() {}

  //here is the function needed to get all wishlist
  GetWishList() {
    this.apiService.GetMethod('Favourites', 3).subscribe(
      (data) => {
        debugger;
        this.AllFavoraits;
      },
      (error) => {
        this.ShowWishListDataBool = false;
        this.tosterService.error(
          'Error on loading wishlist items , try again later',
          'Error operation'
        );
      }
    );
  }
}
