
// Function to shuffle the ArtworkSection elements
function randomizeSections() {
  const sections = document.querySelectorAll('.artwork-section')
  const sectionArray = Array.from(sections)
  const parent = document.querySelector('.parent-container')
  if (parent) {
    for (let i = sectionArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[sectionArray[i], sectionArray[j]] = [
        sectionArray[j],
        sectionArray[i],
      ]
    }
    sectionArray.forEach((section) => parent.appendChild(section))
  }
}

// Call the shuffle function on page load
window.addEventListener('DOMContentLoaded', randomizeSections)