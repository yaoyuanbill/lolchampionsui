import { Component, OnInit } from '@angular/core';
import { LolChampion } from '../shared/lol-champion';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-lolchamp-list',
  templateUrl: './lolchamp-list.component.html',
  styleUrls: ['./lolchamp-list.component.css']
})

export class LolchampListComponent implements OnInit {

  champions: LolChampion[] = [];

  constructor(
    public restApi: RestApiService
    ) { }

  ngOnInit(): void {
    this.loadChampions()
  }

  loadChampions() {
    return this.restApi.getChampions().subscribe((data:LolChampion[]) => {
        this.champions = data;
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
