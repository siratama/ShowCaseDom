package showcase.json;
import haxe.Json;
import jQuery.JQuery;
class SettingLoader
{
	public var json(default, null):Setting;
	public function new()
	{
		json = null;
		JQuery._static.ajax({
			url: "js/setting.json",
			dataType: "json",
			success: function(data){
				var n = Json.stringify(data);
				json = Json.parse(n);
			},
			error: function(request, status, error){

			}
		});
	}
}
