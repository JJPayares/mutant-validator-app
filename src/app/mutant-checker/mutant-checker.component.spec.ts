import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutantCheckerComponent } from './mutant-checker.component';

describe('MutantCheckerComponent', () => {
  let component: MutantCheckerComponent;
  let fixture: ComponentFixture<MutantCheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MutantCheckerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MutantCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
