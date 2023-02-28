
const sections = document.querySelectorAll('.sections')
const htmlSelector = document.querySelectorAll('html')

const lightNightMode = document.querySelector('button')
const nightMode = () => {
    sections.forEach(section => 
        section.classList.add("dark-mode"))
    
}

const lightMode = () => {
    sections.forEach(section => {
        section.classList.remove("darkmode")
    })
}