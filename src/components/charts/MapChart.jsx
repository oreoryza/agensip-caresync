import React, { useEffect, useRef, useState } from "react";
import { Chart, registerables } from "chart.js";
import { topojson, ChoroplethController, GeoFeature, ProjectionScale, ColorScale } from "chartjs-chart-geo";

const MapChart = ({ data = null }) => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState(null);

  // Default data for all US states with values matching the color ranges
  const defaultData = {
    // Light gray (0-1): 10 states
    // 'Alabama': 0,
    // 'Alaska': 0,
    // 'Arizona': 105,
    // 'Arkansas': 0,
    // 'California': 0,
    // 'Colorado': 0,
    // 'Connecticut': 110,
    // 'Delaware': 0,
    // 'Florida': 0,
    // 'Georgia': 0,

    // Yellow (1-20): 10 states
    'Hawaii': 5,
    'Idaho': 8,
    'Illinois': 12,
    'Indiana': 15,
    'Iowa': 18,
    'Kansas': 3,
    'Kentucky': 7,
    'Louisiana': 10,
    'Maine': 14,
    'Maryland': 16,

    // Light green (21-50): 10 states
    'Massachusetts': 25,
    'Michigan': 28,
    'Minnesota': 32,
    'Mississippi': 35,
    'Missouri': 38,
    'Montana': 22,
    'Nebraska': 26,
    'Nevada': 30,
    'New Hampshire': 33,
    'New Jersey': 36,

    // Gold (51-100): 10 states
    'New Mexico': 55,
    'New York': 58,
    'North Carolina': 62,
    'North Dakota': 65,
    'Ohio': 68,
    'Oklahoma': 52,
    'Oregon': 56,
    'Pennsylvania': 60,
    'Rhode Island': 63,
    'South Carolina': 66,

    // Dark green (101-150): 10 states
    'South Dakota': 105,
    'Tennessee': 108,
    'Texas': 112,
    'Utah': 115,
    'Vermont': 118,
    'Virginia': 122,
    'Washington': 106,
    'West Virginia': 110,
    'Wisconsin': 113,
    'Wyoming': 150
  };

  useEffect(() => {
    // Register the geo chart components
    Chart.register(ChoroplethController, GeoFeature, ProjectionScale, ColorScale, ...registerables);

    // Fetch US states data
    fetch('https://unpkg.com/us-atlas/states-10m.json')
      .then((r) => r.json())
      .then((us) => {
        const nation = topojson.feature(us, us.objects.nation).features[0];
        const states = topojson.feature(us, us.objects.states).features;

        // Use provided data or default data
        const dataToUse = data || defaultData;

        // Destroy existing chart if it exists
        if (chartRef.current) {
          chartRef.current.destroy();
        }

        // Create new chart
        const ctx = canvasRef.current.getContext("2d");
        chartRef.current = new Chart(ctx, {
          type: 'choropleth',
          data: {
            labels: states.map((d) => d.properties.name),
            datasets: [{
              label: 'US States Data',
              outline: nation,
              data: states.map((d) => {
                const stateName = d.properties.name;
                const value = dataToUse[stateName] || Math.random() * 100;

                return {
                  feature: d,
                  value: value
                };
              }),
            }]
          },
          options: {
            plugins: {
              legend: {
                display: false,
                position: 'bottom'
              },
            },
            scales: {
              projection: {
                axis: 'x',
                projection: 'albersUsa'
              },
              color: {
                axis: 'x',
                quantize: 5,
                legend: {
                  display: false,
                },
                interpolate: (v) => {
                  if (v > 0.6667) return '#008c00'; // Light gray for values 0-1 (0/150 = 0, 1/150 = 0.0067)
                  if (v <= 0.1333) return '#fff4cc'; // Yellow for values 1-20 (20/150 = 0.1333)
                  if (v <= 0.3333) return '#cce8cc'; // Light green for values 21-50 (50/150 = 0.3333)
                  if (v <= 0.6667) return '#ffc700'; // Gold for values 51-100 (100/150 = 0.6667)
                  return '#e7e7e7'; // Dark green for values above 101
                }
              }
            },
          }
        });

        setChartData(dataToUse);
      })
      .catch((error) => {
        console.error('Error loading US map data:', error);
      });

    // Cleanup function
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [data]);

  return (
    <div className="w-full h-full">
      <canvas ref={canvasRef} width="600" height="400"></canvas>
    </div>
  );
};

export default MapChart;
