// script.js
        document.addEventListener('DOMContentLoaded', function() {
            const data = [
                { name: "Yellowstone", location: "44.6° N, 110.5° W", date: "1872-03-01", area: "2,219,791 acres", status: "Endangered" },
                { name: "Yosemite", location: "37.8° N, 119.5° W", date: "1890-10-01", area: "761,268 acres", status: "Vulnerable" }
            ];
        
            const tbody = document.querySelector('#parksTable tbody');
        
            function updateTable() {
                tbody.innerHTML = '';
                data.forEach((item, index) => {
                    const row = tbody.insertRow();
                    row.insertCell().textContent = item.name;
                    row.insertCell().textContent = item.location;
                    row.insertCell().textContent = item.date;
                    row.insertCell().textContent = item.area;
                    row.insertCell().textContent = item.status;
                    const actionsCell = row.insertCell();
                    const editBtn = document.createElement('button');
                    editBtn.textContent = 'Edit';
                    editBtn.className = 'btn btn-primary btn-sm';  // Bootstrap button class
                    editBtn.onclick = () => editEntry(index);
                    actionsCell.appendChild(editBtn);
                    const deleteBtn = document.createElement('button');
                    deleteBtn.textContent = 'Delete';
                    deleteBtn.className = 'btn btn-danger btn-sm';  // Bootstrap button class
                    deleteBtn.onclick = () => deleteEntry(index);
                    actionsCell.appendChild(deleteBtn);
                });
            }
        
            function editEntry(index) {
                const name = prompt('Enter new park name', data[index].name);
                const location = prompt('Enter new location', data[index].location);
                const date = prompt('Enter new establishment date', data[index].date);
                const area = prompt('Enter new area', data[index].area);
                const status = prompt('Enter new conservation status', data[index].status);
                data[index] = { name, location, date, area, status };
                updateTable();
            }
        
            function deleteEntry(index) {
                if (confirm('Are you sure you want to delete this record?')) {
                    data.splice(index, 1);
                    updateTable();
                }
            }
        
            updateTable();
        });


        document.addEventListener('DOMContentLoaded', function() {
            const tbody = document.querySelector('#speciesTable tbody');
            let data = [
                { commonName: "African Elephant", scientificName: "Loxodonta", status: "Endangered", category: "Fauna" },
                { commonName: "Red Maple", scientificName: "Acer rubrum", status: "Least Concern", category: "Flora" }
            ];
        
            function updateTable() {
                tbody.innerHTML = '';
                data.forEach((item, index) => {
                    const row = tbody.insertRow();
                    row.insertCell(0).textContent = item.commonName;
                    row.insertCell(1).textContent = item.scientificName;
                    row.insertCell(2).textContent = item.status;
                    row.insertCell(3).textContent = item.category;
                    const actionsCell = row.insertCell(4);
                    const editBtn = document.createElement('button');
                    editBtn.textContent = 'Edit';
                    editBtn.className = 'btn btn-primary btn-sm';
                    editBtn.onclick = () => editEntry(index);
                    actionsCell.appendChild(editBtn);
                    const deleteBtn = document.createElement('button');
                    deleteBtn.textContent = 'Delete';
                    deleteBtn.className = 'btn btn-danger btn-sm';
                    deleteBtn.onclick = () => deleteEntry(index);
                    actionsCell.appendChild(deleteBtn);
                });
            }
        
            function editEntry(index) {
                const commonName = prompt('Enter new Common Name', data[index].commonName);
                const scientificName = prompt('Enter new Scientific Name', data[index].scientificName);
                const status = prompt('Enter new Conservation Status', data[index].status);
                const category = prompt('Enter new Category', data[index].category);
                if (commonName && scientificName && status && category) {
                    data[index] = { commonName, scientificName, status, category };
                    updateTable();
                }
            }
        
            function deleteEntry(index) {
                if (confirm('Are you sure you want to delete this entry?')) {
                    data.splice(index, 1);
                    updateTable();
                }
            }
        
            updateTable();
        });

        
        document.addEventListener('DOMContentLoaded', function() {
            const tbody = document.querySelector('#parkSpeciesTable tbody');
            let data = [
                { park: "Yellowstone", species: "Gray Wolf", count: 150, lastSurveyed: "2021-09-05" },
                { park: "Yosemite", species: "Black Bear", count: 350, lastSurveyed: "2021-10-15" }
            ];
        
            function updateTable() {
                tbody.innerHTML = '';
                data.forEach((item, index) => {
                    const row = tbody.insertRow();
                    row.insertCell(0).textContent = item.park;
                    row.insertCell(1).textContent = item.species;
                    row.insertCell(2).textContent = item.count;
                    row.insertCell(3).textContent = item.lastSurveyed;
                    const actionsCell = row.insertCell(4);
                    const editBtn = document.createElement('button');
                    editBtn.textContent = 'Edit';
                    editBtn.className = 'btn btn-primary btn-sm';
                    editBtn.onclick = () => editEntry(index);
                    actionsCell.appendChild(editBtn);
                    const deleteBtn = document.createElement('button');
                    deleteBtn.textContent = 'Delete';
                    deleteBtn.className = 'btn btn-danger btn-sm';
                    deleteBtn.onclick = () => deleteEntry(index);
                    actionsCell.appendChild(deleteBtn);
                });
            }
        
            function editEntry(index) {
                const park = prompt('Enter new Park', data[index].park);
                const species = prompt('Enter new Species', data[index].species);
                const count = prompt('Enter new Count Estimate', data[index].count);
                const lastSurveyed = prompt('Enter new Last Surveyed Date', data[index].lastSurveyed);
                if (park && species && count && lastSurveyed) {
                    data[index] = { park, species, count, lastSurveyed };
                    updateTable();
                }
            }
        
            function deleteEntry(index) {
                if (confirm('Are you sure you want to delete this entry?')) {
                    data.splice(index, 1);
                    updateTable();
                }
            }
        
            updateTable();
        });
        
        
        document.addEventListener('DOMContentLoaded', function() {
            const tbody = document.querySelector('#conservationProjectsTable tbody');
            let data = [
                { park: "Yellowstone", projectName: "Wolf Reintroduction", startDate: "1995-01-01", endDate: "", objectives: "Restore the wolf population.", findings: "Wolf population is now stable." },
                { park: "Yosemite", projectName: "Meadow Restoration", startDate: "2010-06-01", endDate: "2012-08-30", objectives: "Recover floodplain meadows.", findings: "Plant diversity has increased." }
            ];
        
            function updateTable() {
                tbody.innerHTML = '';
                data.forEach((item, index) => {
                    const row = tbody.insertRow();
                    row.insertCell(0).textContent = item.park;
                    row.insertCell(1).textContent = item.projectName;
                    row.insertCell(2).textContent = item.startDate;
                    row.insertCell(3).textContent = item.endDate;
                    row.insertCell(4).textContent = item.objectives;
                    row.insertCell(5).textContent = item.findings;
                    const actionsCell = row.insertCell(6);
                    const editBtn = document.createElement('button');
                    editBtn.textContent = 'Edit';
                    editBtn.className = 'btn btn-primary btn-sm';
                    editBtn.onclick = () => editEntry(index);
                    actionsCell.appendChild(editBtn);
                    const deleteBtn = document.createElement('button');
                    deleteBtn.textContent = 'Delete';
                    deleteBtn.className = 'btn btn-danger btn-sm';
                    deleteBtn.onclick = () => deleteEntry(index);
                    actionsCell.appendChild(deleteBtn);
                });
            }
        
            function editEntry(index) {
                const park = prompt('Enter new Park', data[index].park);
                const projectName = prompt('Enter new Project Name', data[index].projectName);
                const startDate = prompt('Enter new Start Date', data[index].startDate);
                const endDate = prompt('Enter new End Date', data[index].endDate);
                const objectives = prompt('Enter new Objectives', data[index].objectives);
                const findings = prompt('Enter new Findings', data[index].findings);
                if (park && projectName && startDate && objectives && findings) {
                    data[index] = { park, projectName, startDate, endDate, objectives, findings };
                    updateTable();
                }
            }
        
            function deleteEntry(index) {
                if (confirm('Are you sure you want to delete this entry?')) {
                    data.splice(index, 1);
                    updateTable();
                }
            }
        
            updateTable();
        });
        
        document.addEventListener('DOMContentLoaded', function() {
            const tbody = document.querySelector('#environmentalDataTable tbody');
            let data = [
                { park: "Yellowstone", dateTime: "2021-09-15T14:00", temperature: "15°C", airQuality: "40 AQI", waterQuality: "75 WQI", notes: "Clear weather" },
                { park: "Yosemite", dateTime: "2021-10-21T09:30", temperature: "10°C", airQuality: "35 AQI", waterQuality: "80 WQI", notes: "Slightly cloudy" }
            ];
        
            function updateTable() {
                tbody.innerHTML = '';
                data.forEach((item, index) => {
                    const row = tbody.insertRow();
                    row.insertCell(0).textContent = item.park;
                    row.insertCell(1).textContent = item.dateTime;
                    row.insertCell(2).textContent = item.temperature;
                    row.insertCell(3).textContent = item.airQuality;
                    row.insertCell(4).textContent = item.waterQuality;
                    row.insertCell(5).textContent = item.notes;
                    const actionsCell = row.insertCell(6);
                    const editBtn = document.createElement('button');
                    editBtn.textContent = 'Edit';
                    editBtn.className = 'btn btn-primary btn-sm';
                    editBtn.onclick = () => editEntry(index);
                    actionsCell.appendChild(editBtn);
                    const deleteBtn = document.createElement('button');
                    deleteBtn.textContent = 'Delete';
                    deleteBtn.className = 'btn btn-danger btn-sm';
                    deleteBtn.onclick = () => deleteEntry(index);
                    actionsCell.appendChild(deleteBtn);
                });
            }
        
            function editEntry(index) {
                const park = prompt('Enter new Park', data[index].park);
                const dateTime = prompt('Enter new Date and Time', data[index].dateTime);
                const temperature = prompt('Enter new Temperature', data[index].temperature);
                const airQuality = prompt('Enter new Air Quality Index', data[index].airQuality);
                const waterQuality = prompt('Enter new Water Quality Index', data[index].waterQuality);
                const notes = prompt('Enter new Notes', data[index].notes);
                if (park && dateTime && temperature && airQuality && waterQuality && notes) {
                    data[index] = { park, dateTime, temperature, airQuality, waterQuality, notes };
                    updateTable();
                }
            }
        
            function deleteEntry(index) {
                if (confirm('Are you sure you want to delete this entry?')) {
                    data.splice(index, 1);
                    updateTable();
                }
            }
        
            updateTable();
        });
        