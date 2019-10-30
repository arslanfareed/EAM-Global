import { Component, OnInit } from '@angular/core';
import { TeamCostService } from '../services/team-cost.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent implements OnInit {

  constructor(public team:TeamCostService) { }

  managers:any;
  manager:any = "";
  employeeName:any = "";
  designation:any = "";
  ngOnInit() {

    this.getAllManagers();
  }

  getAllManagers(){
    this.team.fetchAllManager().subscribe(data => {
      this.managers = data;
      console.log(this.managers);
    });
  }

  addTeamMember(){
    if(this.manager == "" || this.employeeName == "" || this.designation == "")
    {
      window.alert("Fill all the fields");
      
    } 
    else{
      this.team.addTeamMember(this.manager, this.employeeName, this.designation).subscribe(data => {
        console.log(data);
        });
    }
    
  }

}
