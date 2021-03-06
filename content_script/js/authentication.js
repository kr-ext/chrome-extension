// Email Hunter extension can be used without authentification but with low
// limitation. When the quota is reached, user is invited to connect to its EH
// account. The extention will read the API key on EH website and store it in
// Chrome local storage.
//

if (location.protocol + '//' + location.host + location.pathname == "https://emailhunter.co/chrome/welcome" ||
    location.protocol + '//' + location.host + location.pathname == "https://emailhunter.co/search" ||
    location.protocol + '//' + location.host + location.pathname == "https://emailhunter.co/dashboard") {
  api_key = document.getElementById("api_key").innerHTML;
  Account.setApiKey(api_key);
}
