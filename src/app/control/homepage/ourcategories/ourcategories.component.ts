import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudsServicesService } from '../../CrudsServices/CrudsServices.service';
import { environment } from '../../../../environments/environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ourcategories',
  templateUrl: './ourcategories.component.html',
  styleUrls: ['./ourcategories.component.css'],
})
export class OurcategoriesComponent implements OnInit {
  AllCategories: any = [];
  public readonly image_url = environment.ImgUrl;

  constructor(
    private router: Router,
    private apiServices: CrudsServicesService,
    private tosterService: ToastrService
  ) {}

  ngOnInit() {
    this.GetAllCategories();
  }

  //here is the function needed to get all added categories
  GetAllCategories() {
    this.apiServices.GetMethod('Category').subscribe(
      (data: any) => {
        this.AllCategories = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //here is the function needed to get all the products under the selected category
  ShowAllProducts(selectedCatID: any) {
    this.router.navigateByUrl(`/products/${selectedCatID}`);
  }
}
