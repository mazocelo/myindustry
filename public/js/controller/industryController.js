class IndustryController{
    constructor(){
      
        this.initiate();
    }




    initiate(){
        this.createChart()
       
        //Animação da barra sanduiche
        var lista = document.querySelector('#bars')
        var menu = document.querySelector('#menu')
        lista.addEventListener("click",(e)=>{
            menu.classList.toggle("list")
            lista.classList.toggle("change")
                     
        })

      
    }
      //desenhamento do grafico com a API do GOOGLE
    createChart(){
    // Load the Visualization API and the corechart package.
        google.charts.load('current', {'packages':['corechart']});
        // Set a callback to run when the Google Visualization API is loaded.
        google.charts.setOnLoadCallback(()=>{
            // Create the data table.
            var data= new google.visualization.DataTable();
            // Callback that creates and populates a data table,
            // instantiates the pie chart, passes in the data and
            data.addColumn('string', 'Topping');
            data.addColumn('number', 'Kilograms');
            data.addRows([
                ['Bycicles', 6],
                ['Chains', 2],
                ['Iron', 3],
                ['Garbage', 1],
                ['Dust', 3]
            ]);
            // Set chart options
            var options = {'title':'Contador de peças ao longo do tempo',
                            'width':500,
                            'height':400};
            // Instantiate and draw our chart, passing in some options.
            var chart = new google.visualization.LineChart(document.getElementById('chart-div'));
            chart.draw(data, options);
        });
    }



}
