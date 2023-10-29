import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeProduitsComponent } from './commande-produits.component';

describe('CommandeProduitsComponent', () => {
  let component: CommandeProduitsComponent;
  let fixture: ComponentFixture<CommandeProduitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommandeProduitsComponent]
    });
    fixture = TestBed.createComponent(CommandeProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
