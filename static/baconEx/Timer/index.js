import $ from 'jquery';
import Bacon from 'baconjs';
import bj from 'bacon.jquery';
import html from './index.tpl!';
import render from '../../playground/render';

render(html);
$(function () {
    const timer = Bacon.fromBinder(sink => {
        const id = setInterval(()=> {
            sink(new Date().getTime())
        }, 1000);
        return () => {
            clearInterval(id);
        }
    });
    timer.take(5).onValue((value) => {
        $("#events").append($("<li>").text(value))
    });
});
