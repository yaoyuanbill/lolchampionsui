import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LolchampCreateComponent } from './lolchamp-create.component';

describe('LolchampCreateComponent', () => {
  let component: LolchampCreateComponent;
  let fixture: ComponentFixture<LolchampCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LolchampCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LolchampCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
