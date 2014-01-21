(function ($) {
	'use strict';

	// A list of data point samples.
	var _data = [
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

	var eventLoop = function () {

		$('.jke-calendar').calendar('updateData', _data);

		setTimeout(function () {
			$('.jke-calendar').calendar('updateData', [
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
					startTime: '2014-01-30 09:00',
					endTime: '2014-01-30 11:00',
					notes: 'Viktigt möte!!!'
				},
				{
					id: 7,
					startTime: '2014-01-30 13:00',
					endTime: '2014-01-30 16:30',
					notes: 'Workshop'
				}
			]);
		}, 2000);

		setTimeout(function () {
			$('.jke-calendar').calendar('updateData', [
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
					startTime: '2014-01-30 10:00',
					endTime: '2014-01-30 12:00',
					notes: 'Viktigt möte!!!'
				},
				{
					id: 7,
					startTime: '2014-01-30 13:00',
					endTime: '2014-01-30 16:30',
					notes: 'Workshop'
				}
			]);
		}, 4000);

		setTimeout(function () {
			$('.jke-calendar').calendar('updateData', [
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
					startTime: '2014-01-31 08:00',
					endTime: '2014-01-31 10:00',
					notes: 'Viktigt möte!!!'
				},
				{
					id: 7,
					startTime: '2014-01-30 13:00',
					endTime: '2014-01-30 16:30',
					notes: 'Workshop'
				},
				{
					id: 8,
					startTime: '2014-01-28 13:00',
					endTime: '2014-01-28 17:00',
					notes: 'Öva öva öva'
				}
			]);
		}, 6000);

		setTimeout(function () {
			$('.jke-calendar').calendar('setDateInterval', '2014-01-29', '2014-01-31');
		}, 8000);

		setTimeout(function () {
			$('.jke-calendar').calendar('setTimeInterval', '07:00', '23:30');
		}, 10000);

		setTimeout(function () {
			$('.jke-calendar').calendar('updateData', [
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
					id: 8,
					startTime: '2014-01-28 13:00',
					endTime: '2014-01-28 17:00',
					notes: 'Öva öva öva'
				}
			]);
		}, 12000);

		setTimeout(function () {
			$('.jke-calendar').calendar('setDateInterval', '2014-01-27', '2014-01-31');
		}, 14000);

		setTimeout(function () {
			$('.jke-calendar').calendar('setTimeInterval', '07:00', '18:00');
		}, 15000);

		setTimeout(eventLoop, 16000);
	};

	eventLoop();

})($);
