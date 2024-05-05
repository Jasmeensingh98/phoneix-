<script>



const progressBar = document.getElementById('progress');

let progressValue = 0;

function increaseProgress() {
  progressValue += 10; // Increase progress by 10%

  // Update the progress bar width
  progressBar.style.width = `${progressValue}%`;

  
  // Check if progress is complete
  if (progressValue >= 100) {
    clearInterval(progressInterval); // Stop the interval
    progressValue = 0; // Reset progress for future use
  }
}

// Start increasing the progress bar every 10 seconds
const progressInterval = setInterval(increaseProgress, 10000); // 10 seconds = 10000 milliseconds
</script>
