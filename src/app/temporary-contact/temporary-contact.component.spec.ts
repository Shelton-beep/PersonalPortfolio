import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporaryContactComponent } from './temporary-contact.component';

describe('TemporaryContactComponent', () => {
  let component: TemporaryContactComponent;
  let fixture: ComponentFixture<TemporaryContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemporaryContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemporaryContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
