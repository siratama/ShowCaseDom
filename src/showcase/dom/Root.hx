package showcase.dom;
import jQuery.JQuery;
abstract Root(JQuery) to JQuery
{
	public function new() this = new JQuery("#root");

	public var showcase(get, never):ShowCase;
	function get_showcase() return new ShowCase(this);
}
abstract ShowCase(JQuery) to JQuery
{
	public function new(parentElement:JQuery) this = new JQuery(".showcase", parentElement);

	public var button(get, never):Button;
	function get_button() return new Button(this);

	public var buttonLeft(get, never):ButtonLeft;
	function get_buttonLeft() return new ButtonLeft(this);

	public var buttonRight(get, never):ButtonRight;
	function get_buttonRight() return new ButtonRight(this);

	public var buttonSet(get, never):Array<Button>;
	function get_buttonSet()
	{
		var set = [];
		for(i in 0...2) set.push(new Button(this, i));
		return set;
	}

	public var screen(get, never):Screen;
	function get_screen() return new Screen(this);
}
abstract Button(JQuery) to JQuery{
	public function new(parentElement:JQuery, ?index:Int){
		this = (index == null) ?
			new JQuery(".button", parentElement):
			new JQuery(".button", parentElement).eq(index);
	}
}
abstract ButtonLeft(JQuery) to JQuery{
	public function new(parentElement:JQuery) this = new JQuery(".button.left", parentElement);
}
abstract ButtonRight(JQuery) to JQuery{
	public function new(parentElement:JQuery) this = new JQuery(".button.right", parentElement);
}

abstract Screen(JQuery) to JQuery
{
	public function new(parentElement:JQuery) this = new JQuery(".screen", parentElement);

	public var items(get, never):Items;
	function get_items() return new Items(this);
}
abstract Items(JQuery) to JQuery
{
	public function new(parentElement:JQuery) this = new JQuery(".items", parentElement);

	public var itemGuide(get, never):ItemGuide;
	function get_itemGuide() return new ItemGuide(this);

	public var item(get, never):Item;
	function get_item() return new Item(this);
}
abstract ItemGuide(JQuery) to JQuery
{
	public function new(parentElement:JQuery) this = new JQuery(".item.guide", parentElement);

	public var place(get, never):Place;
	function get_place() return new Place(this);
}
abstract Item(JQuery) to JQuery
{
	public function new(parentElement:JQuery) this = new JQuery(".item", parentElement);

	public var place(get, never):Place;
	function get_place() return new Place(this);
}
abstract Place(JQuery) to JQuery
{
	public function new(parentElement:JQuery) this = new JQuery(".place", parentElement);
}
