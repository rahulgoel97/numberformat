/** Formats numeric value into easy to read format
 *
 * @param {number} input The number to be formatted
 * @param {number} round The number of decimal places to display
 * @param {text} fig The suffix desired ('K', 'M' or 'B') | By default, will auto-detect based on number
 * @return the formatted number in text form 
 * @customfunction
 *
 * Author: Rahul Goel
 * Date: August 2020
 *
 */


function FORMATNUMBER(input, round, fig) {
  
  
  var mag = 0
  var textnum = ""
  var input_val = input
  
  if(fig == 'B')
  {
  
  var input_val = 1000000000+1
  
  }
  
  if(fig == 'M')
  {
  
  var input_val = 1000000+1
  
  }
  
  if(fig == 'K')
  {
  
  var input_val = 1000+1
  
  }
  
  
  
  if(input_val >=1000000000)
  {
   
    mag = (input/1000000000).toFixed(round).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    textnum = mag.toString() + "B"
    
  }
  
  else if( input_val >= 1000000)
  {
    
    mag = (input/1000000).toFixed(round).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    textnum = mag.toString() + "M"
  }
  
  else if(input_val >= 1000)
  {
    
    mag = (input/1000).toFixed(round).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    textnum = mag.toString() + "K"
  }
  
  else
  {
   
    mag = input
    textnum = input
    
  }
  
  
  return textnum
  
  
}
