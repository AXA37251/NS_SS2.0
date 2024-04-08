/**
 * Objectives:
 * 1) Create Custom Fields
 * 2) Understand context object
 * 3) Extract field values using the Record object
 * 4) Debug SuiteScripts
 * 
 * @NApiVersion 2.0 
 * @NScriptType UserEventScript
 * 
 */

define([], function(){

    function afterSubmit(context){

        var employee = context.newRecord;
        var empCode = employee.getValue('custentity_employee_code')
        var supervisorName = employee.getText('supervisor');
        var supervisorId = employee.getValue('supervisor');
        
        // employee.setValue('comments', 'edited');
        // employee.save();

        log.debug('Employee Code', empCode);
        log.debug('Supervisor ID', supervisorName);
        log.debug('Supervisor Name', supervisorId);

        
    }

    return {
        afterSubmit: afterSubmit
    }
});




