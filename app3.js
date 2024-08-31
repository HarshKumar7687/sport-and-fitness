
// Calculate daily calorie needs
document.getElementById('calorieCalculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const bmi = parseFloat(document.getElementById('bmi').value);
    const age = parseInt(document.getElementById('age').value);

    if (bmi > 0 && age > 0) {
        let calorieNeeds = 0;

        // Basic calculation for calorie needs
        if (bmi < 18.5) {
            calorieNeeds = 2500; // For underweight
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            calorieNeeds = 2000; // For normal weight
        } else if (bmi >= 25 && bmi <= 29.9) {
            calorieNeeds = 2200; // For overweight
        } else {
            calorieNeeds = 2400; // For obesity
        }

        document.getElementById('calorieNeeds').textContent = calorieNeeds;
        document.getElementById('caloriesRemaining').textContent = calorieNeeds; // Initially, remaining calories equal to daily needs
    } else {
        alert('Please enter valid BMI and age.');
    }
});

// Track meals and calculate calories
const mealForm = document.getElementById('mealForm');
const totalCaloriesDisplay = document.getElementById('totalCalories');
const caloriesRemainingDisplay = document.getElementById('caloriesRemaining');
let totalCalories = 0;

mealForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const mealType = document.getElementById('mealType').value;
    const food = document.getElementById('food').value;
    const quantity = parseFloat(document.getElementById('quantity').value);
    const caloriesPer100g = parseFloat(document.getElementById('calories').value);

    if (food && quantity > 0 && caloriesPer100g > 0) {
        const calories = (quantity * caloriesPer100g) / 100;
        totalCalories += calories;

        // Create list item for the meal
        const listItem = document.createElement('li');
        listItem.textContent = `${food} (${quantity}g, ${calories.toFixed(2)} calories)`;
        
        // Add remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';
        removeButton.addEventListener('click', function() {
            totalCalories -= calories;
            updateCalories();
            listItem.remove();
        });

        listItem.appendChild(removeButton);
        document.getElementById(mealType).querySelector('ul').appendChild(listItem);

        // Update total and remaining calories
        updateCalories();

        // Clear form fields
        mealForm.reset();
    } else {
        alert('Please enter valid food details.');
    }
});

function updateCalories() {
    const calorieNeeds = parseFloat(document.getElementById('calorieNeeds').textContent);
    const remainingCalories = Math.max(calorieNeeds - totalCalories, 0);

    totalCaloriesDisplay.textContent = totalCalories.toFixed(2);
    caloriesRemainingDisplay.textContent = remainingCalories.toFixed(2);
}




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
