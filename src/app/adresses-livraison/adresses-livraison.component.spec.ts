import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressesLivraisonComponent } from './adresses-livraison.component';

describe('AdressesLivraisonComponent', () => {
  let component: AdressesLivraisonComponent;
  let fixture: ComponentFixture<AdressesLivraisonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdressesLivraisonComponent]
    });
    fixture = TestBed.createComponent(AdressesLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
