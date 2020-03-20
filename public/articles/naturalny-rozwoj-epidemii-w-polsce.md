** Data opracowania: czwartek, 20 marca 2020, godz. 14:30 **

# W jakim tempie rozwijałaby się epidemia w Polsce bez podjętych środków zapobiegawczych?

> Dla danych z okresu 12 dni, podczas których społeczeństwo cechowała zwyczajna aktywność, a podjęte środki zapobiegawcze przyniosły skutki dopiero po tych 12 dniach, w Polsce liczba osób zarażonych podwajałaby się co `2 dni i 9 godzin`..

W dniu 19 marca mijnęło 16 dni od pierwszego zdiagnozowanego zarażenia w Polsce.

Po 16 dniach, mieliśmy **355 zarażań**:

<div
    data-type="charts"
    data-chartuid="1BEHxmF1bQHv3btAa2RV8uCeu-yKKthO11Z7cvuPIUgg"
    data-range="B1:C16"
    data-charttype="Line"
    data-height="400px"
></div>

W dalszej części opracowania, powyższe dane będziemy nazywać empiryką.

# Analiza rozwoju epidemii w Polsce

Epidemia w swoim początkowym etapie rozwija się w sposób wykładniczy. Z upływem czasu, krzywa wykładnicza przekształca się w krzywą logistyczną.

<div
    data-type="image"
    data-filename="krzywe.png"
></div>

Krzywą wykładniczą epidemii w swoim początkowym etapie można zatem zamodelować wzorem:

`y=A+2^((x-B)/C)`

gdzie `x=1` to dzień, gdy zarejestrowanego pierwszego zarażonego, a parametry można interpretować jako:

- `A` - liczba zainfekowanych od dnia `x=1` (na różnym stadium infekcji, wliczając bezobjawowych)
- `B` - przesunięcie w czasie względem `x=1`
- `C` - okres, po którym następuje podwojenie

Im mniejsza wartość `C`, tym gwałtowniej krzywa pnie się do góry, im większa wartość `C`, tym wolniej przyrasta.

Korzystając z narzędzia https://mycurvefit.com, metodami numerycznymi możemy wyliczyć dokładne wartości parametrów z możliwnie najmniejszym odchyleniem od danych empirycznych. Po wyliczeniu, wartości tych parametrów, to:

- `A=−5.875524 ± 2.77`
- `B=−4.496552 ± 0.9428`
- `C=2.328349 ± 0.124`

Miara zgodności krzywej z danymi empirycznymi: `R²:0.9962, aR²:0.9951`

<div
    data-type="charts"
    data-chartuid="10s7YPSeDGF-KtJQTax6QP9iFQObFpQvzEe914h8pvW0"
    data-range="B1:D16"
    data-rangetable="A1:D17"
    data-charttype="Line"
    data-height="400px"
></div>

To, co widoczne, to zaczynające się odchylenie w dół empiryki względem wzrostu wykładniczego.

# Inercja podejmowanych środków zapobiegawczych

Dane z WHO mówią, że od momentu zainfekowania, do wystąpienia pierwszych objawów, może minąć od około 5 do 14 dni, w ciągu których wirus jest zaraźliwy i to w swojej szczytowym poziomie zaraźliwości.

Zatem, podjęte działania zapobiegawcze mają z tego względu swoją inercję. Na przykład "dziś" zamknięcie szkół będzie zbierać owoce dopiero za około tydzień.

Zmiana zwyczajnego zachowania społeczeństwie zaczęła się około 9 marca, gdy powoli zaczęły się wzmożone zakupy. 12 marca rząd zdecydował o zamknięciu szkół, później przybywało innych decyzji.

Z uwagi na powyższe, do 17 marca mieliśmy zwyczajne zachowanie społeczeństwa tydzień wcześniej. A zatem pozwala zbadać, w jakim tempie rozprzestrzeniał się wirus przy zwyczajnych i naturalnych warunkach aktywności społeczeństwa.

Powyżej opisaną metodą wyliczamy:

- `A=−7.41435 ± 3.448`
- `B=−6.927557 ± 0.8749`
- `C=2.383611 ± 0.1081`

Miara zgodności: `R²:0.9978, aR²:0.9971`

<div
    data-type="charts"
    data-chartuid="10s7YPSeDGF-KtJQTax6QP9iFQObFpQvzEe914h8pvW0"
    data-range="I1:K13"
    data-rangetable="H1:K13"
    data-charttype="Line"
    data-height="400px"
></div>

Wynika z tego, że dla danych z okresu 12 dni, podczas których społeczeństwo cechowała zwyczajna aktywność, a podjęte środki zapobiegawcze przyniosły skutki dopiero po tych 12 dniach, w Polsce liczba osób zarażonych podwajałaby się co `2 dni i 9 godzin`.
