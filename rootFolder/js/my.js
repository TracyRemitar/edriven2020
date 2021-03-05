function myFunction() {
    var x = prompt("Month (1-12)");
    var y = prompt("Start Day (1-7)");
    mList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let dates = document.getElementById("dates");
    if (x > 12 || x < 1 || y > 7 || y < 1){
        document.getElementById("invalid").innerHTML = "Invalid Input";
    }
    else{
        document.getElementById("month").innerHTML = mList[x-1];
        let counter = 1;
        for (var w = 1; w <= 7; w++){
            let row = document.createElement("tr");
            for (var d = 1; d <= 7; d++){
                let cell = document.createElement("td");
                let celltext = document.createTextNode(counter);
                let blankcell = document.createTextNode("");
                if (counter > days[x-1]){
                    break;
                }
                else{
                    if (w == 1 && d < y){
                        cell.appendChild(blankcell);
                        if (d == 1){
                            cell.setAttribute("style", "background-color: #F08080; color: white")
                        }
                    }
                    else{
                        cell.appendChild(celltext);
                        if (d == 1){
                            cell.setAttribute("style", "background-color: #F08080; color: white")
                        }
                        counter++;
                    }
                    row.appendChild(cell);
                }

            }
            dates.appendChild(row);
        }
    }


}