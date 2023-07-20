const days = [
	{
		title: 'Dzień',
		id: 5,
		img: ``,
		desc: [
			`Informacja z działu Marketingu: Warsztat poświęcony
priorytetyzacji był nie tylko bardzo produktywny, ale i wesoły.`,
			`Marketing uważa, że byłoby świetnie gdybyście dostarczyli
zadania w porządku od A do P.`
		]
	},

	{
		img: ``,
		id: 6,
		title: `Dzień`,
		desc: [
			`Musimy dostarczyć Poprawkę Nr 15 (RODO) do naszego produktu
przed końcem dnia 15. Wszyscy nasi interesariusze zgadzają się
z tym ponieważ musimy wypełniać wymagania prawne by dalej
móc pracować. `,
			`Utwórzcie zadanie Poprawka nr 15 (RODO) i dostarczcie je przed
końcem dnia 15. Nie zapomnijcie zapisać na nim numeru Dnia
Startu.`
		]
	},
	{
		img: ``,
		id: 7,
		title: `Dzień`,
		desc: [
			`Pojawiła się nowa obiecująca technologia ChainBlock. Jeśli
prognozy okażą się słuszne użycie tej technologii może oznaczać
dla nas olbrzymi skok efektywności. Postanowiliśmy, że
poświęcimy trochę czasu na zbadanie jak duży wysiłek wiązałby
się z jej użyciem i jaki może oznaczać dla nas zysk. `,
			`Utwórzcie zadanie ChainBlock. Praca nad nim jest ważna, ale nie
pilna. Nie zapomnijcie zapisać na nim numeru Dnia Startu.`
		]
	},
	{
		img: ``,
		id: 8,
		title: `Dzień`,
		desc: [`Wszystko płynie?`]
	},
	{
		img: ``,
		id: 9,
		title: `Dzień`,
		desc: [
			`Pojawił się krytyczny błąd w naszej aplikacji i klienci nie mogą z
niej korzystać. Sądzimy, że może być rezultat ataku
hackerskiego, ale nie wiemy z pewnością.`,
			`Rozwiążcie to tak
szybko jak to tylko możliwe. To bardzo poważna sytuacja!`,
			`Utwórzcie zadanie Błąd Krytyczny i dostarczcie je tak szybko jak
to tylko możliwe! To zadanie może być podjęte bez uszanowania
limitów pracy w toku (WIP).`,
			`Pamiętajcie by zanotować na
metrykach dzień jego dostarczenia. Nie zapomnijcie zapisać na
nim numeru Dnia Startu.`
		]
	},
	{
		img: ``,
		id: 10,
		title: `Dzień`,
		desc: [
			`Pracownik z działu prawnego przychodzi i pyta o postępy
związane z Poprawką Nr. 15 oraz przypomina, że musi być ona
dostarczona przed końcem Dnia 15.`,
			`Dodaje, że nie ma opcji, by
nie dostarczyć jej na czas.`
		]
	},
	{
		img: ``,
		id: 11,
		title: `Dzień`,
		desc: [
			`Wykryto błąd w pierwszym niezablokowanym zadaniu w
kolumnie B i potrzebujemy ekspertyzy osoby z kolumny A by go
rozwiązać. Połóż na zadaniu etykietę Defekt.`,
			` Etykieta może
zostać usunięta tylko gdy zostaną wykreślone wszystkie punkty z
tej etykiety. Po jej usunięciu możesz kontynuować nad nim pracę.`,
			`Jeśli nie ma żadnego zadania w kolumnie B to etykietę Defekt
umieść na pierwszym zadaniu, które przejdzie do tej kolumny. W
przypadku gdy znajduje się tam zadanie zablokowane zamień
etykietę blokady na Defekt i pracuj nad jego rozwiązaniem.`
		]
	},
	{
		img: ``,
		id: 12,
		title: `Dzień`,
		desc: [
			`W trakcie spontanicznego spotkania zespołu przeanalizowaliśmy
metryki opisujące nasz system Kanban i doszliśmy do wniosku, że
wykonujemy dobrą robotę. Nasz system jest stabilny. Chcemy jednak
ciągle się doskonalić i mamy pomysł, żeby obniżyć limity pracy w toku
(WIP limits).`,
			`Tak, to brzmi dziwnie, ale prawdopodobnie zmusi nas do
pracy w parach i grupach i chcemy podjąć się tego zadania.`,
			`Obniżcie limit w kroku A do 3, oraz w korku B do 2. Nie
rozpoczynajcie nowej pracy dopóki nie osiągniecie liczby zadań
dozwolonych przez nowe limity.`
		]
	},
	{
		img: ``,
		id: 13,
		title: `Dzień`,
		desc: [
			`Dziś odbyło się spotkanie dotyczące uzupełniania i priorytetyzacji
zadań dla Was. Interesariusze spotkali się by je przejrzeć i
uzupełnić. Dostali dla Was nowe zadania Q, R i S.
`,
			`Utwórzcie nowe zadania Q, R i S oraz dodajcie je do swojej
tablicy Kanban.`
		]
	},
	{
		img: ``,
		id: 14,
		title: `Dzień`,
		desc: [
			`Czas na Retrospekcję. Przedyskutujcie w ciągu 3 minut
następujące tematy:`,
			`Co działa w tej chwili poprawnie? `,
			`Co moglibyście poprawić?`,
			`Zapiszcie wasze wnioski a karcie retrospekcji, by móc się do nich
później odnieść.`
		]
	},
	{
		img: ``,
		id: 15,
		title: `Dzień`,
		desc: [
			`Dziś w życie wchodzi RODO i wymagana jest Poprawka Nr.15.
Zanotujcie na metrykach czy daliście radę dostarczyć ją na czas`,
			`Dla wszystkich zadań w kolumnach A i B obliczcie ich obecny wiek:
Numer Dnia bieżącego – Numer Dnia startu +1
i wprowadźcie te dane do Arkusza Retrospekcji.`,
			`Obliczcie tempo przychodzących zadań oraz zadań opuszczających
system a także średni czas realizacji. Dalej obliczcie 90-ty percentyl
Czasów Realizacji.`,
			`Oznacza to, że musimy narysować poziomą linię poniżej której znajdzie się
90% czasów realizacji zadań.`,
			`Tempo zadań opuszczających mówi Ci o tym ile zadań średnio opuszczało
system.`,
			`Tempo rozpoczynanych zadań mówi Ci ile zadań średnio przemieszczało
się z opcji do aktywnych kroków.`
		]
	}
	// {
	// 	img: ``,
	// 	id: 16,
	// 	title: `Dzień`,
	// 	desc: [``, ``, ``]
	// },
	// {
	// 	img: ``,
	// 	id: 17,
	// 	title: `Dzień`,
	// 	desc: [``, ``, ``]
	// },
	// {
	// 	img: ``,
	// 	id: 18,
	// 	title: `Dzień`,
	// 	desc: [``, ``, ``]
	// }
];



export default days;
