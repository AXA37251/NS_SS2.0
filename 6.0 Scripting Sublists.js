/**
 * Sublists
 * lines start at 0, like arrays
 * 
 * Sublist name:    nombre de la sublista
 * Sublist field:   campo o atributo correspondiente a las líneas de la sublista
 * Sublist item:    linea de la sublista
 * Sublist value:   campo en una linea de la sublista
 * 
 * to associate record, we have to add a foreign key to our main transaction
 */

/**
 * Task: A custom record type names 'performance review' is used to keep track of employee performance reviews
 * - Performance review data should be editable from the related employee record
 */

/**
 * @NApiVersion 2.0
 * @NScriptType clientScript
 * @NModuleScope SameAccount
 */

define (['N/record'], 
/**
 * @param {record} record  
 * @returns 
 */
function(record){

    function pageInit(context){
        var record = context.currentRecord;
        
      
    }

    return{
        pageInit: pageInit
    }
});