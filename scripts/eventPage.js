//                      ______
//                   .-"      "-.
//                  /            \
//                 |              |
//                 |,  .-.  .-.  ,|
//                 | )(__/  \__)( |
//                 |/     /\     \|
//       (@_       (_     ^^     _)
//  _     ) \_______\__|IIIIII|__/__________________________
// (_)@8@8{}<________|-\IIIIII/-|___________________________>
//        )_/        \          /
//       (@           `--------` 

//       .-----.
//      /       \
//     |  _   _  |
//      )(_/ \_)(
//      \   ^   /
//       `_∞∞∞_´
//        \___/




var message;

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
	    if (request.url){
	      	message = request;
	    	sendResponse({url:  message.url});
		}
		if (request.greeting){
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			  chrome.tabs.sendMessage(tabs[0].id, {url:  message.url});
			});
		}
  });
