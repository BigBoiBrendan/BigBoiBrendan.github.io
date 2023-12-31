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

        // Update the timer content
        timerElement.textContent = `Next rotation in ${minutesUntilNextUpdate} minutes`;
    }

    // Get the dynamic text element and timer element
    const dynamicTextElement = document.getElementById("dynamicText");
    const timerElement = document.getElementById("timer");

    // Update the dynamic text initially
    updateDynamicText();

    // Update the dynamic text and timer every minute
    setInterval(updateDynamicText, 60 * 1000);
});
