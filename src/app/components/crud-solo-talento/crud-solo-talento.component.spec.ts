import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudSoloTalentoComponent } from './crud-solo-talento.component';

describe('CrudSoloTalentoComponent', () => {
  let component: CrudSoloTalentoComponent;
  let fixture: ComponentFixture<CrudSoloTalentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudSoloTalentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrudSoloTalentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
