class API{

    constructor(){
        this.auth_key = 'gXhIgey';
    }
    async queryAPI(){
        const url = `http://strainapi.evanbusse.com/${this.auth_key}/strains/search/all`
       //http://strains.evanbusse.com//index.html
        
        
    }
    async strainInformation(){

    }
    //API call for the search
    async search(name){
        //Query the api
        const searchResponse = await fetch(`http://strainapi.evanbusse.com/${this.auth_key}/strains/search/name/${name}`);
        
        //hold the response and then return as json 

        const results = await searchResponse.json();

        //return 
        return {
            results
        }

    }
    async randomSearch(number){

    }



}