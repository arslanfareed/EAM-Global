import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamCostService {

  constructor(
    private httpClient: HttpClient
    ) { }


    baseURL:any = "http://localhost:80/employee/";


    fetchEmp(managerId: string):Observable<any>{
   
      return this.httpClient.get<any>('https://eamglobal.000webhostapp.com/employee/fetchTeam.php?managerId='+ managerId);
    
    }

    fetchAllManager():Observable<any>{
   
      return this.httpClient.get<any>('https://eamglobal.000webhostapp.com/employee/fetchManager.php');
    
    }

    addTeamMember(managerId: string, empName: string, designationId: string):Observable<any>{
   
      return this.httpClient.get<any>('https://eamglobal.000webhostapp.com/employee/addTeamMember.php?managerId=' + managerId + '&&empName=' + empName + '&&designationId=' + designationId );
    
    }
}
