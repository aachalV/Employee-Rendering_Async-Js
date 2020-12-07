import {data } from './data.js';
import { renderEmployeeCard } from './components/employeeDiv.js';

// window.onload = ()  => {
//     const rootDiv = document.getElementById("root");

//     data.then((employees) => {
//         employees.forEach((employee) => {
//             rootDiv.appendChild(renderEmplyeeCard(employee));
//         });
//     });
// };


//we have used "defer" in index.html
//so this will 1st load markup
const rootDiv = document.getElementById("root");

    data.then((employees) => {
        employees.forEach((employee) => {
            rootDiv.appendChild(renderEmployeeCard(employee));
        });
    });