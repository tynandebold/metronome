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
	
	__webpack_require__(3);
	
	var dynamicBpm = 100; // initial bpm
	
	(function () {
	
	  var input = document.querySelector('input');
	  var select = document.querySelector('select');
	  var button = document.querySelector('button');
	  var image = document.querySelector('img');
	
	  input.addEventListener('change', function () {
	    document.getElementById('bpm').innerHTML = this.value;
	    dynamicBpm = this.value;
	
	    changeState();
	  });
	
	  input.addEventListener('mousemove', function () {
	    document.getElementById('bpm').innerHTML = this.value;
	  });
	
	  window.addEventListener('keydown', keyboardCtrl);
	
	  select.addEventListener('change', function () {
	    clearInterval(timer);
	    image.src = './imgs/play.svg';
	    var sound = this.value;
	    document.querySelector('audio').src = './sounds/' + sound + '.mp3';
	  });
	
	  var timer = void 0;
	  var playing = false;
	  var audio = document.querySelector('audio');
	
	  button.addEventListener('click', changeState);
	
	  function changeState() {
	    clearInterval(timer);
	    playing = !playing;
	    if (!playing) {
	      image.src = './imgs/play.svg';
	      return;
	    }
	
	    image.src = './imgs/pause.svg';
	    timer = setInterval(function () {
	      audio.currentTime = 0;
	      audio.play();
	    }, calcBpm(dynamicBpm));
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
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMThhNGRkNzJhYWUwMDUyYTQzMGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlc2hlZXRzL3N0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3RDQSxxQkFBUSxDQUFSOztBQUVBLEtBQUksYUFBYSxHQUFiOztBQUVKLEVBQUMsWUFBVTs7QUFFVCxPQUFNLFFBQVMsU0FBUyxhQUFULENBQXVCLE9BQXZCLENBQVQsQ0FGRztBQUdULE9BQU0sU0FBUyxTQUFTLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBVCxDQUhHO0FBSVQsT0FBTSxTQUFTLFNBQVMsYUFBVCxDQUF1QixRQUF2QixDQUFULENBSkc7QUFLVCxPQUFNLFFBQVMsU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQVQsQ0FMRzs7QUFPVCxTQUFNLGdCQUFOLENBQXVCLFFBQXZCLEVBQWlDLFlBQVU7QUFDekMsY0FBUyxjQUFULENBQXdCLEtBQXhCLEVBQStCLFNBQS9CLEdBQTJDLEtBQUssS0FBTCxDQURGO0FBRXpDLGtCQUFhLEtBQUssS0FBTCxDQUY0Qjs7QUFJekMsbUJBSnlDO0lBQVYsQ0FBakMsQ0FQUzs7QUFjVCxTQUFNLGdCQUFOLENBQXVCLFdBQXZCLEVBQW9DLFlBQVU7QUFDNUMsY0FBUyxjQUFULENBQXdCLEtBQXhCLEVBQStCLFNBQS9CLEdBQTJDLEtBQUssS0FBTCxDQURDO0lBQVYsQ0FBcEMsQ0FkUzs7QUFrQlQsVUFBTyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQyxZQUFuQyxFQWxCUzs7QUFvQlQsVUFBTyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFVO0FBQzFDLG1CQUFjLEtBQWQsRUFEMEM7QUFFMUMsV0FBTSxHQUFOLEdBQVksaUJBQVosQ0FGMEM7QUFHMUMsU0FBSSxRQUFRLEtBQUssS0FBTCxDQUg4QjtBQUkxQyxjQUFTLGFBQVQsQ0FBdUIsT0FBdkIsRUFBZ0MsR0FBaEMsaUJBQWtELGNBQWxELENBSjBDO0lBQVYsQ0FBbEMsQ0FwQlM7O0FBMkJULE9BQUksY0FBSixDQTNCUztBQTRCVCxPQUFJLFVBQVUsS0FBVixDQTVCSztBQTZCVCxPQUFNLFFBQVEsU0FBUyxhQUFULENBQXVCLE9BQXZCLENBQVIsQ0E3Qkc7O0FBK0JULFVBQU8sZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsV0FBakMsRUEvQlM7O0FBaUNULFlBQVMsV0FBVCxHQUF1QjtBQUNyQixtQkFBYyxLQUFkLEVBRHFCO0FBRXJCLGVBQVUsQ0FBQyxPQUFELENBRlc7QUFHckIsU0FBSSxDQUFDLE9BQUQsRUFBVTtBQUNaLGFBQU0sR0FBTixHQUFZLGlCQUFaLENBRFk7QUFFWixjQUZZO01BQWQ7O0FBS0EsV0FBTSxHQUFOLEdBQVksa0JBQVosQ0FScUI7QUFTckIsYUFBUSxZQUFZLFlBQU07QUFDdEIsYUFBTSxXQUFOLEdBQW9CLENBQXBCLENBRHNCO0FBRXRCLGFBQU0sSUFBTixHQUZzQjtNQUFOLEVBR2pCLFFBQVEsVUFBUixDQUhLLENBQVIsQ0FUcUI7SUFBdkI7O0FBZUEsWUFBUyxPQUFULENBQWlCLFNBQWpCLEVBQTRCO0FBQzFCLFlBQU8sUUFBTSxTQUFOLENBRG1CO0lBQTVCOztBQUlBLFlBQVMsWUFBVCxDQUFzQixDQUF0QixFQUF5QjtBQUN2QixTQUFJLEVBQUUsT0FBRixLQUFjLEVBQWQsSUFBb0IsRUFBRSxPQUFGLEtBQWMsRUFBZCxFQUFrQjtBQUN4QyxxQkFEd0M7TUFBMUM7SUFERjtFQXBERCxDQUFELEc7Ozs7Ozs7O0FDSkEsMEMiLCJmaWxlIjoiL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMThhNGRkNzJhYWUwMDUyYTQzMGJcbiAqKi8iLCJyZXF1aXJlKCcuLi9zdHlsZXNoZWV0cy9zdHlsZS5zY3NzJyk7XG5cbmxldCBkeW5hbWljQnBtID0gMTAwOyAvLyBpbml0aWFsIGJwbVxuXG4oZnVuY3Rpb24oKXtcblxuICBjb25zdCBpbnB1dCAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XG4gIGNvbnN0IGltYWdlICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCl7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JwbScpLmlubmVySFRNTCA9IHRoaXMudmFsdWU7XG4gICAgZHluYW1pY0JwbSA9IHRoaXMudmFsdWU7XG5cbiAgICBjaGFuZ2VTdGF0ZSgpO1xuICB9KTtcblxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmdW5jdGlvbigpe1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdicG0nKS5pbm5lckhUTUwgPSB0aGlzLnZhbHVlO1xuICB9KTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleWJvYXJkQ3RybCk7XG5cbiAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCl7XG4gICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgaW1hZ2Uuc3JjID0gJy4vaW1ncy9wbGF5LnN2Zyc7XG4gICAgbGV0IHNvdW5kID0gdGhpcy52YWx1ZTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhdWRpbycpLnNyYyA9IGAuL3NvdW5kcy8ke3NvdW5kfS5tcDNgO1xuICB9KTtcblxuICBsZXQgdGltZXI7XG4gIGxldCBwbGF5aW5nID0gZmFsc2U7XG4gIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYXVkaW8nKTtcblxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VTdGF0ZSk7XG5cbiAgZnVuY3Rpb24gY2hhbmdlU3RhdGUoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgcGxheWluZyA9ICFwbGF5aW5nO1xuICAgIGlmICghcGxheWluZykge1xuICAgICAgaW1hZ2Uuc3JjID0gJy4vaW1ncy9wbGF5LnN2Zyc7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaW1hZ2Uuc3JjID0gJy4vaW1ncy9wYXVzZS5zdmcnO1xuICAgIHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBhdWRpby5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgIGF1ZGlvLnBsYXkoKTtcbiAgICB9LCBjYWxjQnBtKGR5bmFtaWNCcG0pKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbGNCcG0oc2xpZGVyVmFsKSB7XG4gICAgcmV0dXJuIDYwMDAwL3NsaWRlclZhbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGtleWJvYXJkQ3RybChlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMgfHwgZS5rZXlDb2RlID09PSAzMikge1xuICAgICAgY2hhbmdlU3RhdGUoKTtcbiAgICB9XG4gIH1cbn0pKCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9tYWluLmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N0eWxlc2hlZXRzL3N0eWxlLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9