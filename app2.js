document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const height = parseFloat(document.getElementById('height').value) / 100; // convert cm to meters
    const weight = parseFloat(document.getElementById('weight').value);
    
    if (height > 0 && weight > 0) {
        const bmi = (weight / (height * height)).toFixed(1);
        document.getElementById('bmiValue').textContent = bmi;

        let category = '';
        if (bmi < 18.5) {
            category = 'Underweight';
            alert("You are Under-Weight. Go to Build Muscles");
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            category = 'Normal weight';
        } else if (bmi >= 25 && bmi <= 29.9) {
            category = 'Overweight';
            alert("You are Over-Weight. Go to Loose Weight");
        } else {
            category = 'Obesity';
            alert("You are Obese. Go to Loose Weight");
        }

        document.getElementById('bmiCategory').textContent = `Category: ${category}`
    } else {
        alert('Please enter valid values for height and weight.');
    }
});


// Toggle mode
const modeToggle = document.getElementById('modeToggle');
const body = document.body;

modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});


document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('mousemove', (e) => {
        const span = document.querySelector('nav span');
        const linkRect = link.getBoundingClientRect();
        const navRect = link.parentElement.getBoundingClientRect();
        
        // Calculate the left position and the width of the span
        const leftPosition = linkRect.left - navRect.left;
        const spanWidth = linkRect.width;
        
        // Update the span position and width
        span.style.left = `${leftPosition}px`;
        span.style.width = `${spanWidth}px`;
    });

    link.addEventListener('mouseleave', () => {
        const span = document.querySelector('nav span');
        span.style.width = '0px';
    });
});
