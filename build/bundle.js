/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	var dynamicBpm = 100; // initial bpm
	
	(function () {
	
	  var audio = document.querySelector('audio');
	  var button = document.querySelector('button');
	  var image = document.querySelector('img');
	  var input = document.querySelector('input');
	  var select = document.querySelector('select');
	
	  button.addEventListener('click', changeState);
	
	  window.addEventListener('keydown', keyboardCtrl);
	
	  input.addEventListener('change', function (e) {
	    document.getElementById('bpm').innerHTML = e.target.value;
	    dynamicBpm = e.target.value;
	
	    if (button.classList.contains('playing')) {
	      play();
	    }
	  });
	
	  input.addEventListener('mousemove', function (e) {
	    document.getElementById('bpm').innerHTML = e.target.value;
	  });
	
	  select.addEventListener('change', function (e) {
	    var sound = e.target.value;
	    document.querySelector('audio').src = './sounds/' + sound + '.mp3';
	
	    if (button.classList.contains('playing')) {
	      play();
	    }
	  });
	
	  function changeState() {
	    clearInterval(timer);
	    if (button.classList.contains('playing')) {
	      button.classList.remove('playing');
	      image.src = './imgs/play.svg';
	      return;
	    }
	
	    image.src = './imgs/pause.svg';
	    play();
	  }
	
	  var timer = void 0;
	
	  function play() {
	    clearInterval(timer);
	    timer = setInterval(function () {
	      audio.currentTime = 0;
	      audio.play();
	    }, calcBpm(dynamicBpm));
	
	    button.classList.add('playing');
	  }
	
	  function isPlaying(audioElem) {
	    return !audioElem.paused;
	  }
	
	  function calcBpm(sliderVal) {
	    return 60000 / sliderVal;
	  }
	
	  function keyboardCtrl(e) {
	    if (e.keyCode === 13 || e.keyCode === 32) {
	      changeState();
	    }
	  }
	})();

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmEwYTRjMjk3NjI3YWQ1N2MzMjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlc2hlZXRzL3N0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3RDQSxxQkFBUSxDQUFSOztBQUVBLEtBQUksYUFBYSxHQUFiOztBQUVKLEVBQUMsWUFBVTs7QUFFVCxPQUFNLFFBQVMsU0FBUyxhQUFULENBQXVCLE9BQXZCLENBQVQsQ0FGRztBQUdULE9BQU0sU0FBUyxTQUFTLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBVCxDQUhHO0FBSVQsT0FBTSxRQUFTLFNBQVMsYUFBVCxDQUF1QixLQUF2QixDQUFULENBSkc7QUFLVCxPQUFNLFFBQVMsU0FBUyxhQUFULENBQXVCLE9BQXZCLENBQVQsQ0FMRztBQU1ULE9BQU0sU0FBUyxTQUFTLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBVCxDQU5HOztBQVFULFVBQU8sZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsV0FBakMsRUFSUzs7QUFVVCxVQUFPLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DLFlBQW5DLEVBVlM7O0FBWVQsU0FBTSxnQkFBTixDQUF1QixRQUF2QixFQUFpQyxVQUFDLENBQUQsRUFBTztBQUN0QyxjQUFTLGNBQVQsQ0FBd0IsS0FBeEIsRUFBK0IsU0FBL0IsR0FBMkMsRUFBRSxNQUFGLENBQVMsS0FBVCxDQURMO0FBRXRDLGtCQUFhLEVBQUUsTUFBRixDQUFTLEtBQVQsQ0FGeUI7O0FBSXRDLFNBQUksT0FBTyxTQUFQLENBQWlCLFFBQWpCLENBQTBCLFNBQTFCLENBQUosRUFBMEM7QUFDeEMsY0FEd0M7TUFBMUM7SUFKK0IsQ0FBakMsQ0FaUzs7QUFxQlQsU0FBTSxnQkFBTixDQUF1QixXQUF2QixFQUFvQyxVQUFDLENBQUQsRUFBTztBQUN6QyxjQUFTLGNBQVQsQ0FBd0IsS0FBeEIsRUFBK0IsU0FBL0IsR0FBMkMsRUFBRSxNQUFGLENBQVMsS0FBVCxDQURGO0lBQVAsQ0FBcEMsQ0FyQlM7O0FBeUJULFVBQU8sZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsVUFBQyxDQUFELEVBQU87QUFDdkMsU0FBSSxRQUFRLEVBQUUsTUFBRixDQUFTLEtBQVQsQ0FEMkI7QUFFdkMsY0FBUyxhQUFULENBQXVCLE9BQXZCLEVBQWdDLEdBQWhDLGlCQUFrRCxjQUFsRCxDQUZ1Qzs7QUFJdkMsU0FBSSxPQUFPLFNBQVAsQ0FBaUIsUUFBakIsQ0FBMEIsU0FBMUIsQ0FBSixFQUEwQztBQUN4QyxjQUR3QztNQUExQztJQUpnQyxDQUFsQyxDQXpCUzs7QUFrQ1QsWUFBUyxXQUFULEdBQXVCO0FBQ3JCLG1CQUFjLEtBQWQsRUFEcUI7QUFFckIsU0FBSSxPQUFPLFNBQVAsQ0FBaUIsUUFBakIsQ0FBMEIsU0FBMUIsQ0FBSixFQUEwQztBQUN4QyxjQUFPLFNBQVAsQ0FBaUIsTUFBakIsQ0FBd0IsU0FBeEIsRUFEd0M7QUFFeEMsYUFBTSxHQUFOLEdBQVksaUJBQVosQ0FGd0M7QUFHeEMsY0FId0M7TUFBMUM7O0FBTUEsV0FBTSxHQUFOLEdBQVksa0JBQVosQ0FScUI7QUFTckIsWUFUcUI7SUFBdkI7O0FBWUEsT0FBSSxjQUFKLENBOUNTOztBQWdEVCxZQUFTLElBQVQsR0FBZ0I7QUFDZCxtQkFBYyxLQUFkLEVBRGM7QUFFZCxhQUFRLFlBQVksWUFBTTtBQUN4QixhQUFNLFdBQU4sR0FBb0IsQ0FBcEIsQ0FEd0I7QUFFeEIsYUFBTSxJQUFOLEdBRndCO01BQU4sRUFHakIsUUFBUSxVQUFSLENBSEssQ0FBUixDQUZjOztBQU9kLFlBQU8sU0FBUCxDQUFpQixHQUFqQixDQUFxQixTQUFyQixFQVBjO0lBQWhCOztBQVVBLFlBQVMsU0FBVCxDQUFtQixTQUFuQixFQUE4QjtBQUM1QixZQUFPLENBQUMsVUFBVSxNQUFWLENBRG9CO0lBQTlCOztBQUlBLFlBQVMsT0FBVCxDQUFpQixTQUFqQixFQUE0QjtBQUMxQixZQUFPLFFBQU0sU0FBTixDQURtQjtJQUE1Qjs7QUFJQSxZQUFTLFlBQVQsQ0FBc0IsQ0FBdEIsRUFBeUI7QUFDdkIsU0FBSSxFQUFFLE9BQUYsS0FBYyxFQUFkLElBQW9CLEVBQUUsT0FBRixLQUFjLEVBQWQsRUFBa0I7QUFDeEMscUJBRHdDO01BQTFDO0lBREY7RUFsRUQsQ0FBRCxHOzs7Ozs7QUNKQSwwQyIsImZpbGUiOiIvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAyYTBhNGMyOTc2MjdhZDU3YzMyMVxuICoqLyIsInJlcXVpcmUoJy4uL3N0eWxlc2hlZXRzL3N0eWxlLnNjc3MnKTtcblxubGV0IGR5bmFtaWNCcG0gPSAxMDA7IC8vIGluaXRpYWwgYnBtXG5cbihmdW5jdGlvbigpe1xuXG4gIGNvbnN0IGF1ZGlvICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2F1ZGlvJyk7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuICBjb25zdCBpbWFnZSAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcbiAgY29uc3QgaW5wdXQgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XG5cbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlU3RhdGUpO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5Ym9hcmRDdHJsKTtcblxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdicG0nKS5pbm5lckhUTUwgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBkeW5hbWljQnBtID0gZS50YXJnZXQudmFsdWU7XG5cbiAgICBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygncGxheWluZycpKSB7XG4gICAgICBwbGF5KCk7XG4gICAgfVxuICB9KTtcblxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdicG0nKS5pbm5lckhUTUwgPSBlLnRhcmdldC52YWx1ZTtcbiAgfSk7XG5cbiAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgbGV0IHNvdW5kID0gZS50YXJnZXQudmFsdWU7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYXVkaW8nKS5zcmMgPSBgLi9zb3VuZHMvJHtzb3VuZH0ubXAzYDtcblxuICAgIGlmIChidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdwbGF5aW5nJykpIHtcbiAgICAgIHBsYXkoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGNoYW5nZVN0YXRlKCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgIGlmIChidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdwbGF5aW5nJykpIHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdwbGF5aW5nJyk7XG4gICAgICBpbWFnZS5zcmMgPSAnLi9pbWdzL3BsYXkuc3ZnJztcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpbWFnZS5zcmMgPSAnLi9pbWdzL3BhdXNlLnN2Zyc7XG4gICAgcGxheSgpO1xuICB9XG5cbiAgbGV0IHRpbWVyO1xuXG4gIGZ1bmN0aW9uIHBsYXkoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBhdWRpby5jdXJyZW50VGltZSA9IDA7XG4gICAgICBhdWRpby5wbGF5KCk7XG4gICAgfSwgY2FsY0JwbShkeW5hbWljQnBtKSk7XG5cbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgncGxheWluZycpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNQbGF5aW5nKGF1ZGlvRWxlbSkge1xuICAgIHJldHVybiAhYXVkaW9FbGVtLnBhdXNlZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbGNCcG0oc2xpZGVyVmFsKSB7XG4gICAgcmV0dXJuIDYwMDAwL3NsaWRlclZhbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGtleWJvYXJkQ3RybChlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMgfHwgZS5rZXlDb2RlID09PSAzMikge1xuICAgICAgY2hhbmdlU3RhdGUoKTtcbiAgICB9XG4gIH1cbn0pKCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9tYWluLmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N0eWxlc2hlZXRzL3N0eWxlLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9