<template>
  <div class="Stockchart">
    <div class="chartAndButtonsContainer">
      <form
        action=""
        id="stockSymbolSearchForm"
        @submit.prevent="
          createStockPriceHistoryChartInSpecifiedDateHistoryRange(
            100000000000000000000000
          )
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
      <p>美股股票代號: {{ stockSymbol }}</p>
      <br />
      <div class="dateRangeButtons">
        <button
          @click="
            createStockPriceHistoryChartInSpecifiedDateHistoryRange(86400)
          "
          class="dateButton"
        >
          近 1 天
        </button>
        <button
          @click="
            createStockPriceHistoryChartInSpecifiedDateHistoryRange(604800)
          "
          class="dateButton"
        >
          近 1 周
        </button>
        <button
          @click="
            createStockPriceHistoryChartInSpecifiedDateHistoryRange(2630000)
          "
          class="dateButton"
        >
          近 1 月
        </button>
        <button
          @click="
            createStockPriceHistoryChartInSpecifiedDateHistoryRange(31536000)
          "
          class="dateButton"
        >
          近 1 年
        </button>
        <button
          @click="
            createStockPriceHistoryChartInSpecifiedDateHistoryRange(157680000)
          "
          class="dateButton"
        >
          近 5 年
        </button>
        <button
          @click="
            createStockPriceHistoryChartInSpecifiedDateHistoryRange(
              10000000000000000
            )
          "
          class="dateButton"
        >
          迄今
        </button>
      </div>
      <div id="chartContainer">
        <canvas id="myChart" width="400px" height="400px"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import Chart from "chart.js/auto";
import axios from "axios";

let stockMarketHistory = [];
let stockMarketHistoryDates = [];
let stockMarketHistoryEpochDates = [];
let stockMarketHistoryPrices = [];

let myChart;
myChart;

export default {
  name: "Stockchart",
  mounted() {
    this.createStockPriceHistoryChartInSpecifiedDateHistoryRange(31536000);
    this.updateStockPriceHistoryChart();
  },
  setup() {
    let updateStockPriceHistoryChart = () => {
      const ctx = document.getElementById("myChart");

      const labels = stockMarketHistoryDates;
      const data = {
        labels: labels,
        datasets: [
          {
            label: "股價",
            data: stockMarketHistoryPrices,
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0,
            options: {
              responsive: true,
              maintainAspectRatio: false,
            },
          },
        ],
      };

      const chartWithKey = Chart.getChart("myChart");
      if (chartWithKey != undefined) {
        chartWithKey.destroy();
      }

      myChart = new Chart(ctx, {
        type: "line",
        data: data,
      });
    };

    let stockSymbol = ref("AAPL");
    let AlphaVantageAPI_URL_LINK = computed(() => {
      return (
        "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=" +
        stockSymbol.value +
        "&outputsize=full&apikey=WFFTVUH56YAUCVHH"
      );
    });

    console.log(AlphaVantageAPI_URL_LINK.value);

    let createStockPriceHistoryChartInSpecifiedDateHistoryRange = (
      dateRange
    ) => {
      // empty array if something already in there
      if (stockMarketHistoryDates.length > 0) {
        stockMarketHistoryDates = [];
        stockMarketHistoryEpochDates = [];
        stockMarketHistoryPrices = [];
      }

      axios
        .get(AlphaVantageAPI_URL_LINK.value)
        .then((response) => {
          stockMarketHistory = response;

          dateRange = Number(dateRange);

          console.log(stockMarketHistory.data["Time Series (Daily)"]);

          for (const property in stockMarketHistory.data[
            "Time Series (Daily)"
          ]) {
            let closingPrice =
              stockMarketHistory.data["Time Series (Daily)"][property][
                "4. close"
              ];
            let closingDateMonth = property.split("-")[1];
            let closingDateYear = property.split("-")[0];
            let closingDateDay = property.split("-")[2];
            let closingDateProperlyFormatted = `${closingDateMonth}/${closingDateDay}/${closingDateYear}`;
            let closingDateEpochTime =
              Date.parse(closingDateProperlyFormatted) / 1000;

            // console.log(closingDateEpochTime)

            stockMarketHistoryDates.unshift(closingDateProperlyFormatted);
            stockMarketHistoryEpochDates.unshift(closingDateEpochTime);
            stockMarketHistoryPrices.unshift(closingPrice);
          }
        })
        .then(() => {
          let now = Date.now() / 1000;
          let dateRangeDate = now - dateRange;

          const isLaterDateThanDateRangeDate = (date) => {
            return date > dateRangeDate;
          };

          let arrayIndexWhereDateIsLargerThanDateRangeDate =
            stockMarketHistoryEpochDates.findIndex(
              isLaterDateThanDateRangeDate
            );

          stockMarketHistoryDates.splice(
            0,
            arrayIndexWhereDateIsLargerThanDateRangeDate
          );
          stockMarketHistoryPrices.splice(
            0,
            arrayIndexWhereDateIsLargerThanDateRangeDate
          );

          updateStockPriceHistoryChart();
        });
    };

    return {
      stockSymbol,
      updateStockPriceHistoryChart,
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
