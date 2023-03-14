import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectaddComponent } from './subjectadd.component';

describe('SubjectaddComponent', () => {
  let component: SubjectaddComponent;
  let fixture: ComponentFixture<SubjectaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
