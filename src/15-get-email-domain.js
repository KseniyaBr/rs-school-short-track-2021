/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
    const revStr = reverseString(email),
          shtrud = revStr.indexOf('@'),
          domain = revStr.slice(0,shtrud); 
    return reverseString(domain);
  
	    function reverseString (n) {
			return n.split("").reverse().join("");
	    }
}

module.exports = getEmailDomain;
