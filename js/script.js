/* 
File: script.js
GUI Assignment 4: Part 1 Using the jQuery Plugin/UI with Your Dynamic Table
Anh Nguyen, UMass Lowell Computer Science, anh_nguyen9@student.uml.edu
Copyright (c) 2025 by Anh NguyenS. All rights reserved. May be freely copied or
excerpted for educational purposes with credit to the author.
updated by AN on June 22, 2025 at 4:05 PM
June 27, 2025 at 5:15 PM
Image Source:
https://www.freepik.com/free-ai-image/beautiful-landscape-painting_396677298.htm#fromView=keyword&page=2&position=31&uuid=17b35f7c-c75a-47dd-b998-812249dae5f7&query=Japanese+Wallpaper+Anime 
*/

$(document).ready(function() {
    function generateTable() {
        var startingR = parseFloat($('#startingR').val());
        var endingR = parseFloat($('#endingR').val());
        var startingC = parseFloat($('#startingC').val());
        var endingC = parseFloat($('#endingC').val());

        if (isNaN(startingR) || isNaN(endingR) || isNaN(startingC) || isNaN(endingC)) {
            $('#error').text("Please enter a valid integer. No characters or strings");
            return;
        }

        $('#error').empty();

        if (startingR > endingR || startingC > endingC) {
            $('#error').text('Your starting value inputs has be less than or equal to ending value inputs.');
            return;
        }

        var table = '<table>';
        table += '<tr><th></th>';

        for (var i = startingR; i <= endingR; i++) {
            table += '<th>' + i + '</th>';
        }
        table += '</tr>';

        for (var i = startingC; i <= endingC; i++) {
            table += '<tr><th>' + i + '</th>';
            for (var j = startingR; j <= endingR; j++) {
                table += '<td>' + (i * j) + '</td>';
            }
            table += '</tr>';
        }

        table += '</table>';

        $('#multiplicationTable').html(table);
    }

    $("#tableGrid").validate( {
        parameters: {
            startingR: {
                required: true,
                number: true,
                range: [-50, 50]
            },
            endingR: {
                required: true,
                number: true,
                range: [-50, 50]
            },
            startingC: {
                required: true,
                number: true,
                range: [-50, 50]
            },
            endingC: {
                required: true,
                number: true,
                range: [-50, 50]
            }
        },
        warningInputs: {
            startingR: {
                required: "Please enter a starting value for the top row of the table",
                number: "Please enter a valid integer. No characters or strings",
                range: "You input needs to fall between a range of -50 and 50"
            },
            endingR: {
                required: "Please enter an ending value for the top row of the table",
                number: "Please enter a valid integer. No characters or strings",
                range: "You input needs to fall between a range of -50 and 50"
            },
            startingC: {
                required: "Please enter a starting value for the first column of the table",
                number: "Please enter a valid integer. No characters or strings",
                range: "You input needs to fall between a range of -50 and 50"
            },
            endingC: {
                required: "Please enter an ending value for the first column of the table",
                number: "Please enter a valid integer. No characters or strings",
                range: "You input needs to fall between a range of -50 and 50"
            }
        },
        submitHandler: function() {
            generateTable();
            return false;
        }
    });
});

// $(document).ready(function()
//  {
//     // Table Form Validation
//     $("#tableForm").validate(
//         {
//         rules: 
//         {
//             startH: 
//             {
//                 required: true,
//                 number: true,
//                 range: [-50, 50]
//             },
//             endH: 
//             {
//                 required: true,
//                 number: true,
//                 range: [-50, 50]
//             },
//             startV: 
//             {
//                 required: true,
//                 number: true,
//                 range: [-50, 50]
//             },
//             endV: 
//             {
//                 required: true,
//                 number: true,
//                 range: [-50, 50]
//             }
//         },
//         messages: 
//         {
//             startH: 
//             {
//                 required: "Please enter a start value for the horizontal axis",
//                 number: "Please enter a valid number",
//                 range: "Value must be between -50 and 50"
//             },
//             endH: 
//             {
//                 required: "Please enter an end value for the horizontal axis",
//                 number: "Please enter a valid number",
//                 range: "Value must be between -50 and 50"
//             },
//             startV: 
//             {
//                 required: "Please enter a start value for the vertical axis",
//                 number: "Please enter a valid number",
//                 range: "Value must be between -50 and 50"
//             },
//             endV: 
//             {
//                 required: "Please enter an end value for the vertical axis",
//                 number: "Please enter a valid number",
//                 range: "Value must be between -50 and 50"
//             }
//         },
//         submitHandler: function(form) 
//         {
//             generateTable();
//             return false;
//         }
//     });

//     // Table Generation Function
//     function generateTable() 
//     {
//         var startH = parseFloat($('#startH').val());
//         var endH = parseFloat($('#endH').val());
//         var startV = parseFloat($('#startV').val());
//         var endV = parseFloat($('#endV').val());

//         if (isNaN(startH) || isNaN(endH) || isNaN(startV) || isNaN(endV)) 
//             {
//             $('#error').text('Please enter valid numbers.');
//             return;
//         }
//         $('#error').empty();

//         if (startH > endH || startV > endV) 
//             {
//             $('#error').text('Start values must be less than or equal to end values.');
//             return;
//         }

//         var table = '<table>';
//         table += '<tr><th></th>';
//         for (var i = startH; i <= endH; i++) 
//             {
//             table += '<th>' + i + '</th>';
//         }
//         table += '</tr>';

//         for (var i = startV; i <= endV; i++) 
//         {
//             table += '<tr><th>' + i + '</th>';
//             for (var j = startH; j <= endH; j++) 
//             {
//                 table += '<td>' + (i * j) + '</td>';
//             }
//             table += '</tr>';
//         }
//         table += '</table>';

//         $('#multiplicationTable').html(table);
//     }
// });