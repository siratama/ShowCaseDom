package showcase.exhibit;

import showcase.exhibit.Operator;
import com.dango_itimi.geom.Rectangle;
import jQuery.JQuery;
import showcase.dom.JQueryUtil;
import showcase.dom.Root in RootDom;
using showcase.dom.JQueryUtil;

class Display
{
	public var itemWidth(default, null):Int;
	public var defaultBeltPosition(default, null):Int;

	private var itemsElement:JQuery;
	private var itemGuideElement:JQuery;
	private var exhibitSet:Array<Exhibit>;

	public function new(root:RootDom, itemDisplayTotal:Int)
	{
		var items = root.showcase.screen.items;
		itemsElement = items;
		defaultBeltPosition = Std.int(itemsElement.position().left);

		itemGuideElement = items.itemGuide;
		itemWidth = Std.int(itemGuideElement.getRectangle().width);
		itemGuideElement.remove();
	}
	public function update(updateEvent:UpdateEvent)
	{
		switch(updateEvent)
		{
			case UpdateEvent.INITIALIZED(itemSet): create(itemSet);
			case UpdateEvent.INITIALIZED_CURSOR_CONTROL(itemSet, beltPosition): initializeBeltShifted(itemSet, beltPosition);
			case UpdateEvent.STEPPED_BELT(beltPosition): addBeltStep(beltPosition);
		}
	}
	private function create(itemSet:Array<Item>)
	{
		exhibitSet = [];
		for(item in itemSet)
		{
			var itemElement = itemGuideElement.clone();
			itemElement.setClass("item");
			itemElement.setLeftPosition(item.positionX);
			itemsElement.append(itemElement);

			var exhibit = new Exhibit(itemElement, item);
			exhibitSet.push(exhibit);
		}
	}
	private function updateItemSet(itemSet:Array<Item>)
	{
		for(i in 0...itemSet.length)
		{
			var item = itemSet[i];
			exhibitSet[i].update(item);
		}
	}
	private function initializeBeltShifted(itemSet:Array<Item>, beltShiftFirstPosition:Int)
	{
		itemsElement.setLeftPosition(beltShiftFirstPosition);
		updateItemSet(itemSet);
	}
	private function addBeltStep(beltShiftFirstPosition:Int)
	{
		itemsElement.setLeftPosition(beltShiftFirstPosition);
	}
}
class Exhibit
{
	private var element:JQuery;
	private var imageElement:JQuery;

	public function new(element:JQuery, item:Item)
	{
		this.element = element;
		imageElement = new JQuery("img", element);
		update(item);
	}
	public function update(item:Item)
	{
		var index = switch(item.exhibitProperty){
			case ExhibitProperty.NONE: 0;
			case ExhibitProperty.ID(index): index;
		}
		imageElement.attr("src", '${URI.EXHIBIT_DIRECTORY}$index.png');
	}
}
