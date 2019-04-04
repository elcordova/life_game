export default class LifeGame {
	getInitialConfiguration(){
		return {x:10,y:10}
	}

	builHtmlElemt(element) {
		return `<${ element.tag } class="${ element.class || '' }">${element.inside}</${element.tag}>`;
	}
}