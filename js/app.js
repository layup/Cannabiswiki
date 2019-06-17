

const ui = new UI();
const api = new API();


//Event listeners for random and submit button presses 
document.getElementById('submitBtn').addEventListener('click', (e) => {
    e.preventDefault(); 

    const SearchValue = document.getElementById('searchField').value;
    
    //check if search field is not blank 
    if(SearchValue !== ''){
        const searchResults = api.search(SearchValue)
            .then(value => {
                
                if(value.results.length !== 0){
                    //display the results from the search and then users select to learn more about one 
                    console.log(value.results);
                    ui.displaySearchResults(value.results);
                    
                }else{
                    ui.printMessage('No Results Found', 'text-center alert alert-danger mt-4');
                }
            }
                
            )}else{
        //ui.clear();
        ui.printMessage('Please Enter a Value', 'text-center alert alert-danger mt-4');
    }

}); 

//when someone presses x on an item removes it from 
document.getElementById('closeBtn').addEventListener('click', (e) =>{
    console.log('click');
})



document.getElementById('randomBtn').addEventListener('click',(e) =>{
    e.preventDefault();
    
    //returns a random number between 1 and 1000
    var randomValue = Math.floor((Math.random() * 1000) + 1);
    
    api.randomSearch(randomValue);
});