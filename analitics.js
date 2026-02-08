 
var ctxFollow = document.getElementById('follow-chart').getContext("2d");
var ctxData = document.getElementById('data-chart').getContext("2d");
var ctxLink = document.getElementById('link-chart').getContext("2d");

var ctxAction = document.getElementById('action-chart').getContext("2d");
var ctxPerformance = document.getElementById('performance-chart').getContext("2d");
var ctxStorage = document.getElementById('storage-chart').getContext("2d");
var ctxAnalysis = document.getElementById('analysis-chart').getContext("2d");




var gradientFillFollow = ctxAction.createLinearGradient(1, 150, 0, 0);
gradientFillFollow.addColorStop(0, "rgba(147, 112, 219, .1)");
gradientFillFollow.addColorStop(1, "rgba(147, 112, 219, .4)");

var gradientFillData = ctxAction.createLinearGradient(1, 150, 0, 0);
gradientFillData.addColorStop(0, "rgba(175, 238, 238, .1)");
gradientFillData.addColorStop(1, "rgba(175, 238, 238, .4)");

var gradientFillLink = ctxAction.createLinearGradient(1, 150, 0, 0);
gradientFillLink.addColorStop(0, "rgba(65, 105, 225, .1)");
gradientFillLink.addColorStop(1, "rgba(65, 105, 225, .4)");




var gradientFillAction = ctxAction.createLinearGradient(1, 150, 0, 0);
gradientFillAction.addColorStop(0, "rgba(147, 112, 219, .1)");
gradientFillAction.addColorStop(1, "rgba(147, 112, 219, .4)");

var gradientFillPerformance = ctxAction.createLinearGradient(1, 150, 0, 0);
gradientFillPerformance.addColorStop(0, "rgba(175, 238, 238, .1)");
gradientFillPerformance.addColorStop(1, "rgba(175, 238, 238, .4)");

var gradientFillStorage = ctxAction.createLinearGradient(1, 150, 0, 0);
gradientFillStorage.addColorStop(0, "rgba(65, 105, 225, .1)");
gradientFillStorage.addColorStop(1, "rgba(65, 105, 225, .4)");

var gradientFillAnalysisLight = ctxAction.createLinearGradient(1, 150, 0, 0);
gradientFillAnalysisLight.addColorStop(0, "rgba(101, 74, 130, .1)");
gradientFillAnalysisLight.addColorStop(1, "rgba(101, 74, 130, .2)");

var gradientFillAnalysisDark = ctxAction.createLinearGradient(1, 150, 0, 0);
gradientFillAnalysisDark.addColorStop(0, "rgba(101, 74, 130, .6)");
gradientFillAnalysisDark.addColorStop(1, "rgba(101, 74, 130, .8)");




var followOptions = {
    elements: {
      point:{
        radius: 0
      }
    },
    maintainAspectRatio: false,
    responsive: false,
    legend: {
      display: false  
    },
    scales: {
        xAxes: [{
            gridLines: {
                display: false
            },
            ticks: {
                display: false
            }
        }],
        yAxes: [{
            gridLines: {
                display: false
            },
            ticks: {
                beginAtZero: true,
                display: false 
            }
        }]
    }
}


var dataOptions = {
    elements: {
      point:{
        radius: 0
      }
    },
    maintainAspectRatio: false,
    responsive: false,
    legend: {
      display: false  
    },
    scales: {
        xAxes: [{
            gridLines: {
                display: false
            },
            ticks: {
                display: false
            }
        }],
        yAxes: [{
            gridLines: {
                display: false
            },
            ticks: {
                beginAtZero: true,
                display: false 
            }
        }]
    }
}


    elements: {
      point:{
        radius: 0
      }
    },
        
    maintainAspectRatio: false,
    responsive: false,
    legend: {
      display: false  
    },
    scales: {
        xAxes: [{
            gridLines: {
                display: false
            },
            ticks: {
                display: false
            }
        }],
        yAxes: [{
            gridLines: {
                display: false
            },
            ticks: {
                beginAtZero: true,
                display: false 
            }
        }]
    }
}

var actionOptions = {
    elements: {
      point:{
        radius: 0
      }
    },
    maintainAspectRatio: false,
    responsive: false,
    legend: {
      display: false  
    },
    scales: {
        xAxes: [{
            gridLines: {
                display: false
            },
            ticks: {
                display: false
            }
        }],
        yAxes: [{
            gridLines: {
                display: false
            },
            ticks: {
                beginAtZero: true,
                display: false 
            }
        }]
    }
}

