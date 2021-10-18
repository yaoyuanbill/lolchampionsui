import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-lolchamp-list',
  templateUrl: './lolchamp-list.component.html',
  styleUrls: ['./lolchamp-list.component.css']
})

export class LolchampListComponent implements OnInit {

  Champions: any = [];
  constructor(
    public restApi: RestApiService
    ) { }

  ngOnInit(): void {
    this.loadChampions()
  }

  loadChampions() {
    return this.restApi.getChampions().subscribe((data: {}) => {
        this.Champions = data;
    })
  }

  deleteChampion(id:any) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.restApi.deleteChampion(id).subscribe(data => {
        this.loadChampions()
      })
    }
  }

}
