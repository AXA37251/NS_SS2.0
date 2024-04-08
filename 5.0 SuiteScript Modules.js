/**
 * @NApiVersion 2.0
 * @NScriptType UserEventScript
 */

define (['N/record'], 
/**
 * @param {record} record 
 * @returns 
 */
function(record){
    return{
        afterSubmit : function(context){
            var employee = context.newRecord;
            var empCode = employee.getValue('custentity_employee_code')
            var supervisorId = employee.getValue('supervisor');
        
            log.debug('Employee code:', empCode);
            log.debug('Supervisor ID', supervisorId);

            if(context.type == context.UserEventType.CREATE){
                var phoneCall = record.create({
                    type : record.Type.PHONE_CALL,
                    defaultValues : {
                        customForm: -150
                    }
                });

                phoneCall.setValue('title', 'Call HR for Benefits');
                phoneCall.setValue('assigned', employee.id);
                phoneCall.save();
            }
        }
    }
});