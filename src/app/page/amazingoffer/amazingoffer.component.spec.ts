import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazingofferComponent } from './amazingoffer.component';

describe('AmazingofferComponent', () => {
  let component: AmazingofferComponent;
  let fixture: ComponentFixture<AmazingofferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazingofferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazingofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
