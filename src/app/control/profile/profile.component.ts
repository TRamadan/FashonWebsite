import { Component, OnInit } from '@angular/core';
import { CrudsServicesService } from '../CrudsServices/CrudsServices.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  ShowProfileDataBool!: boolean;
  ShowOrdersDataBool!: boolean;
  ShowWishListDataBool!: boolean;
  AllFavoraits: any[] = [];
  AllOrders: any[] = [];
  FetchedUserData: string = '';
  FullName: string = '';
  AllUserData: any;
  constructor(
    private apiService: CrudsServicesService,
    private tosterService: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.FetchedUserData = JSON.parse(localStorage.getItem('UserData')!).id;
    this.FullName =
      JSON.parse(localStorage.getItem('UserData')!).firstName +
      ' ' +
      JSON.parse(localStorage.getItem('UserData')!).middleName +
      ' ' +
      JSON.parse(localStorage.getItem('UserData')!).lastName;
    this.AllUserData = JSON.parse(localStorage.getItem('UserData')!);
    this.ShowProfileDataBool = true;
  }

  //here is the function needed to get all orders based on the loggined user
  NoOrders: string = '';
  ParsedOrders: any;
  GetOrders() {
    this.apiService.GetMethod('Orders', this.FetchedUserData).subscribe(
      (data: any) => {
        this.AllOrders = data;
        if (this.AllOrders.length == 0) {
          this.NoOrders = 'There is no added orders';
        } else {
          this.AllOrders = data;
        }
      },
      (error) => {
        if (error.status == 400) {
          this.NoOrders = 'There is no orders now';
        } else {
          this.tosterService.error(
            'Error on loading order items , try again later',
            'Error operation'
          );
        }
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
  RemoveItem(i: any) {
    this.apiService.DeleteMethod('Favourites', this.FetchedUserData).subscribe(
      (data) => {
        this.AllFavoraits.splice(i, 1);
        this.GetWishList();
        this.tosterService.success(
          'Done Removing selected item',
          'Successfull operation'
        );
      },
      (error) => {
        this.tosterService.error(
          'Error on Deleting wishlist item , try again later',
          'Error operation'
        );
      }
    );
  }

  //here is the function needed to get all wishlist
  NoWishList: string = '';
  GetWishList() {
    this.apiService.GetMethod('Favourites', this.FetchedUserData).subscribe(
      (data: any) => {
        this.AllFavoraits = data.products;
        if (this.AllFavoraits.length == 0) {
          this.NoWishList = 'There is no items added';
        } else {
          this.AllFavoraits = data.products;
        }
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

  //here is the function needed to add a selected wishlist item to the cart
  AddToCart(selected_item: any) {
    this.router.navigateByUrl(`/product_details/${selected_item}`);
  }

  //here is the function needed to cancel an already placed order
  CancelOrder(selected_order: any) {
    this.apiService
      .DeleteMethod('Orders/CancelOrder', selected_order)
      .subscribe(
        (data) => {
          this.tosterService.success('Done cancel order');
          this.GetOrders();
        },
        (error) => {
          this.tosterService.error(
            'There is an error occured , please try again'
          );
        }
      );
  }
}
