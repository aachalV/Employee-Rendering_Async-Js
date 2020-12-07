// Has function where emp card will be rendered
export const renderEmployeeCard = (employee) => {
    let employeeCard = document.createElement("div");
    employeeCard.innerHTML = `
    <div class="employee-image">
        <img src="${employee.imageUrl}" alt="" />

    </div>
    <a href="" id="emp${employee.id}">${employee.firstName} ${employee.lastName}</a>
    <p>${employee.company}</p>
    `;
    employeeCard.className = "employee-card";
    return employeeCard;
};
//---------------------
// <!-- <div class="container">
//             <div class="card">
//                 <div class="profile-image-container">
//                     <img src="./images/profile-image.jpeg" alt="" class="profile-image">
//                 </div> 
//                 <div class="trainee-details-container">
//                     <p>
//                         <a href="INPUT--" target="_blank" class="trainee-link">INPUT---</a>
//                     </p>
//                     <span class="company">INPUT---</span>
//                 </div>
//             </div>
//         </div> -->  
//---------------------
// export const renderEmployeeCard = (employee) => {
//     let employeeCard = document.createElement("div");
//     employeeCard.classList.add('container');
//     employeeCard.innerHTML = `
    
//         <div class="card">
//             <div class="profile-image-container">
//                 <img src="${employee.imageUrl}" alt="" />
//             </div> 
//             <div class="trainee-details-container">
//                 <p id="emp${employee.id}">
//                 <a href="INPUT--" target="_blank" class="trainee-link">${employee.firstName} ${employee.lastName}</a>
//                 </p>
//                 <span class="company">${employee.company}</span>
//             </div>
//         </div>
    
//     `;
//     return employeeCard;
// };
//------------------
