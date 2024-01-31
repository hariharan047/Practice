<template>
  <div>
    <form @submit.prevent="Calculate">
      <div>
        <label for="num1" class="text-justify">Enter First Number</label>
        <input
          type="number"
          v-model="number1"
          placeholder="Enter First Number"
        />
      </div>
      <div>
        <label for="num2" class="text-justify">Enter Second Number</label>
        <input
          type="number"
          v-model="number2"
          placeholder="Enter Second Number"
        />
      </div>
    </form>
    <div>
      <h2>{{ sum }}</h2>
      <h2>{{ Multiply }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number1: 0,
      number2: 0,
      sum: 0,
      Multiply: 0,
    };
  },
  watch: {
    number1() {
      this.calculate();
      this.multiply();
    },
    number2() {
      this.calculate();
      this.multiply();
    },
  },
  methods: {
    calculate() {
      this.sum = this.number1 + this.number2;
    },
    multiply() {
      this.Multiply = this.number1 * this.number2;
    },
  },
};
</script>

<style></style>
