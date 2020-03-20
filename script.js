// Run the following code in the terminal for testing
// python3 -m http.server
$(document).ready(function(){

                Cookies.set('Key', 'Value');
                // const queryString = window.location.search;
                queryString = "?utm_source=Adwords&utm_medium=test&utm_campaign=adWords&utm_term=bigTrucks&utm_content=HowToDrive";
                const urlParams = new URLSearchParams(queryString);

                var all_params_to_persist = [
                        'utm_source',
                        'utm_medium',
                        'utm_campaign',
                        'utm_term',
                        'utm_content'
                ];

                all_params_to_persist.forEach(function(param)
                {
                    var utm_key = param;

                    var utm_value = urlParams.get(utm_key);

                    if(utm_value != null && utm_value !== '')
                    {
                        Cookies.set(utm_key, utm_value);
                    }
                })



                $('button[type="submit"]').click(function(){

                    var all_params_to_persist = [
                        'utm_source',
                        'utm_medium',
                        'utm_campaign',
                        'utm_term',
                        'utm_content'
                    ];

                        all_params_to_persist.forEach(function(param)
                        {

                            // now get the form value
                            var input = $('input[name='+ param +']');

                            cookie_value = Cookies.get(param);
                            
                            // we can set the form values with jQuery using the same val() function but passing it a new value instead.
                            if (input && (cookie_value != null || cookie_value != '')) 
                            {
                                input.val(cookie_value);
        
                            }

                            console.log(input.val());

                        });
                });
    });




    
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
    