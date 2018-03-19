$(document).ready(function(){
// Uncomment to style it like Apple Watch
/*
if (!Highcharts.theme) {
    Highcharts.setOptions({
        chart: {
            backgroundColor: 'black'
        },
        colors: ['#F62366', '#9DFF02', '#0CCDD6'],
        title: {
            style: {
                color: 'silver'
            }
        },
        tooltip: {
            style: {
                color: 'silver'
            }
        }
    });
}
// */

	var chart1 = Highcharts.chart('container1', {

	    chart: {
	        type: 'solidgauge',
	        height: '110%'
	    },

	    title: {
	        text: '',
	        style: {
	            fontSize: '24px'
	        }
	    },

	    tooltip: {
	    	enabled: true,
	        borderWidth: 0,
	        backgroundColor: 'none',
	        shadow: false,
	        style: {
	            fontSize: '11px'
	        },
	        pointFormat: '<span style="color: #fff">{series.name}</span><br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.x}</span>',
	        positioner: function (labelWidth) {
	            return {
	                x: (this.chart.chartWidth - labelWidth) / 2,
	                y: (this.chart.plotHeight / 2) - 15
	            };
	        }
	    },

	    pane: {
	        startAngle: 0,
	        endAngle: 360,
	        background: [{ // Track for Move
	            outerRadius: '112%',
	            innerRadius: '88%',
	            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0])
	                .setOpacity(0.3)
	                .get(),
	            borderWidth: 0
	        }]
	    },

	    yAxis: {
	        min: 0,
	        max: 100,
	        lineWidth: 0,
	        tickPositions: []
	    },

	    plotOptions: {
	        solidgauge: {
	            dataLabels: {
	                enabled: false, 
				    inside: false,
				    overflow: 'none',
				    crop: true,
				    shape: 'callout',
				    backgroundColor:'rgba(0,0,0,0)',
				    borderColor: 'rgba(0,0,0,0)',
				    color: 'rgba(255,255,255,0.75)',
				    borderWidth: .5,
				    borderRadius: 5,
				    y: -10,
				    style: {
				    	fontSize: '10px',
				        fontWeight: 'normal',
				        textShadow: 'none'
				    },
				    formatter: function() {
				    	return '<strong>'+this.series.name+'</strong>'+'<br/>'+ Highcharts.numberFormat(this.y,0)+'</strong>';
				    }
	            },
	            linecap: 'round',
	            stickyTracking: false,
	            rounded: true
	        }
	    },

	    series: [{
	        name: 'Tarif des droits de diffusion',
	        data: [{
	            color: Highcharts.getOptions().colors[4],
	            radius: '112%',
	            innerRadius: '88%',
	            y: 100,
	            x: 0
	        }]
	    }]        
	});

	var chart2 = Highcharts.chart('container2', {

	    chart: {
	        type: 'solidgauge',
	        height: '110%'
	    },

	    title: {
	        text: '',
	        style: {
	            fontSize: '24px'
	        }
	    },

	    tooltip: {
	    	enabled: true,
	        borderWidth: 0,
	        backgroundColor: 'none',
	        shadow: false,
	        style: {
	            fontSize: '11px'
	        },
	        pointFormat: '<span style="color: #fff">{series.name}</span><br><span style="font-size:2em; color: #aaa; font-weight: bold">{point.x}</span>',
	        positioner: function (labelWidth) {
	            return {
	                x: (this.chart.chartWidth - labelWidth) / 2,
	                y: (this.chart.plotHeight / 2) - 15
	            };
	        }
	    },

	    pane: {
	        startAngle: 0,
	        endAngle: 360,
	        background: [{ // Track for Move
	            outerRadius: '112%',
	            innerRadius: '88%',
	            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0])
	                .setOpacity(0.3)
	                .get(),
	            borderWidth: 0
	        }]
	    },

	    yAxis: {
	        min: 0,
	        max: 100,
	        lineWidth: 0,
	        tickPositions: []
	    },

	    plotOptions: {
	        solidgauge: {
	            dataLabels: {
	                enabled: false, 
				    inside: false,
				    overflow: 'none',
				    crop: true,
				    shape: 'callout',
				    backgroundColor:'rgba(0,0,0,0)',
				    borderColor: 'rgba(0,0,0,0)',
				    color: 'rgba(255,255,255,0.75)',
				    borderWidth: .5,
				    borderRadius: 5,
				    y: -10,
				    style: {
				    	fontSize: '10px',
				        fontWeight: 'normal',
				        textShadow: 'none'
				    },
				    formatter: function() {
				    	return '<strong>'+this.series.name+'</strong>'+'<br/>'+ Highcharts.numberFormat(this.y,0)+'</strong>';
				    }
	            },
	            linecap: 'round',
	            stickyTracking: false,
	            rounded: true
	        }
	    },

	    series: [{
	        name: 'Nombre de téléspectateurs',
	        data: [{
	            color: Highcharts.getOptions().colors[1],
	            radius: '112%',
	            innerRadius: '88%',
	            y: 100,
	            x: 0
	        }]
	    }]
	});

	var chart3 = Highcharts.chart('container3', {

	    chart: {
	        type: 'solidgauge',
	        height: '110%'
	    },

	    title: {
	        text: '',
	        style: {
	            fontSize: '24px'
	        }
	    },

	    tooltip: {
	    	enabled: true,
	        borderWidth: 0,
	        backgroundColor: 'none',
	        shadow: false,
	        style: {
	            fontSize: '11px'
	        },
	        pointFormat: '<span style="font-size:2em; color: {point.color}; font-weight: bold">{point.x}</span><br><span style="color: #fff">{series.name}</span>',
	        positioner: function (labelWidth) {
	            return {
	                x: (this.chart.chartWidth - labelWidth) / 2,
	                y: (this.chart.plotHeight / 2) - 15
	            };
	        }
	    },

	    pane: {
	        startAngle: 0,
	        endAngle: 360,
	        background: [{ // Track for Move
	            outerRadius: '112%',
	            innerRadius: '88%',
	            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0])
	                .setOpacity(0.3)
	                .get(),
	            borderWidth: 0
	        }]
	    },

	    yAxis: {
	        min: 0,
	        max: 100,
	        lineWidth: 0,
	        tickPositions: []
	    },

	    plotOptions: {
	        solidgauge: {
	            dataLabels: {
	                enabled: false, 
				    inside: false,
				    overflow: 'none',
				    crop: true,
				    shape: 'callout',
				    backgroundColor:'rgba(0,0,0,0)',
				    borderColor: 'rgba(0,0,0,0)',
				    color: 'rgba(255,255,255,0.75)',
				    borderWidth: .5,
				    borderRadius: 5,
				    y: -10,
				    style: {
				    	fontSize: '10px',
				        fontWeight: 'normal',
				        textShadow: 'none'
				    },
				    formatter: function() {
				    	return '<strong>'+this.series.name+'</strong>'+'<br/>'+ Highcharts.numberFormat(this.y,0)+'</strong>';
				    }
	            },
	            linecap: 'round',
	            stickyTracking: false,
	            rounded: true
	        }
	    },

	    series: [{
	        name: 'pays diffuseurs',
	        data: [{
	            color: Highcharts.getOptions().colors[5],
	            radius: '112%',
	            innerRadius: '88%',
	            y: 100,
	            x: 0
	        }]
	    }]
	});

	var chart4 = Highcharts.chart('container4', {

	    chart: {
	        type: 'solidgauge',
	        height: '110%'
	    },

	    title: {
	        text: '',
	        style: {
	            fontSize: '24px'
	        }
	    },

	    tooltip: {
	    	enabled: true,
	        borderWidth: 0,
	        backgroundColor: 'none',
	        shadow: false,
	        style: {
	            fontSize: '11px'
	        },
	        pointFormat: '<span style="font-size:2em; color: {point.color}; font-weight: bold">{point.x}</span><br><span style="color: #fff">{series.name}</span>',
	        positioner: function (labelWidth) {
	            return {
	                x: (this.chart.chartWidth - labelWidth) / 2,
	                y: (this.chart.plotHeight / 2) - 15
	            };
	        }
	    },

	    pane: {
	        startAngle: 0,
	        endAngle: 360,
	        background: [{ // Track for Move
	            outerRadius: '112%',
	            innerRadius: '88%',
	            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0])
	                .setOpacity(0.3)
	                .get(),
	            borderWidth: 0
	        }]
	    },

	    yAxis: {
	        min: 0,
	        max: 100,
	        lineWidth: 0,
	        tickPositions: []
	    },

	    plotOptions: {
	        solidgauge: {
	            dataLabels: {
	                enabled: false, 
				    inside: false,
				    overflow: 'none',
				    crop: true,
				    shape: 'callout',
				    backgroundColor:'rgba(0,0,0,0)',
				    borderColor: 'rgba(0,0,0,0)',
				    color: 'rgba(255,255,255,0.75)',
				    borderWidth: .5,
				    borderRadius: 5,
				    y: -10,
				    style: {
				    	fontSize: '10px',
				        fontWeight: 'normal',
				        textShadow: 'none'
				    },
				    formatter: function() {
				    	return '<strong>'+this.series.name+'</strong>'+'<br/>'+ Highcharts.numberFormat(this.y,0)+'</strong>';
				    }
	            },
	            linecap: 'round',
	            stickyTracking: false,
	            rounded: true
	        }
	    },

	    series: [{
	        name: 'épreuves',
	        data: [{
	            color: Highcharts.getOptions().colors[6],
	            radius: '112%',
	            innerRadius: '88%',
	            y: 100,
	            x: 0
	        }]
	    }]
	});

	var chart5 = Highcharts.chart('container5', {

	    chart: {
	        type: 'solidgauge',
	        height: '110%'
	    },

	    title: {
	        text: '',
	        style: {
	            fontSize: '24px'
	        }
	    },

	    tooltip: {
	    	enabled: true,
	        borderWidth: 0,
	        color: '#FFF',
	        backgroundColor: 'none',
	        shadow: false,
	        style: {
	            fontSize: '11px'
	        },
	        pointFormat: '<span style="font-size:2em; color: {point.color}; font-weight: bold">{point.x}</span><br><span style="color: #fff">{series.name}</span>',
	        positioner: function (labelWidth) {
	            return {
	                x: (this.chart.chartWidth - labelWidth) / 2,
	                y: (this.chart.plotHeight / 2) - 15
	            };
	        }
	    },

	    pane: {
	        startAngle: 0,
	        endAngle: 360,
	        background: [{ // Track for Move
	            outerRadius: '112%',
	            innerRadius: '88%',
	            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0])
	                .setOpacity(0.3)
	                .get(),
	            borderWidth: 0
	        }]
	    },

	    yAxis: {
	        min: 0,
	        max: 100,
	        lineWidth: 0,
	        tickPositions: []
	    },

	    plotOptions: {
	        solidgauge: {
	            dataLabels: {
	                enabled: false, 
				    inside: false,
				    overflow: 'none',
				    crop: true,
				    shape: 'callout',
				    backgroundColor:'rgba(0,0,0,0)',
				    borderColor: 'rgba(0,0,0,0)',
				    color: 'rgba(255,255,255,0.75)',
				    borderWidth: .5,
				    borderRadius: 5,
				    y: -10,
				    style: {
				    	fontSize: '10px',
				        fontWeight: 'normal',
				        textShadow: 'none'
				    },
				    formatter: function() {
				    	return '<strong>'+this.series.name+'</strong>'+'<br/>'+ Highcharts.numberFormat(this.x,0)+'</strong>';
				    }
	            },
	            linecap: 'round',
	            stickyTracking: false,
	            rounded: true
	        }
	    },

	    series: [{
	        name: 'pays participants',
	        data: [{
	            color: Highcharts.getOptions().colors[3],
	            radius: '112%',
	            innerRadius: '88%',
	            y: 100,
	            x: 0
	        }]
	    }]
	});

	$('#1936').hover(function () {
	    chart1.series[0].setData([{y:0, x:"0$"}]);
	    chart2.series[0].setData([{y:5, x:"162 000"}]);
	    chart3.series[0].setData([{y:10, x:1}]);
	    chart4.series[0].setData([{y:30, x:134}]);
	    chart5.series[0].setData([{y:30, x:49}]);
	});
	$('#1948').hover(function () {
	    chart1.series[0].setData([{y:10, x:"3000$"}]);
	    chart2.series[0].setData([{y:10, x:"500 000"}]);
	    chart3.series[0].setData([{y:10, x:1}]);
	    chart4.series[0].setData([{y:40, x:144}]);
	    chart5.series[0].setData([{y:40, x:59}]);
	});
	$('#1968').hover(function () {
	    chart1.series[0].setData([{y:20, x:"9.8 M$"}]);
	    chart2.series[0].setData([{y:30, x:"600M"}]);
	    chart3.series[0].setData([{y:10, x:"Non renseigné"}]);
	    chart4.series[0].setData([{y:50, x:183}]);
	    chart5.series[0].setData([{y:60, x:112}]);
	});
	$('#1984').hover(function () {
	    chart1.series[0].setData([{y:40, x:"287 M$"}]);
	    chart2.series[0].setData([{y:60, x:"2.5Md"}]);
	    chart3.series[0].setData([{y:65, x:156}]);
	    chart4.series[0].setData([{y:60, x:247}]);
	    chart5.series[0].setData([{y:75, x:140}]);
	});
	$('#1996').hover(function () {
	    chart1.series[0].setData([{y:50, x:"898 M$"}]);
	    chart2.series[0].setData([{y:75, x:"3.5Md"}]);
	    chart3.series[0].setData([{y:90, x:214}]);
	    chart4.series[0].setData([{y:70, x:277}]);
	    chart5.series[0].setData([{y:95, x:197}]);
	});
	$('#2000').hover(function () {
	    chart1.series[0].setData([{y:60, x:"1.3 Md$"}]);
	    chart2.series[0].setData([{y:85, x:"3.7Md"}]);
	    chart3.series[0].setData([{y:100, x:220}]);
	    chart4.series[0].setData([{y:95, x:300}]);
	    chart5.series[0].setData([{y:90, x:200}]);
	});
	$('#2004').hover(function () {
	    chart1.series[0].setData([{y:70, x:"1.5 Md$"}]);
	    chart2.series[0].setData([{y:90, x:"3.9Md"}]);
	    chart3.series[0].setData([{y:100, x:220}]);
	    chart4.series[0].setData([{y:100, x:301}]);
	    chart5.series[0].setData([{y:95, x:201}]);
	});
	$('#2008').hover(function () {
	    chart1.series[0].setData([{y:80, x:"1.7 Md$"}]);
	    chart2.series[0].setData([{y:100, x:"4.4Md"}]);
	    chart3.series[0].setData([{y:100, x:220}]);
	    chart4.series[0].setData([{y:100, x:301}]);
	    chart5.series[0].setData([{y:100, x:204}]);
	});
	$('#2012').hover(function () {
	    chart1.series[0].setData([{y:100, x:"2.6 Md$"}]);
	    chart2.series[0].setData([{y:80, x:"3.6Md"}]);
	    chart3.series[0].setData([{y:100, x:220}]);
	    chart4.series[0].setData([{y:100, x:301}]);
	    chart5.series[0].setData([{y:100, x:204}]);
	});
});