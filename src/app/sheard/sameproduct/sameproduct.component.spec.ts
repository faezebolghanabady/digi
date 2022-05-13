import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SameproductComponent } from './sameproduct.component';

describe('SameproductComponent', () => {
  let component: SameproductComponent;
  let fixture: ComponentFixture<SameproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SameproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SameproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
