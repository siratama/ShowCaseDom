package showcase.exhibit;

import com.dango_itimi.transitions.Edging;

enum Event
{
	NONE;
	UPDATE(updateEvent:UpdateEvent);
}
enum UpdateEvent
{
	INITIALIZED(itemSet:Array<Item>);
	INITIALIZED_CURSOR_CONTROL(itemSet:Array<Item>, beltPosition:Int);
	STEPPED_BELT(beltPosition:Int);
}
enum ExhibitProperty
{
	NONE;
	ID(index:Int);
}

class Operator
{
	public static var OFFSCREEN_ITEM_TOTAL = 2;
	private var itemSet:Array<Item>;

	private var exhibitIndexSet:Array<Int>;
	private var defaultBeltPosition:Int;
	private var itemTotal:Int;
	private var itemWidth:Int;
	private var defaultExhibitHeadItemIndex:Int;
	private var exhibitHeadItemIndex:Int;
	private var cursorExhibitIndex:Int;
	private static inline var DEFAULT_CURSOR_EXHIBIT_INDEX:Int = 0;

	private var beltPosition:Int;
	private var beltShiftRightPositionSet:Array<Float>;
	private var beltShiftLeftPositionSet:Array<Float>;
	private var beltShiftPositionSet:Array<Float>;

	private var event:Event;
	public function getEvent():Event
	{
		var n = event;
		event = Event.NONE;
		return n;
	}

	public function new(itemDisplayTotal:Int, itemWidth:Int, defaultBeltPosition:Int, exhibitIndexSet:Array<Int>, beltEdging:Int = 20, beltEdgingCut:Int = 10)
	{
		this.itemWidth = itemWidth;
		this.defaultBeltPosition = defaultBeltPosition;
		this.exhibitIndexSet = exhibitIndexSet;

		itemTotal = itemDisplayTotal + OFFSCREEN_ITEM_TOTAL;

		defaultExhibitHeadItemIndex = Math.floor(itemTotal / 2);
		exhibitHeadItemIndex = defaultExhibitHeadItemIndex;
		cursorExhibitIndex = DEFAULT_CURSOR_EXHIBIT_INDEX;

		itemSet = [];
		var positionX = -itemWidth;
		var copiedExhibitIndexSet = exhibitIndexSet.copy();
		for(itemIndex in 0...itemTotal)
		{
			var exhibitProperty = getExhibitProperty(itemIndex, copiedExhibitIndexSet);
			var item = new Item(positionX, exhibitProperty);
			itemSet.push(item);

			positionX += itemWidth;
		}

		beltShiftRightPositionSet = Edging.getPositions(beltEdging, beltEdgingCut, -itemWidth, 0);
		beltShiftLeftPositionSet = Edging.getPositions(beltEdging, beltEdgingCut, itemWidth, 0);

		event = Event.UPDATE(UpdateEvent.INITIALIZED(itemSet));
	}
	private function getExhibitProperty(itemIndex:Int, copiedExhibitIndexSet:Array<Int>):ExhibitProperty
	{
		return
			(itemIndex < exhibitHeadItemIndex) ? ExhibitProperty.NONE:
			(copiedExhibitIndexSet.length > 0) ? ExhibitProperty.ID(copiedExhibitIndexSet.shift()): ExhibitProperty.NONE;
	}
	public function updateItems(exhibitIndexSet:Array<Int>)
	{
		this.exhibitIndexSet = exhibitIndexSet;
		exhibitHeadItemIndex = defaultExhibitHeadItemIndex;
		cursorExhibitIndex = DEFAULT_CURSOR_EXHIBIT_INDEX;

		exchangeItemsExhibitProperty();
	}
	private function exchangeItemsExhibitProperty(?direction:Direction)
	{
		var directionNum = (direction == null) ? 0: cast(direction, Int);

		var slicedExhibitIndex = cursorExhibitIndex - Math.floor(itemTotal / 2) + directionNum;
		if(slicedExhibitIndex < 0) slicedExhibitIndex = 0;

		var copiedExhibitIndexSet = exhibitIndexSet.slice(slicedExhibitIndex);
		for(itemIndex in 0...itemTotal)
		{
			var exhibitProperty = getExhibitProperty(itemIndex, copiedExhibitIndexSet);
			var item = itemSet[itemIndex];
			item.exhibitProperty = exhibitProperty;
		}
	}

	//
	public function isCursorShiftableToRight():Bool {
		return cursorExhibitIndex < exhibitIndexSet.length - 1;
	}
	public function shiftCursorToRight() {
		shiftCursor(Direction.RIGHT);
	}
	public function isCursorShiftableToLeft():Bool {
		return cursorExhibitIndex > 0;
	}
	public function shiftCursorToLeft() {
		shiftCursor(Direction.LEFT);
	}
	private function shiftCursor(direction:Direction)
	{
		var directionNum = cast(direction, Int);
		exhibitHeadItemIndex += directionNum * -1;
		exchangeItemsExhibitProperty(direction);

		cursorExhibitIndex += directionNum;

		var positionSet = switch(direction){
			case Direction.RIGHT: beltShiftLeftPositionSet;
			case Direction.LEFT: beltShiftRightPositionSet;
		}
		beltShiftPositionSet = positionSet.copy();
		beltPosition = Std.int(beltShiftPositionSet.shift());

		event = Event.UPDATE(UpdateEvent.INITIALIZED_CURSOR_CONTROL(itemSet, beltPosition));
	}
	public function stepBelt():Bool
	{
		var stoped = false;
		if(beltShiftPositionSet.length > 0){
			beltPosition = Std.int(beltShiftPositionSet.shift());
		}
		else{
			beltPosition = defaultBeltPosition;
			stoped = true;
		}
		event = Event.UPDATE(UpdateEvent.STEPPED_BELT(beltPosition));
		return stoped;
	}
}
class Item
{
	public var positionX(default, null):Int;
	public var exhibitProperty:ExhibitProperty;
	public function new(positionX:Int, exhibitProperty:ExhibitProperty)
	{
		this.positionX = positionX;
		this.exhibitProperty = exhibitProperty;
	}
}

@:enum abstract Direction(Int)
{
	var LEFT = -1;
	var RIGHT = 1;
}