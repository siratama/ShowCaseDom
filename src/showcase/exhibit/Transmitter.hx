package showcase.exhibit;
import showcase.exhibit.Operator;
import showcase.dom.Root in RootDom;
enum Order
{
	NONE;
	SHIFT_CURSOR_TO_RIGHT;
	SHIFT_CURSOR_TO_LEFT;
}
class Transmitter
{
	private var display:Display;
	private var operator:Operator;
	private var mainFunction:Void->Void;
	private var displayFunction:Void->Void;

	public var order(null, set):Order;
	public function set_order(order:Order):Order
		return this.order = order;

	public function new(root:RootDom, itemDisplayTotal:Int, exhibitIndexSet:Array<Int>)
	{
		display = new Display(root, itemDisplayTotal);
		operator = new Operator(itemDisplayTotal, display.itemWidth, display.defaultBeltPosition, exhibitIndexSet);

		order = Order.NONE;
		mainFunction = wait;
	}
	public function run()
	{
		mainFunction();
	}
	private function wait()
	{
		switch(checkOrder())
		{
			case Order.NONE: return;
			case Order.SHIFT_CURSOR_TO_LEFT:
				initializeToShiftCursor(operator.isCursorShiftableToLeft, operator.shiftCursorToLeft);
			case Order.SHIFT_CURSOR_TO_RIGHT:
				initializeToShiftCursor(operator.isCursorShiftableToRight, operator.shiftCursorToRight);
		}
	}
	private function checkOrder():Order
	{
		var n = order;
		order = Order.NONE;
		return n;
	}
	private function initializeToShiftCursor(isCursorShiftable:Void->Bool, operation:Void->Void)
	{
		if(!isCursorShiftable()) return;

		operation();
		mainFunction = stepBelt;
	}
	private function stepBelt()
	{
		if(operator.stepBelt())
			mainFunction = wait;
	}

	public function update()
	{
		switch(operator.getEvent())
		{
			case Event.NONE: return;
			case Event.UPDATE(updateEvent): display.update(updateEvent);
		}
	}
}

