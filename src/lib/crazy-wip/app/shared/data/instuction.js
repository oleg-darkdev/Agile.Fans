let dayInstruction = [
	//   // добавить ссылку на работу над блокировщиками

	{
		title: '1. Pobierzcie karty OK/Blocker dla każdego zadania w kolumnach A i B:',
		desc: [
			`1.1. Połóżcie karty odpowiednio na każdym zadaniu.`,
			`1.2. Odłóżcie karty OK na dno stosu kart OK/Blocker`,
			`1.3. Karty Blocker pozostają na zadaniach.`
		]
	},
	{
		title: '2. Codzienne zabranie:',
		desc: [`2.1. Połóżcie kości na zadaniach.`]
	},
	{
		title: '3. Praca:',
		desc: [
			`1.1. Rzućcie kośćmi.`,
			`1.2. Przeanalizujcie wynik, przyznajcie punkty zadaniom i przesuńcie je
odpowiednio.`,
			`1.3. UWAGA: nie zapomnijcie zanotować Dnia Startu dla nowo rozpoczętych
zadań.`
		]
	},

	// добавить ссылку на работу над задачей
	{
		title: 'Dla ukończonych zadań:',
		desc: [
			`1.1. Zanotujcie datę Dnia Końca pracy na zadaniach.`,
			`1.2. Obliczcie Czas Realizacji = Data Końca – Data Startu + 1.`,
			`1.3. Uzupełnijcie Czasy Realizacji i Sekwencję Dostarczenia.`,
			`1.4. Uzupełnijcie Histogram Czasów Realizacji.`,
			`1.5. Uzupełnijcie Wykres Punktowy Przepustowości (Throughput).`
		]
	}
];

const blockersInstruction = {
	title: '2. Zasady dotyczące blokowania:',
	desc: [
		`2.1. Do odblokowania zadania potrzebne są 4 punkty.`,
		`2.2. Jeśli wyrzucisz mniej niż 4 punkty zadanie pozostaje zablokowane.`,
		`2.3. Jeśli wyrzucisz więcej niż 4 punkty zadanie zostaje odblokowane a pozostałe punkty
mogą być użyte do pracy nad nim.`,
		`2.4. Jeśli zadanie jest ukończone a nadal masz do dyspozycji punkty z rzutu kością
możesz użyć ich do wykonania pracy nad innymi zadaniami, lub rozpoczęcia nowego
zadania.`
	]
};

const taskInstruction = {
	title: 'Praca nad zadaniem:',
	desc: [
		`3.1. . Kości reprezentują ludzi pracujących nad zadaniem, a wyrzucone liczby reprezentują
ilość pracy jaką możemy nad nimi wykonać danego dnia. Jak w rzeczywistości -
nasze dni nie są równie produktywne.`,
		`3.2. Jeśli rzucasz kością w obszarze swojej specjalizacji A lub B (ten sam kolor kości i
kolumny) po rzucie wykreślasz z zadania tyle punktów ile wyrzuciłe/aś.`,
		`3.3. Jeśli masz pozostałe punkty możesz użyć ich do realizacji innych zadań, albo
rozpoczęcia nowego zadania.`,
		`3.4. Jeśli rzucasz kością poza obszarem swojej specjalizacji wynik dzielisz na pół i
zaokrąglasz w górę. Dzieje się tak ponieważ jako specjalista z innego obszaru nie
jesteś tak samo produktywny/a. Przykład: Wyrzucasz 5. Połowa z tego to 2,5, co daje
to 3 punkty.`,
		`3.5. Możesz użyć kilku kości do pracy nad jednym zadaniem. Jeśli jednak użyjesz 3 lub
więcej kości punkty z 3-ciej i kolejnych dzielisz na pół i zaokrąglasz w górę.
Dlaczego? Praca w parze nad jednym zadaniem (2 kości) daje dużo wartości, ale
angażowanie kolejnych osób nie pomaga. Przykład: 20 osób nie zrobi jednego
zadania 20 razy szybciej. Ich koordynacja będzie wymagała dużo wysiłku.`,
		`3.6. Karty zadań mogą być przeciągane z lewej do prawej jeśli pozwalają na to limity
pracy w toku (WIP limits).`
	]
};

const basicInstruction = [
	{
		title:
			'. Najważniejsza zasada: Kiedy masz pytanie o zasady, zadaj sobie pytanie:„Co byś zrobił(a) w prawdziwym życiu?”',
		desc: ['']
	},
	blockersInstruction,
	taskInstruction
];

export default {
	dayInstruction,
	blockersInstruction,
	taskInstruction
};
