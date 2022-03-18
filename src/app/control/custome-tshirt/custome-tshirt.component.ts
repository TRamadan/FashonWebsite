import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  constructor(private modalService: NgbModal) {
    this.Fabrics = [
      {
        id: 1,
        img: '../../../assets/fabricbeige.jpg',
        title: 'fabric title1',
        description: 'fabric description1',
      },
      {
        id: 2,
        img: '../../../assets/fabrickohly.jpg',
        title: 'fabric title2',
        description: 'fabric description2',
      },
    ];

    this.Collars = [
      {
        id: 1,
        title: 'O-neck',
        img: '../../../assets/corral1.svg',
      },

      {
        id: 2,
        title: 'V-neck',
        img: '../../../assets/corral2.svg',
      },
    ];

    this.Sleeves = [
      {
        id: 1,
        title: 'Short',
        img: '../../../assets/sleeve_image.svg',
      },

      {
        id: 2,
        title: 'Long',
        img: '../../../assets/sleeve_long.svg',
      },
    ];

    this.SleeveHems = [
      { id: 1, title: 'Simple', img: '../../../assets/sleeve_him.svg' },
      {
        id: 2,
        title: 'Folded',
        img: '../../../assets/foolded_sleeve.svg',
      },
    ];

    this.Pockets = [
      {
        id: 1,
        title: 'No thanks',
        img: '../../../assets/pocket1.svg',
      },

      {
        id: 2,
        title: 'Left',
        img: '../../../assets/pocket-right.svg',
      },
    ];

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

  ShowFabrics(content: any) {
    this.modalService.open(content);
  }

  ShowCollars(content_collar: any) {
    this.modalService.open(content_collar);
  }

  ShowSleeves(ShowSleeves: any) {
    this.modalService.open(ShowSleeves);
  }

  ShowSleeveHem(content_sleevehem: any) {
    this.modalService.open(content_sleevehem);
  }

  ShowPockets(content_pockets: any) {
    this.modalService.open(content_pockets);
  }

  selectedImg: string = '../../../assets/fabric3.png';
  SelectedFabric(fabric: any) {
    this.selectedImg = fabric.img;
    this.modalService.dismissAll();
  }

  selectedCorallImg: string = '../../../assets/corral1.svg';
  SelectedCollar(collar: any) {
    this.selectedCorallImg = collar.img;
    this.modalService.dismissAll();
  }

  selectedSleeve: string = '../../../assets/sleeve_image.svg';
  SelectedSleeve(sleeve: any) {
    this.selectedSleeve = sleeve.img;
    this.modalService.dismissAll();
  }

  selectedpocket: string = '../../../assets/pocket1.svg';
  SelectPocket(pocket: any) {
    this.selectedpocket = pocket.img;
    this.modalService.dismissAll();
  }

  selectedSleeveHem: string = '../../../assets/sleeve_him.svg';
  SelectedSleeveHem(sleevehem: any) {
    this.selectedSleeveHem = sleevehem.img;
    this.modalService.dismissAll();
  }
}
