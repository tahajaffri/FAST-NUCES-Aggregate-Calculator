document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners to inputs to update progress as user types
    const formInputs = document.querySelectorAll('#calculator-form input');
    formInputs.forEach(input => {
        input.addEventListener('input', updateProgress);
    });
});

function updateProgress() {
    // This function is no longer necessary as progress bar is removed
}

function calculate() {
    // Get input values
    const matricPercentage = parseFloat(document.getElementById('matric-percentage').value) || 0;
    const fscPercentage = parseFloat(document.getElementById('fsc-percentage').value) || 0;

    const advMathsCorrect = parseInt(document.getElementById('adv-maths-correct').value) || 0;
    const advMathsAttempted = parseInt(document.getElementById('adv-maths-attempted').value) || 0;

    const basicMathsCorrect = parseInt(document.getElementById('basic-maths-correct').value) || 0;
    const basicMathsAttempted = parseInt(document.getElementById('basic-maths-attempted').value) || 0;

    const iqCorrect = parseInt(document.getElementById('iq-correct').value) || 0;
    const iqAttempted = parseInt(document.getElementById('iq-attempted').value) || 0;

    const englishCorrect = parseInt(document.getElementById('english-correct').value) || 0;
    const englishAttempted = parseInt(document.getElementById('english-attempted').value) || 0;

    // Calculate NU test marks
    const advMathsWrong = advMathsAttempted - advMathsCorrect;
    const advMathsMarks = (advMathsCorrect * 1) - (advMathsWrong * 0.25);

    const basicMathsWrong = basicMathsAttempted - basicMathsCorrect;
    const basicMathsMarks = (basicMathsCorrect * 1) - (basicMathsWrong * 0.25);

    const iqWrong = iqAttempted - iqCorrect;
    const iqMarks = (iqCorrect * 1) - (iqWrong * 0.25);

    const englishWrong = englishAttempted - englishCorrect;
    const englishMarks = (englishCorrect * 0.333) - (englishWrong * 0.125);

    const nuTestMarks = advMathsMarks + basicMathsMarks + iqMarks + englishMarks;

    // Calculate aggregate
    const matricComponent = matricPercentage * 0.10;
    const fscComponent = fscPercentage * 0.40;
    const nuTestComponent = nuTestMarks * 0.50;

    const aggregate = matricComponent + fscComponent + nuTestComponent;

    // Display results
    document.getElementById('nu-test-marks').innerText = `NU Test Marks: ${nuTestMarks.toFixed(3)}`;
    document.getElementById('aggregate').innerText = `Aggregate: ${aggregate.toFixed(3)}`;
}
