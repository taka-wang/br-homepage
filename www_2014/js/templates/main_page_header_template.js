(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['main_page_header_template'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.products), {hash:{},inverse:self.program(9, program9, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n\r\n                    <li id=\"item1_products\" class=\"main-navigation-item\">";
  if (helper = helpers.main_item) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.main_item); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n                        <ul class=\"menu\">\r\n                            ";
  options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data}
  if (helper = helpers.sub_item) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.sub_item); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.sub_item) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                        </ul>\r\n                    </li>\r\n\r\n                    ";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.remove_series_link), {hash:{},inverse:self.program(7, program7, data),fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n                            ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n\r\n                                    <li><a href=";
  if (helper = helpers.link) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.link); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\r\n                                        <ul class=\"menu-sub-item\">\r\n                                            ";
  options={hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data}
  if (helper = helpers.product_Series) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.product_Series); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.product_Series) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                                        </ul>\r\n                                    </li>\r\n\r\n                                ";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "<li><a href=";
  if (helper = helpers.link) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.link); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></li>";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n\r\n                                    <li>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n                                        <ul class=\"menu-sub-item\">\r\n                                            ";
  options={hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data}
  if (helper = helpers.product_Series) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.product_Series); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.product_Series) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                                        </ul>\r\n                                    </li>\r\n\r\n                                ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n\r\n                        <li class=\"main-navigation-item li-a-center\">";
  if (helper = helpers.main_item) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.main_item); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n                            <ul class=\"menu\">\r\n                                ";
  options={hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data}
  if (helper = helpers.sub_item) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.sub_item); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.sub_item) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                            </ul>\r\n                        </li>\r\n\r\n                    ";
  return buffer;
  }

  buffer += "<div id=\"header\">\r\n    \r\n    <div class = \"contact-us-and-language-type-container\">\r\n        <div class=\"right-corner-bevel\"></div>\r\n        <div class=\"right-corner\"><a href=\"contact.html\" target=\"_parent\">Contact Us</a></div>\r\n        <div id=\"lang_type\" class=\"right-corner\">English</div>\r\n    </div><!-- / contact-us-and-language-type -->\r\n\r\n\r\n    <div class=\"header-container\">\r\n        <div class=\"logo\">\r\n            <a href=\"../index.html\" target=\"_parent\">\r\n                <img src = \"imgs/logo.png\" alt = \"BandLuxe\" />\r\n            </a>\r\n        </div><!-- / logo -->\r\n        \r\n        <div  id = \"main_navigation_container\">\r\n            <ul class=\"nav\">\r\n                \r\n                ";
  options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}
  if (helper = helpers.header_title) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.header_title); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.header_title) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \r\n\r\n            </ul> \r\n        </div><!-- / main-navigation-container -->\r\n    </div><!-- / header-container -->        \r\n</div><!-- / header -->";
  return buffer;
  });
})();