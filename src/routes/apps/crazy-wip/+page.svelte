<script>
	import { AppScreen } from '@coreWidgets';
	import {
		StartScreen,
		GameProgressScreen,
		ManualScreen
	} from '@appCrazyWipLimitsWidgets';

	// import { kanbanMetrics } from '../../../lib/core/utils/';


const stories = [
  {
    "created": "2017-03-01",
    "started": "2017-03-03",
    "finished": "2017-03-11",
    "blocked": false
  },
  {
    "created": "2017-03-07",
    "started": "2017-03-12",
    "finished": "2017-03-17",
    "blocked": true
  },
  {
    "created": "2017-03-10",
    "started": "2017-03-12",
    "finished": "2017-03-16",
    "blocked": true
  }
];


// const metrics = kanbanMetrics(stories);

// Функция для расчёта канбан метрики Throughput
function calculateThroughput(stories) {
  // Сортируем истории по дате завершения (finished) в порядке возрастания
  stories.sort((a, b) => new Date(a.finished) - new Date(b.finished));

  // Находим самую раннюю и самую позднюю даты завершения
  const earliestDate = new Date(stories[0].finished);
  const latestDate = new Date(stories[stories.length - 1].finished);

  // Рассчитываем количество дней между самой ранней и самой поздней датами
  const totalDays = Math.ceil((latestDate - earliestDate) / (1000 * 60 * 60 * 24));

  // Рассчитываем количество завершенных задач за весь период
  const totalCompletedStories = stories.length;

  // Рассчитываем Throughput (производительность) за весь период
  const throughput = totalCompletedStories / totalDays;

  return throughput;
}


const throughput = calculateThroughput(stories);
console.log("Throughput:", throughput);





// Функция для расчёта канбан метрики Flow Efficiency
function calculateFlowEfficiency(stories) {
  let totalLeadTime = 0; // Общее время выполнения задач
  let totalWorkTime = 0; // Время, проведенное в работе

  // Итерируемся по каждой задаче (story) в массиве
  stories.forEach(story => {
    // Преобразуем строки с датами в объекты Date
    const createdDate = new Date(story.created);
    const finishedDate = new Date(story.finished);

    // Рассчитываем время выполнения задачи в миллисекундах
    const leadTime = finishedDate - createdDate;
    totalLeadTime += leadTime;

    // Рассчитываем время, проведенное в работе, в миллисекундах
    const startedDate = new Date(story.started);
    const workTime = finishedDate - startedDate;
    totalWorkTime += workTime;
  });

  // Рассчитываем Flow Efficiency (эффективность потока работы) в процентах
  const flowEfficiency = (totalWorkTime / totalLeadTime) * 100;

  return flowEfficiency;
}


const flowEfficiency = calculateFlowEfficiency(stories);
console.log("Flow Efficiency:", flowEfficiency.toFixed(2), "%");



// Функция для расчёта канбан метрики Aging WIP Chart
function calculateAgingWIPChart(stories) {
  // Создаем объект для хранения данных Aging WIP Chart
  const agingWIPData = {};

  // Итерируемся по каждой задаче (story) в массиве
  stories.forEach(story => {
    // Преобразуем строки с датами в объекты Date
    const createdDate = new Date(story.created);
    const finishedDate = new Date(story.finished);

    // Итерируемся по каждому дню от создания задачи до завершения
    for (let currentDate = createdDate; currentDate <= finishedDate; currentDate.setDate(currentDate.getDate() + 1)) {
      const dateString = currentDate.toISOString().split('T')[0]; // Получаем строку даты без времени

      // Если день еще не существует в agingWIPData, создаем запись с начальным значением 0
      if (!agingWIPData[dateString]) {
        agingWIPData[dateString] = 0;
      }

      // Увеличиваем количество задач в WIP состоянии для текущего дня
      agingWIPData[dateString]++;
    }
  });

  return agingWIPData;
}



const agingWIPData = calculateAgingWIPChart(stories);
console.log("Aging WIP Chart Data:", agingWIPData);


// Функция для расчёта канбан метрики Forecasting
function calculateForecasting(stories) {
  // Рассчитываем средний Cycle Time (время выполнения задачи)
  const cycleTimes = stories.map(story => {
    const createdDate = new Date(story.created);
    const finishedDate = new Date(story.finished);
    const cycleTime = finishedDate - createdDate;
    return cycleTime;
  });

  const averageCycleTime = cycleTimes.reduce((sum, time) => sum + time, 0) / cycleTimes.length;

  // Прогнозируем время завершения будущих задач (по умолчанию - 3 задачи в будущем)
  const forecastedCompletionDates = [];
  const today = new Date();

  for (let i = 1; i <= 3; i++) {
    const forecastedCompletionDate = new Date(today.getTime() + (averageCycleTime * i));
    forecastedCompletionDates.push(forecastedCompletionDate.toISOString().split('T')[0]);
  }

  return forecastedCompletionDates;
}


const forecastedCompletionDates = calculateForecasting(stories);
console.log("Forecasted Completion Dates:", forecastedCompletionDates);


// Функция для расчёта канбан метрики Blocker Clustering
function calculateBlockerClustering(stories) {
  // Создаем объект для хранения данных Blocker Clustering
  const blockerClusteringData = {};

  // Итерируемся по каждой задаче (story) в массиве
  stories.forEach(story => {
    const createdDate = new Date(story.created);
    const finishedDate = new Date(story.finished);

    // Итерируемся по каждому дню от создания задачи до завершения
    for (let currentDate = createdDate; currentDate <= finishedDate; currentDate.setDate(currentDate.getDate() + 1)) {
      const dateString = currentDate.toISOString().split('T')[0]; // Получаем строку даты без времени

      // Если день еще не существует в blockerClusteringData, создаем запись с начальным значением 0
      if (!blockerClusteringData[dateString]) {
        blockerClusteringData[dateString] = 0;
      }

      // Увеличиваем количество задач с блокерами для текущего дня
      if (story.blocked) {
        blockerClusteringData[dateString]++;
      }
    }
  });

  // Рассчитываем общее количество дней, затронутых блокерами
  const totalBlockedDays = Object.keys(blockerClusteringData).length;

  // Рассчитываем Blocker Clustering (кластеризацию блокеров) как отношение количества дней с блокерами к общему количеству дней
  const blockerClustering = totalBlockedDays / stories.length;

  return blockerClustering;
}


const blockerClustering = calculateBlockerClustering(stories);
console.log("Blocker Clustering:", blockerClustering.toFixed(2));


</script>

<AppScreen>
	<div slot="start-screen">
		<StartScreen />
	</div>
	<div slot="manual-screen">
		<ManualScreen />
	</div>
	<div slot="game-screen">
		<GameProgressScreen />
	</div>
</AppScreen>
