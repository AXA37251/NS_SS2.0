/**
 * @NApiVersion 2.0 
 * @NScriptType UserEventScript
 * 
 */

define([], function() {

    function myAfterSubmit(context){
        log.debug({
            title: 'Title', 
            details: 'Details'
        });
    }

    return{
        AfterSubmit : myAfterSubmit,
    };
});