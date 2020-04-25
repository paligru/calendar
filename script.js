let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");
let months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
let monthAndYear = document.getElementById("monthAndYear");

showCalendar(currentMonth, currentYear);

function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}

function todayMonth() {
    let today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();
    showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {
    let firstDay = (new Date(year, month)).getDay()-1;
    let daysInMonth = 32 - new Date(year, month, 32).getDate();
    let tbl = document.getElementById("calendar-body");

    // clearing all previous cells
    tbl.innerHTML = "";

    // filing data about month and in the page via DOM.
    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;    
    selectMonth.value = month;
    
    let date = 1;
    // Add Weeks
    for (let i = 0; i < 6; i++) {        
        let row = document.createElement("tr"); // WeekRow
        // Add Days
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                // Blank Cells
                let cell = document.createElement("td");               
                cell.classList.add("blankcell");  
                row.appendChild(cell);
            }
            else if (date > daysInMonth) {
                // Blank Cells                     
                let cell = document.createElement("td");               
                cell.classList.add("blankcell");  
                row.appendChild(cell);
            }
            else {
                // Filled cells
                let cell = document.createElement("td");
                let celldata = document.createElement("div");
                cell.appendChild(celldata);
                celldata.innerHTML = `${date}<br/>TEST1<br/>TEST2<br/>TESt3`;
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()){
                    cell.classList.add("today"); 
                    celldata.classList.add("filledcell"); 
                } else
                    celldata.classList.add("filledcell");  
                row.appendChild(cell);
                date++;
            }
        }
        tbl.appendChild(row); // appending each row into calendar body.
    }
}