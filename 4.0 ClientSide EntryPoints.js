/**
 * @NApiVersion 2.0 
 * @NScriptType ClientScript
 */


define([], function(){

    function fieldChanged(context){

        log.debug('trigger field:', context.fieldId);

        var employee = context.currentRecord;
        if(context.fieldId == 'phone'){

            var fax = employee.getValue('fax');

            if(!fax){
                var phone = employee.getValue('phone');
                employee.setValue('fax', phone);
            }

        };

        // if(context.fieldId == 'otherField' ){
        // do something
        // };

    };

    function validateField(context){
        var employee = context.currentRecord;
        if(context.fieldId == 'custentity_sdr_employee_code'){
            var empCode = employee.getValue('custentity_sdr_employee_code')
            if(empCode == 'x'){
                alert('Invalid Employee Code Value. Please try again.');
                return false;
            }
        }
        return true;
    };

    function saveRecord(context){

        var employee = context.currentRecord;
        var empCode = employee.getValue('custentity_sdr_employee_code')

        if(empCode == 'x'){
            alert('Invalid Employee Code Value. Please try again.');
            return false;
        }

        return true;
    };


    return{
        fieldChanged: fieldChanged,
        validateField: validateField,
        saveRecord: saveRecord
    }
})