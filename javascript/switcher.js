
    
    // websites-container
    // vendors-container
    // templates-container
    // scanner-container
    //Helper Methods
    function radioButtonClick(radioButtonId){
        switch(radioButtonId){

        case "scripts_button":
            $("#scripts-container").removeClass('hidden')
            $("#vendors-container").addClass('hidden')
            $("#websites-container").addClass('hidden')
            $("#templates-container").addClass('hidden')
            $("#scanner-container").addClass('hidden')
            break;
        case "websites_button":
            $("#scripts-container").addClass('hidden')
            $("#vendors-container").addClass('hidden')
            $("#websites-container").removeClass('hidden')
            $("#templates-container").addClass('hidden')
            $("#scanner-container").addClass('hidden')
            break;
        case "vendor_button":
            $("#scripts-container").addClass('hidden')
            $("#vendors-container").removeClass('hidden')
            $("#websites-container").addClass('hidden')
            $("#templates-container").addClass('hidden')
            $("#scanner-container").addClass('hidden')
            break;
        case "template_button":
            $("#scripts-container").addClass('hidden')
            $("#vendors-container").addClass('hidden')
            $("#websites-container").addClass('hidden')
            $("#templates-container").removeClass('hidden')
            $("#scanner-container").addClass('hidden')
            break;
        case "scanner_button":
            $("#scripts-container").addClass('hidden')
            $("#vendors-container").addClass('hidden')
            $("#websites-container").addClass('hidden')
            $("#templates-container").addClass('hidden')
            $("#scanner-container").removeClass('hidden')
            break;
        default: alert("Button Id not recognized");
        }
    };
    
    // After Page Loads add event listneers
    window.addEventListener('load', (event) => {
        console.log('page is fully loaded');

        //Component Selector
        var radios = document.querySelectorAll('input[type=radio][name="btnradio"]');

        radios.forEach(radio => radio.addEventListener('click', () => radioButtonClick(radio.id)
        
        
        ));

        
      });


      

    
    
