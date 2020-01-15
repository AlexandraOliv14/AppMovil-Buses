import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageRecorridoCombinacionPage } from './page-recorrido-combinacion.page';

describe('PageRecorridoCombinacionPage', () => {
  let component: PageRecorridoCombinacionPage;
  let fixture: ComponentFixture<PageRecorridoCombinacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageRecorridoCombinacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageRecorridoCombinacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
