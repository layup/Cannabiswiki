class UI{
    constructor(){
        //app init
        this.init();
    }

    init(){
        this.results = document.getElementById('results');
    }
    searchQuery(){

    }

    displaySearchResults(data){

        //Build the template for the html element 
        let HTMLTemplate = '';

        data.forEach(value => {
            HTMLTemplate += `
                <div id='search' class='container py-2 border rounded mb-1' > 
                    <h3 class='text-uppercase bt-cannabis display-5'> ${value.name}    
                    <button id='closeBtn' type="button" class = "close">
                        <span  aria-hidden="true">x</span></h3> 
                    </button>
                    <hr />
                    <p class='text-success text-uppercase font-weight-bold'> ${value.race} </p> 
                    <p> ${value.desc} </p> 
                </div> 
                
            `
        });

        this.results.innerHTML = HTMLTemplate;
    }
    clear(){
        const temp = document.querySelector('#search');
        if(temp){
            temp.remove();
        }

    }

    printMessage(message, className ){
        //create the div element 
        const div = document.createElement('div');
        div.className = className;

        //add the text 
        div.appendChild(document.createTextNode(message));
    
        //insert into the html 
        const searchDiv = document.querySelector('#holder');
        searchDiv.appendChild(div);
    
        //remove the alert after 3 seconds 
        setTimeout(()=>{
            this.removeMessage(); 
        },3000);

    }
    //remove message
    removeMessage(){
        const temp = document.querySelector('.alert');
        if(temp){
            temp.remove();
        }
    }
}