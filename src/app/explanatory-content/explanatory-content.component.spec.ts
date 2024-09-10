import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplanatoryContentComponent } from './explanatory-content.component';

describe('ExplanatoryContentComponent', () => {
  let component: ExplanatoryContentComponent;
  let fixture: ComponentFixture<ExplanatoryContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExplanatoryContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplanatoryContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
