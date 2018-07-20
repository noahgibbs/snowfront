'use strict';
import _ from 'lodash';
import $ from 'jquery';

var story = require('./story');
var passage = require('./passage');

$(function() {
        window.story = new Story($('tw-storydata'));
        window.story.start($('#main'));
    });
