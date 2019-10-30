import { Component, OnInit } from '@angular/core';
import { TeamCostService } from '../services/team-cost.service';

@Component({
  selector: 'app-calculate-cost',
  templateUrl: './calculate-cost.component.html',
  styleUrls: ['./calculate-cost.component.scss']
})
export class CalculateCostComponent implements OnInit {

  constructor(public team:TeamCostService) { }

  teamMembers:any;
  managers:any;

  ngOnInit() {
    this.team.fetchEmp("1").subscribe(data => {
      this.teamMembers = data;
      console.log(this.teamMembers);
    });

    this.getAllManagers();
  }


  getAllManagers(){
    this.team.fetchAllManager().subscribe(data => {
      this.managers = data;
      console.log(this.managers);
    });
  }

  onSelectManager(manager){
    this.team.fetchEmp(manager).subscribe(data => {
      this.teamMembers = data;
      console.log(this.teamMembers);
    });

  }
  

}
