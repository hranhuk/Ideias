// Progress Bar
function updateProgressBar() {
  const winScroll = document.documentElement.scrollTop || document.body.scrollTop
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  const scrolled = (winScroll / height) * 100
  document.getElementById("progressBar").style.width = scrolled + "%"
}

// Reveal on Scroll
function reveal() {
  const reveals = document.querySelectorAll(".reveal")

  reveals.forEach((element) => {
    const windowHeight = window.innerHeight
    const elementTop = element.getBoundingClientRect().top
    const elementVisible = 150

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add("visible")
    }
  })
}

// Smooth Scroll for Navigation
function setupSmoothScroll() {
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
}

// Active Navigation Link
function updateActiveNav() {
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(".nav-links a")

  let current = ""

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight

    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active")
    }
  })
}

// Fade in on scroll
function fadeInOnScroll() {
  const elements = document.querySelectorAll(".fade-in")

  elements.forEach((element) => {
    if (!element.classList.contains("animated")) {
      element.style.opacity = "0"
      element.style.transform = "translateY(40px)"
    }

    const elementTop = element.getBoundingClientRect().top
    const elementBottom = element.getBoundingClientRect().bottom
    const windowHeight = window.innerHeight

    if (elementTop < windowHeight * 0.85 && elementBottom > 0) {
      element.style.opacity = "1"
      element.style.transform = "translateY(0)"
      element.classList.add("animated")
    }
  })
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  setupSmoothScroll()
  reveal()
  updateProgressBar()
  updateActiveNav()
  fadeInOnScroll()
  // Add animation delay to cards
  const cards = document.querySelectorAll(".card, .tool-card, .glossary-term, .mindset-card")

  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`
  })
})

// Event Listeners
window.addEventListener("scroll", () => {
  updateProgressBar()
  reveal()
  updateActiveNav()
  fadeInOnScroll()
})

window.addEventListener("resize", reveal)

console.log("[v0] Cartilha do Aluno de Programação carregada com sucesso! 🚀")
