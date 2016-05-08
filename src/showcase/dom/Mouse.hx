package showcase.dom;
import jQuery.JQuery;
import com.dango_itimi.geom.Point;
import jQuery.Event;
class Mouse
{
	private var downedPosition:Point;
	private var mainFunction:Void->Void;
	private var rootElement:JQuery;
	private var rootElementPosition:{ var top : Float; var left : Float; };

	private var downedEvent:Event;
	private var upped:Bool;

	public function getDownedPosition():Point
	{
		var n = downedPosition;
		downedPosition = null;
		return n;
	}
	public function new(root:Root)
	{
		downedPosition = null;
		rootElement = root;
		rootElementPosition = rootElement.position();

		rootElement.mousedown(function(event:Event){
			downedEvent = event;
		});

		rootElement.mouseup(function(event:Event){
			upped = true;
		});

		initializeToWaitDown();
	}
	public function run()
	{
		mainFunction();
	}

	private function initializeToWaitDown()
	{
		downedEvent = null;
		downedPosition = null;
		mainFunction = waitDown;
	}
	private function waitDown()
	{
		if(downedEvent != null){
			upped = false;
			mainFunction = down;
		}
	}
	private function down()
	{
		setDownedPosition(downedEvent);
		if(upped)
			initializeToWaitDown();
	}
	private function setDownedPosition(event:Event)
	{
		downedPosition = PointUtil.create(event.pageX - rootElementPosition.left, event.pageY - rootElementPosition.top);
	}
}
