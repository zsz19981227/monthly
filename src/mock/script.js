define(
    ['jquery', 'hand'],
    function($, Handlebars) {
        return function(id, data, par) {
            var tpl = $(id).html();
            var template = Handlebars.compile(tpl);
            var html = template(data);
            if (par) {
                return $(par).append(html);
            } else {
                return html;
            }
        }
    }
)