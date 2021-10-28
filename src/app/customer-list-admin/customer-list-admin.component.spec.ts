import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListAdminComponent } from './customer-list-admin.component';

describe('CustomerListAdminComponent', () => {
  let component: CustomerListAdminComponent;
  let fixture: ComponentFixture<CustomerListAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerListAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
