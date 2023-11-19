/*
let saveEl = document.getElementById("save-el")
let gecmisBilgi = localStorage.getItem("gecmisBilgi")
let totalPeople = localStorage.getItem("totalPeople")

// 1) saveEl elementinden sonrasına yazsın
let totalPeopleEl = document.getElementById("total-people")
if (totalPeople !== null) {
    totalPeopleEl.textContent = "Toplam Yolcu: " + totalPeople
} else {
    totalPeopleEl.textContent = "Toplam Yolcu: 0"
}

if (gecmisBilgi !== null) {
    saveEl.textContent = gecmisBilgi
} else {
    saveEl.textContent = ""
}

let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count

    // 2) ve yanında o ana kadar istasyona gelen toplam yolcu sayısı dinamik olarak güncellensin.
    totalPeople = parseInt(totalPeople) + 1
    totalPeopleEl.textContent = "Toplam Yolcu: " + totalPeople
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr

    // 3) Total people verisini de localStorage kaydedin.
    localStorage.setItem("gecmisBilgi", saveEl.textContent)
    localStorage.setItem("totalPeople", totalPeople)

    countEl.textContent = 0
    count = 0
}
*/

let saveEl        = document.getElementById("save-el")
let gecmisBilgi   = localStorage.getItem("gecmisBilgi")
if( gecmisBilgi !== null) {
    saveEl.textContent = localStorage.getItem("gecmisBilgi")
} else {
    saveEl.textContent = ""
}

let totalElement  = document.getElementById("total-element")   // index.html'e P elementi eklendi.
let totalCount    = localStorage.getItem("totalCount")         // Yerel depodan değerini okumaya çalışıyoruz (mevcut olmaya da bilir...)
totalCount = totalCount !== null ? parseInt(totalCount) : 0;   // parseInt null ise sıfır ver.
totalElement.innerText = totalCount

let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
    totalCount += 1                               // 1 arttırdık
    totalElement.innerText = totalCount           // ekrana bastık
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    localStorage.setItem( "gecmisBilgi", saveEl.textContent )
    countEl.textContent = 0
    count = 0
    localStorage.setItem( "totalCount", parseInt(totalCount))  // yerel depoya kaydettik
    totalElement.innerText = totalCount                        // yine ekrana bastık
}
