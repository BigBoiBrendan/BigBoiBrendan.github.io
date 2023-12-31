document.addEventListener("DOMContentLoaded", function () {
    // Function to update dynamic text and timer
    function updateDynamicText() {
        // Get current time in Pacific Standard Time (PST)
        const currentTimePST = new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" });
        const currentTime = new Date(currentTimePST);

        // Calculate the number of minutes from midnight
        const minutesFromMidnight = currentTime.getHours() * 60 + currentTime.getMinutes();

        // Determine the text based on the time range
        let newText = "";

        // Define the time ranges for SOLO, DUO, and TRIO
        const soloStart = 0;
        const duoStart = 30;
        const trioStart = 60;

        // Calculate the current time range
        const currentRange = (minutesFromMidnight % 90);

        if (currentRange >= soloStart && currentRange < duoStart) {
            newText = "SOLO";
        } else if (currentRange >= duoStart && currentRange < trioStart) {
            newText = "DUO";
        } else {
            newText = "TRIO";
        }

        // Update the text content
        dynamicTextElement.textContent = newText;

        // Calculate the time until the next update interval
        const minutesUntilNextUpdate = 30 - (minutesFromMidnight % 30);

        // Calculate the next rotation
        const nextRotation = calculateNextRotation(currentRange);

        // Update the timer content
        timerElement.textContent = `Next rotation in ${minutesUntilNextUpdate} minutes`;
        
        // Update the next rotation information
        nextRotationElement.textContent = `Next rotation: ${nextRotation}`;
    }

    // Function to calculate the next rotation based on the current time range
    function calculateNextRotation(currentRange) {
        if (currentRange < 30) {
            return "DUO";
        } else if (currentRange < 60) {
            return "TRIO";
        } else {
            return "SOLO";
        }
    }

    // Get the dynamic text element, timer element, and next rotation element
    const dynamicTextElement = document.getElementById("dynamicText");
    const timerElement = document.getElementById("timer");
    const nextRotationElement = document.getElementById("nextRotation");

    // Update the dynamic text initially
    updateDynamicText();

    // Update the dynamic text and timer every minute
    setInterval(updateDynamicText, 60 * 1000);
});
