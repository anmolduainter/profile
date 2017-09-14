
$(function () {

   //Languages

   let chart = new CanvasJS.Chart("lang", {
        title: {
            text: "Languages"
        },
        data: [{
            type: "column",
            dataPoints: [
                { y: 70, label: "C++" },
                { y: 90, label: "Java" },
                { y: 80, label: "Javascript" },
                { y: 30, label: "Kotlin" },
                { y: 90, label: "JQuery" },
                { y: 60, label: "Vue.js" },
                { y: 90, label: "Node.js" },
            ]
        }]
    });
    chart.render();


    //Android Development

    let chart1 = new CanvasJS.Chart("AndroidDev",
        {
            theme: "theme2",
            title:{
                text: "Android Development"
            },
            data: [
                {
                    type: "pie",
                    showInLegend: true,
                     toolTipContent: "#percent %",
                    // yValueFormatString: "#0.#,,. Million",
                    legendText: "{indexLabel}",
                    dataPoints: [
                        {  y: 6181563, indexLabel: "Java" },
                        {  y: 2175498, indexLabel: "XML" },
                        {  y: 1125844, indexLabel: "Kotlin" }
                    ]
                }
            ]
        });
    chart1.render();

    //Databases

    let chart2 = new CanvasJS.Chart("database",
        {
            theme: "theme2",
            title:{
                text: "Database"
            },
            data: [
                {
                    type: "pie",
                    showInLegend: true,
                    toolTipContent: "#percent %",
                    // yValueFormatString: "#0.#,,. Million",
                    legendText: "{indexLabel}",
                    dataPoints: [
                        {  y: 50, indexLabel: "MySql" },
                        {  y: 50, indexLabel: "MongoDb" },
                    ]
                }
            ]
        });
    chart2.render();

    //WebDev
    let chart3 = new CanvasJS.Chart("WebDev",
        {
            theme: "theme2",
            title:{
                text: "Web Development"
            },
            data: [
                {
                    type: "pie",
                    showInLegend: true,
                    toolTipContent: "#percent %",
                    legendText: "{indexLabel}",
                    dataPoints: [
                        {  y: 20, indexLabel: "HTML" },
                        {  y: 20, indexLabel: "CSS" },
                        {  y: 50, indexLabel: "Javascript" },
                        {  y: 50, indexLabel: "JQuery" },
                        {  y: 50, indexLabel: "Node.js" },
                        {  y: 20, indexLabel: "Vue.js" },
                        {  y: 20, indexLabel: "HandleBars" }
                    ]
                }
            ]
        });
    chart3.render();

});