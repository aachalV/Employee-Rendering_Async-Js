const url = "https://niravkpatel28.github.io/json-data-server/employees/employees.json";
// const url = "https://aachalv.github.io/data/trainee_data.js";

//immediately invoked funtion expression IIFE
export const data = (async () => {
    let response = await axios.get(url);

    return response.data;
})()