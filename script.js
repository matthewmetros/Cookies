var myCookie = Cookies.set('Metros', 'Test');
console.log(myCookie);

// $(document).ready(function() {
//     $.tmpl( "${Title}", { "Title" : "Welcome to End Your If" }).appendTo( "#myContent" );
//     });
    
//     // Parse the URL
//     function getParameterByName(name) {
//         name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
//         var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
//             results = regex.exec(location.search);
//             if(results != null)
//             {
//                 console.log(decodeURIComponent(results[1].replace(/\+/g, " ")));
//             }
//         return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
//     }

// const queryString = window.location.search;
queryString = "?utm_source=Adwords&utm_medium=test&utm_campaign=adWords&utm_term=Trucking";
const urlParams = new URLSearchParams(queryString);

var all_params_to_persist = [
          'utm_source',
          'utm_medium',
          'utm_campaign',
          'utm_term'
];

all_params_to_persist.forEach(function(param)
{
    var utm_key = param;
    var utm_value = urlParams.get(utm_key);

    if(utm_value != null)
    {
        Cookies.set(utm_key, utm_value);
    }
})

    
//     var all_params_to_persist = [
//       'utm_source',
//       'utm_medium',
//       'utm_campaign',
//       'utm_term'
//     ];
    
//     all_params_to_persist.forEach(function(param) 
//     {
//                 console.log(param);
//             var pValue = getParameterByName(param);
//             if (pValue != null || pValue != '') {
//                 Cookies.set(param, pValue, { expires: 7 });
//             }
    
    
//             Cookies.set(param, 'Test');
    
//             var cValue = Cookies.set(param);
//             console.log(cValue);
    
//             // now get the form value
//             var input = $('input[name='+ param +']');
    
//             // we can set the form values with jQuery using the same val() function but passing it a new value instead.
//             if (input && (cValue != null || cValue != '')) 
//             {
//                 input.val(cValue);  
//             }
    
    
    
    
//     });
    