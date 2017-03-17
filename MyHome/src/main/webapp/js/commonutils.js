/**
 * 
 * @returns current month name in string
 */
function getCurrentMonthName(){
		var monthNames = ["January", "February", "March", "April", "May", "June",
		                  "July", "August", "September", "October", "November", "December"];
		return monthNames[getCurrentMonthNumber()];
    }
/**
 * 
 * @returns current month number
 */
function getCurrentMonthNumber(){
	var d = new Date();
	return d.getMonth();
}
