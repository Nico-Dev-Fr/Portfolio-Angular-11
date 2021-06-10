import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionItemComponent } from './production-item.component';

describe('ProductionItemComponent', () => {
  let component: ProductionItemComponent;
  let fixture: ComponentFixture<ProductionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductionItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
