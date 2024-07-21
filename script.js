document.addEventListener('DOMContentLoaded', () => {
    // No need to update progress, as progress bar is removed
});

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
    const testComponent = nuTestMarks * 0.50;

    const aggregate = matricComponent + fscComponent + testComponent;

    // Save current form content to restore later
    const formContent = document.body.innerHTML;

    // Modify the whole page content
    document.body.innerHTML = `
        <div class="result-wrapper">
            <p class="aggregate">Aggregate: <span id="aggregate-value">0</span></p>
            <p class="nu-test-marks">NU Test Marks: <span id="marks-value">0</span></p>
            <button class="go-back-button" onclick="goBack()">Go Back</button>
        </div>
    `;

    document.body.classList.add('result-background');

    // Store the form content in a global variable
    window.previousFormContent = formContent;

    // Start counting effect for aggregate
    countUp('aggregate-value', 0, aggregate.toFixed(2), 500, () => {
        // Start counting effect for NU Test Marks after aggregate
        countUp('marks-value', 0, nuTestMarks.toFixed(2), 500);
    });
}

function countUp(elementId, start, end, duration, callback) {
    const steps = 50; // Number of steps for smoother animation
    const stepDuration = duration / steps; // Duration per step
    const increment = (end - start) / steps; // Amount to increment per step

    let current = start;
    let obj = document.getElementById(elementId);

    function step() {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            current = end;
            obj.innerHTML = end;
            if (callback) callback(); // Call the callback if provided
        } else {
            obj.innerHTML = current.toFixed(2);
            setTimeout(step, stepDuration); // Use setTimeout for smoother control
        }
    }

    step();
}

function goBack() {
    // Restore the original form content
    document.body.innerHTML = window.previousFormContent;

    // Remove the result background class
    document.body.classList.remove('result-background');

    // Re-attach the event listeners
    document.addEventListener('DOMContentLoaded', () => {
        const formInputs = document.querySelectorAll('#calculator-form input');
        formInputs.forEach(input => {
            input.addEventListener('input', updateProgress);
        });
    });
}
