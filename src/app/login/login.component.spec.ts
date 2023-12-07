import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LOGINComponent } from './login.component';

describe('LOGINComponent', () => {
  let component: LOGINComponent;
  let fixture: ComponentFixture<LOGINComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LOGINComponent]
    });
    fixture = TestBed.createComponent(LOGINComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
