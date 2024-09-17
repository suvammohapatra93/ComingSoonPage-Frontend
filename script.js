// Set the date and time when the countdown ends
let countDownDate = new Date("Jan 1, 2025 00:00:00").getTime();

// Update the countdown every second
let x = setInterval(function () {
  // Get the current date and time
  let now = new Date().getTime();

  // Calculate the distance between now and the countdown date
  let distance = countDownDate - now;

  // Calculate the number of days, hours, minutes, and seconds left
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update the HTML elements with the calculated time
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the countdown is finished, set all values to "00"
  if (distance < 0) {
    clearInterval(x); // Stop the countdown
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000); // Execute the function every 1000 milliseconds (1 second)
