var customerName = 'bob';
customerName;

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    window.bestCustomer = 'not bob';
    return bestCustomer;
}

function overwriteBestCustomer() {
    window.bestCustomer = 'maybe bob';
    return bestCustomer;
}


const leastFavoriteCustomer = 'karen';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'kevin';
    return leastFavoriteCustomer;
}
changeLeastFavoriteCustomer();