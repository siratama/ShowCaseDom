package showcase.ui;
import com.dango_itimi.geom.Rectangle;
import showcase.dom.JQueryUtil;
import jQuery.JQuery;
import showcase.dom.Root in RootDom;
using showcase.dom.JQueryUtil;

class Controller
{
	public var buttonLeft(default, null):Button;
	public var buttonRight(default, null):Button;

	public function new(root:RootDom)
	{
		buttonLeft = new Button(root.showcase.buttonLeft);
		buttonRight = new Button(root.showcase.buttonRight);
	}
}
class Button
{
	private var element:JQuery;
	public var hitArea(default, null):Rectangle;

	public function new(element:JQuery)
	{
		this.element = element;
		hitArea = element.getRectangle();
	}
}
