'use strict';

var Dictionary = require('./dictionary');
var expect = require('chai').expect;


describe("Test App", function(){
    let dictionary;

    before(function() {
      dictionary = new Dictionary();
    })

    describe("Test hashMap creation", function() {
        it('Adding word roma should create hashProperty as amor', function() {
            dictionary.addWord('roma');
            dictionary.addWord('amor');
            expect(dictionary.collection['amor']).to.be.an('array');
        });

        it('Adding word slot and lost should create array of 2 in lost prop', function() {
          dictionary.addWord('slot');
          dictionary.addWord('lost');
          expect(dictionary.collection['lost'].length).to.equal(2);
        });

        it('Add word simple anagrams', function() {
          dictionary
          .addWord('acres')
          .addWord('cares')
          .addWord('races')
          .addWord('scare');
          expect(dictionary.collection['acers'].length).to.equal(4);
        });
    });

    describe("Test anagram findings", function() {
          it('find anagram for races', function() {
                expect(dictionary.findAnagrams('races').length).to.equal(4);
          });

          it('find anagrams from roma', function() {
              expect(dictionary.findAnagrams('roma')).to.include.members(['roma', 'amor']);
          });
    });

    describe("Test words error cases", function() {
        it("Error message returned when word is not in dictionary", function() {
            expect(dictionary.findAnagrams('newword')).to.equal('newword not in Dictionary');
        });
    });

});
