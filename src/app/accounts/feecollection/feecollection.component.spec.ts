import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeecollectionComponent } from './feecollection.component';

describe('FeecollectionComponent', () => {
  let component: FeecollectionComponent;
  let fixture: ComponentFixture<FeecollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeecollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeecollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
