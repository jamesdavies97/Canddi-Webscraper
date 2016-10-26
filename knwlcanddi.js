var request = require('request');
var cheerio = require('cheerio');
var Knwl = require('knwl.js');
var knwlInstance = new Knwl('english');
var url = 'https://www.canddi.com/contact/'
knwlInstance.register('phones', require('knwl.js/default_plugins/phones'));
knwlInstance.register('emails', require('knwl.js/default_plugins/emails'));

request(url, function (error, response, body) {
	var $;
	var telephoneResult;
	var telephone;
    var telephoneText
	
	var email 
	var emailText
	var emailResult
	
  if (!error) { 
      $ = cheerio.load(body);
      telephone = $('.calltracks_canddi-main');
	  telephoneText = telephone.text();
	  knwlInstance.init(telephoneText);
	  telephoneResult = knwlInstance.get('phones');
	  console.log("This is the output from telephoneText:")
	  console.log(telephoneText)
	  console.log("This is the output from knwlInstance.get('phones'):")
	  console.log(telephoneResult);
	  
	  email = $('.col-md-6 p');
	  emailText = email.text();
	  knwlInstance.init(emailText);
	  emailResult = knwlInstance.get('emails');
	  console.log("This is the output from emailText:")
	  console.log(emailText)
	  console.log("This is the output from knwlInstance.get('emails'):")
	  console.log(emailResult);
  } else {
	  console.log("Error: " + error);
  }
 });