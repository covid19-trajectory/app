** Data opracowania: wtorek, 18 marca 2020, godz. 23:30 **

> Według zaprezentowanego poniżej modelu, przewidywana liczba zarażeń:
>
> - jutro (19 marca): około 410
> - pojutrze (19 marca): około 550
>
> ** Podwojenie liczby zarażonych odbywa się na stałym poziomie, co 2 dni i 7 godzin. **
>
> Przeczytaj, [dlaczego przewidywania są ważne i potrzebne](/#/dlaczego-prognozy-sa-wazne-i-potrzebne)?

# W dniu 18 marca mija 15 dni od pierwszego zdiagnozowanego zarażenia w Polsce

Po 15 dniach, jest 287 zarażań i 5 zgonów:

<div
    data-type="charts"
    data-chartuid="1BEHxmF1bQHv3btAa2RV8uCeu-yKKthO11Z7cvuPIUgg"
    data-range="B1:D15"
></div>

# Co ile dni następowało podwojenie liczby zarażonych?

Epidemia cechuje się rozwojem o przyroście wykładniczym. Jeżeli nie zostaną wprowadzone środki zapobiegawcze (kwarantanna/szczepionka), krzywa wykładnicza nie zmnieni się w krzywą logistyczną:

<div
    data-type="image"
    data-filename="krzywe.png"
></div>

## Rozwój epidemii obecnie można zatem zamodelować według wzoru `y=A+2^((x-S)/P)`, gdzie:

- `A` to początkowa liczba osób zainfekowanych na różnym poziomie stadium, którzy nie mieli jeszcze objawów, ale nieświadomie zarażali innych
- `S` to rzeczywisty pierwszy dzień epidemii w Polsce, kiedy przybyły osoby opisane powyżej
- `P` oznacza czas, po jakim dochodzi do podwojenia liczby zarażonych

Dla `A=-3`, `S=-4` i `P=2.3` poniższe wykresy zdiagnozowanych zarażeń oraz modelu pokrywają się przez cały dotychczasowy okres epidemii.

<div
    data-type="charts"
    data-chartuid="1aJPYUMvCl6qDitdSpZZxe5W_vreVX-rjvISP8is9sqU"
    data-range="B1:D16"
    data-rangetable="A1:E16"
    data-charttype="Line"
></div>

Wartości tych parametrów można jeszcze precyzyjniej wyliczyć, stosując metody numeryczne do aproksymacji. Moja wiedza w tym temacie wymaga odświeżenia. Zwracam się również z gorącą prośbą do studentów i kadry naukowej o [kontakt](/#kontakt) i pomoc w tym zakresie.

## Jak interpretować wartości parametrów?

- `A=-3` spośród osób, które przybyły do Polski na początku marca, trzy osoby mogły być tutaj jedynie przejezdnie, ale zdążyły nieświadomie zainfekować innych. Gdyby poddać podobnej analizie rozwój epidemii w innych krajach, uwzględniając daty i rzetelność państw we wczesnym wykonywaniu testów, moglibyśmy ustalić migracje "pacjentów zero" poszczególnych.
- `S=-4` rzeczywisty początek epidemii w Polsce to nie 4 marca, gdy ogłoszono pierwszy przypadek zarażonej osoby, ale 4 dni wcześniej, czyli 29 lutego. Wyliczenie precyzyjnych wartości parametrów metodami numerycznymi mogłoby określić ten moment co do godziny.
- `P=2.3` podwojenie się liczby zarażonych odbywa się w stałym tempie co 2 dni, 7 godzin i 12 minut.

Intuicja podpowiada, że wartość `P` powinna się zmieniać w czasie. Może rosnąć lub maleć.

Przykłady powodów do zwiększania się `P`:

- apele o zwiększoną higienę (mycie rąk)
- apele o pozostawaniu w domu
- poddawanie kwarantannie osób podejrzanych o zainfekowanie
- przechodzenie w tryb pracy zdalnej
- zamknięcie galerii handlowych, restauracji, barów, kin, itp
- zamknięcie granic kraju

Przykłady powodów do zmniejszania się `P`:

- napływ zainfekowanych z zagranicy bez narzucania im kwarantanny
- zwiększenie ilości interakcji i migracji ludzi (np. premiery hitów w kinach, koncerty, festiwale, okres rekolekcji, święta Wielkanocy)

Od momentu zainfekowania, pierwsze objawy zaczynają występować po około pięciu dniach.

Jeżeli więc następuje jakiś powód do zmiany `P` (np. decyzja rządu o zamknięciu szkół), dla dnia `x` przyjmujemy `P` z dnia `x-5`, bo po takim czasie statystycznie odniesie skutek.

# Prognoza ilości zarażonych

> ### UWAGA!
>
> #### Poniższa prognoza opiera się wyłącznie na modelu matematycznym, który:
>
> - opera się na założeniach mogących okazać się błędnymi
> - nie uwzględnia nowo podjętych działań, jakie mogą nastąpić w kolejnych dniach i tygodniach
> - został wykonany z największą starannością, ale jednak przez amatora (nie jestem epidemiologiem)
>
> Zapraszam do [kontaktu](/#kontakt) osoby potrafiące udoskonalić model.

W okresie 9-13 marca zostały podjęte decyzje, m. in.:

- zamknięcie szkół od poniedziałku
- zamknięcie granic od niedzieli i poddawanie kwarantannie wszystkich przyjezdnych
- zamnięcie restauracji, barów, galerii handlowych, ośrodków kultury (kina, teatry itp)
- zakaz zgromadzeń powyżej 50 osób

Przybywa również reakcji na apele, m. in.:

- przechodzenie biur w tryb pracy zdalnej
- wpuszczanie klientów pojedynczo do sklepów/aptek
- zachowanie zwiększonego odstępu w kolejkach
- wydzielenie strefy dla kierujących autobusami/tramwajami
- ograniczanie dostępności urzędów dla kontaktu fizycznego i przechodzenie na załatwianie spraw przez telefon lub internet
- zawieszenie opłat parkingowych, by zmniejszyć ruch w komunikacji miejskiej

Z drugiej strony do 15 marca mieliśmy otwarte granice, więc teorietycznie mogło przybyć osób zainfekowanych przybywających do Polski nie mając wówczas jeszcze objawów.

W dniach 4-18 marca `P`, czyli ilość czasu potrzebna na podwojenie liczby zarażonych, stoi na stałym poziomie 2.3, czyli 2 dni i 7 godzin.

Jeżeli przyjmiemy dalszą taką samą wartość `P`, to prognoza liczby zarażonych wygląda następująco:

<div
    data-type="charts"
    data-chartuid="1aJPYUMvCl6qDitdSpZZxe5W_vreVX-rjvISP8is9sqU"
    data-range="B1:D55"
    data-rangetable="A1:E55"
    data-charttype="Line"
></div>

Gdy więc nie zostaną podjęte dalsze nowe działania zapobiegawcze, to zaprezentowany model przewiduje:

- pod koniec marca przekroczenie kilkunastu tysięcy liczby zarażonych i osiągnięcie maksymalnej wydolności szpitali i oddziałów ratunkowych
- w połowie kwietnia, przekroczenie zarażenia 1 miliona ludności (zakładając, że zaraźliwość na bezpośrednią ekspozycję z wirusem wynosi 100%)
