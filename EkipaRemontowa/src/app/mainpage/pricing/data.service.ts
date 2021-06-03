import { Injectable } from '@angular/core';
import { Field } from './field';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private priceList: Map<string, Array<Field>> = new Map<
    string,
    Array<Field>
  >();

  private Lazienka: Array<Field> = [
    {
      id: 0,
      name: 'Powierszchnia podłogi',
      pricePerUnit: 10,
      unit: 'm2',
      visible: true,
    },
    {
      id: 1,
      name: 'Powierszchnia do płytek',
      pricePerUnit: 10,
      unit: 'm2',
      visible: true,
    },
    {
      id: 2,
      name: 'Gniazdka',
      pricePerUnit: 10,
      unit: 'szt',
      visible: true,
    },
    {
      id: 3,
      name: 'Bateria',
      pricePerUnit: 10,
      unit: 'szt',
      visible: true,
    },
    {
      id: 4,
      name: 'Wanna',
      pricePerUnit: 10,
      unit: 'szt',
      visible: true,
    },
    {
      id: 5,
      name: 'Przysznic',
      pricePerUnit: 10,
      unit: 'szt',
      visible: true,
    },
  ];

  private Elektryka: Array<Field> = [
    {
      id: 0,
      name: 'Instalacka LAN,RTV, 3faz',
      pricePerUnit: 220,
      unit: 'szt',
      visible: true,
    },
    {
      id: 1,
      name: 'Oświetlenie górne, kinkiety',
      pricePerUnit: 50,
      unit: 'szt',
      visible: true,
    },
    {
      id: 2,
      name: 'Przeniesienie punktów el. (gniazdek, kinkietów, oświetlenia)',
      pricePerUnit: 90,
      unit: 'szt',
      visible: true,
    },
  ];

  private Malowanie_GK: Array<Field> = [
    {
      id: 0,
      name: 'Montaż ścianek działowych z pł. g-k',
      pricePerUnit: 100,
      unit: 'm2',
      visible: true,
    },
    {
      id: 1,
      name: 'Montaż sufitu podwieszanego',
      pricePerUnit: 90,
      unit: 'm2',
      visible: true,
    },
    {
      id: 2,
      name: 'Szpachlowanie spoin ścian z płyt g-k (przygotowanie do malowania bez gładzi)',
      pricePerUnit: 10,
      unit: 'm2',
      visible: false,
    },
    {
      id: 3,
      name: 'Gruntowanie ścian farbą podkładową (należy doliczyć do ceny malowania)',
      pricePerUnit: 6,
      unit: 'm2',
      visible: false,
    },
    {
      id: 4,
      name: 'Malowanie w kolorze białym',
      pricePerUnit: 9,
      unit: 'm2',
      visible: false,
    },
    {
      id: 5,
      name: 'Malowanie w innych odcieniach niż biały',
      pricePerUnit: 11,
      unit: 'm2',
      visible: false,
    },
    {
      id: 6,
      name: 'Gładzie na ścianach i sufitach ',
      pricePerUnit: 24,
      unit: 'm2',
      visible: true,
    },
    {
      id: 7,
      name: 'Szpachlowanie siatki zbrojącej na pęknięciach i zarysowaniach ',
      pricePerUnit: 8,
      unit: 'mb',
      visible: false,
    },
  ];

  private Kafelki: Array<Field> = [
    {
      id: 0,
      name: 'Montaż kafli w rozmiarze 20x20 lub mniejszych',
      pricePerUnit: 150,
      unit: 'm2',
      visible: false,
    },
    {
      id: 1,
      name: 'Montaż kafli w rozmiarach od 30x30 do 120x60',
      pricePerUnit: 90,
      unit: 'm2',
      visible: false,
    },
    {
      id: 2,
      name: 'Montaż kafli w rozmiarach większych niż 120x60',
      pricePerUnit: 130,
      unit: 'm2',
      visible: false,
    },
    {
      id: 3,
      name: 'Montaż cokołów z kafli',
      pricePerUnit: 40,
      unit: 'mb',
      visible: false,
    },
    {
      id: 4,
      name: 'Montaż mozaiki',
      pricePerUnit: 150,
      unit: 'm2',
      visible: false,
    },
  ];

  private Rozbiorka: Array<Field> = [
    {
      id: 0,
      name: 'Skucie starej glazury',
      pricePerUnit: 40,
      unit: 'm2',
      visible: true,
    },
    {
      id: 1,
      name: 'Skuwanie tynku',
      pricePerUnit: 21,
      unit: 'm2',
      visible: true,
    },
    {
      id: 2,
      name: 'Wyburzanie ścian z materiałów miękkich np: pustak',
      pricePerUnit: 90,
      unit: 'm2',
      visible: false,
    },
    {
      id: 3,
      name: 'Wyburzanie ścian i sufitów z betonu, grubość do 20 cm ',
      pricePerUnit: 210,
      unit: 'm2',
      visible: false,
    },
    {
      id: 4,
      name: 'Wyburzanie ścian z cegły, grubość do 20 cm ',
      pricePerUnit: 120,
      unit: 'm2',
      visible: false,
    },
    {
      id: 5,
      name: 'Wyburzanie ścian z cegły, grubość powyżej 20 cm',
      pricePerUnit: 140,
      unit: 'm2',
      visible: false,
    },
    {
      id: 6,
      name: 'Skuwanie posadzki',
      pricePerUnit: 80,
      unit: 'm2',
      visible: true,
    },
    {
      id: 7,
      name: 'Uzupełnienie pasów tynków po wyburzonych ścianach i otworach',
      pricePerUnit: 60,
      unit: 'mb',
      visible: false,
    },
  ];

  private Montaz: Array<Field> = [
    {
      id: 0,
      name: 'Montaż drzwi wewnętrznych wraz z klamką',
      pricePerUnit: 240,
      unit: 'szt',
      visible: true,
    },
    {
      id: 1,
      name: 'Montaż tunelu tv w ścianie z materiałów miękkich',
      pricePerUnit: 250,
      unit: 'szt',
      visible: false,
    },
    {
      id: 2,
      name: 'Montaż tunelu tv w ścianie betonowej',
      pricePerUnit: 350,
      unit: 'szt',
      visible: false,
    },
    {
      id: 3,
      name: 'Montaż parapetów wewnętrznych',
      pricePerUnit: 80,
      unit: 'mb',
      visible: false,
    },
  ];

  private Podloga: Array<Field> = [
    {
      id: 0,
      name: 'Wylewki tradycyjne',
      pricePerUnit: 60,
      unit: 'm2',
      visible: false,
    },
    {
      id: 1,
      name: 'Wylewki samopoziomujące',
      pricePerUnit: 50,
      unit: 'm2',
      visible: false,
    },
    {
      id: 2,
      name: 'Montaż paneli podłogowych',
      pricePerUnit: 24,
      unit: 'm2',
      visible: true,
    },
    {
      id: 3,
      name: 'Montaż listew przypodłogowych MDF',
      pricePerUnit: 22,
      unit: 'm2',
      visible: true,
    },
  ];

  private PraceLazienka: Array<Field> = [
    {
      id: 0,
      name: 'Zmiana umiejsowienia przyłączy do pralki',
      pricePerUnit: 350,
      unit: 'szt',
      visible: false,
    },
    {
      id: 1,
      name: 'Zmiana umiejsowienia przyłączy do wc',
      pricePerUnit: 350,
      unit: 'szt',
      visible: false,
    },
    {
      id: 2,
      name: 'Zmiana umiejsowienia przyłączy do grzejnika',
      pricePerUnit: 350,
      unit: 'szt',
      visible: false,
    },
    {
      id: 3,
      name: 'Zmiana umiejsowienia przyłączy do umywalki ',
      pricePerUnit: 350,
      unit: 'szt',
      visible: false,
    },
    {
      id: 4,
      name: 'Zmiana umiejscowienia przyłączy do prysznica ',
      pricePerUnit: 350,
      unit: 'szt',
      visible: false,
    },
    {
      id: 5,
      name: 'Montaz grzejnika łazienkowego',
      pricePerUnit: 200,
      unit: 'szt',
      visible: false,
    },
    {
      id: 6,
      name: 'Wkucie w ścianę przyłączy wodnych poprowadzonych natynkowo',
      pricePerUnit: 80,
      unit: 'szt',
      visible: false,
    },
    {
      id: 7,
      name: 'Przeniesienie gniazd/włączników/oświetlenia',
      pricePerUnit: 90,
      unit: 'szt',
      visible: false,
    },
    {
      id: 8,
      name: 'Montaż sufitu podwieszanego',
      pricePerUnit: 100,
      unit: 'm2',
      visible: false,
    },
    {
      id: 9,
      name: 'dodatkowe punkty świetlne w suficie podwieszanym',
      pricePerUnit: 60,
      unit: 'szt',
      visible: false,
    },
    {
      id: 10,
      name: 'Montaż zestawu podtynkowego wc, typu Geberit',
      pricePerUnit: 350,
      unit: 'szt',
      visible: false,
    },
    {
      id: 11,
      name: 'Zabudowa g/k zestawu podtynkowego wc',
      pricePerUnit: 200,
      unit: 'szt',
      visible: false,
    },
    {
      id: 12,
      name: 'Montaż odpływu liniowego',
      pricePerUnit: 450,
      unit: 'szt',
      visible: false,
    },
    {
      id: 13,
      name: 'Montaż baterii umywalkowej natynkowej/naumywalkowej',
      pricePerUnit: 150,
      unit: 'szt',
      visible: false,
    },
    {
      id: 14,
      name: 'Montaż baterii umywalkowej podtynkowej',
      pricePerUnit: 350,
      unit: 'szt',
      visible: false,
    },
    {
      id: 15,
      name: 'Montaż baterii nawannowej',
      pricePerUnit: 400,
      unit: 'szt',
      visible: false,
    },
    {
      id: 16,
      name: 'Montaż podtynkowej baterii prysznicowej wraz z deszczownicą',
      pricePerUnit: 450,
      unit: 'szt',
      visible: false,
    },
    {
      id: 17,
      name: 'Montaż natynkowej baterii prysznicowej wraz z deszczownicą',
      pricePerUnit: 350,
      unit: 'szt',
      visible: false,
    },
    {
      id: 18,
      name: 'Hydroizolacja łazienki folią w płynie oraz taśmą hydroizolacyjną',
      pricePerUnit: 450,
      unit: 'szt',
      visible: false,
    },
    {
      id: 19,
      name: 'Montaz szyby prysznicowej typu Walk-in',
      pricePerUnit: 300,
      unit: 'szt',
      visible: false,
    },
    {
      id: 20,
      name: 'Montaz podłogowej maty grzewczej',
      pricePerUnit: 500,
      unit: 'szt',
      visible: false,
    },
    {
      id: 21,
      name: 'Budowa dodatkowych półek z G/k pod przysznicem',
      pricePerUnit: 200,
      unit: 'szt',
      visible: false,
    },
    {
      id: 22,
      name: 'Montaż płytek podłogowych w łazience',
      pricePerUnit: 100,
      unit: 'm2',
      visible: false,
    },
    {
      id: 23,
      name: 'Obudowa płytkami odpływu liniowego ze spadkiem',
      pricePerUnit: 300,
      unit: 'szt',
      visible: false,
    },
    {
      id: 24,
      name: 'Montaż płytek ściennych wraz z docinaniem narożników pod kątem 45° ',
      pricePerUnit: 120,
      unit: 'm2',
      visible: false,
    },
    {
      id: 25,
      name: 'Układanie cegły wraz z impregnacją i fugowaniem ',
      pricePerUnit: 170,
      unit: 'm2',
      visible: false,
    },
    {
      id: 26,
      name: 'Gładź na ścianach lub sufitach ',
      pricePerUnit: 27,
      unit: 'm2',
      visible: false,
    },
    {
      id: 27,
      name: 'Malowanie ścian lub sufitu',
      pricePerUnit: 20,
      unit: 'm2',
      visible: false,
    },
    {
      id: 28,
      name: 'Montaż drobnych elementów wyposażenia (np: póleczka, uchwyt na papier)',
      pricePerUnit: 40,
      unit: 'szt',
      visible: false,
    },
    {
      id: 29,
      name: 'Montaz standardowego lustra nawieszanego',
      pricePerUnit: 40,
      unit: 'szt',
      visible: false,
    },
    {
      id: 30,
      name: 'Montaż lusra nawieszanego z podłączeniem wewnętrznego oświetlenia LED',
      pricePerUnit: 70,
      unit: 'szt',
      visible: false,
    },
    {
      id: 31,
      name: 'Nałożenie fugi cementowej oraz silikonu w całej łazience',
      pricePerUnit: 500,
      unit: 'szt',
      visible: false,
    },
    {
      id: 32,
      name: 'Montaż szafki podumywalkowej',
      pricePerUnit: 160,
      unit: 'szt',
      visible: false,
    },
    {
      id: 33,
      name: 'Montaż wanny',
      pricePerUnit: 500,
      unit: 'szt',
      visible: false,
    },
    {
      id: 34,
      name: 'Wykonanie zabudowy wanny z bloczków',
      pricePerUnit: 350,
      unit: 'szt',
      visible: false,
    },
    {
      id: 35,
      name: 'Montaż misy wc',
      pricePerUnit: 200,
      unit: 'szt',
      visible: false,
    },
    {
      id: 36,
      name: 'Montaż umywalki z podłączeniem syfonu',
      pricePerUnit: 190,
      unit: 'szt',
      visible: false,
    },
    {
      id: 37,
      name: 'Montaż brodzika prysznicowego',
      pricePerUnit: 270,
      unit: 'szt',
      visible: false,
    },
    {
      id: 38,
      name: 'Montaż kabiny prysznicowej otwieranej/przesuwnej',
      pricePerUnit: 350,
      unit: 'szt',
      visible: false,
    },
    {
      id: 39,
      name: 'Montaz oświetlenie górnego',
      pricePerUnit: 50,
      unit: 'szt',
      visible: false,
    },
    {
      id: 40,
      name: 'Montaż kinkietu',
      pricePerUnit: 50,
      unit: 'szt',
      visible: false,
    },
  ];

  private Notes: Array<Field> = [
    {
      id: 0,
      name: '* Wszystkie ceny podane w kosztorysie dotyczą robocizny bez mteriałów budowalnych',
      pricePerUnit: 0,
      unit: '',
      visible: true,
    },
    {
      id: 1,
      name: '* Za zakup materiałów budowalanych potrzebnych do wykonania zlecenia jest odpowiedzialna ekipa remontowa, jednak koszta materiałów pokrywa klient',
      pricePerUnit: 0,
      unit: '',
      visible: true,
    },
    {
      id: 2,
      name: '* Podana wycena jest przykładową i nie stanowi ostatecznej ceny prac, jednak jest przybliżona do rzeczywistej',
      pricePerUnit: 0,
      unit: '',
      visible: true,
    },
  ];

  constructor() {
    this.priceList.set('Prace elektryczne', this.Elektryka);
    this.priceList.set('Prace kafelkarskie', this.Kafelki);
    this.priceList.set('Prace malarskie oraz gk', this.Malowanie_GK);
    this.priceList.set('Prace rozbiórkowe', this.Rozbiorka);
    this.priceList.set('Prace montażowe', this.Montaz);
    this.priceList.set('Podłogi, posadzki, wylewki', this.Podloga);
    this.priceList.set('PRACE W ŁAZIENCE', this.PraceLazienka);
    this.priceList.set('Notes', this.Notes);

    var obj = JSON.stringify(this.priceList);
    console.clear();
    console.log(obj);
    console.log(this.priceList);
  }

  public getElectricityList(): Array<Field> {
    return this.Lazienka;
  }

  public getBathroomList(): Array<Field> {
    return this.Lazienka;
  }

  public getFloorList(): Array<Field> {
    return this.Lazienka;
  }

  public getFieldsForType(type: string): Array<Field> {
    switch (type) {
      case 'Łazienka':
        return this.Lazienka;
      case 'Elektryka':
        return this.Elektryka;
      case 'Podłogi':
        return this.Podloga;
      default:
        return this.Lazienka;
    }
  }
}
