package showcase;
class OperationInterval
{
	private var mainFunction:Void->Void;
	private var frame:Int;
	private var frameCount:Int;
	public function new(frame:Int)
	{
		this.frame = frame;
		mainFunction = idle;
	}
	public function run()
	{
		mainFunction();
	}
	public function start()
	{
		frameCount = 0;
		mainFunction = count;
	}
	private function count()
	{
		if(++frameCount > frame)
			mainFunction = idle;
	}
	private function idle(){}

	public function isIdling():Bool
		return Reflect.compareMethods(mainFunction, idle);
}
