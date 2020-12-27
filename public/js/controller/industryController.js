class IndustryController{
    constructor(){
        this.dashboardLink =document.getElementById("link-dashboard")
        this.managerLink = document.getElementById("link-manager")
        this.passwordLink =document.getElementById("link-password")
        
        this.initiate();
    }

    initiate(){
      
        //desenho do grafico no main content
        this.createChart()
       //Animação da barra sanduiche
        var lista = document.querySelector('#bars')
        var menu = document.querySelector('#menu')
        lista.addEventListener("click",(e)=>{
            menu.classList.toggle("list")
            lista.classList.toggle("change")
        })

        //troca de tela pelos menus
        this.dashboardLink.addEventListener("click", e=>{
            this.showData('dashboard')
        })
        this.managerLink.addEventListener("click", e=>{
            this.showData('manager')
        })        
        this.passwordLink.addEventListener("click", e=>{
            this.showData('password')
        })
    }    
    createChart(){
        //desenhamento do grafico com a API do GOOGLE
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
                            'width':600,
                            'height':300};
            // Instantiate and draw our chart, passing in some options.
            var chart = new google.visualization.LineChart(document.getElementById('chart-div'));
            chart.draw(data, options);
        });
    }
    showData(selected){
        var content= document.querySelectorAll("#conteudo>div")
        content.forEach((el)=>{
            if(el.getAttribute('id') == selected){
                el.classList.remove('none') 
            } 
            else{
                el.classList.add('none') 
            }
            console.log()
        })
    }

}
