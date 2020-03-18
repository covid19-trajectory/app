** Data opracowania: wtorek, 17 marca 2020, godz. 23:45 **

> tl;dr: Według zaprezentowanego poniżej modelu, przewidywana liczba zarażeń:
>
> - jutro (18 marca): około 320
> - pojutrze (19 marca): około 430
>
> Przeczytaj, [dlaczego przewidywania są ważne i potrzebne](/#/dlaczego-prognozy-sa-wazne-i-potrzebne)?

# W dniu 17 marca mija 14 dni od pierwszego zdiagnozowanego zarażenia w Polsce

Po 14 dniach, jest 238 zarażań i 5 zgonów:

<div
    data-type="charts"
    data-chartuid="1BEHxmF1bQHv3btAa2RV8uCeu-yKKthO11Z7cvuPIUgg"
    data-range="B1:D100"
></div>

# Co ile dni następowało podwojenie liczby zarażonych?

Epidemia cechuje się rozwojem o przyroście wykładniczym. Jeżeli nie zostaną wprowadzone środki zapobiegawcze (kwarantanna/szczepionka), krzywa wykładnicza nie zmnieni się w krzywą logistyczną:

<div
    data-type="image"
    data-filename="krzywe.png"
></div>

Rozwój epidemii obecnie można zatem zamodelować według wzoru `y=2^(x/P)`, gdzie `P` oznacza czas, po jakim dochodzi do podwojenia liczby zarażonych.

Im mniejsze `P`, tym krzywa wykładnicza wzrasta szybciej, im większe - wolniej.

Jeżeli `P` będzie się zwiększać, niejako "kupujemy" czas:

- zmniejszamy liczbę zarażonych i zgonów
- mamy szansę nieprzekroczyć wydolności szpitali
- jeśli szczepionka powstanie za określony czas, otrzyma ją więcej ludzi, bo unikniemy zgony jakie wystąpiłyby przy niższym `P`

Dla `P=1.6` poniższe wykresy zdiagnozowanych zarażeń oraz modelu pokrywają się bardzo mocno do 10 dnia epidemii.

Zatem przez pierwsze 10 dni epidemii, podwojenie zarażonych następowało mniej więcej co 40 godzin:

<div
    data-type="charts"
    data-chartuid="1BUaS_TZVWjODSoxst25UF2yVMW-aURYmAC9IZuboHw0"
    data-range="B1:D15"
    data-rangetable="A1:E15"
    data-charttype="Line"
></div>

Wartość `P` zmienia w czasie. Może rosnąć lub maleć.

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

Od momentu zainfekowania, pierwsze objawy zaczynają występować po około pięciu dniach (potrzebne źródło lub weryfikacja).

Jeżeli więc następuje jakiś powód do zmiany `P` (np. decyzja rządu o zamknięciu szkół), dla dnia `x` przyjmujemy `P` z dnia `x-5`, bo po takim czasie statystycznie odniesie skutek.

Dostosowując wartość `P` do danych empirycznych widzimy, że stopniowo wzrasta ono w czasie:

<div
    data-type="charts"
    data-chartuid="135bACtrntkTPaFbuH8AWyg_ybYQGn14W6vx1Ax1Z0jo"
    data-rangetable="A1:E15"
    data-range="B1:D15"
    data-charttype="Line"
></div>

W dotychczasowym okresie 14 dni epidemii, `P` po kilku dniach zaczęło wzrastać liniowo:

<div
    data-type="chart"
    data-chartuid="135bACtrntkTPaFbuH8AWyg_ybYQGn14W6vx1Ax1Z0jo" 
    data-range="B1:B15,E1:E15"
    data-charttype="Line"
></div>

Data rozpoczęcia wzrostu liniowego `P` to 8-9 marca - wówczas mieliśmy w Polsce kilkanaście przypadków zarażenia.

Próba interpretacji to zmiana zachowania ludzi:

- zaczęli odpowiadać na apele o częste mycie rąk
- w miarę możliwości pozostawali w domach

# Prognoza ilości zarażonych

> ### UWAGA!
>
> #### Poniższa prognoza opiera się wyłącznie na modelu matematycznym, który:
>
> - opera się na założeniach mogących okazać się błędnymi
> - nie uwzględnia nowo podjętych działań, jakie mogą nastąpić w kolejnych dniach i tygodniach
> - została wykonana z największą starannością, ale jednak przez amatora (nie jestem epidemiologiem)
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

W dniach 9-13 marca `P` dziennie zwiększało się o około 0.3 dobry, czyli około 7 godzin.

Jeżeli przyjmiemy dalszy przyrost `P` w takim samym tempie, to prognoza liczby zarażonych wygląda następująco:

<div
    data-type="charts"
    data-chartuid="1cTiHGwqBwJETGcuFNnKbYnj3EMMFc21hrP6D6V_3KEE"
    data-rangetable="A1:E81"
    data-range="B1:B42,D1:D42"
    data-charttype="Line"
></div>

Gdy więc nie zostaną podjęte dalsze działania zapobiegawcze, to zaprezentowany model przewiduje:

- na początku kwietnia przekroczenie kilkunastu tysięcy liczby zarażonych i osiągnięcie maksymalnej wydolności szpitali i oddziałów ratunkowych
- w połowie kwietnia, przekroczenie zarażenia połowy ludności (zakładając, że zaraźliwość na bezpośrednią ekspozycję z wirusem wynosi 100%)

# Porównanie z prognozą, gdyby nie zostały podjęte żadne działania zapobiegawcze

Gdyby nie zostały podjęte żadne działania zapobiegawcze i `P` pozostało na poziomie 1.6 doby jak w pierwszym tygodniu (a więc przy normalnych zachowaniach i nawykach ludzi), przekroczona wydolność szpitali i oddziałów ratunkowych nastąpiłaby już za tydzień:

<div
    data-type="charts"
    data-chartuid="1cTiHGwqBwJETGcuFNnKbYnj3EMMFc21hrP6D6V_3KEE"
    data-rangetable="A1:C42,F1:F42"
    data-range="B1:B42,F1:F42"
    data-charttype="Line"
></div>

> ### Dlatego tak ważny jest każdy powód do zwiększania `P`.
>
> ### To decyzje rządu, ale przede wszystkim każdego z nas, każdego dnia, sumują się do zmniejszania - bądź dalszego zwiększania, epidemii.
