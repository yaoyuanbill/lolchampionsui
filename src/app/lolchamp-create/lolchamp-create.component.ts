import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LolChampion } from '../shared/lol-champion';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-lolchamp-create',
  templateUrl: './lolchamp-create.component.html',
  styleUrls: ['./lolchamp-create.component.css']
})
export class LolchampCreateComponent implements OnInit {

  @Input() championDetails = { id:0, name:"", difficulty:"", role:"", imageUrl:""}

  constructor(
    public restApi: RestApiService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  addChampion() {
    this.restApi.createChampion(this.championDetails).subscribe((data: LolChampion) => {
      this.router.navigate(['/lolchamp-list'])
    })
  }

}
