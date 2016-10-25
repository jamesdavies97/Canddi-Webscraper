var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var url = 'https://www.canddi.com/resources/case-studies/'

request(url, function (error, response, body) {
  if (!error) { 
      var $ = cheerio.load(body);
      var companyName = $ ('.col-sm-4 h2');
	  var companyNameText = companyName.text();
	  
	  var description = $ ('.col-sm-4 p');
	  var descriptionText = description.text();
	  
	  var datePublished = $ ('.col-sm-4 footer');
	  var datePublishedText = datePublished.text();
	 
	 
	  var details = {
	      companyName : companyNameText,
		  description : descriptionText,
		  datePublished : datePublishedText
	  }
	  console.log(details)
	  fs.appendFileSync('CanddiCaseStudies.txt', companyNameText + '\n' + descriptionText + '\n' + datePublishedText + '\n');
  } else {
	  console.log("Error: " + error);
  }
 });