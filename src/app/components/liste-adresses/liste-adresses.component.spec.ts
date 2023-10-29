import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAdressesComponent } from './liste-adresses.component';

describe('ListeAdressesComponent', () => {
  let component: ListeAdressesComponent;
  let fixture: ComponentFixture<ListeAdressesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeAdressesComponent]
    });
    fixture = TestBed.createComponent(ListeAdressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
