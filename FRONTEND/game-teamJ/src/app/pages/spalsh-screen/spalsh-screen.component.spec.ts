import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpalshScreenComponent } from './spalsh-screen.component';

describe('SpalshScreenComponent', () => {
  let component: SpalshScreenComponent;
  let fixture: ComponentFixture<SpalshScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpalshScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpalshScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
