import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { CrudsServicesService } from '../CrudsServices/CrudsServices.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-custome-tshirt',
  templateUrl: './custome-tshirt.component.html',
  styleUrls: ['./custome-tshirt.component.css'],
})
export class CustomeTshirtComponent implements OnInit {
  Fabrics: any = [];
  Collars: any = [];
  Sleeves: any = [];
  SleeveHems: any = [];
  Pockets: any = [];
  Products: any = [];
  public readonly image_url = environment.ImgUrl;

  constructor(
    private modalService: NgbModal,
    private apiService: CrudsServicesService,
    private tosterService: ToastrService
  ) {
    this.Products = [
      {
        id: 1,
        title: 'T-shirt',
        img: '../../../assets/TshirtProduct.svg',
      },
    ];
  }

  ngOnInit() {}

  ShowProducts(content_products: any) {
    this.modalService.open(content_products);
  }

  //here is the function needed to get all added fabrics
  GetAllFabrics() {
    this.apiService.GetMethod('Fabric').subscribe(
      (data) => {
        this.Fabrics = data;
      },
      (error) => {
        this.tosterService.error('Error loading needed fabrics , Try again');
      }
    );
  }

  //here is the function needed to get all added collars
  GetAllCollars() {
    this.apiService.GetMethod('Collar').subscribe(
      (data) => {
        this.Collars = data;
        if (this.Collars.length == 0) {
          this.tosterService.error(
            'There is no added collars , please try again'
          );
        } else {
          this.Collars = data;
        }
      },
      (error) => {
        this.tosterService.error('Error loading needed collars , Try again');
      }
    );
  }

  //here is the function needed to get all added sleeves
  GetAllSeleeves() {
    this.apiService.GetMethod('Sleeve').subscribe(
      (data) => {
        this.Sleeves = data;
        if (this.Sleeves.length == 0) {
          this.tosterService.error(
            'There is no added sleeves , please try again'
          );
        } else {
          this.Sleeves = data;
        }
      },
      (error) => {
        this.tosterService.error('Error loading needed Sleeves , Try again');
      }
    );
  }

  //here is the function needed to get all added sleevehems
  GetAllSleeveHem() {
    this.apiService.GetMethod('SleeveHem').subscribe(
      (data) => {
        this.SleeveHems = data;
        if (this.SleeveHems.length == 0) {
          this.tosterService.error(
            'There is no added sleevesHems , please try again'
          );
        } else {
          this.SleeveHems = data;
        }
      },
      (error) => {
        this.tosterService.error(
          'Error loading needed SleevesHems , Try again'
        );
      }
    );
  }

  //here is the function needed to get all added pockets
  GetAllPockets() {
    this.apiService.GetMethod('Pocket').subscribe(
      (data) => {
        this.Pockets = data;
        if (this.Pockets.length == 0) {
          this.tosterService.error(
            'There is no added pockets , please try again'
          );
        } else {
          this.Pockets = data;
        }
      },
      (error) => {
        this.tosterService.error('Error loading needed pockets , Try again');
      }
    );
  }

  ShowFabrics(content: any) {
    this.modalService.open(content);
    this.GetAllFabrics();
  }

  ShowCollars(content_collar: any) {
    this.modalService.open(content_collar);
    this.GetAllCollars();
  }

  ShowSleeves(ShowSleeves: any) {
    this.modalService.open(ShowSleeves);
    this.GetAllSeleeves();
  }

  ShowSleeveHem(content_sleevehem: any) {
    this.modalService.open(content_sleevehem);
    this.GetAllSleeveHem();
  }

  ShowPockets(content_pockets: any) {
    this.modalService.open(content_pockets);
    this.GetAllPockets();
  }

  selectedImg: string = '../../../assets/fabric3.png';
  SelectedFabric(fabric: any) {
    this.selectedImg = this.image_url + fabric.image;
    this.modalService.dismissAll();
  }

  selectedCorallImg: string = '../../../assets/corral1.svg';
  SelectedCollar(collar: any) {
    this.selectedCorallImg = this.image_url + collar.image;
    this.modalService.dismissAll();
  }

  selectedSleeve: string = '../../../assets/sleeve_image.svg';
  SelectedSleeve(sleeve: any) {
    this.selectedSleeve = this.image_url + sleeve.image;
    this.modalService.dismissAll();
  }

  selectedpocket: string = '../../../assets/pocket1.svg';
  SelectPocket(pocket: any) {
    this.selectedpocket = this.image_url + pocket.image;
    this.modalService.dismissAll();
  }

  selectedSleeveHem: string = '../../../assets/sleeve_him.svg';
  SelectedSleeveHem(sleevehem: any) {
    this.selectedSleeveHem = this.image_url + sleevehem.image;
    this.modalService.dismissAll();
  }
}
