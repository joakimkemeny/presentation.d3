/* global Rainbow, impress, impressConsole */
(function ($, Rainbow, impress, impressConsole) {
	'use strict';

	var Presentation = {

		/**
		 * Attaches key handlers to enter full screen.
		 */
		enterFullScreen: function () {

			$(document).keypress(function (e) {
				if (e.keyCode === 102) {
					document.getElementsByTagName('html')[0].webkitRequestFullScreen();
				}
			});
		},

		/**
		 * Loads the demo for the current step into an iframe.
		 */
		loadDemo: function (step) {

			if (step.data('demo-loaded')) {
				return;
			}

			var browser = step.find('.browser');
			var src = browser.data('src');
			browser.append('<iframe src="' + src + '" frameborder="0"></iframe>');

			step.data('demo-loaded', true);
		},

		/**
		 * Loads the source code for the current step.
		 */
		loadSrc: function (step) {

			if (step.data('src-loaded')) {
				return;
			}

			$('code[data-src]', step).each(function (index, element) {
				var $element = $(element);
				var srcUrl = $element.data('src');
				var srcLang = $element.data('language');
				$.get(srcUrl, function (data) {
					if (srcLang === 'text' || srcLang === '') {
						$element.append(data);
					} else {
						Rainbow.color(data, srcLang, function (highlighted) {
							$element.append(highlighted);
						});
					}
				}, 'text');
			});

			step.data('src-loaded', true);
		},

		loadCalendarEditor: function (step) {

			step.find('.calendar-editor').each(function (index, element) {
				var $element = $(element);

				$element.find('.tabs li').on('click', function () {
					$element.find('.tabs li').removeClass('active');
					$(this).addClass('active');
					$element.find('.code [data-type]').removeClass('active');
					$element.find('.code [data-type="' + $(this).data('type') + '"]').addClass('active');
					return false;
				});

				var executeScript = (function () {
					var data = [
						{
							id: 1,
							startTime: '2014-01-27 13:00',
							endTime: '2014-01-27 17:00',
							notes: 'Backbone genrep'
						},
						{
							id: 2,
							startTime: '2014-01-28 08:00',
							endTime: '2014-01-28 12:00',
							notes: 'Öva öva öva'
						},
						{
							id: 3,
							startTime: '2014-01-29 09:00',
							endTime: '2014-01-29 12:00',
							notes: 'Tutorials'
						},
						{
							id: 4,
							startTime: '2014-01-29 13:00',
							endTime: '2014-01-28 17:30',
							notes: 'Cadec'
						},
						{
							id: 5,
							startTime: '2014-01-29 17:30',
							endTime: '2014-01-28 23:30',
							notes: 'After Cadec'
						},
						{
							id: 6,
							startTime: '2014-01-30 08:00',
							endTime: '2014-01-30 10:00',
							notes: 'Viktigt möte!!!'
						},
						{
							id: 7,
							startTime: '2014-01-30 13:00',
							endTime: '2014-01-30 16:30',
							notes: 'Workshop'
						}
					];

					return function () {
						try {
							document.getElementById('calendar').innerHTML = '';
							eval($(this).val());
						} catch (error) {
						}
					};
				})();

				var textarea = $element.find('textarea');
				textarea.parent().on('keyup', function (e) {
					e.stopPropagation();
					e.preventDefault();
				});
				textarea.on('keyup', executeScript);
			});
		},

		loadEcgEditor: function (step) {

			step.find('.ecg-editor').each(function (index, element) {
				var $element = $(element);

				$element.find('.tabs li').on('click', function () {
					$element.find('.tabs li').removeClass('active');
					$(this).addClass('active');
					$element.find('.code [data-type]').removeClass('active');
					$element.find('.code [data-type="' + $(this).data('type') + '"]').addClass('active');
					return false;
				});

				var executeScript = (function () {
					var data = [
						{ x: 1390201140537, y: 0 },
						{ x: 1390201140561, y: 0 },
						{ x: 1390201140572, y: 0 },
						{ x: 1390201140582, y: 0 },
						{ x: 1390201140594, y: 0.0000050048828125 },
						{ x: 1390201140606, y: 0.0000137939453125 },
						{ x: 1390201140619, y: 0.000049560546875 },
						{ x: 1390201140630, y: 0.00008740234375 },
						{ x: 1390201140642, y: 0.00015966796875 },
						{ x: 1390201140654, y: 0.000262451171875 },
						{ x: 1390201140664, y: 0.0003975830078125 },
						{ x: 1390201140678, y: 0.0005687255859375 },
						{ x: 1390201140689, y: 0.0007802734375 },
						{ x: 1390201140699, y: 0.001037353515625 },
						{ x: 1390201140710, y: 0.0013468017578125 },
						{ x: 1390201140721, y: 0.00172119140625 },
						{ x: 1390201140733, y: 0.0021756591796875 },
						{ x: 1390201140745, y: 0.0027232666015625 },
						{ x: 1390201140755, y: 0.0033880615234375 },
						{ x: 1390201140766, y: 0.004206787109375 },
						{ x: 1390201140778, y: 0.0052380371093750005 },
						{ x: 1390201140789, y: 0.006586181640625 },
						{ x: 1390201140800, y: 0.008400146484375001 },
						{ x: 1390201140815, y: 0.010904296875 },
						{ x: 1390201140826, y: 0.0144892578125 },
						{ x: 1390201140836, y: 0.0196798095703125 },
						{ x: 1390201140848, y: 0.049684204101562504 },
						{ x: 1390201140858, y: 0.0886883544921875 },
						{ x: 1390201140870, y: 0.11185363769531251 },
						{ x: 1390201140881, y: 0.134164306640625 },
						{ x: 1390201140894, y: 0.137352294921875 },
						{ x: 1390201140906, y: 0.1160369873046875 },
						{ x: 1390201140917, y: 0.08516308593750001 },
						{ x: 1390201140929, y: 0.0539765625 },
						{ x: 1390201140941, y: 0.014997436523437501 },
						{ x: 1390201140952, y: -0.015882568359375 },
						{ x: 1390201140963, y: -0.0387554931640625 },
						{ x: 1390201140974, y: -0.06125732421875 },
						{ x: 1390201140987, y: -0.0745780029296875 },
						{ x: 1390201140998, y: -0.07479357910156251 },
						{ x: 1390201141010, y: -0.0725338134765625 },
						{ x: 1390201141021, y: -0.0418538818359375 },
						{ x: 1390201141032, y: 0.08582861328125001 },
						{ x: 1390201141043, y: 0.397717529296875 },
						{ x: 1390201141054, y: 0.8136408691406251 },
						{ x: 1390201141064, y: 1.2295617980957032 },
						{ x: 1390201141076, y: 0.9944150390625001 },
						{ x: 1390201141087, y: 0.2824605712890625 },
						{ x: 1390201141099, y: -0.38949267578125 },
						{ x: 1390201141110, y: -0.597251220703125 },
						{ x: 1390201141123, y: -0.425675537109375 },
						{ x: 1390201141136, y: -0.1537947998046875 },
						{ x: 1390201141148, y: -0.0500914306640625 },
						{ x: 1390201141160, y: -0.0111041259765625 },
						{ x: 1390201141171, y: 0.0027451171875 },
						{ x: 1390201141181, y: 0.0071739501953125 },
						{ x: 1390201141194, y: 0.008443359375 },
						{ x: 1390201141205, y: 0.0094327392578125 },
						{ x: 1390201141216, y: 0.012530517578125 },
						{ x: 1390201141228, y: 0.0176046142578125 },
						{ x: 1390201141239, y: 0.0300162353515625 },
						{ x: 1390201141250, y: 0.0433489990234375 },
						{ x: 1390201141261, y: 0.056962646484375004 },
						{ x: 1390201141272, y: 0.0704832763671875 },
						{ x: 1390201141283, y: 0.0770511474609375 },
						{ x: 1390201141296, y: 0.0898175048828125 },
						{ x: 1390201141311, y: 0.10311853027343751 },
						{ x: 1390201141322, y: 0.117046142578125 },
						{ x: 1390201141334, y: 0.1312630615234375 },
						{ x: 1390201141346, y: 0.1529300537109375 },
						{ x: 1390201141356, y: 0.167607177734375 },
						{ x: 1390201141367, y: 0.1899068603515625 },
						{ x: 1390201141378, y: 0.2124422607421875 },
						{ x: 1390201141388, y: 0.235044677734375 },
						{ x: 1390201141400, y: 0.2575535888671875 },
						{ x: 1390201141410, y: 0.2724073486328125 },
						{ x: 1390201141420, y: 0.286978271484375 },
						{ x: 1390201141433, y: 0.3007579345703125 },
						{ x: 1390201141444, y: 0.3067425537109375 },
						{ x: 1390201141455, y: 0.3106370849609375 },
						{ x: 1390201141468, y: 0.303756103515625 },
						{ x: 1390201141479, y: 0.2897236328125 },
						{ x: 1390201141490, y: 0.25916931152343753 },
						{ x: 1390201141501, y: 0.2200599365234375 },
						{ x: 1390201141512, y: 0.1728209228515625 },
						{ x: 1390201141524, y: 0.133416259765625 },
						{ x: 1390201141535, y: 0.086224853515625 },
						{ x: 1390201141547, y: 0.05493408203125 },
						{ x: 1390201141559, y: 0.02409423828125 },
						{ x: 1390201141571, y: 0.00922607421875 },
						{ x: 1390201141583, y: -0.0043409423828125 },
						{ x: 1390201141594, y: -0.0097349853515625 },
						{ x: 1390201141606, y: -0.013127685546875 },
						{ x: 1390201141617, y: -0.01423095703125 },
						{ x: 1390201141628, y: -0.013834716796875 },
						{ x: 1390201141638, y: -0.012556030273437501 },
						{ x: 1390201141649, y: -0.010675048828125 },
						{ x: 1390201141660, y: -0.00835888671875 },
						{ x: 1390201141671, y: -0.0057305908203125 },
						{ x: 1390201141684, y: -0.0000562744140625 }
					];

					return function () {
						try {
							document.getElementById('ecg-chart').innerHTML = '';
							eval($(this).val());
						} catch (error) {
						}
					};
				})();

				var textarea = $element.find('textarea');
				textarea.parent().on('keyup', function (e) {
					e.stopPropagation();
					e.preventDefault();
				});
				textarea.on('keyup', executeScript);
			});
		}
	};

	$(function () {

		$('.step').on('impress:stepenter', function () {
			Presentation.loadSrc($(this));
			Presentation.loadDemo($(this));
			Presentation.loadCalendarEditor($(this));
			Presentation.loadEcgEditor($(this));
		});

		Presentation.enterFullScreen();

		impress().init();
		impressConsole().init('css/console.css');
	});

}($, Rainbow, impress, impressConsole));
