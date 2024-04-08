/**
 * @NApiVersion 2.0 
 * @NScriptType ClientScript
 */

// pre-task: added to the purchase order record a checkbox to perform this script 
// * tasks:
// * 1) add a CheckBox Entity Field                       //pre-added
// * 2) Enable and Disable Coupon Code                    //fieldChanged()
// * 3) Debugging Client-side SuiteScript 2.0 scripts     //
// * 4) Validate Coupon Code When submitting Form         //validateField()
// * 5) Validate Coupon Code When changing It             //validateField()

define([], function(){

    function pageInit(context){
        var form = context.currentRecord;
        var activeCoupon = form.getValue('custbody_activate_coupon')
        var couponField = form.getField({fieldId: 'custbody_main_coupon'})
        if(activeCoupon){
            couponField.isDisabled = false;
        }else{
            couponField.isDisabled = true;
        }
    }

    function fieldChanged(context){
        var form = context.currentRecord;
        if (context.fieldId == 'custbody_activate_coupon'){
            var activeCoupon = form.getValue('custbody_activate_coupon')
            var couponField = form.getField({fieldId: 'custbody_main_coupon'})
            if(activeCoupon){
                couponField.isDisabled = false;
            }else{
                couponField.isDisabled = true;
            }
        }
    }

    // function validateField(context){
    //     var form = context.currentRecord;
    
    //     var validation = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8}$/;
    //     var fieldValue = form.getValue({fieldId: 'custbody_main_coupon'});

    //     if (fieldValue.length > 0 && !validation.test(fieldValue)) {
    //         alert('Invalid Coupon Code. Please try again.');
    //         form.setF
    //         return false;
    //     }
    //     return true;
    // }

    function validateField(context){
        var purchase = context.currentRecord;
        log.debug('record', purchase);

        if(context.fieldId = 'custbody_main_coupon'){
            var validation = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8}$/;
            var stCouponCode = purchase.getValue({fieldId: 'custbody_main_coupon'});
            if (stCouponCode.length > 0 && !validation.test(stCouponCode)) {
                alert('Invalid Coupon Code. Please try again.');
                purchase.setValue({fieldId: 'custbody_main_coupon', value: ''})
                return false;
            }
            return true;
        }
  
    }

    return {
        pageInit: pageInit,
        fieldChanged: fieldChanged, //2
        validateField: validateField //4 & 5
    }

})