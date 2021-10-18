import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LolchampEditComponent } from './lolchamp-edit.component';

describe('LolchampEditComponent', () => {
  let component: LolchampEditComponent;
  let fixture: ComponentFixture<LolchampEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LolchampEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LolchampEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
