(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['products_main_page_footer_template'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n			<div class=\"postscript-block\">\r\n			    <div class=\"inner-block\">  \r\n			        <h2><a href='../";
  if (helper = helpers.main_item_link) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.main_item_link); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>";
  if (helper = helpers.main_item) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.main_item); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a><br></h2>\r\n			    </div><!-- /inner-block -->\r\n			</div><!-- /postscript_block_1 -->\r\n			";
  return buffer;
  }

  buffer += "<div id=\"postscript_footer_container\">\r\n    <!--postscript-->\r\n    <div id=\"postscript\">\r\n        <div id=\"postscript_container\" class=\"postscript-container\">\r\n\r\n	        ";
  options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}
  if (helper = helpers.footer_title) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.footer_title); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.footer_title) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n        </div><!-- /postscript_container -->\r\n    </div>\r\n    <!--footer-->\r\n    <div class = \"footer-container\">\r\n        <div class = \"footer-container-logo\">\r\n            <img src = \"../imgs/footer-logo.jpg\" alt = \"BandLuxe\" />\r\n        </div>\r\n        <div class = \"footer-container-copyright\">2013 BandRich Inc.All Rights Reserved.</div>\r\n        <div class = \"footer-container-trade-mark\">LTE is a trade mark of ETSI.</div>\r\n    </div><!-- / footer -->\r\n</div><!--/ postscript_footer_container -->";
  return buffer;
  });
})();