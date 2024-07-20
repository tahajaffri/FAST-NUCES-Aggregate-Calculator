function calculate() {
    // Get input values
    const matricPercentage = parseFloat(document.getElementById('matric-percentage').value);
    const fscPercentage = parseFloat(document.getElementById('fsc-percentage').value);

    const advMathsCorrect = parseInt(document.getElementById('adv-maths-correct').value);
    const advMathsAttempted = parseInt(document.getElementById('adv-maths-attempted').value);

    const basicMathsCorrect = parseInt(document.getElementById('basic-maths-correct').value);
    const basicMathsAttempted = parseInt(document.getElementById('basic-maths-attempted').value);

    const iqCorrect = parseInt(document.getElementById('iq-correct').value);
    const iqAttempted = parseInt(document.getElementById('iq-attempted').value);

    const englishCorrect = parseInt(document.getElementById('english-correct').value);
    const englishAttempted = parseInt(document.getElementById('english-attempted').value);

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
