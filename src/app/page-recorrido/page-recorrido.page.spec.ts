import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageRecorridoPage } from './page-recorrido.page';

describe('PageRecorridoPage', () => {
  let component: PageRecorridoPage;
  let fixture: ComponentFixture<PageRecorridoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageRecorridoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageRecorridoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
