import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudetailComponent } from './studetail.component';

describe('StudetailComponent', () => {
  let component: StudetailComponent;
  let fixture: ComponentFixture<StudetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
