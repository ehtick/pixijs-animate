/**
 * @module PixiAnimate
 * @namespace PIXI
 */
(function(PIXI, undefined)
{
	/**
	 * @class Sprite
	 */
	var p = PIXI.Sprite.prototype;

	/**
	 * Extend a container
	 * @method extend
	 * @static
	 * @param {Sprite} child The child function
	 * @return {Sprite} THe child
	 */
	PIXI.Sprite.extend = function(child)
	{
		child.prototype = Object.create(p);
		child.prototype.__parent = p;
		child.prototype.constructor = child;
		return child;
	};

}(PIXI));