var analysisOptions = {
    legend: {
      display: false  
    },
    scales: {
        xAxes: [{
            gridLines: {
                display: false
            },
            ticks: {
                display: true,
                fontColor: ['rgba(101, 74, 130, .6)'],
                fontSize: 11,
            }
        }],
        yAxes: [{
            gridLines: {
                display: false
            },
            ticks: {
                beginAtZero: true,
                display: false 
            }
        }]
    }
}
var  followData = {
        label: '',
        labels: ['1','2','3','4','5','6','7'],
        datasets: [{
            borderColor: ['rgba(147, 112, 219, .6)'],
            data: [200, 350, 495, 460, 390, 350, 350],
            backgroundColor: gradientFillFollow
        }]
};



var dataData = {
        label: '',
        labels: ['1','2','3','4','5','6','7'],
        datasets: [{
            borderColor: ['rgba(147, 112, 219, .6)'],
            data: [200, 350, 495, 460, 390, 350, 350],
            backgroundColor: gradientFillData
        }]
};


var linkData = {
        label: '',
        labels: ['1','2','3','4','5','6','7'],
        datasets: [{
            borderColor: ['rgba(147, 112, 219, .6)'],
            data: [200, 350, 495, 460, 390, 350, 350],
            backgroundColor: gradientFillLink
        }]
};



var actionData = {
        label: '',
        labels: ['1','2','3','4','5','6','7'],
        datasets: [{
            borderColor: ['rgba(147, 112, 219, .6)'],
            data: [200, 350, 495, 460, 390, 350, 350],
            backgroundColor: gradientFillAction
        }]
};

var performanceData = {
        label: '',
        labels: ['1','2','3','4','5','6','7'],
        datasets: [{
            borderColor: ['rgba(175, 238, 238, .6)'],
            data: [220, 220, 200, 460, 460, 350, 350],
            backgroundColor: gradientFillPerformance
        }]
};

var storageData = {
        label: '',
        labels: ['1','2','3','4','5'],
        datasets: [{
            borderColor: ['rgba(65, 105, 225, .6)'],
            data: [200, 200, 200, 300, 280],
            backgroundColor: gradientFillStorage
        }]
};

var analysisData = {
        label: '',
        labels: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'],
        datasets: [{
            barPercentage: 0.5,
            barThickness: 15,
            maxBarThickness: 15,
            minBarLength: 2,
            data: [295.26, 22.68, 122.14, 58.97, -27.23, 495.26, -22.68, 122.14, 58.97, 27.23, 295.26, 22.68, 122.14, 58.97, -27.23, 295.26, 22.68, 122.14, 58.97, -27.23, 295.26, 22.68, 122.14, 58.97, 27.23, 495.26, -22.68, 122.14, 58.97, 27.23, 27.23 ],
            backgroundColor: [
              gradientFillAnalysisLight,
              gradientFillAnalysisLight,
              gradientFillAnalysisLight,
              gradientFillAnalysisLight,
              gradientFillAnalysisLight,
              gradientFillAnalysisLight,
              gradientFillAnalysisLight,
              gradientFillAnalysisLight,
              gradientFillAnalysisLight,
              gradientFillAnalysisLight,
              gradientFillAnalysisLight,
              gradientFillAnalysisLight,
              gradientFillAnalysisDark,
              gradientFillAnalysisDark,
              gradientFillAnalysisDark,
              gradientFillAnalysisDark,
              gradientFillAnalysisDark,
              gradientFillAnalysisDark,
              gradientFillAnalysisDark,
              gradientFillAnalysisLight,
              gradientFillAnalysisLight,
              gradientFillAnalysisLight,
              gradientFillAnalysisLight,
              gradientFillAnalysisLight,
              gradientFillAnalysisLight,
              gradientFillAnalysisLight,
              gradientFillAnalysisLight,
              gradientFillAnalysisLight,
              gradientFillAnalysisLight,
              gradientFillAnalysisLight
            ]
        }]
};


function chartFunc(type, ctx, data, options) {
  var myDoughnutChart = new Chart(ctx, {
      type: type,
      data: data,
      options: options
  });
}
chartFunc('line', ctxFollow, followData, optionsAction); 
chartFunc('line', ctxData, dataData, optionsAction);
chartFunc('line', ctxLink, linkData, optionsAction);



chartFunc('line', ctxAction, actionData, optionsAction); 
chartFunc('line', ctxPerformance, performanceData, optionsAction);
chartFunc('line', ctxStorage, storageData, optionsAction);
chartFunc('bar', ctxAnalysis, analysisData, analysisOptions);