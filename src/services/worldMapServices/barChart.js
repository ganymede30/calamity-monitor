import { Chart } from "@esri/cedar"



 const definition = {
    type: "bar",
    datasets: [
        {
           url: "https://coronavirus-tracker-api.herokuapp.com/v2/locations?source=jhu",
           
           query: {
               
               groupByFieldsForStatistics: "latest",
               outStatistics: [
                   {
                       statisticType: "sum",
                        statisticField: "confirmed",
                       outStatisticFieldName: "confirmed_SUM",
                      
               }
            ],
            
            },
            // join: "Type",
            }
    ],

    series: [
        {
            category: {field: "Type", label: "Country"},
            value: {field: "Number_of_SUM", label: "Confirmed Cases"}

        }
    ]
} 


const cedarChart = new Chart("chart", definition)
cedarChart.show()

export default cedarChart