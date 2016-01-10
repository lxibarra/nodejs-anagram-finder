'use strict';

class Dictionary {

	constructor() {
		this._hashMap = { };
	}

	createProp(word) {
		return [].slice.call(word).sort().join('').toLowerCase();
	}

	addWord(word) {
		 let sortedLetters = this.createProp(word);
		 if(!this._hashMap[sortedLetters]) {
			 this._hashMap[sortedLetters] = [];
			 this._hashMap[sortedLetters].push(word);
		 } else if(this._hashMap[sortedLetters] && this._hashMap[sortedLetters].indexOf(word) === -1) {
			 this._hashMap[sortedLetters].push(word);
		 }
		 return this;
	}

	findAnagrams(word) {
		let sortedLetters = this.createProp(word);
		return this._hashMap[sortedLetters]? this._hashMap[sortedLetters] : `${word} not in Dictionary`;
	}

	get collection() {
		return this._hashMap;
	}
}

module.exports = Dictionary;
