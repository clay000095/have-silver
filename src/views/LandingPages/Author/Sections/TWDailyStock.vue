<template>
  <div class="Stockchart">
    <div class="chartAndButtonsContainer">
      <form
        action=""
        id="stockSymbolSearchForm"
        @submit.prevent="
          createStockPriceHistoryChartInSpecifiedDateHistoryRange
        "
      >
        <input
          type="text"
          name="stockSymbolSearch"
          placeholder="Enter the symbol of the stock you want to search"
          id="stockSymbolSearchBar"
          v-model="stockSymbol"
          class="inputField"
        />
        <button type="submit" class="submitButton">搜尋</button>
      </form>
      <br />
      <p>台股股票代號: {{ stockSymbol }}</p>
      <br />
      <div class="dateRangeButtons">
        <button
          @click="createStockPriceHistoryChartInSpecifiedDateHistoryRange(1)"
        >
          近 1 天
        </button>
        <button
          @click="createStockPriceHistoryChartInSpecifiedDateHistoryRange(7)"
        >
          近 1 周
        </button>
        <button
          @click="createStockPriceHistoryChartInSpecifiedDateHistoryRange(30)"
        >
          近 1 月
        </button>
        <button
          @click="createStockPriceHistoryChartInSpecifiedDateHistoryRange(365)"
        >
          近 1 年
        </button>
        <button
          @click="createStockPriceHistoryChartInSpecifiedDateHistoryRange(1825)"
        >
          近 5 年
        </button>
        <button
          @click="createStockPriceHistoryChartInSpecifiedDateHistoryRange(0)"
        >
          迄今
        </button>
      </div>
      <div id="chartContainer">
        <canvas id="myChartTW" width="400px" height="400px"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import Chart from "chart.js/auto";
import axios from "axios";

export default {
  name: "Stockchart",
  setup() {
    let stockSymbol = ref("2337");
    let stockMarketHistory = ref([]);
    let stockMarketHistoryDates = ref([]);
    let stockMarketHistoryPrices = ref([]);
    let myChartTW;

    const createStockPriceHistoryChartInSpecifiedDateHistoryRange = (
      dateRange
    ) => {
      const FinMindAPI_URL_LINK =
        "https://api.finmindtrade.com/api/v4/data?dataset=TaiwanStockPrice&data_id=" +
        stockSymbol.value +
        "&start_date=2000-01-01&must_need_date=true&end_date=2023-06-02" +
        "&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRlIjoiMjAyMy0wNi0wNSAxNTowNTowNCIsInVzZXJfaWQiOiJLZXZpbjE4NjUxNjgiLCJpcCI6IjE0MC4xMjMuMTc0LjIwNCJ9.VvvyPwYuwxqx5kPp26tEk-TksexMMVPI2ICD0FJYIlc";

      axios
        .get(FinMindAPI_URL_LINK)
        .then((response) => {
          stockMarketHistory.value = response.data.data;
          const filteredHistory = stockMarketHistory.value.filter((record) => {
            const closingDateEpochTime = Date.parse(record.date) / 1000;
            const now = Date.now() / 1000;
            const dateRangeDate = now - dateRange * 24 * 60 * 60;
            return closingDateEpochTime >= dateRangeDate;
          });

          stockMarketHistoryDates.value = filteredHistory.map(
            (record) => record.date
          );
          stockMarketHistoryPrices.value = filteredHistory.map(
            (record) => record.close
          );

          updateStockPriceHistoryChart();
        })
        .catch((error) => {
          console.error(error);
        });
    };

    const updateStockPriceHistoryChart = () => {
      const ctx = document.getElementById("myChartTW");

      const labels = stockMarketHistoryDates.value;
      const data = {
        labels: labels,
        datasets: [
          {
            label: "股價",
            data: stockMarketHistoryPrices.value,
            fill: false,
            borderColor: "rgb(75, 114, 192)",
            tension: 0,
            options: {
              responsive: true,
              maintainAspectRatio: false,
            },
          },
        ],
      };

      if (myChartTW) {
        myChartTW.destroy();
      }

      myChartTW = new Chart(ctx, {
        type: "line",
        data: data,
      });
    };

    onMounted(() => {
      createStockPriceHistoryChartInSpecifiedDateHistoryRange(365);
    });

    return {
      stockSymbol,
      createStockPriceHistoryChartInSpecifiedDateHistoryRange,
    };
  },
};
</script>

<style scoped>
#chartContainer {
  width: 1000px;
  height: 300px;
  margin: 0 auto;
}
#stockSymbolSearchBar {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 300px;
}
#stockSymbolSearchForm .submitButton {
  padding: 10px 20px;
  background-color: #fb8c00;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.dateRangeButtons button {
  padding: 10px 20px;
  margin: 2px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
}
.Stockchart p {
  font-size: 16px;
  margin-top: 10px;
}
</style>
