import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LolChampion } from '../shared/lol-champion';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-lolchamp-edit',
  templateUrl: './lolchamp-edit.component.html',
  styleUrls: ['./lolchamp-edit.component.css']
})
export class LolchampEditComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];

  championDetails!: LolChampion;

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.restApi.getChampion(this.id).subscribe((data: LolChampion) => {
      this.championDetails = data;
    })
  }

  updateChampion() {
    if(window.confirm('Are you sure you want to update?')) {
      this.restApi.updateChampion(this.id,this.championDetails).subscribe(data => {
        this.router.navigate(['/lolchamp-list'])
      })
    }
  }

}
