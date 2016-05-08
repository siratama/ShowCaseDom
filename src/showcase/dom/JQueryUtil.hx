package showcase.dom;
import com.dango_itimi.geom.Rectangle;
import jQuery.JQuery;
class JQueryUtil
{
	public static function createWithId(elementId:String):JQuery
	{
		return create("#" + elementId);
	}
	public static function createWithClass(elementClass:String, ?parentElement:JQuery):JQuery
	{
		return create("." + elementClass, parentElement);
	}
	public static function create(elementId:String, ?parentElement:JQuery):JQuery
	{
		return (parentElement != null) ? new JQuery(elementId): new JQuery(elementId, parentElement);
	}
	public static function setOpacity(element:JQuery, opacity:Float)
	{
		element.css({
			opacity: opacity
		});
	}
	public static function setText(element:JQuery, text:String)
	{
		element.text(text);
	}

	public static function setClass(element:JQuery, className:String)
	{
		element.attr("class", className);
	}
	public static function setLeftPosition(element:JQuery, positionX:Int)
	{
		element.css({left: positionX});
	}

	/*
	 * Width and height has to be fixed.
	 */
	public static function getRectangle(element:JQuery):Rectangle
	{
		var position = element.position();
		return RectangleUtil.create(position.left, position.top, element.width(), element.height());
	}
}
