/*******************************Function debounce*******************************
 * Implements a debounce function that restricts it's repeated calls to one at 
 * the end and/or the beginning of a time window where the successive calls have
 * a time distance less than that defined in user's arguments. This 
 * implementation contains a  argument passing mechanism even if the calls can't 
 * pass arguments at all! Moreover, we can pass the context that 'this' refers 
 * to inside the function!
 * @module {g3}
 * @function {g3.debounce}
 * @public
 * @param {Function} 'func' is the function that eventually is been called.
 * @param {Object} An object consisting of properties as options
 * - 'delay': (Number) successive calls that have a time distance less than this
 *      number are considered as a time window that does not call the function, 
 * - 'context': (Object) is the context under which the function will be 
 *      executed. if it is omitted then the function is called as usual,
 * - 'fireFirst': (Boolean) if we want to call the function at the start of the 
 *      time window, defaults to false,
 * - 'fireLast': (Boolean) if we want to call the function at the end of the 
 *      time window, defaults to true.
 * @return {Anything} Anything that the passed function returns.
 *
 * @version 0.1
 * @author Scripto JS Editor by Centurian Comet.
 * @copyright MIT licence.
 ******************************************************************************/
(function(g3, $, window, document, undefined){
   g3.debounce = function(func, options, arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9){
      var state = {
         pid: null,
         last: 0
      };
      if(typeof func !== 'function')
         return null;
      if(!options || (typeof options.delay !== 'number'))
         return func;
      //default options.fireFirst
      if(typeof options.fireFirst === 'undefined')
         options.fireFirst = false;
      //default options.fireLast when options.fireFirst === true
      if((typeof options.fireFirst === true) && (typeof options.fireLast === 'undefined'))
         options.fireLast = false;
      //default options.fireLast
      if(typeof options.fireLast === 'undefined')
         options.fireLast = true;
      
      //usually 'callback()' is called without arguments, a.k.a event handler!
      //but, arguments do passed through the closure above!
      //we use Function.call() instead of Function.apply() because named 
      //arguments do cover the sooo poor case of just an array argument that 
      //Function.apply() imposes(!!)
      function callback(){
         var tmp = new Date().getTime();
         var elapsed = tmp - state.last;
         state.last = new Date().getTime();
         function exec(){
            //state.last = new Date().getTime();
            if(!options.context || (typeof options.context != 'object'))
               return func(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9);
            else
               return func.call(options.context, arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9);
         }
         //execute at start
         if(options.fireFirst === true){
            if(elapsed >= options.delay)
               exec();
         }
         //execute at end
         if(options.fireLast === true){
            clearTimeout(state.pid);
            state.pid = setTimeout(exec, options.delay);
         }
      }
      
      return callback;
   }
}(window.g3 = window.g3 || {}, jQuery, window, document));