var today = new Date();
retrievedate.innerText = "Date Retrieved: \n"+ today;

  //get data using api
  var getPSI;
  fetch('https://api.data.gov.sg/v1/environment/psi')
    .then(response=>response.json())
    .then(data=>myData=data)
    .then(()=>this.showPSI(myData));

  function showPSI(data) {
    var readings = data.items[0].readings;
    var keys = Object.keys(readings)
    var sortedKeys = Object.keys(readings).sort();
    var table = document.createElement("table");
    document.getElementById('psitable').appendChild(table);

    const headers = ['north','south','east','west','central']
    rowhead = table.insertRow()
    rowhead.insertCell().innerHTML=' '
    for (let i=0; i<headers.length; i++){
      rowhead.insertCell().innerHTML = '<b>'+headers[i]+'</b>';
    }

    for (let j=0; j<sortedKeys.length; j++){
      row = table.insertRow();
      row.insertCell().innerHTML = sortedKeys[j];
      for (let i=0; i<=4; i++){
        value = readings[sortedKeys[j]][headers[i]]
        row.insertCell().innerHTML = '<i>'+value+'</i>';
      }
    }

    console.log(table)
  }