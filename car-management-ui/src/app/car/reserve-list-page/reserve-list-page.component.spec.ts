import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveListPageComponent } from './reserve-list-page.component';

describe('ReserveListPageComponent', () => {
  let component: ReserveListPageComponent;
  let fixture: ComponentFixture<ReserveListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReserveListPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReserveListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
