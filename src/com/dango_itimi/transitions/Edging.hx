package com.dango_itimi.transitions;
class Edging
{
	public static function getSteps(edging:Float, cut:Int, distance:Float):Array<Float>
	{
		checkError(edging, cut);
		if(distance == 0) throw "need: distance != 0";

		var vec:Float = 1;
		if(distance < 0){
			distance *= -1;
			vec = -1;
		}

		var steps:Array<Float> = new Array<Float>();
		var bpt:Float = 0;
		for (i in 0...cut) {

			var c:Float = (i+1) / cut;
			var pt:Float = distance * (c + edging / (100 * Math.PI) * Math.sin(Math.PI * c));
			steps[i] = (pt - bpt) * vec;
			bpt = pt;
		}
		return steps;
	}
	public static function getPositions(edging:Float, cut:Int, startPosition:Float, endPosition:Float):Array<Float>
	{
		checkError(edging, cut);
		var positions:Array<Float> = new Array<Float>();
		for (i in 0...cut) {

			var c:Float = (i+1) / cut;
			positions[i] = (endPosition - startPosition) * (c + edging / (100 * Math.PI) * Math.sin(Math.PI * c)) + startPosition;
		}
		positions.unshift(startPosition);
		return positions;
	}
	private static function checkError(edging:Float, cut:Int){

		if(edging < -100 || 100 < edging) throw "need: -100 <= edging <= 100";
		if(cut < 1) throw "need: cut >= 1";
	}
}
