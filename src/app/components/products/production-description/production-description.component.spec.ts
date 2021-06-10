import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionDescriptionComponent } from './production-description.component';

describe('ProductionDescriptionComponent', () => {
  let component: ProductionDescriptionComponent;
  let fixture: ComponentFixture<ProductionDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductionDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
