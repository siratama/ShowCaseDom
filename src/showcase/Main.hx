package showcase;
import showcase.ui.Controller;
import showcase.exhibit.Transmitter;
import showcase.dom.Root;
import showcase.json.SettingLoader;
import showcase.dom.Mouse;
import haxe.Timer;
import jQuery.JQuery;
import com.dango_itimi.geom.Rectangle;
using com.dango_itimi.geom.Rectangle;

class Main
{
	public static inline var FPS = 60;

	private var mainFunction:Void->Void;
	private var timer:Timer;
	private var mouse:Mouse;
	private var controller:Controller;
	private var settingLoader:SettingLoader;
	private var root:Root;
	private var transmitter:Transmitter;
	private var exhibitIndexSet:Array<Int>;
	private var operationInterval:OperationInterval;

	public static function main()
	{
		new JQuery(function(){
			new Main();
		});
	}
	public function new()
	{
		exhibitIndexSet = [1, 2, 3, 4, 5, 6, 7, 8, 9];

		root = new Root();
		mouse = new Mouse(root);
		controller = new Controller(root);

		initializeToLoadSetting();

		timer = new Timer(Std.int(1 / FPS * 1000));
		timer.run = function(){ run(); };
	}
	private function run()
	{
		mainFunction();
	}
	private function initializeToLoadSetting()
	{
		settingLoader = new SettingLoader();
		mainFunction = loadJson;
	}
	private function loadJson()
	{
		if(settingLoader.json != null)
			initializeToPlay();
	}
	private function initializeToPlay()
	{
		transmitter = new Transmitter(root, settingLoader.json.item_display_total, exhibitIndexSet);
		transmitter.update();

		operationInterval = new OperationInterval(10);
		mainFunction = play;
	}
	private function play()
	{
		transmitter.run();
		transmitter.update();

		operationInterval.run();
		if(operationInterval.isIdling())
			checkOperation();
	}
	private function checkOperation()
	{
		mouse.run();
		var mouseDownPosition = mouse.getDownedPosition();
		if(mouseDownPosition == null) return;

		if(controller.buttonLeft.hitArea.hitTestPoint(mouseDownPosition)){
			orderOperation(Order.SHIFT_CURSOR_TO_LEFT);
		}
		else if(controller.buttonRight.hitArea.hitTestPoint(mouseDownPosition)){
			orderOperation(Order.SHIFT_CURSOR_TO_RIGHT);
		}
	}
	private function orderOperation(order:Order)
	{
		transmitter.order = order;
		operationInterval.start();
	}
}
