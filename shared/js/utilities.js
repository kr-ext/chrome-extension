// Find if a subdomain can be removed and do it
//
function withoutSubDomain(domain) {
  var subdomainsCount = (domain.match(/\./g) || []).length;
  if (subdomainsCount > 1) {
    newdomain = domain;
    newdomain = newdomain.substring(newdomain.indexOf(".") + 1);

    if (newdomain.length > 5) {
     return newdomain;
    }
    else {
      return false;
    }
  }
  return false;
}


// Add commas separating thousands
//
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Copy text to clipboard
//
function executeCopy(text) {
    var input = document.createElement('textarea');
    $(document.body).prepend(input);
    input.value = text;
    input.focus();
    input.select();
    document.execCommand('Copy');
    input.remove();
}
