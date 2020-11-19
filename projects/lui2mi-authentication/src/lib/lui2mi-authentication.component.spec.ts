import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lui2miAuthenticationComponent } from './lui2mi-authentication.component';

describe('Lui2miAuthenticationComponent', () => {
  let component: Lui2miAuthenticationComponent;
  let fixture: ComponentFixture<Lui2miAuthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lui2miAuthenticationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lui2miAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
