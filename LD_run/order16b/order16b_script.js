// Variables from HTML1bALL.csv
var	pre_if_HTML1A_TA1_17={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  SNECT    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> #####    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_17={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_17={timeline: [	if_trialHTML1A_TA1_17	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_17={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_71={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  CEREMONY    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> ########    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_71={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_71={timeline: [	if_trialHTML1A_TA1_71	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_71={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_53={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  PAPLIANCE    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> #########    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_53={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_53={timeline: [	if_trialHTML1A_TA1_53	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_53={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_63={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  DIBILUNG    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> ########    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_63={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_63={timeline: [	if_trialHTML1A_TA1_63	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_63={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_34={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  ALESE    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> #####    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_34={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_34={timeline: [	if_trialHTML1A_TA1_34	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_34={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_60={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  APAST    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> #####    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_60={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_60={timeline: [	if_trialHTML1A_TA1_60	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_60={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_62={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  ROOD    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> ####    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_62={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_62={timeline: [	if_trialHTML1A_TA1_62	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_62={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_30={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  BREAD    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> #####    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_30={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_30={timeline: [	if_trialHTML1A_TA1_30	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_30={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_11={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  FOOTBALL    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> ########    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_11={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_11={timeline: [	if_trialHTML1A_TA1_11	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_11={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_22={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  VAPOR    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> #####    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_22={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_22={timeline: [	if_trialHTML1A_TA1_22	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_22={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_67={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  PRIEFSOSON    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> ##########    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_67={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_67={timeline: [	if_trialHTML1A_TA1_67	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_67={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_61={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  CRICEL    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> ######    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_61={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_61={timeline: [	if_trialHTML1A_TA1_61	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_61={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_10={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  STRUGGLE    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> ########    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_10={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_10={timeline: [	if_trialHTML1A_TA1_10	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_10={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_68={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  UPSO    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> ####    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_68={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_68={timeline: [	if_trialHTML1A_TA1_68	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_68={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_41={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  INJURY    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> ######    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_41={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_41={timeline: [	if_trialHTML1A_TA1_41	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_41={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_31={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  CONFLICT    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> ########    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_31={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_31={timeline: [	if_trialHTML1A_TA1_31	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_31={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_40={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  BLAKTEN    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> #######    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_40={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_40={timeline: [	if_trialHTML1A_TA1_40	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_40={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_21={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  EVICUTEXE    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> #########    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_21={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_21={timeline: [	if_trialHTML1A_TA1_21	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_21={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_3={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  APPLE    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> #####    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_3={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_3={timeline: [	if_trialHTML1A_TA1_3	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_3={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_7={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  MYTH    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> ####    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_7={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_7={timeline: [	if_trialHTML1A_TA1_7	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_7={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_27={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  RUSCOMET    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> ########    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_27={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_27={timeline: [	if_trialHTML1A_TA1_27	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_27={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_58={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  POSTER    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> ######    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_58={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_58={timeline: [	if_trialHTML1A_TA1_58	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_58={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_42={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  MEDICINE    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> ########    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_42={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_42={timeline: [	if_trialHTML1A_TA1_42	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_42={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_28={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  GEMSASE    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> #######    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_28={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_28={timeline: [	if_trialHTML1A_TA1_28	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_28={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_55={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  LAIFURE    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> #######    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_55={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_55={timeline: [	if_trialHTML1A_TA1_55	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_55={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_12={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  MONKEY    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> ######    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_12={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_12={timeline: [	if_trialHTML1A_TA1_12	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_12={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_23={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  ASSISTANT    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> #########    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_23={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_23={timeline: [	if_trialHTML1A_TA1_23	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_23={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_1={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  JEWELRY    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> #######    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_1={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_1={timeline: [	if_trialHTML1A_TA1_1	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_1={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_36={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  TODDLER    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> #######    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_36={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_36={timeline: [	if_trialHTML1A_TA1_36	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_36={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_8={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  GARRAMIE    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> ########    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_8={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_8={timeline: [	if_trialHTML1A_TA1_8	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_8={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_13={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  DRESS    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> #####    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_13={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_13={timeline: [	if_trialHTML1A_TA1_13	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_13={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_2={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  RINWEN    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> ######    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_2={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_2={timeline: [	if_trialHTML1A_TA1_2	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_2={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_25={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  RIGENS    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> ######    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_25={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_25={timeline: [	if_trialHTML1A_TA1_25	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_25={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_20={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  ADVERTISEMENT    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> #############    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_20={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_20={timeline: [	if_trialHTML1A_TA1_20	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_20={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_46={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  YERATT    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> ######    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_46={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_46={timeline: [	if_trialHTML1A_TA1_46	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_46={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_56={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  BLUE    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> ####    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_56={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_56={timeline: [	if_trialHTML1A_TA1_56	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_56={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_64={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  CHOCOLATE    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> #########    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_64={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_64={timeline: [	if_trialHTML1A_TA1_64	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_64={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_24={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  KRIND    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> #####    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_24={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_24={timeline: [	if_trialHTML1A_TA1_24	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_24={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_57={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  HEALTH    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> ######    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_57={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_57={timeline: [	if_trialHTML1A_TA1_57	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_57={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_14={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  IMAGINATION    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> ###########    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_14={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_14={timeline: [	if_trialHTML1A_TA1_14	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_14={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_69={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  MEAT    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> ####    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_69={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_69={timeline: [	if_trialHTML1A_TA1_69	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_69={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_52={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  NELOM    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> #####    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_52={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_52={timeline: [	if_trialHTML1A_TA1_52	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_52={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_49={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  NESECIC    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> #######    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_49={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_49={timeline: [	if_trialHTML1A_TA1_49	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_49={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_33={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  NEPNY    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> #####    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_33={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_33={timeline: [	if_trialHTML1A_TA1_33	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_33={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_32={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  FLEROW    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> ######    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_32={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_32={timeline: [	if_trialHTML1A_TA1_32	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_32={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_50={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  BONNET    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> ######    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_50={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_50={timeline: [	if_trialHTML1A_TA1_50	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_50={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_66={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  PARTNER    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> #######    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_66={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_66={timeline: [	if_trialHTML1A_TA1_66	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_66={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_35={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  KINEDY    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> ######    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_35={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_35={timeline: [	if_trialHTML1A_TA1_35	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_35={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_45={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  POET    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> ####    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_45={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_45={timeline: [	if_trialHTML1A_TA1_45	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_45={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_70={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  CLOTH    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> #####    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_70={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_70={timeline: [	if_trialHTML1A_TA1_70	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_70={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_4={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  YOMEN    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> #####    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_4={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_4={timeline: [	if_trialHTML1A_TA1_4	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_4={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_16={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  POSA    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> ####    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_16={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_16={timeline: [	if_trialHTML1A_TA1_16	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_16={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_38={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  BLAZER    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> ######    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_38={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_38={timeline: [	if_trialHTML1A_TA1_38	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_38={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_59={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  OPINION    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> #######    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_59={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_59={timeline: [	if_trialHTML1A_TA1_59	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_59={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_6={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  DUSK    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> ####    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_6={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_6={timeline: [	if_trialHTML1A_TA1_6	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_6={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_44={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  THOLE    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> #####    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_44={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_44={timeline: [	if_trialHTML1A_TA1_44	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_44={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_37={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  INCOME    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> ######    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_37={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_37={timeline: [	if_trialHTML1A_TA1_37	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_37={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_5={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  BREH    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> ####    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_5={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_5={timeline: [	if_trialHTML1A_TA1_5	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_5={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_19={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  TROUBLE    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> #######    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_19={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_19={timeline: [	if_trialHTML1A_TA1_19	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_19={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_43={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  MIGHEARNT    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> #########    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_43={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_43={timeline: [	if_trialHTML1A_TA1_43	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_43={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_72={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  ACTOR    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> #####    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_72={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_72={timeline: [	if_trialHTML1A_TA1_72	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_72={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_18={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  RATROP    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> ######    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_18={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_18={timeline: [	if_trialHTML1A_TA1_18	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_18={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_54={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  ORMO    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> ####    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_54={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_54={timeline: [	if_trialHTML1A_TA1_54	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_54={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_15={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  OKA    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> ###    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_15={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_15={timeline: [	if_trialHTML1A_TA1_15	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_15={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_39={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  CALO    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> ####    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_39={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_39={timeline: [	if_trialHTML1A_TA1_39	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_39={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_48={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  BOAT    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> ####    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_48={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_48={timeline: [	if_trialHTML1A_TA1_48	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_48={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_51={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  SPEECH    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> ######    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_51={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_51={timeline: [	if_trialHTML1A_TA1_51	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_51={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_26={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  STUDENT    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> #######    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_26={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_26={timeline: [	if_trialHTML1A_TA1_26	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_26={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_9={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  ODIATRIEL    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> #########    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_9={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_9={timeline: [	if_trialHTML1A_TA1_9	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_9={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_65={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  PAPOLT    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> ######    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_65={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_65={timeline: [	if_trialHTML1A_TA1_65	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_65={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_47={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  QILOUR    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> ######    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_47={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_47={timeline: [	if_trialHTML1A_TA1_47	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_47={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TA1_29={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'},   {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  DISEASE    <br><br></p>',  stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br> #######    <br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}	;	var	if_trialHTML1A_TA1_29={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;var	if_nodeT1_29={timeline: [	if_trialHTML1A_TA1_29	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialT1_29={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;

var	pre_if_HTML1A_TB2_17={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    ODOR <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  ####<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_17={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_17={timeline: [	if_trialHTML1A_TB2_17	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_17={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_71={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    WEDGIND <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  #######<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_71={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_71={timeline: [	if_trialHTML1A_TB2_71	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_71={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_53={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    VENO <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  ####<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_53={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_53={timeline: [	if_trialHTML1A_TB2_53	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_53={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_63={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    HOUSE <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  #####<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_63={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_63={timeline: [	if_trialHTML1A_TB2_63	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_63={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_34={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    CONTRACT <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  ########<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_34={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_34={timeline: [	if_trialHTML1A_TB2_34	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_34={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_60={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    SHAGPETIT <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  #########<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_60={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_60={timeline: [	if_trialHTML1A_TB2_60	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_60={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_62={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    TENRY <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  #####<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_62={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_62={timeline: [	if_trialHTML1A_TB2_62	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_62={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_30={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    TOTAS <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  #####<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_30={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_30={timeline: [	if_trialHTML1A_TB2_30	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_30={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_11={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    STORP <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  #####<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_11={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_11={timeline: [	if_trialHTML1A_TB2_11	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_11={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_22={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    SMOKE <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  #####<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_22={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_22={timeline: [	if_trialHTML1A_TB2_22	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_22={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_67={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    ENGINEERING <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  ###########<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_67={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_67={timeline: [	if_trialHTML1A_TB2_67	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_67={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_61={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    SAPHE <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  #####<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_61={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_61={timeline: [	if_trialHTML1A_TB2_61	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_61={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_10={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    FEFROT <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  ######<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_10={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_10={timeline: [	if_trialHTML1A_TB2_10	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_10={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_68={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    THORB <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  #####<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_68={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_68={timeline: [	if_trialHTML1A_TB2_68	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_68={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_41={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    BRUISE <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  ######<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_41={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_41={timeline: [	if_trialHTML1A_TB2_41	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_41={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_31={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    ARGUMENT <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  ########<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_31={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_31={timeline: [	if_trialHTML1A_TB2_31	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_31={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_40={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    BEDDING <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  #######<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_40={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_40={timeline: [	if_trialHTML1A_TB2_40	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_40={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_21={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    PRESIDENT <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  #########<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_21={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_21={timeline: [	if_trialHTML1A_TB2_21	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_21={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_3={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    FUTIR <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  #####<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_3={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_3={timeline: [	if_trialHTML1A_TB2_3	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_3={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_7={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    OSTRY <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  #####<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_7={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_7={timeline: [	if_trialHTML1A_TB2_7	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_7={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_27={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    SUBSCRIBER <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  ##########<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_27={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_27={timeline: [	if_trialHTML1A_TB2_27	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_27={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_58={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    SNIG <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  ####<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_58={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_58={timeline: [	if_trialHTML1A_TB2_58	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_58={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_42={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    RAPISIN <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  #######<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_42={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_42={timeline: [	if_trialHTML1A_TB2_42	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_42={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_28={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    MAIL <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  ####<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_28={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_28={timeline: [	if_trialHTML1A_TB2_28	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_28={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_55={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    RORER <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  #####<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_55={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_55={timeline: [	if_trialHTML1A_TB2_55	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_55={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_12={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    PRIMATE <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  #######<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_12={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_12={timeline: [	if_trialHTML1A_TB2_12	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_12={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_23={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    RECASTERY <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  #########<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_23={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_23={timeline: [	if_trialHTML1A_TB2_23	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_23={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_1={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    NECKLACE <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  ########<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_1={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_1={timeline: [	if_trialHTML1A_TB2_1	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_1={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_36={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    CHILD <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  #####<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_36={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_36={timeline: [	if_trialHTML1A_TB2_36	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_36={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_8={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    FLYIMA <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  ######<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_8={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_8={timeline: [	if_trialHTML1A_TB2_8	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_8={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_13={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    GOWN <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  ####<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_13={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_13={timeline: [	if_trialHTML1A_TB2_13	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_13={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_2={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    COSNETTANT <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  ##########<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_2={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_2={timeline: [	if_trialHTML1A_TB2_2	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_2={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_25={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    IMSUNIAC <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  ########<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_25={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_25={timeline: [	if_trialHTML1A_TB2_25	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_25={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_20={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    CARMMOCILE <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  ##########<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_20={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_20={timeline: [	if_trialHTML1A_TB2_20	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_20={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_46={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    CALANILE <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  ########<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_46={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_46={timeline: [	if_trialHTML1A_TB2_46	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_46={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_56={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    COLOR <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  #####<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_56={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_56={timeline: [	if_trialHTML1A_TB2_56	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_56={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_64={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    FOOD <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  ####<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_64={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_64={timeline: [	if_trialHTML1A_TB2_64	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_64={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_24={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    OFFECE <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  ######<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_24={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_24={timeline: [	if_trialHTML1A_TB2_24	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_24={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_57={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    RAWFELE <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  #######<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_57={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_57={timeline: [	if_trialHTML1A_TB2_57	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_57={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_14={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    CREATIVITY <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  ##########<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_14={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_14={timeline: [	if_trialHTML1A_TB2_14	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_14={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_69={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    FEBE <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  ####<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_69={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_69={timeline: [	if_trialHTML1A_TB2_69	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_69={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_52={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    CITRUS <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  ######<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_52={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_52={timeline: [	if_trialHTML1A_TB2_52	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_52={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_49={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    OILGOBY <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  #######<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_49={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_49={timeline: [	if_trialHTML1A_TB2_49	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_49={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_33={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    NOIC <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  ####<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_33={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_33={timeline: [	if_trialHTML1A_TB2_33	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_33={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_32={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    ASIDY <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  #####<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_32={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_32={timeline: [	if_trialHTML1A_TB2_32	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_32={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_50={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    HAT <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  ###<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_50={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_50={timeline: [	if_trialHTML1A_TB2_50	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_50={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_66={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    FEWI <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  ####<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_66={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_66={timeline: [	if_trialHTML1A_TB2_66	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_66={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_35={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    GONAR <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  #####<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_35={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_35={timeline: [	if_trialHTML1A_TB2_35	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_35={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_45={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    RIRTEW <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  ######<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_45={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_45={timeline: [	if_trialHTML1A_TB2_45	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_45={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_70={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    NELIN <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  #####<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_70={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_70={timeline: [	if_trialHTML1A_TB2_70	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_70={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_4={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    DOLLAR <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  ######<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_4={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_4={timeline: [	if_trialHTML1A_TB2_4	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_4={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_16={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    CLEANER <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  #######<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_16={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_16={timeline: [	if_trialHTML1A_TB2_16	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_16={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_38={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    CAKJET <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  ######<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_38={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_38={timeline: [	if_trialHTML1A_TB2_38	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_38={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_59={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    POLITICS <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  ########<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_59={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_59={timeline: [	if_trialHTML1A_TB2_59	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_59={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_6={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    NIGHT <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  #####<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_6={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_6={timeline: [	if_trialHTML1A_TB2_6	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_6={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_44={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    LODGE <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  #####<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_44={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_44={timeline: [	if_trialHTML1A_TB2_44	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_44={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_37={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    PROFIT <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  ######<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_37={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_37={timeline: [	if_trialHTML1A_TB2_37	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_37={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_5={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    BASIL <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  #####<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_5={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_5={timeline: [	if_trialHTML1A_TB2_5	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_5={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_19={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    DIFFICULTY <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  ##########<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_19={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_19={timeline: [	if_trialHTML1A_TB2_19	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_19={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_43={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    DREAM <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  #####<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_43={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_43={timeline: [	if_trialHTML1A_TB2_43	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_43={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_72={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    PERFORMER <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  #########<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_72={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_72={timeline: [	if_trialHTML1A_TB2_72	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_72={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_18={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    BIRD <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  ####<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_18={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_18={timeline: [	if_trialHTML1A_TB2_18	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_18={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_54={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    KITCHEN <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  #######<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_54={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_54={timeline: [	if_trialHTML1A_TB2_54	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_54={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_15={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    TREE <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  ####<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_15={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_15={timeline: [	if_trialHTML1A_TB2_15	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_15={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_39={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    LUFE <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  ####<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_39={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_39={timeline: [	if_trialHTML1A_TB2_39	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_39={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_48={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    FERRY <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  #####<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_48={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_48={timeline: [	if_trialHTML1A_TB2_48	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_48={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_51={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    RECLUTE <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  #######<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_51={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_51={timeline: [	if_trialHTML1A_TB2_51	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_51={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_26={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    GRADUATE <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  ########<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_26={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_26={timeline: [	if_trialHTML1A_TB2_26	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_26={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_9={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    CATILRE <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  #######<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_9={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_9={timeline: [	if_trialHTML1A_TB2_9	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_9={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_65={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    COMPUTER <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  ########<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_65={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_65={timeline: [	if_trialHTML1A_TB2_65	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_65={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_47={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    HISYKEW <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  #######<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_47={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_47={timeline: [	if_trialHTML1A_TB2_47	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_47={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;
var	pre_if_HTML1A_TB2_29={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:500, trial_duration:500, response_ends_trial:false, prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>    SILLENS <br><br></p>', stimulus_duration:500, trial_duration: 500, choices:'ALL_KEYS',response_ends_trial:false}, {prompt:'<p>Press Z for a real word, press M for a pseudoword</p>', stimulus: '<p style=font-size:48px;><br><br>  #######<br><br></p>', stimulus_duration: 500, trial_duration: 500, choices:['z','m'], response_ends_trial: false}],
}   ;   var	if_trialHTML1A_TB2_29={type: jsPsychHtmlKeyboardResponse,
    timeline: [{stimulus: '<p style=font-size:48px;color:red;><br><br>+<br><br></p>', choices:'ALL_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:true,  prompt:'<p>Press Z for a real word, press M for a pseudoword</p>'}],
}	;	var	if_nodeTB2_29={timeline: [	if_trialHTML1A_TB2_29	],conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, 'z')){
            return false;
        } 
        else if (jsPsych.pluginAPI.compareKeys(data.response, 'm')){
            return false;
        } else {
            return true;
        }
    }
  }	;	var	after_if_trialTB2_29={type: jsPsychHtmlKeyboardResponse,
    timeline: [{prompt: '<p>Response recorded.</p>',stimulus: '<p style=font-size:48px;color:#1a851a;><br><br>+<br><br></p>', choices:'NO_KEYS', stimulus_duration:2500, trial_duration:2500, response_ends_trial:false}]
    };;

// Take a break variable
var takeaBreak = {
    type: jsPsychHtmlKeyboardResponse,
    response_ends_trial: true,
    choices: ['NO_KEYS'],
    stimulus_duration:1000,
    trial_duration:1000,
    timeline: [
        {stimulus:'<p style="font-size:48px;">30</p>'},
        {stimulus:'<p style="font-size:48px;">29</p>'},
        {stimulus:'<p style="font-size:48px;">28</p>'},
        {stimulus:'<p style="font-size:48px;">27</p>'},
        {stimulus:'<p style="font-size:48px;">26</p>'},
        {stimulus:'<p style="font-size:48px;">25</p>'},
        {stimulus:'<p style="font-size:48px;">24</p>'},
        {stimulus:'<p style="font-size:48px;">23</p>'},
        {stimulus:'<p style="font-size:48px;">22</p>'},
        {stimulus:'<p style="font-size:48px;">21</p>'},
        {stimulus:'<p style="font-size:48px;">20</p>'},
        {stimulus:'<p style="font-size:48px;">19</p>'},
        {stimulus:'<p style="font-size:48px;">18</p>'},
        {stimulus:'<p style="font-size:48px;">17</p>'},
        {stimulus:'<p style="font-size:48px;">16</p>'},
        {stimulus:'<p style="font-size:48px;">15</p>'},
        {stimulus:'<p style="font-size:48px;">14</p>'},
        {stimulus:'<p style="font-size:48px;">13</p>'},
        {stimulus:'<p style="font-size:48px;">12</p>'},
        {stimulus:'<p style="font-size:48px;">11</p>'},
        {stimulus:'<p style="font-size:48px;"><b>10</b></p>'},
        {stimulus:'<p style="font-size:48px;"><b>9</b></p>'},
        {stimulus:'<p style="font-size:48px;"><b>8</b></p>'},
        {stimulus:'<p style="font-size:48px;"><b>7</b></p>'},
        {stimulus:'<p style="font-size:48px;"><b>6</b></p>'},
        {stimulus:'<p style="font-size:48px;"><b>5</b></p>'},
        {stimulus:'<p style="font-size:48px;"><b>4</b></p>'},
        {stimulus:'<p style="font-size:48px;"><b>3</b></p>'},
        {stimulus:'<p style="font-size:48px;"><b>2</b></p>'},
        {stimulus:'<p style="font-size:48px;"><b>1</b></p>'},
    ],
    prompt: "<p>Please feel free to take a 30 second break</p><br><br><p><b>You will advance to the next trials after 30s automatically</b></p>"
};
