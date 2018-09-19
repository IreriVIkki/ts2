var myChart = document.querySelector("#myChart").getContext("2d");
var times = [
    "8:00",
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "1:00",
    "8:00",
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "1:00",
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "1:00"
];
var polarity = [
    0.2,
    0.4,
    0.1,
    0.0,
    0.8,
    0.3,
    0.2,
    0.4,
    0.1,
    0.0,
    0.8,
    0.3,
    0.4,
    0.1,
    0.0,
    0.8,
    0.3
];
var timeleft = 5;

var downloadTimer = setInterval(function () {
    times.push((Math.random() * 10).toPrecision(3));
    polarity.push(parseInt(Math.random() * 10));
    times = times.splice(1, times.length - 1);
    // console.log(times);
    polarity = polarity.splice(1, polarity.length - 1);
    // console.log(polarity);
    // console.log(10 - --timeleft);
    if (timeleft <= 0) {
        // clearInterval(downloadTimer);
        console.log('timeleft')
        $.ajax({
            url: 'text.txt',
            success: function (data) {
                console.log(data)
            }
        });

    }
    let sentimentChart = new Chart(myChart, {
        type: "radar", //horizontalbar, pie, line, doughnut,radar, polarArea, bar
        data: {
            labels: times,
            datasets: [{
                label: "Population",
                data: polarity
            }]
        },
        options: {
            animation: false
        }
    });
    timeleft = --timeleft
}, 1000);