// This script displays the current time and updates every second
function updateClock() {
    const now = new Date();
  
    // Format the time as HH:MM:SS
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');
  
    const timeString = `${hours}:${minutes}:${seconds}`;
  
    // Find the clock div and update its text
    document.getElementById('digitalClock').textContent = timeString;
  }
  
  // Initial call
  updateClock();
  
  // Update clock every second
  setInterval(updateClock, 1000);
  