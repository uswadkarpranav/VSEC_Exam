let students = [];

document.getElementById("studentForm")
    .addEventListener("submit", function(event){
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const roll = document.getElementById("roll").value.trim();

        const marks = ["m1", "m2", "m3", "m4", "m5"]
            .map(id => Number(document.getElementById(id).value));

        if(marks.some(m => m<0 || m > 100)){
            alert("Marks must be between 0 and 100");
            return;
        }
        const total = marks.reduce((sum, m) => sum+m, 0);
        const percentage = total/5;

        const student = {name, roll, total, percentage};//*
        students.push(student);

        const row = document.createElement("tr");

        [name, roll, total, percentage.toFixed(2) + "%"]
            .forEach(value => {
                const td = document.createElement("td");
                td.textContent = value;
                row.appendChild(td);
            });
        document.getElementById("records").appendChild(row);

        const topper = students.reduce((best, current) =>
                current.total > best.total ? current : best
        );

        document.getElementById("topper").textContent =
            "Topper: "+topper.name + "(" + topper.total + "/500)";

        this.reset();

    });  