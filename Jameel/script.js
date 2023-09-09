document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("financial-form");
    const calculateButton = document.getElementById("calculate-button");
    const savingsResult = document.getElementById("savings-result");
    const loanPaymentResult = document.getElementById("loan-payment-result");
    const loanDurationResult = document.getElementById("loan-duration-result");

    calculateButton.addEventListener("click", function() {
        const loanAmount = parseFloat(document.getElementById("loan-amount").value);
        const monthlyIncome = parseFloat(document.getElementById("monthly-income").value);
        const expenses = parseFloat(document.getElementById("expenses").value);
        const rentIncome = parseFloat(document.getElementById("rent-income").value) || 0;

        const suggestedSavings = monthlyIncome - (expenses + loanPayment(loanAmount) + rentIncome);
        const loanPayoffDuration = calculateLoanPayoffDuration(loanAmount, loanPayment, suggestedSavings);

        savingsResult.textContent = suggestedSavings.toFixed(2);
        loanPaymentResult.textContent = loanPayment(loanAmount).toFixed(2);
        loanDurationResult.textContent = loanPayoffDuration;
    });

    function loanPayment(loanAmount) {
        // Replace this with your own loan payment calculation logic
        // For a simple example, we'll assume a fixed monthly payment
        const loanTermMonths = 12;
        const monthlyPayment = loanAmount / loanTermMonths;
        return monthlyPayment;
    }

    function calculateLoanPayoffDuration(loanAmount, loanPaymentFn, suggestedSavings) {
        // Calculate the number of months to pay off the loan
        const monthlyPayment = loanPaymentFn(loanAmount);
        if (monthlyPayment <= 0) {
            return "N/A"; // Loan payment is not possible
        }

        const months = Math.ceil(loanAmount / suggestedSavings);
        return months;
    }
});
