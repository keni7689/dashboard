const countElements = document.querySelectorAll('.count');
const targetNumbers = [7.48, 7, 6, 153]; // Replace with your desired target numbers
const animationDuration = 1000; // 2 seconds
const frameDuration = 1000 / 60; // 60 frames per second

const countUp = (countElement, targetNumber) => {
    let currentNumber = 0;
    const increment = targetNumber / (animationDuration / frameDuration);

    const interval = setInterval(() => {
        currentNumber += increment;

        if (currentNumber >= targetNumber) {
            countElement.textContent = targetNumber % 1 === 0 ? targetNumber : targetNumber.toFixed(2);
            clearInterval(interval);
        } else {
            countElement.textContent = currentNumber % 1 === 0 ? currentNumber : currentNumber.toFixed(2);
        }
    }, frameDuration);
};

countElements.forEach((countElement, index) => {
    if (index === 3) {
        countElement.textContent = targetNumbers[index] + '/175';
    } else {
        countUp(countElement, targetNumbers[index]);
    }
});

// Add this script before the closing </body> tag or within a <script> tag in the <head> section.

document.addEventListener("DOMContentLoaded", function () {
    // Get the canvas element
    var performanceChartCanvas = document.getElementById("performance-chart");

    // Create the line chart
    var performanceChart = new Chart(performanceChartCanvas, {
        type: 'line',
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], // Replace with your actual month labels
            datasets: [{
                label: 'Performance',
                data: [0, 25, 50, 75, 100, 80], // Replace with your actual performance data
                borderColor: 'rgba(0, 0, 0, 1)',
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                fill: true
            }]
        },
        options: {
            scales: {
                x: {
                    grid: {
                        color: 'rgba(0, 0, 0, 1)',
                        borderColor: 'rgba(0, 0, 0, 1)',
                        borderWidth: 1
                    }
                },
                y: {
                    min: 0,
                    max: 100,
                    stepSize: 25,
                    grid: {
                        color: 'rgba(0, 0, 0, 1)',
                        borderColor: 'rgba(0, 0, 0, 1)',
                        borderWidth: 1
                    }
                }
            }
        }
    });
});





//   const navToggle = document.getElementById('nav-toggle');
//   const sidebar = document.querySelector('.sidebar');

//   navToggle.addEventListener('click', () => {
//     sidebar.classList.toggle('sidebar-active');
//   });


