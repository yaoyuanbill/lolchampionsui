import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LolchampListComponent } from './lolchamp-list.component';

describe('LolchampListComponent', () => {
  let component: LolchampListComponent;
  let fixture: ComponentFixture<LolchampListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LolchampListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LolchampListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
