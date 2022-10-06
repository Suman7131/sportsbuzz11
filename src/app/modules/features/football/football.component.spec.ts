import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FootballComponent } from './football.component';

//import { KabaddiComponent } from './kabaddi.component';

describe('KabaddiComponent', () => {
  let component: FootballComponent;
  let fixture: ComponentFixture<FootballComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
