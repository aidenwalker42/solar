/*jslint browser:true */
"use strict";

function addMonths(){
    let annualKw=0, dailyUse=0, i=0, x=0;
    let months = document.getElementById("mpc").getElementsByTagName("input")
    for(i=0; i<months.length; i++){
        x = Number(months[i].value);
        annualKw += x;
    }
    dailyUse = annualKw/365;
    return dailyUse;
}

function getSunHours(){
    let theZone = document.forms.solarForm.zone.selectedIndex;
    theZone+=1; 
    let hrs;
    switch(theZone){
        case 1:
            hrs=6;
            break;
        case 2:
            hrs=5.5
            break;
        case 3:
            hrs=5;
            break;
        case 4:
            hrs=4.5
            break;
        case 5:
            hrs=4.2
            break; 
        case 6:
            hrs=3.5;
            break;
        default:
            hrs=0;
    }
    return hrs;
}

function solarPanel(){
    let userChoice = document.forms.solarForm.panel.selectedIndex;
    let panelOptions = document.forms.solarForm.panel.options;
    let power = panelOptions[userChoice].value;
    let name = panelOptions[userChoice].text;
    let x = [power, name]
    return x; 
}

function calculateSolar(){
    console.log(addMonths());
    console.log(getSunHours());
    console.log(addMonths()/getSunHours()); //min kW needed
    console.log(addMonths()/getSunHours()*1.25); //estimated kW due to weather
    console.log((addMonths()/getSunHours()*1.25)*1000); //estimated WATTS
    let panelInfo = solarPanel();
    let power = panelInfo[0];
    let name = panelInfo[1];
    console.log(power, name);

    let panelsNeeded = Math.round(((addMonths()/getSunHours()*1.25)*1000) / power);
    console.log(panelsNeeded);

    let feedback = "";
    feedback += "<p>Your daily use Average: " + addMonths() + "</p>"
    feedback += "<p>Estimated solar Panels needed to offset 100% of your electrical bill: " + panelsNeeded + "</p>"
    document.getElementById("feedback").innerHTML = feedback;
}


