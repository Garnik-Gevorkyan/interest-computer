const aprSlider = document.querySelector("#apr");
const interestOutput = document.querySelector("#accumulated");
const totalOutput = document.querySelector("#amount");
const principal = document.querySelector("#principal");
const period = document.querySelector("#period");
const apr = document.querySelector("#apr");
const years = document.querySelector("#years");

aprSlider.addEventListener("input", (e) => {
  interestOutput.textContent = aprSlider.value;
});

principal.addEventListener("input", interestCalculator);

period.addEventListener("input", interestCalculator);

years.addEventListener("input", interestCalculator);

apr.addEventListener("input", interestCalculator);

function interestCalculator() {
  const principalValue = Number(principal.value);
  const periodValue = Number(period.value);
  const yearsValue = Number(years.value);
  const aprValue = Number(apr.value) / 100;

  const total =
    principalValue * (1 + aprValue / periodValue) ** (periodValue * yearsValue);
  totalOutput.textContent = total.toFixed(2);
}
