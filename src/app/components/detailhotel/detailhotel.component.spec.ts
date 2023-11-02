import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailhotelComponent } from './detailhotel.component';

describe('DetailhotelComponent', () => {
  let component: DetailhotelComponent;
  let fixture: ComponentFixture<DetailhotelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailhotelComponent]
    });
    fixture = TestBed.createComponent(DetailhotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
