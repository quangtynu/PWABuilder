import Ember from 'ember';

export default Ember.ObjectController.extend({
    steps:{
        step1: {
            id:"step1",
            active:true,
        },
        step2:{
            id:"step2",
            active:false,
        },
        step3:{
            id:"step3",
            active:false,
        },
        step4:{
            id:"step4",
            active:false,
        },
        step5:{
            id:"step5",
            active:false,
        },
        step6:{
            id:"step6",
            active:false,
        },
    },
    actions:{
        nextstep:function(stepToActivate){
            //Activate the next step
            Ember.set(this.steps["step"+stepToActivate], 'active',true);
            //Ember.set(this.steps["step"+stepToActivate], 'current', true);

            //Make last step not current
            //if(stepToActivate > 1) {
            //    Ember.set(this.steps["step"+(stepToActivate-1)], 'current', false);
            //}
        },
        usage:function(){
            this.transitionTo('usage');
        }
    }
});
