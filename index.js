const button = document.getElementById("click-button")
const schema = document.getElementById("color-scheme")
const color = document.getElementById("color-pick")
const mode = document.getElementById("mode-pick")
const colEl = document.querySelectorAll(".col")
const hexEl = document.querySelectorAll(".hex")
let hex = color.value.slice(1)
console.log(hex)

color.addEventListener('change', function() {
    hex = color.value.slice(1)
});

button.addEventListener("click", function() {
    getColorScheme(hex,mode.value)
})
    
    function getColorScheme(input, scheme) {
        fetch(`https://www.thecolorapi.com/scheme?hex=${input}&mode=${scheme}&count=5`)
        .then(response => response.json())
        .then(data => {
            for(let i = 0; i < data.colors.length; i++) {
            colEl[i].style.background = `${data.colors[i].hex.value}`
            hexEl[i].textContent = data.colors[i].hex.value
            }
        })
    }
    
    getColorScheme('000000', 'monochrome')

    hexEl.forEach(copyHex => function(e) {
        navigator.clipboard.writeText(e.target.textContent)
    })


// <img src=${data.colors[i].image.bare}>
// <p>${data.colors[i].hex.value}</p>