import { Component } from '@angular/core';
import { ShipperService } from 'src/app/services/shipper.service';

@Component({
  selector: 'app-shipper-details',
  templateUrl: './shipper-details.component.html',
  styleUrls: ['./shipper-details.component.css']
})
export class ShipperDetailsComponent {
  selectedname:any;
  shippers:any[]=[];
  shipmentDetails:any[]=[];
  constructor(private shipperService:ShipperService){

  }
  ngOnInit(): void {
    this.getShippers();
  }

  getShippers(){
    this.shipperService.getShippers().subscribe((res:any)=>{
      this.shippers = res;
    })
  }
  onChangeName(val:any) {
    this.getShipmentDetail(this.selectedname);
  }

  getShipmentDetail(id:any){
    this.shipperService.getShipmentDetail(id).subscribe((res:any)=>{
      this.shipmentDetails = res;
    })
  }

}
